import { NextRequest, NextResponse } from 'next/server';
import { appendRows, ensureSheetSetup, SHEET_ADUAN } from '@/lib/google-sheets';
import { uploadFileToDrive, getOrCreateFolder } from '@/lib/google-drive';
import { timestampWIB } from '@/lib/wib';

const SPREADSHEET_ID  = process.env.SPREADSHEET_ID  ?? '';
const FOLDER_UTAMA_ID = process.env.FOLDER_UTAMA_ID ?? '';
const MAX_PHOTOS      = 5;

function generateTicket(): string {
  const d    = new Date();
  const yy   = d.getFullYear().toString().slice(-2);
  const mm   = String(d.getMonth() + 1).padStart(2, '0');
  const dd   = String(d.getDate()).padStart(2, '0');
  const rand = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  return `ADU-${yy}${mm}${dd}-${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const fd        = await req.formData();
    const nama      = ((fd.get('nama')      as string) ?? '').trim();
    const kategori  = ((fd.get('kategori') as string) ?? '').trim();
    const lokasi    = ((fd.get('lokasi')   as string) ?? '').trim();
    const deskripsi = ((fd.get('deskripsi')as string) ?? '').trim();

    // Ambil hingga 5 foto
    const files: File[] = [];
    for (let i = 0; i < MAX_PHOTOS; i++) {
      const f = fd.get(`foto_${i}`) as File | null;
      if (f && f.size > 0) files.push(f);
    }

    if (!nama || !kategori || !lokasi || !deskripsi) {
      return NextResponse.json({ error: 'Semua field wajib diisi.' }, { status: 400 });
    }

    const ticket = generateTicket();
    const photoLinks: string[] = [];

    // ── Buat struktur folder: FOLDER_UTAMA / Aduan / [nama_pelapor] ──
    if (FOLDER_UTAMA_ID && files.length > 0) {
      try {
        // Folder "Aduan" di dalam folder utama
        const aduanFolderId = await getOrCreateFolder(FOLDER_UTAMA_ID, 'Aduan');

        // Folder nama pelapor (jika sudah ada, pakai yang lama)
        const namaFolderId = await getOrCreateFolder(aduanFolderId, nama);

        // Upload semua foto secara paralel
        await Promise.all(
          files.map(async (file, idx) => {
            try {
              const buf    = Buffer.from(await file.arrayBuffer());
              const ext    = file.name.split('.').pop() ?? 'jpg';
              const fname  = `${ticket}_foto${idx + 1}.${ext}`;
              const result = await uploadFileToDrive(buf, fname, file.type, namaFolderId);
              photoLinks[idx] = result.webViewLink;
            } catch (e) {
              console.error(`[submit] foto ${idx + 1} gagal:`, e);
              photoLinks[idx] = '';
            }
          }),
        );
      } catch (e) {
        console.error('[submit] folder creation gagal:', e);
      }
    }

    // Pad ke 5 slot
    const photos = Array.from({ length: MAX_PHOTOS }, (_, i) => photoLinks[i] ?? '');

    // Timestamp WIB
    const ts = timestampWIB();

    // Pastikan sheet siap
    await ensureSheetSetup(SPREADSHEET_ID);

    // Simpan ke sheet
    await appendRows(SPREADSHEET_ID, SHEET_ADUAN, [[
      ts, ticket, nama, kategori, lokasi, deskripsi,
      ...photos,       // Foto 1–5
      files.length,    // Jumlah Foto
      'Baru',          // Status
      '',              // Catatan Petugas
      ts,              // Terakhir Diperbarui
    ]]);

    return NextResponse.json({ success: true, ticketNumber: ticket });

  } catch (err) {
    console.error('[submit-complaint]', err);
    return NextResponse.json({ error: 'Gagal mengirim laporan. Silakan coba lagi.' }, { status: 500 });
  }
}

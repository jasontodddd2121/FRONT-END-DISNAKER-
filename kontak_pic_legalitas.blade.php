{{--
    File: kontak_pic_legalitas.blade.php
    Deskripsi: View Blade Laravel untuk Halaman Kontak PIC & Legalitas Mitra Disnaker Kota Tasikmalaya
    Cara Pakai di Laravel:
    1. Simpan file ini di: resources/views/mitra/kontak_pic_legalitas.blade.php
    2. Panggil di Controller: return view('mitra.kontak_pic_legalitas', compact('picUtama', 'picCadangan', 'legalitas'));
--}}

@php
    // Data default / mock data jika belum dipassing dari Controller
    $picUtama = $picUtama ?? [
        'nama' => 'Hendra Gunawan, S.Kom',
        'jabatan' => 'HR & Legal Manager',
        'nik' => '3278012408890002',
        'nik_terverifikasi' => true,
        'email' => 'hrd@sansan-tasik.co.id',
        'whatsapp' => '+62 812-3456-7890',
        'whatsapp_terverifikasi' => true,
        'no_sk' => 'SK-HRD/SSJ/2023/089',
        'terdaftar_sejak' => '12 Januari 2023',
    ];

    $picCadangan = $picCadangan ?? [
        'inisial' => 'SR',
        'nama' => 'Siti Rahmawati, S.E',
        'jabatan' => 'Staff Hubungan Industrial',
        'whatsapp' => '+62 852-2345-6789',
        'email' => 'siti.r@sansan-tasik.co.id',
    ];

    $legalitas = $legalitas ?? [
        'wlkp' => [
            'status' => 'AKTIF',
            'nomor' => '7421.TSM.2024',
            'berlaku_sampai' => '15 Des 2026',
        ],
        'bpjs' => [
            'status' => 'TERTIB IURAN',
            'nomor' => 'Reg: 1802938102',
            'cakupan' => 'JKK, JKM, JHT, JP',
        ],
        'pkb' => [
            'status' => 'TERCATAT',
            'nomor' => 'Kep. 560/SK-HI/2023',
            'kondisi' => 'Harmonis (Th ke-2)',
        ],
    ];

    $lokasiKerja = $lokasiKerja ?? [
        'pabrik' => 'Kawasan Industri Cikurubuk, Kec. Kawalu, Kota Tasikmalaya, Jawa Barat 46182',
        'kantor_k3' => 'UPTD Pengawasan Ketenagakerjaan Wilayah V Priangan Timur',
        'total_pekerja' => '1.248 Orang',
    ];
@endphp

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontak PIC & Legalitas - Mitra Disnaker Kota Tasikmalaya</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #F8FAFC;
            color: #0F172A;
            padding: 24px 36px 60px 36px;
        }
        .breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: #64748B;
            margin-bottom: 14px;
        }
        .header-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 24px;
        }
        .score-card {
            background: #fff;
            border: 1px solid #E2E8F0;
            border-radius: 14px;
            padding: 12px 18px;
            display: flex;
            align-items: center;
            gap: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
            flex-shrink: 0;
        }
        .tabs-nav {
            display: flex;
            align-items: center;
            gap: 8px;
            border-bottom: 1px solid #E2E8F0;
            padding-bottom: 14px;
            margin-bottom: 24px;
            overflow-x: auto;
        }
        .tab-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            text-decoration: none;
            color: #64748B;
            border: none;
            background: transparent;
            transition: all 0.2s;
        }
        .tab-btn.active {
            background: #2563EB;
            color: #fff;
            font-weight: 700;
        }
        .badge-pill {
            font-size: 10.5px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 999px;
        }
        .blue-banner {
            background: linear-gradient(135deg, #0A1E3F 0%, #1565C0 60%, #0D47A1 100%);
            border-radius: 16px;
            padding: 28px 32px;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 24px;
            box-shadow: 0 4px 20px rgba(13, 71, 161, 0.15);
        }
        .grid-layout {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            gap: 24px;
            align-items: start;
        }
        .card {
            background: #fff;
            border-radius: 16px;
            border: 1px solid #E2E8F0;
            padding: 24px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
            margin-bottom: 24px;
        }
        .data-box {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 11px 14px;
            border-radius: 10px;
            border: 1px solid #CBD5E1;
            background: #F8FAFC;
        }
    </style>
</head>
<body>

    {{-- Breadcrumb --}}
    <div class="breadcrumb">
        <span>Portal Mitra</span>
        <span>›</span>
        <span>Pengaturan Akun</span>
    </div>

    {{-- Header Title & Score Card --}}
    <div class="header-section">
        <div>
            <h1 style="font-size: 24px; font-weight: 800; color: #0F172A; margin-bottom: 6px;">
                Pusat Kendali Akun & Kepatuhan Mitra
            </h1>
            <p style="font-size: 13px; color: #64748B;">
                Kelola data penanggung jawab, preferensi pengiriman notifikasi, audit sesi aktif, serta keamanan portal.
            </p>
        </div>

        <div class="score-card">
            <div style="width: 40px; height: 40px; border-radius: 10px; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                </svg>
            </div>
            <div>
                <div style="font-size: 10px; font-weight: 700; color: #64748B; letter-spacing: 0.6px; text-transform: uppercase;">
                    SKOR KEPATUHAN AKUN
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 18px; font-weight: 800; color: #2563EB;">96% Optimal</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    {{-- Tabs Navigation --}}
    <div class="tabs-nav">
        <a href="#keamanan" class="tab-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
            </svg>
            <span>Keamanan & Password</span>
        </a>

        <a href="#kontak-pic" class="tab-btn active">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Kontak PIC & Legalitas</span>
            <span class="badge-pill" style="background: rgba(255,255,255,0.25); color: #fff;">Terverifikasi</span>
        </a>

        <a href="#notifikasi" class="tab-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            </svg>
            <span>Preferensi Notifikasi</span>
            <span style="width: 7px; height: 7px; border-radius: 50%; background: #10B981; display: inline-block;"></span>
        </a>

        <a href="#sesi" class="tab-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" />
            </svg>
            <span>Sesi & Riwayat Login</span>
            <span class="badge-pill" style="background: #F1F5F9; color: #64748B;">3 Perangkat</span>
        </a>

        <a href="#zona-bahaya" class="tab-btn" style="color: #DC2626;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 9v4" /><path d="M12 16v.01" />
            </svg>
            <span>Zona Berbahaya</span>
        </a>
    </div>

    {{-- Blue Banner: Regulasi Hubungan Industrial --}}
    <div class="blue-banner">
        <div style="max-width: 640px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); padding: 5px 12px; border-radius: 999px; font-size: 11.5px; font-weight: 600; margin-bottom: 12px;">
                <span>⚖ Regulasi Hubungan Industrial UU No. 13/2003 Jo. Perda TSM</span>
            </div>
            <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 8px;">
                Penanggung Jawab Ketenagakerjaan (PIC) & Legalitas
            </h2>
            <p style="font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.55;">
                Data penanggung jawab yang tercatat secara sah di Disnaker Kota Tasikmalaya sebagai narahubung resmi penyerapan tenaga kerja, mediasi bipartit, dan kurasi lowongan kerja.
            </p>
        </div>

        <div style="display: flex; gap: 12px;">
            <button style="padding: 10px 18px; border-radius: 10px; background: #fff; color: #0F172A; border: none; font-size: 12.5px; font-weight: 700; cursor: pointer;">
                📥 Unduh Berita Acara PIC
            </button>
            <button style="padding: 10px 18px; border-radius: 10px; background: #10B981; color: #fff; border: none; font-size: 12.5px; font-weight: 700; cursor: pointer;">
                🗹 Validasi Ulang Data
            </button>
        </div>
    </div>

    {{-- Grid Layout 2 Kolom --}}
    <div class="grid-layout">

        {{-- Kolom Kiri --}}
        <div>
            {{-- Card 1: Data Pejabat / PIC Utama --}}
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
                    <div style="display: flex; gap: 14px; align-items: center;">
                        <div style="width: 42px; height: 42px; border-radius: 10px; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center;">
                            🪪
                        </div>
                        <div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <h3 style="font-size: 16px; font-weight: 700;">Data Pejabat / PIC Utama</h3>
                                <span class="badge-pill" style="background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0;">
                                    Kuasa Penuh Direksi
                                </span>
                            </div>
                            <p style="font-size: 12px; color: #64748B;">Penandatanganan resmi dokumen ketenagakerjaan dan lowongan kerja</p>
                        </div>
                    </div>

                    <div style="text-align: right;">
                        <div style="font-size: 11px; color: #94A3B8;">Terdaftar sejak:</div>
                        <div style="font-size: 12.5px; font-weight: 700;">{{ $picUtama['terdaftar_sejak'] }}</div>
                    </div>
                </div>

                {{-- Grid 6 Field Data --}}
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    {{-- Field 1 --}}
                    <div>
                        <label style="display: block; font-size: 11.5px; font-weight: 600; color: #475569; margin-bottom: 6px;">
                            Nama Lengkap PIC (Sesuai KTP)
                        </label>
                        <div class="data-box">
                            👤 <strong style="font-size: 13px;">{{ $picUtama['nama'] }}</strong>
                        </div>
                    </div>

                    {{-- Field 2 --}}
                    <div>
                        <label style="display: block; font-size: 11.5px; font-weight: 600; color: #475569; margin-bottom: 6px;">
                            Jabatan Resmi Organisasi
                        </label>
                        <div class="data-box">
                            💼 <strong style="font-size: 13px;">{{ $picUtama['jabatan'] }}</strong>
                        </div>
                    </div>

                    {{-- Field 3 --}}
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                            <label style="font-size: 11.5px; font-weight: 600; color: #475569;">NIK (Kependudukan)</label>
                            <span style="font-size: 10.5px; font-weight: 700; color: #059669;">✓ Terverifikasi Dukcapil TSM</span>
                        </div>
                        <div class="data-box" style="font-family: monospace; font-weight: 700;">
                            🪪 {{ $picUtama['nik'] }}
                        </div>
                    </div>

                    {{-- Field 4 --}}
                    <div>
                        <label style="display: block; font-size: 11.5px; font-weight: 600; color: #475569; margin-bottom: 6px;">
                            Email Kedinasan (Disnaker Blast)
                        </label>
                        <div class="data-box">
                            ✉️ {{ $picUtama['email'] }}
                        </div>
                    </div>

                    {{-- Field 5 --}}
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                            <label style="font-size: 11.5px; font-weight: 600; color: #475569;">WhatsApp Darurat PIC</label>
                            <span style="font-size: 10.5px; font-weight: 700; color: #059669;">✓ Centang Hijau</span>
                        </div>
                        <div class="data-box" style="justify-content: space-between;">
                            <div>💬 <strong>{{ $picUtama['whatsapp'] }}</strong></div>
                            <span style="color: #10B981;">🗹</span>
                        </div>
                    </div>

                    {{-- Field 6 --}}
                    <div>
                        <label style="display: block; font-size: 11.5px; font-weight: 600; color: #475569; margin-bottom: 6px;">
                            No. SK Pengangkatan / Surat Kuasa
                        </label>
                        <div class="data-box" style="justify-content: space-between;">
                            <div style="font-family: monospace; font-weight: 700; font-size: 12px;">📄 {{ $picUtama['no_sk'] }}</div>
                            <a href="#" style="color: #2563EB; font-weight: 700; font-size: 12px; text-decoration: none;">Lihat SK ↗</a>
                        </div>
                    </div>
                </div>

                {{-- Alert Info Box --}}
                <div style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 12px; padding: 12px 16px; font-size: 12px; color: #0369A1; line-height: 1.5;">
                    ℹ️ Segala bentuk komunikasi resmi, panggilan mediasi ketenagakerjaan, serta penerbitan tanda bukti kurasi loker Disnaker akan ditujukan kepada PIC Utama di atas. Hubungi Helpdesk jika terjadi rotasi pimpinan HR.
                </div>
            </div>

            {{-- Card 2: Legalitas & Kepatuhan Norma Kerja --}}
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
                    <h3 style="font-size: 15px; font-weight: 700;">🛡️ Legalitas & Kepatuhan Norma Kerja Tasikmalaya</h3>
                    <span style="font-size: 11.5px; color: #64748B;">Sinkronisasi SIMNAKER Kemnaker RI</span>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px;">
                    {{-- WLKP --}}
                    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px 16px;">
                        <span class="badge-pill" style="background: #DCFCE7; color: #15803D;">{{ $legalitas['wlkp']['status'] }}</span>
                        <div style="font-size: 13.5px; font-weight: 700; margin-top: 8px;">WLKP Online</div>
                        <div style="font-size: 11.5px; color: #64748B; font-family: monospace; margin: 4px 0 10px 0;">{{ $legalitas['wlkp']['nomor'] }}</div>
                        <div style="font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 8px;">
                            Masa Berlaku: <strong>{{ $legalitas['wlkp']['berlaku_sampai'] }}</strong>
                        </div>
                    </div>

                    {{-- BPJS --}}
                    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px 16px;">
                        <span class="badge-pill" style="background: #DCFCE7; color: #15803D;">{{ $legalitas['bpjs']['status'] }}</span>
                        <div style="font-size: 13.5px; font-weight: 700; margin-top: 8px;">BPJS Ketenagakerjaan</div>
                        <div style="font-size: 11.5px; color: #64748B; font-family: monospace; margin: 4px 0 10px 0;">{{ $legalitas['bpjs']['nomor'] }}</div>
                        <div style="font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 8px;">
                            Cakupan: <strong>{{ $legalitas['bpjs']['cakupan'] }}</strong>
                        </div>
                    </div>

                    {{-- PKB --}}
                    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px 16px;">
                        <span class="badge-pill" style="background: #DBEAFE; color: #1D4ED8;">{{ $legalitas['pkb']['status'] }}</span>
                        <div style="font-size: 13.5px; font-weight: 700; margin-top: 8px;">Pencatatan PKB</div>
                        <div style="font-size: 11.5px; color: #64748B; font-family: monospace; margin: 4px 0 10px 0;">{{ $legalitas['pkb']['nomor'] }}</div>
                        <div style="font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 8px;">
                            Status: <strong style="color: #059669;">{{ $legalitas['pkb']['kondisi'] }}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Kolom Kanan --}}
        <div>
            {{-- Card 1: PIC Pengganti (Eskalasi) --}}
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <h3 style="font-size: 15px; font-weight: 700;">⇄ PIC Pengganti (Eskalasi)</h3>
                    <span class="badge-pill" style="background: #F1F5F9; color: #475569;">Backup</span>
                </div>
                <p style="font-size: 11.5px; color: #64748B; margin-bottom: 14px; line-height: 1.45;">
                    Dihubungi oleh Disnaker jika PIC Utama berhalangan menghadiri agenda bursa kerja atau pemanggilan regulasi.
                </p>

                <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 16px; margin-bottom: 14px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <div style="width: 44px; height: 44px; border-radius: 50%; background: #E0E7FF; color: #4338CA; display: flex; align-items: center; justify-content: center; font-weight: 800;">
                            {{ $picCadangan['inisial'] }}
                        </div>
                        <div>
                            <div style="font-size: 14px; font-weight: 800;">{{ $picCadangan['nama'] }}</div>
                            <div style="font-size: 11.5px; color: #64748B;">{{ $picCadangan['jabatan'] }}</div>
                        </div>
                    </div>
                    <div style="font-size: 12px; display: flex; flex-direction: column; gap: 6px;">
                        <div>📞 <strong>{{ $picCadangan['whatsapp'] }}</strong></div>
                        <div>✉️ <strong>{{ $picCadangan['email'] }}</strong></div>
                    </div>
                </div>

                <button style="width: 100%; padding: 10px; border-radius: 10px; border: 1px solid #CBD5E1; background: #fff; font-weight: 700; font-size: 12.5px; cursor: pointer;">
                    ✏️ Ubah Data PIC Cadangan
                </button>
            </div>

            {{-- Card 2: Lokasi Kerja & UPTD Pengawas --}}
            <div class="card">
                <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 16px;">Lokasi Kerja & UPTD Pengawas</h3>

                <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 18px;">
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 34px; height: 34px; border-radius: 8px; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            🏭
                        </div>
                        <div>
                            <div style="font-size: 13px; font-weight: 700;">Fasilitas Produksi Tekstil</div>
                            <div style="font-size: 11.5px; color: #64748B; line-height: 1.45;">{{ $lokasiKerja['pabrik'] }}</div>
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 34px; height: 34px; border-radius: 8px; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            🛡️
                        </div>
                        <div>
                            <div style="font-size: 13px; font-weight: 700;">Kantor Pengawasan K3</div>
                            <div style="font-size: 11.5px; color: #64748B; line-height: 1.45;">{{ $lokasiKerja['kantor_k3'] }}</div>
                        </div>
                    </div>
                </div>

                <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-size: 12px; font-weight: 700; color: #1E40AF;">Total Tenaga Kerja</div>
                        <div style="font-size: 11.5px; color: #3B82F6;">Terdaftar:</div>
                    </div>
                    <div style="font-size: 18px; font-weight: 800; color: #1D4ED8;">
                        {{ $lokasiKerja['total_pekerja'] }}
                    </div>
                </div>
            </div>
        </div>

    </div>

</body>
</html>

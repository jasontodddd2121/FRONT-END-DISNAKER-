<?php
/**
 * File: kontak_pic_legalitas.php
 * Deskripsi: Halaman Kontak PIC & Legalitas Mitra (Pure Native PHP)
 * Dapat dijalankan langsung dengan: php -S localhost:8000
 */

// Simulasi Data Backend (Database / API)
$dataPicUtama = [
    'nama' => 'Hendra Gunawan, S.Kom',
    'jabatan' => 'HR & Legal Manager',
    'nik' => '3278012408890002',
    'email' => 'hrd@sansan-tasik.co.id',
    'whatsapp' => '+62 812-3456-7890',
    'no_sk' => 'SK-HRD/SSJ/2023/089',
    'terdaftar_sejak' => '12 Januari 2023',
];

$dataPicCadangan = [
    'inisial' => 'SR',
    'nama' => 'Siti Rahmawati, S.E',
    'jabatan' => 'Staff Hubungan Industrial',
    'whatsapp' => '+62 852-2345-6789',
    'email' => 'siti.r@sansan-tasik.co.id',
];

$dataLegalitas = [
    'wlkp' => [
        'status' => 'AKTIF',
        'nomor' => '7421.TSM.2024',
        'berlaku' => '15 Des 2026',
    ],
    'bpjs' => [
        'status' => 'TERTIB IURAN',
        'nomor' => 'Reg: 1802938102',
        'cakupan' => 'JKK, JKM, JHT, JP',
    ],
    'pkb' => [
        'status' => 'TERCATAT',
        'nomor' => 'Kep. 560/SK-HI/2023',
        'status_hub' => 'Harmonis (Th ke-2)',
    ],
];
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pusat Kendali Akun & Kepatuhan Mitra - Disnaker Kota Tasikmalaya</title>
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
        .header-box {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 24px;
        }
        .score-pill {
            background: #fff;
            border: 1px solid #E2E8F0;
            border-radius: 14px;
            padding: 12px 18px;
            display: flex;
            align-items: center;
            gap: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }
        .tab-item {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 500;
            color: #64748B;
            text-decoration: none;
        }
        .tab-item.active {
            background: #2563EB;
            color: #fff;
            font-weight: 700;
        }
        .banner-blue {
            background: linear-gradient(135deg, #0A1E3F 0%, #1565C0 60%, #0D47A1 100%);
            border-radius: 16px;
            padding: 28px 32px;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 24px;
            box-shadow: 0 4px 20px rgba(13, 71, 161, 0.15);
        }
        .btn-white {
            padding: 10px 18px;
            border-radius: 10px;
            background: #fff;
            color: #0F172A;
            border: none;
            font-size: 12.5px;
            font-weight: 700;
            cursor: pointer;
        }
        .btn-green {
            padding: 10px 18px;
            border-radius: 10px;
            background: #10B981;
            color: #fff;
            border: none;
            font-size: 12.5px;
            font-weight: 700;
            cursor: pointer;
        }
        .card {
            background: #fff;
            border-radius: 16px;
            border: 1px solid #E2E8F0;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .field-box {
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

    <!-- Breadcrumb -->
    <div style="font-size: 12px; color: #64748B; margin-bottom: 14px;">
        Portal Mitra › Pengaturan Akun
    </div>

    <!-- Header & Skor -->
    <div class="header-box">
        <div>
            <h1 style="font-size: 24px; font-weight: 800; color: #0F172A; margin-bottom: 6px;">
                Pusat Kendali Akun & Kepatuhan Mitra
            </h1>
            <p style="font-size: 13px; color: #64748B;">
                Kelola data penanggung jawab, preferensi pengiriman notifikasi, audit sesi aktif, serta keamanan portal.
            </p>
        </div>

        <div class="score-pill">
            <div style="width: 40px; height: 40px; border-radius: 10px; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                🛡️
            </div>
            <div>
                <div style="font-size: 10px; font-weight: 700; color: #64748B; letter-spacing: 0.6px; text-transform: uppercase;">
                    SKOR KEPATUHAN AKUN
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 18px; font-weight: 800; color: #2563EB;">96% Optimal</span>
                    <span style="color: #2563EB; font-weight: 800;">✓</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Tabs Nav -->
    <div style="display: flex; gap: 8px; border-bottom: 1px solid #E2E8F0; padding-bottom: 14px; margin-bottom: 24px;">
        <span class="tab-item">🔒 Keamanan & Password</span>
        <span class="tab-item active">👥 Kontak PIC & Legalitas <span style="background: rgba(255,255,255,0.25); padding: 2px 8px; border-radius: 999px; font-size: 10px;">Terverifikasi</span></span>
        <span class="tab-item">🔔 Preferensi Notifikasi <span style="width: 7px; height: 7px; border-radius: 50%; background: #10B981; display: inline-block;"></span></span>
        <span class="tab-item">🕒 Sesi & Riwayat Login <span style="background: #F1F5F9; color: #64748B; padding: 2px 8px; border-radius: 999px; font-size: 10px;">3 Perangkat</span></span>
        <span class="tab-item" style="color: #DC2626;">⚠️ Zona Berbahaya</span>
    </div>

    <!-- Banner Regulasi -->
    <div class="banner-blue">
        <div style="max-width: 640px;">
            <div style="display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); padding: 5px 12px; border-radius: 999px; font-size: 11.5px; font-weight: 600; margin-bottom: 12px;">
                ⚖ Regulasi Hubungan Industrial UU No. 13/2003 Jo. Perda TSM
            </div>
            <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 8px;">
                Penanggung Jawab Ketenagakerjaan (PIC) & Legalitas
            </h2>
            <p style="font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.55;">
                Data penanggung jawab yang tercatat secara sah di Disnaker Kota Tasikmalaya sebagai narahubung resmi penyerapan tenaga kerja, mediasi bipartit, dan kurasi lowongan kerja.
            </p>
        </div>
        <div style="display: flex; gap: 12px;">
            <button class="btn-white">📥 Unduh Berita Acara PIC</button>
            <button class="btn-green">🗹 Validasi Ulang Data</button>
        </div>
    </div>

    <!-- Layout 2 Kolom -->
    <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 24px; align-items: start;">
        
        <!-- Kolom Kiri -->
        <div>
            <!-- Card PIC Utama -->
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
                    <div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <h3 style="font-size: 16px; font-weight: 700;">Data Pejabat / PIC Utama</h3>
                            <span style="font-size: 10.5px; font-weight: 700; background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; padding: 2px 8px; border-radius: 999px;">
                                Kuasa Penuh Direksi
                            </span>
                        </div>
                        <p style="font-size: 12px; color: #64748B; margin-top: 3px;">
                            Penandatanganan resmi dokumen ketenagakerjaan dan lowongan kerja
                        </p>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 11px; color: #94A3B8;">Terdaftar sejak:</div>
                        <div style="font-size: 12.5px; font-weight: 700;"><?php echo htmlspecialchars($dataPicUtama['terdaftar_sejak']); ?></div>
                    </div>
                </div>

                <!-- 6 Fields -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div>
                        <label style="display: block; font-size: 11.5px; font-weight: 600; color: #475569; margin-bottom: 6px;">Nama Lengkap PIC (Sesuai KTP)</label>
                        <div class="field-box">👤 <strong><?php echo htmlspecialchars($dataPicUtama['nama']); ?></strong></div>
                    </div>

                    <div>
                        <label style="display: block; font-size: 11.5px; font-weight: 600; color: #475569; margin-bottom: 6px;">Jabatan Resmi Organisasi</label>
                        <div class="field-box">💼 <strong><?php echo htmlspecialchars($dataPicUtama['jabatan']); ?></strong></div>
                    </div>

                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                            <label style="font-size: 11.5px; font-weight: 600; color: #475569;">NIK (Kependudukan)</label>
                            <span style="font-size: 10.5px; font-weight: 700; color: #059669;">✓ Terverifikasi Dukcapil TSM</span>
                        </div>
                        <div class="field-box" style="font-family: monospace; font-weight: 700;">🪪 <?php echo htmlspecialchars($dataPicUtama['nik']); ?></div>
                    </div>

                    <div>
                        <label style="display: block; font-size: 11.5px; font-weight: 600; color: #475569; margin-bottom: 6px;">Email Kedinasan (Disnaker Blast)</label>
                        <div class="field-box">✉️ <?php echo htmlspecialchars($dataPicUtama['email']); ?></div>
                    </div>

                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                            <label style="font-size: 11.5px; font-weight: 600; color: #475569;">WhatsApp Darurat PIC</label>
                            <span style="font-size: 10.5px; font-weight: 700; color: #059669;">✓ Centang Hijau</span>
                        </div>
                        <div class="field-box" style="justify-content: space-between;">
                            <div>💬 <strong><?php echo htmlspecialchars($dataPicUtama['whatsapp']); ?></strong></div>
                            <span style="color: #10B981;">🗹</span>
                        </div>
                    </div>

                    <div>
                        <label style="display: block; font-size: 11.5px; font-weight: 600; color: #475569; margin-bottom: 6px;">No. SK Pengangkatan / Surat Kuasa</label>
                        <div class="field-box" style="justify-content: space-between;">
                            <div style="font-family: monospace; font-size: 12px; font-weight: 700;">📄 <?php echo htmlspecialchars($dataPicUtama['no_sk']); ?></div>
                            <a href="#" style="color: #2563EB; font-weight: 700; font-size: 12px; text-decoration: none;">Lihat SK ↗</a>
                        </div>
                    </div>
                </div>

                <div style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 12px; padding: 12px 16px; font-size: 12px; color: #0369A1; line-height: 1.5;">
                    ℹ️ Segala bentuk komunikasi resmi, panggilan mediasi ketenagakerjaan, serta penerbitan tanda bukti kurasi loker Disnaker akan ditujukan kepada PIC Utama di atas. Hubungi Helpdesk jika terjadi rotasi pimpinan HR.
                </div>
            </div>

            <!-- Card Legalitas -->
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
                    <h3 style="font-size: 15px; font-weight: 700;">🛡️ Legalitas & Kepatuhan Norma Kerja Tasikmalaya</h3>
                    <span style="font-size: 11.5px; color: #64748B;">Sinkronisasi SIMNAKER Kemnaker RI</span>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px;">
                    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px 16px;">
                        <span style="font-size: 10px; font-weight: 800; background: #DCFCE7; color: #15803D; padding: 2px 8px; border-radius: 999px;">
                            <?php echo $dataLegalitas['wlkp']['status']; ?>
                        </span>
                        <div style="font-size: 13.5px; font-weight: 700; margin-top: 8px;">WLKP Online</div>
                        <div style="font-size: 11.5px; color: #64748B; font-family: monospace; margin: 4px 0 10px 0;"><?php echo $dataLegalitas['wlkp']['nomor']; ?></div>
                        <div style="font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 8px;">
                            Masa Berlaku: <strong><?php echo $dataLegalitas['wlkp']['berlaku']; ?></strong>
                        </div>
                    </div>

                    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px 16px;">
                        <span style="font-size: 10px; font-weight: 800; background: #DCFCE7; color: #15803D; padding: 2px 8px; border-radius: 999px;">
                            <?php echo $dataLegalitas['bpjs']['status']; ?>
                        </span>
                        <div style="font-size: 13.5px; font-weight: 700; margin-top: 8px;">BPJS Ketenagakerjaan</div>
                        <div style="font-size: 11.5px; color: #64748B; font-family: monospace; margin: 4px 0 10px 0;"><?php echo $dataLegalitas['bpjs']['nomor']; ?></div>
                        <div style="font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 8px;">
                            Cakupan: <strong><?php echo $dataLegalitas['bpjs']['cakupan']; ?></strong>
                        </div>
                    </div>

                    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px 16px;">
                        <span style="font-size: 10px; font-weight: 800; background: #DBEAFE; color: #1D4ED8; padding: 2px 8px; border-radius: 999px;">
                            <?php echo $dataLegalitas['pkb']['status']; ?>
                        </span>
                        <div style="font-size: 13.5px; font-weight: 700; margin-top: 8px;">Pencatatan PKB</div>
                        <div style="font-size: 11.5px; color: #64748B; font-family: monospace; margin: 4px 0 10px 0;"><?php echo $dataLegalitas['pkb']['nomor']; ?></div>
                        <div style="font-size: 11px; color: #64748B; border-top: 1px solid #E2E8F0; padding-top: 8px;">
                            Status: <strong style="color: #059669;"><?php echo $dataLegalitas['pkb']['status_hub']; ?></strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Kolom Kanan -->
        <div>
            <!-- Card PIC Eskalasi -->
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <h3 style="font-size: 15px; font-weight: 700;">⇄ PIC Pengganti (Eskalasi)</h3>
                    <span style="font-size: 10.5px; font-weight: 700; background: #F1F5F9; color: #475569; padding: 2px 8px; border-radius: 999px;">Backup</span>
                </div>
                <p style="font-size: 11.5px; color: #64748B; margin-bottom: 14px; line-height: 1.45;">
                    Dihubungi oleh Disnaker jika PIC Utama berhalangan menghadiri agenda bursa kerja atau pemanggilan regulasi.
                </p>

                <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 16px; margin-bottom: 14px;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <div style="width: 44px; height: 44px; border-radius: 50%; background: #E0E7FF; color: #4338CA; display: flex; align-items: center; justify-content: center; font-weight: 800;">
                            <?php echo htmlspecialchars($dataPicCadangan['inisial']); ?>
                        </div>
                        <div>
                            <div style="font-size: 14px; font-weight: 800;"><?php echo htmlspecialchars($dataPicCadangan['nama']); ?></div>
                            <div style="font-size: 11.5px; color: #64748B;"><?php echo htmlspecialchars($dataPicCadangan['jabatan']); ?></div>
                        </div>
                    </div>
                    <div style="font-size: 12px; display: flex; flex-direction: column; gap: 6px;">
                        <div>📞 <strong><?php echo htmlspecialchars($dataPicCadangan['whatsapp']); ?></strong></div>
                        <div>✉️ <strong><?php echo htmlspecialchars($dataPicCadangan['email']); ?></strong></div>
                    </div>
                </div>

                <button style="width: 100%; padding: 10px; border-radius: 10px; border: 1px solid #CBD5E1; background: #fff; font-weight: 700; font-size: 12.5px; cursor: pointer;">
                    ✏️ Ubah Data PIC Cadangan
                </button>
            </div>

            <!-- Card Lokasi & UPTD -->
            <div class="card">
                <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 16px;">Lokasi Kerja & UPTD Pengawas</h3>

                <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 18px;">
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 34px; height: 34px; border-radius: 8px; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center;">
                            🏭
                        </div>
                        <div>
                            <div style="font-size: 13px; font-weight: 700;">Fasilitas Produksi Tekstil</div>
                            <div style="font-size: 11.5px; color: #64748B; line-height: 1.45;">Kawasan Industri Cikurubuk, Kec. Kawalu, Kota Tasikmalaya, Jawa Barat 46182</div>
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <div style="width: 34px; height: 34px; border-radius: 8px; background: #EFF6FF; color: #2563EB; display: flex; align-items: center; justify-content: center;">
                            🛡️
                        </div>
                        <div>
                            <div style="font-size: 13px; font-weight: 700;">Kantor Pengawasan K3</div>
                            <div style="font-size: 11.5px; color: #64748B; line-height: 1.45;">UPTD Pengawasan Ketenagakerjaan Wilayah V Priangan Timur</div>
                        </div>
                    </div>
                </div>

                <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-size: 12px; font-weight: 700; color: #1E40AF;">Total Tenaga Kerja</div>
                        <div style="font-size: 11.5px; color: #3B82F6;">Terdaftar:</div>
                    </div>
                    <div style="font-size: 18px; font-weight: 800; color: #1D4ED8;">
                        1.248 Orang
                    </div>
                </div>
            </div>
        </div>

    </div>

</body>
</html>

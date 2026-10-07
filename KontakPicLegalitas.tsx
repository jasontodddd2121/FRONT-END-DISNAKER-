import React from "react";

export const KontakPicLegalitas: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      
      {/* ===== HERO BLUE BANNER: REGULASI & PIC UTAMA ===== */}
      <div style={{
        background: 'linear-gradient(135deg, #0A1E3F 0%, #1565C0 60%, #0D47A1 100%)',
        borderRadius: 16,
        padding: '28px 32px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(13, 71, 161, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
      }}>
        {/* Subtle Watermark Shield in background */}
        <div style={{
          position: 'absolute',
          right: -20,
          bottom: -40,
          opacity: 0.08,
          pointerEvents: 'none',
        }}>
          <svg width="220" height="220" viewBox="0 0 24 24" fill="white">
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
          </svg>
        </div>

        {/* Left: Regulation Tag, Title & Description */}
        <div style={{ maxWidth: 640, position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '5px 12px',
            borderRadius: 999,
            fontSize: 11.5,
            fontWeight: 600,
            marginBottom: 12,
            backdropFilter: 'blur(4px)',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 16v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v4" />
              <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-2" />
            </svg>
            <span>Regulasi Hubungan Industrial UU No. 13/2003 Jo. Perda TSM</span>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 8px 0', letterSpacing: '-0.3px', color: 'white' }}>
            Penanggung Jawab Ketenagakerjaan (PIC) & Legalitas
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.55 }}>
            Data penanggung jawab yang tercatat secara sah di Disnaker Kota Tasikmalaya sebagai narahubung resmi penyerapan tenaga kerja, mediasi bipartit, dan kurasi lowongan kerja.
          </p>
        </div>

        {/* Right: Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              borderRadius: 10,
              background: 'white',
              color: '#0F172A',
              border: 'none',
              fontSize: 12.5,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.15s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" />
            </svg>
            Unduh Berita Acara PIC
          </button>

          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 18px',
              borderRadius: 10,
              background: '#10B981',
              color: 'white',
              border: 'none',
              fontSize: 12.5,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(16, 185, 129, 0.3)',
              transition: 'transform 0.15s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" />
            </svg>
            Validasi Ulang Data
          </button>
        </div>
      </div>

      {/* ===== 2 KOLOM GRID UTAMA ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24, alignItems: 'start' }}>
        
        {/* ==================== KOLOM KIRI ==================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* CARD 1: DATA PEJABAT / PIC UTAMA */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 24,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header Card */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <circle cx="12" cy="10" r="3" /><path d="M6 18c0 -2.5 2.5 -4 6 -4s6 1.5 6 4" />
                  </svg>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>Data Pejabat / PIC Utama</h3>
                    <span style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      background: '#ECFDF5',
                      color: '#059669',
                      border: '1px solid #A7F3D0',
                      padding: '2px 8px',
                      borderRadius: 999,
                    }}>
                      Kuasa Penuh Direksi
                    </span>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '3px 0 0 0' }}>
                    Penandatanganan resmi dokumen ketenagakerjaan dan lowongan kerja
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: 11, color: '#94A3B8' }}>Terdaftar sejak:</div>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: '#0F172A' }}>12 Januari 2023</div>
              </div>
            </div>

            {/* Form Fields: 2 Columns Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
              
              {/* Field 1: Nama Lengkap PIC */}
              <div>
                <label style={{ display: 'block', fontSize: 11.5, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
                  Nama Lengkap PIC (Sesuai KTP)
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="7" r="4" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Hendra Gunawan, S.Kom</span>
                </div>
              </div>

              {/* Field 2: Jabatan Resmi Organisasi */}
              <div>
                <label style={{ display: 'block', fontSize: 11.5, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
                  Jabatan Resmi Organisasi
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>HR & Legal Manager</span>
                </div>
              </div>

              {/* Field 3: NIK Kependudukan */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <label style={{ fontSize: 11.5, fontWeight: 600, color: '#475569' }}>
                    NIK (Kependudukan)
                  </label>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: '#059669', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    Terverifikasi Dukcapil TSM
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="14" x="3" y="5" rx="2" /><path d="M7 15h4" /><circle cx="9" cy="9" r="1.5" />
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                    3278012408890002
                  </span>
                </div>
              </div>

              {/* Field 4: Email Kedinasan */}
              <div>
                <label style={{ display: 'block', fontSize: 11.5, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
                  Email Kedinasan (Disnaker Blast)
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#0F172A' }}>hrd@sansan-tasik.co.id</span>
                </div>
              </div>

              {/* Field 5: WhatsApp Darurat PIC */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <label style={{ fontSize: 11.5, fontWeight: 600, color: '#475569' }}>
                    WhatsApp Darurat PIC
                  </label>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: '#059669', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    Centang Hijau
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>+62 812-3456-7890</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" />
                  </svg>
                </div>
              </div>

              {/* Field 6: No. SK Pengangkatan / Surat Kuasa */}
              <div>
                <label style={{ display: 'block', fontSize: 11.5, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
                  No. SK Pengangkatan / Surat Kuasa
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '11px 14px',
                  borderRadius: 10,
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    </svg>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: '#0F172A', fontFamily: 'monospace' }}>
                      SK-HRD/SSJ/2023/089
                    </span>
                  </div>
                  <a
                    href="#lihat-sk"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#2563EB',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <span>Lihat SK</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Notice Alert Box */}
            <div style={{
              background: '#F0F9FF',
              border: '1px solid #BAE6FD',
              borderRadius: 12,
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}>
              <div style={{ color: '#0284C7', marginTop: 1 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 8v4" /><path d="M12 16h.01" />
                </svg>
              </div>
              <div style={{ fontSize: 12, color: '#0369A1', lineHeight: 1.5 }}>
                Segala bentuk komunikasi resmi, panggilan mediasi ketenagakerjaan, serta penerbitan tanda bukti kurasi loker Disnaker akan ditujukan kepada PIC Utama di atas. Hubungi Helpdesk jika terjadi rotasi pimpinan HR.
              </div>
            </div>

          </div>

          {/* CARD 2: LEGALITAS & KEPATUHAN NORMA KERJA TASIKMALAYA */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 24,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: 0 }}>
                  Legalitas & Kepatuhan Norma Kerja Tasikmalaya
                </h3>
              </div>
              <span style={{ fontSize: 11.5, color: '#64748B' }}>Sinkronisasi SIMNAKER Kemnaker RI</span>
            </div>

            {/* 3 Column Grid Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
              
              {/* Card 1: WLKP Online */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: 12,
                border: '1px solid #E2E8F0',
                padding: '14px 16px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 800,
                    background: '#DCFCE7',
                    color: '#15803D',
                    padding: '2px 8px',
                    borderRadius: 999,
                  }}>
                    AKTIF
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" />
                  </svg>
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0F172A', marginBottom: 2 }}>WLKP Online</div>
                <div style={{ fontSize: 11.5, color: '#64748B', fontFamily: 'monospace', marginBottom: 12 }}>7421.TSM.2024</div>
                <div style={{ fontSize: 11, color: '#64748B', borderTop: '1px solid #E2E8F0', paddingTop: 8 }}>
                  Masa Berlaku: <strong style={{ color: '#0F172A' }}>15 Des 2026</strong>
                </div>
              </div>

              {/* Card 2: BPJS Ketenagakerjaan */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: 12,
                border: '1px solid #E2E8F0',
                padding: '14px 16px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 800,
                    background: '#DCFCE7',
                    color: '#15803D',
                    padding: '2px 8px',
                    borderRadius: 999,
                  }}>
                    TERTIB IURAN
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  </svg>
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0F172A', marginBottom: 2 }}>BPJS Ketenagakerjaan</div>
                <div style={{ fontSize: 11.5, color: '#64748B', fontFamily: 'monospace', marginBottom: 12 }}>Reg: 1802938102</div>
                <div style={{ fontSize: 11, color: '#64748B', borderTop: '1px solid #E2E8F0', paddingTop: 8 }}>
                  Cakupan: <strong style={{ color: '#0F172A' }}>JKK, JKM, JHT, JP</strong>
                </div>
              </div>

              {/* Card 3: Pencatatan PKB */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: 12,
                border: '1px solid #E2E8F0',
                padding: '14px 16px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 800,
                    background: '#DBEAFE',
                    color: '#1D4ED8',
                    padding: '2px 8px',
                    borderRadius: 999,
                  }}>
                    TERCATAT
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  </svg>
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0F172A', marginBottom: 2 }}>Pencatatan PKB</div>
                <div style={{ fontSize: 11.5, color: '#64748B', fontFamily: 'monospace', marginBottom: 12 }}>Kep. 560/SK-HI/2023</div>
                <div style={{ fontSize: 11, color: '#64748B', borderTop: '1px solid #E2E8F0', paddingTop: 8 }}>
                  Status: <strong style={{ color: '#059669' }}>Harmonis (Th ke-2)</strong>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ==================== KOLOM KANAN ==================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* CARD 1: PIC PENGGANTI (ESKALASI) */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 22,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 10h14l-4 -4" /><path d="M17 14h-14l4 4" />
                </svg>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: 0 }}>PIC Pengganti (Eskalasi)</h3>
              </div>
              <span style={{ fontSize: 10.5, fontWeight: 700, background: '#F1F5F9', color: '#475569', padding: '2px 8px', borderRadius: 999 }}>
                Backup
              </span>
            </div>
            
            <p style={{ fontSize: 11.5, color: '#64748B', margin: '0 0 16px 0', lineHeight: 1.45 }}>
              Dihubungi oleh Disnaker jika PIC Utama berhalangan menghadiri agenda bursa kerja atau pemanggilan regulasi.
            </p>

            {/* Profile Inner Box */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: 14,
              border: '1px solid #E2E8F0',
              padding: 16,
              marginBottom: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#E0E7FF',
                  color: '#4338CA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                }}>
                  SR
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#0F172A' }}>Siti Rahmawati, S.E</div>
                  <div style={{ fontSize: 11.5, color: '#64748B' }}>Staff Hubungan Industrial</div>
                </div>
              </div>

              {/* Contact rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#334155' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                  <span style={{ fontWeight: 600 }}>+62 852-2345-6789</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#334155' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                  <span style={{ fontWeight: 600 }}>siti.r@sansan-tasik.co.id</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '10px 14px',
                borderRadius: 10,
                border: '1px solid #CBD5E1',
                background: 'white',
                color: '#334155',
                fontSize: 12.5,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
              </svg>
              Ubah Data PIC Cadangan
            </button>
          </div>

          {/* CARD 2: LOKASI KERJA & UPTD PENGAWAS */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 22,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header */}
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: '0 0 16px 0' }}>
              Lokasi Kerja & UPTD Pengawas
            </h3>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 18 }}>
              {/* Item 1: Fasilitas Produksi */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" /><path d="M5 21v-12l5 4v-4l5 4v-4l4 3v9" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Fasilitas Produksi Tekstil</div>
                  <div style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.45, marginTop: 2 }}>
                    Kawasan Industri Cikurubuk, Kec. Kawalu, Kota Tasikmalaya, Jawa Barat 46182
                  </div>
                </div>
              </div>

              {/* Item 2: Kantor Pengawasan K3 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Kantor Pengawasan K3</div>
                  <div style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.45, marginTop: 2 }}>
                    UPTD Pengawasan Ketenagakerjaan Wilayah V Priangan Timur
                  </div>
                </div>
              </div>
            </div>

            {/* Total Workers Stat Box */}
            <div style={{
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: 12,
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#1E40AF' }}>Total Tenaga Kerja</div>
                <div style={{ fontSize: 11.5, color: '#3B82F6' }}>Terdaftar:</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 19, fontWeight: 800, color: '#1D4ED8' }}>1.248 </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#1D4ED8' }}>Orang</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

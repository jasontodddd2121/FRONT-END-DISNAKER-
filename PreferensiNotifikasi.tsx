import React, { useState } from "react";

export const PreferensiNotifikasi: React.FC = () => {
  // State for channels (WhatsApp, Email, SMS)
  const [channels, setChannels] = useState({
    whatsapp: true,
    email: true,
    sms: false,
  });

  // State for notification types (Toggles)
  const [toggles, setToggles] = useState({
    kurasi: true,
    pelamarAk1: true,
    jobFair: true,
    kedaluwarsa: true,
  });

  // Toggle handler
  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Channel checkbox handler
  const handleChannel = (key: keyof typeof channels) => {
    setChannels((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: 16,
      border: '1px solid #E2E8F0',
      padding: '28px 32px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
    }}>
      
      {/* ===== HEADER: TITLE & SIMPAN BUTTON ===== */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
        marginBottom: 26,
      }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#0F172A', margin: '0 0 6px 0', letterSpacing: '-0.2px' }}>
            Pusat Integrasi Saluran & Preferensi Notifikasi
          </h2>
          <p style={{ fontSize: 12.5, color: '#64748B', margin: 0, lineHeight: 1.5 }}>
            Tentukan saluran prioritas dan jenis pemberitahuan otomatis dari sistem ketenagakerjaan daerah.
          </p>
        </div>

        <button
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            borderRadius: 10,
            background: '#2563EB',
            color: 'white',
            border: 'none',
            fontSize: 12.5,
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(37,99,235,0.25)',
            transition: 'all 0.15s ease',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M14 4l0 4l-6 0l0 -4" />
          </svg>
          Simpan Pengaturan Notifikasi
        </button>
      </div>

      {/* ===== 3 SALURAN NOTIFIKASI CARDS ===== */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 18,
        marginBottom: 30,
      }}>

        {/* CARD 1: WhatsApp Alert (Prioritas) */}
        <div
          onClick={() => handleChannel('whatsapp')}
          style={{
            border: channels.whatsapp ? '1.5px solid #86EFAC' : '1px solid #E2E8F0',
            background: channels.whatsapp ? '#F0FDF4' : '#F8FAFC',
            borderRadius: 14,
            padding: '18px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 140,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: '#10B981',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
              </div>

              {/* Checkbox */}
              <div style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: channels.whatsapp ? '#2563EB' : 'white',
                border: channels.whatsapp ? 'none' : '2px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
                {channels.whatsapp && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                )}
              </div>
            </div>

            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0F172A', margin: '0 0 6px 0' }}>
              WhatsApp Alert (Prioritas)
            </h3>
            <p style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.45, margin: 0 }}>
              Pemberitahuan real-time melalui nomor bot resmi Disnaker Kota Tasikmalaya.
            </p>
          </div>

          <div style={{
            marginTop: 16,
            fontSize: 11.5,
            color: '#047857',
            fontFamily: 'monospace',
            fontWeight: 700,
          }}>
            Terkirim ke: +62 812-3456-7890
          </div>
        </div>

        {/* CARD 2: Email Rekapitulasi */}
        <div
          onClick={() => handleChannel('email')}
          style={{
            border: channels.email ? '1.5px solid #BFDBFE' : '1px solid #E2E8F0',
            background: channels.email ? '#EFF6FF' : '#F8FAFC',
            borderRadius: 14,
            padding: '18px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 140,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: '#2563EB',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </div>

              {/* Checkbox */}
              <div style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: channels.email ? '#2563EB' : 'white',
                border: channels.email ? 'none' : '2px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
                {channels.email && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                )}
              </div>
            </div>

            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0F172A', margin: '0 0 6px 0' }}>
              Email Rekapitulasi
            </h3>
            <p style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.45, margin: 0 }}>
              Laporan harian pelamar masuk, file CV, dan regulasi ketenagakerjaan PDF.
            </p>
          </div>

          <div style={{
            marginTop: 16,
            fontSize: 11.5,
            color: '#1D4ED8',
            fontFamily: 'monospace',
            fontWeight: 700,
          }}>
            Terkirim ke: hrd@sansan-tasik.co.id
          </div>
        </div>

        {/* CARD 3: SMS Gateway Darurat */}
        <div
          onClick={() => handleChannel('sms')}
          style={{
            border: channels.sms ? '1.5px solid #CBD5E1' : '1px solid #E2E8F0',
            background: channels.sms ? '#F1F5F9' : '#F8FAFC',
            borderRadius: 14,
            padding: '18px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 140,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: '#334155',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                  <path d="M8 9h8" /><path d="M8 13h6" />
                </svg>
              </div>

              {/* Checkbox */}
              <div style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: channels.sms ? '#2563EB' : 'white',
                border: channels.sms ? 'none' : '2px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
                {channels.sms && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                )}
              </div>
            </div>

            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0F172A', margin: '0 0 6px 0' }}>
              SMS Gateway Darurat
            </h3>
            <p style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.45, margin: 0 }}>
              Khusus kondisi darurat inspeksi K3 atau sidak regulasi mendadak.
            </p>
          </div>

          <div style={{
            marginTop: 16,
            fontSize: 11.5,
            color: '#64748B',
            fontWeight: 600,
          }}>
            Status: Non-Aktif (Opsional)
          </div>
        </div>

      </div>

      {/* ===== SECTION 2: PILIH JENIS NOTIFIKASI ===== */}
      <div>
        <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0F172A', margin: '0 0 14px 0' }}>
          Pilih Jenis Notifikasi yang Diterima
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

          {/* ITEM 1: Kurasi Status Lowongan Kerja */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 18px',
            borderRadius: 12,
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: '#EFF6FF',
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="2" />
                  <line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>
                  Kurasi Status Lowongan Kerja
                </div>
                <div style={{ fontSize: 11.5, color: '#64748B', marginTop: 2 }}>
                  Update saat loker ditinjau, disetujui tayang, atau memerlukan penyesuaian UMK.
                </div>
              </div>
            </div>

            {/* Toggle Switch */}
            <div
              onClick={() => handleToggle('kurasi')}
              style={{
                width: 44,
                height: 24,
                borderRadius: 999,
                background: toggles.kurasi ? '#2563EB' : '#CBD5E1',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              <div style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'white',
                position: 'absolute',
                top: 3,
                left: toggles.kurasi ? 22 : 4,
                transition: 'left 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }} />
            </div>
          </div>

          {/* ITEM 2: Pelamar Baru Ber-AK1 (Kartu Kuning) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 18px',
            borderRadius: 12,
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: '#ECFDF5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 11h6m-3 -3v6" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>
                  Pelamar Baru Ber-AK1 (Kartu Kuning)
                </div>
                <div style={{ fontSize: 11.5, color: '#64748B', marginTop: 2 }}>
                  Ringkasan harian pelamar prioritas berdomisili KTP-el Kota Tasikmalaya.
                </div>
              </div>
            </div>

            {/* Toggle Switch */}
            <div
              onClick={() => handleToggle('pelamarAk1')}
              style={{
                width: 44,
                height: 24,
                borderRadius: 999,
                background: toggles.pelamarAk1 ? '#2563EB' : '#CBD5E1',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              <div style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'white',
                position: 'absolute',
                top: 3,
                left: toggles.pelamarAk1 ? 22 : 4,
                transition: 'left 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }} />
            </div>
          </div>

          {/* ITEM 3: Undangan Bursa Kerja (Job Fair) & Pelatihan BLK */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 18px',
            borderRadius: 12,
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: '#FFFBEB',
                color: '#D97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a3 3 0 0 1 0 6" /><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                  <path d="M12 8h-4a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h4l6 3v-10z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>
                  Undangan Bursa Kerja (Job Fair) & Pelatihan BLK
                </div>
                <div style={{ fontSize: 11.5, color: '#64748B', marginTop: 2 }}>
                  Pemberitahuan partisipasi booth gratis dalam Job Fair Pemkot Tasikmalaya.
                </div>
              </div>
            </div>

            {/* Toggle Switch */}
            <div
              onClick={() => handleToggle('jobFair')}
              style={{
                width: 44,
                height: 24,
                borderRadius: 999,
                background: toggles.jobFair ? '#2563EB' : '#CBD5E1',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              <div style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'white',
                position: 'absolute',
                top: 3,
                left: toggles.jobFair ? 22 : 4,
                transition: 'left 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }} />
            </div>
          </div>

          {/* ITEM 4: Peringatan Kedaluwarsa Masa Tayang Lowongan */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 18px',
            borderRadius: 12,
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: '#FFF1F2',
                color: '#E11D48',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>
                  Peringatan Kedaluwarsa Masa Tayang Lowongan
                </div>
                <div style={{ fontSize: 11.5, color: '#64748B', marginTop: 2 }}>
                  Notifikasi otomatis H-3 sebelum lowongan ditutup oleh sistem.
                </div>
              </div>
            </div>

            {/* Toggle Switch */}
            <div
              onClick={() => handleToggle('kedaluwarsa')}
              style={{
                width: 44,
                height: 24,
                borderRadius: 999,
                background: toggles.kedaluwarsa ? '#2563EB' : '#CBD5E1',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              <div style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'white',
                position: 'absolute',
                top: 3,
                left: toggles.kedaluwarsa ? 22 : 4,
                transition: 'left 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }} />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

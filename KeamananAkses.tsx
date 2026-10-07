import React, { useState } from "react";
import { KontakPicLegalitas } from "./KontakPicLegalitas";

interface KeamananAksesProps {
  onBackToDashboard?: () => void;
}

export const KeamananAkses: React.FC<KeamananAksesProps> = ({ onBackToDashboard }) => {
  // Tabs state
  const [activeTab, setActiveTab] = useState("Keamanan & Password");

  // Password fields visibility state
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form inputs
  const [currentPassword, setCurrentPassword] = useState("Sansan2024!Secure");
  const [newPassword, setNewPassword] = useState("TasikHegar#2025");
  const [confirmPassword, setConfirmPassword] = useState("TasikHegar#2025");

  // 2FA state
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);
  const [twoFactorMethod, setTwoFactorMethod] = useState<"whatsapp" | "totp">("whatsapp");

  // Notification preferences state
  const [notifPreferences, setNotifPreferences] = useState({
    kurasi: true,
    pelamarAk1: true,
    jobFair: true,
    kedaluwarsa: true,
  });

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', padding: '24px 36px 60px 36px', boxSizing: 'border-box' }}>
      
      {/* ===== TOP BAR METADATA & PROFILE ===== */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 18,
        borderBottom: '1px solid #E2E8F0',
        marginBottom: 20,
      }}>
        {/* Left: Date & Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#64748B', fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" />
            </svg>
            <span>Kamis, 24 Oktober 2024</span>
          </div>

          <div style={{ width: 1, height: 16, background: '#CBD5E1' }} />

          {/* Mitra Terverifikasi Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#ECFDF5',
            color: '#059669',
            border: '1px solid #A7F3D0',
            padding: '4px 10px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              <path d="M9 12l2 2l4 -4" />
            </svg>
            <span>Mitra Terverifikasi</span>
          </div>
        </div>

        {/* Right: Notification bell & Company info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {/* Bell Icon */}
          <div style={{ position: 'relative', cursor: 'pointer', padding: 6 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
            <span style={{
              position: 'absolute',
              top: 5,
              right: 6,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#EF4444',
              border: '2px solid white',
            }} />
          </div>

          <div style={{ width: 1, height: 24, background: '#E2E8F0' }} />

          {/* Profile Name & Avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, textAlign: 'right' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>PT. Sansan Saudaratex Jaya</div>
              <div style={{ fontSize: 11, color: '#64748B' }}>Sektor Industri Tekstil & Produk Tekstil</div>
            </div>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: '#0284C7',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 13,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BREADCRUMB ===== */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#64748B', marginBottom: 14 }}>
        <button
          onClick={onBackToDashboard}
          style={{ background: 'none', border: 'none', padding: 0, color: '#64748B', cursor: 'pointer', fontSize: 12, fontWeight: 500 }}
        >
          {activeTab === 'Kontak PIC & Legalitas' ? 'Portal Mitra' : 'Dashboard'}
        </button>
        <span>›</span>
        <span>Pengaturan Akun</span>
        {activeTab !== 'Kontak PIC & Legalitas' && (
          <>
            <span>›</span>
            <span style={{ color: '#2563EB', fontWeight: 600 }}>Pusat Kendali Keamanan & Profil PIC</span>
          </>
        )}
      </div>

      {/* ===== PAGE TITLE & SECURITY / COMPLIANCE SCORE CARD ===== */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 20,
        marginBottom: 24,
      }}>
        {/* Left: Title, Badge, Description */}
        <div style={{ maxWidth: 840 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', margin: 0 }}>
              {activeTab === 'Kontak PIC & Legalitas'
                ? 'Pusat Kendali Akun & Kepatuhan Mitra'
                : 'Pengaturan Akun & Keamanan Mitra'}
            </h1>
            {activeTab !== 'Kontak PIC & Legalitas' && (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#ECFDF5',
                color: '#059669',
                border: '1px solid #A7F3D0',
                padding: '4px 10px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                Mitra Terverifikasi Disnaker (NIB: 91200048129)
              </span>
            )}
          </div>
          <p style={{ fontSize: 13, color: '#64748B', margin: 0, lineHeight: 1.6 }}>
            {activeTab === 'Kontak PIC & Legalitas'
              ? 'Kelola data penanggung jawab, preferensi pengiriman notifikasi, audit sesi aktif, serta keamanan portal.'
              : 'Kelola kredensial login, otentikasi dua langkah, kontak darurat PIC, notifikasi kurasi loker Disnaker, dan riwayat aktivitas sesi portal industri Kota Tasikmalaya.'}
          </p>
        </div>

        {/* Right: Skor Keamanan / Kepatuhan Akun Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          background: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: 14,
          padding: '12px 18px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          flexShrink: 0,
        }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: '#EFF6FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2563EB',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12l0 2.5" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#64748B', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
              {activeTab === 'Kontak PIC & Legalitas' ? 'SKOR KEPATUHAN AKUN' : 'SKOR KEAMANAN AKUN'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#2563EB' }}>96% Optimal</span>
              {activeTab === 'Kontak PIC & Legalitas' ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" />
                </svg>
              ) : (
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563EB', display: 'inline-block' }} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===== TABS NAVIGASI SUB-FITUR ===== */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderBottom: '1px solid #E2E8F0',
        paddingBottom: 14,
        marginBottom: 26,
        overflowX: 'auto',
      }}>
        {[
          {
            id: 'Keamanan & Password',
            label: 'Keamanan & Password',
            icon: (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12l0 2.5" />
              </svg>
            )
          },
          {
            id: 'Kontak PIC & Legalitas',
            label: 'Kontak PIC & Legalitas',
            badge: 'Terverifikasi',
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <circle cx="12" cy="10" r="3" /><path d="M6 18c0 -2.5 2.5 -4 6 -4s6 1.5 6 4" />
              </svg>
            )
          },
          {
            id: 'Preferensi Notifikasi',
            label: 'Preferensi Notifikasi',
            dot: true,
            icon: (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            )
          },
          {
            id: 'Sesi & Riwayat Login',
            label: 'Sesi & Riwayat Login',
            badgeGray: '3 Perangkat',
            icon: (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" />
              </svg>
            )
          },
          {
            id: 'Zona Berbahaya',
            label: 'Zona Berbahaya',
            isDanger: true,
            icon: (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 9v4" /><path d="M12 16v.01" />
                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.76 2.75" />
              </svg>
            )
          },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                background: isActive ? '#2563EB' : 'transparent',
                color: isActive ? 'white' : (tab.isDanger ? '#DC2626' : '#64748B'),
                border: 'none',
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge && (
                <span style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  background: isActive ? 'rgba(255,255,255,0.22)' : '#EFF6FF',
                  color: isActive ? 'white' : '#2563EB',
                  padding: '2px 8px',
                  borderRadius: 999,
                }}>
                  {tab.badge}
                </span>
              )}
              {tab.dot && (
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              )}
              {tab.badgeGray && (
                <span style={{
                  fontSize: 10.5,
                  fontWeight: 600,
                  background: isActive ? 'rgba(255,255,255,0.22)' : '#F1F5F9',
                  color: isActive ? 'white' : '#64748B',
                  padding: '2px 8px',
                  borderRadius: 999,
                }}>
                  {tab.badgeGray}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ===== KONTEN BERDASARKAN TAB ===== */}
      {activeTab === 'Kontak PIC & Legalitas' ? (
        <KontakPicLegalitas />
      ) : (
        /* ===== 2 KOLOM KONTEN UTAMA (Keamanan & Password) ===== */
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24, alignItems: 'start' }}>
        
        {/* ==================== KOLOM KIRI ==================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* CARD 1: GANTI KATA SANDI AKUN MITRA */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 24,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header Card */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>Ganti Kata Sandi Akun Mitra</h3>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '3px 0 0 0' }}>
                    Pastikan kata sandi memenuhi standar kriptografi portal ketenagakerjaan daerah.
                  </p>
                </div>
              </div>

              <span style={{ fontSize: 11, color: '#64748B', background: '#F1F5F9', padding: '4px 10px', borderRadius: 8, fontWeight: 500, flexShrink: 0 }}>
                Terakhir diganti: 45 hari lalu
              </span>
            </div>

            {/* Alert Box: Protokol SPBE */}
            <div style={{
              background: '#F0F9FF',
              border: '1px solid #BAE6FD',
              borderRadius: 12,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              marginBottom: 20,
            }}>
              <div style={{ color: '#0284C7', marginTop: 1 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
              <div style={{ fontSize: 12, color: '#0369A1', lineHeight: 1.5 }}>
                <div style={{ fontWeight: 700, marginBottom: 2 }}>Protokol Keamanan Data SPBE Pemkot Tasikmalaya</div>
                <div>Kata sandi minimal diganti setiap 6 bulan sekali untuk mencegah kebocoran data rekrutmen warga dan data ketenagakerjaan WLTK Online.</div>
              </div>
            </div>

            {/* Input Form Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Kata Sandi Saat Ini */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  Kata Sandi Saat Ini <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '10px 42px 10px 14px',
                      borderRadius: 10,
                      border: '1px solid #CBD5E1',
                      fontSize: 13,
                      color: '#0F172A',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Kata Sandi Baru */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  Kata Sandi Baru Disnaker <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '10px 42px 10px 14px',
                      borderRadius: 10,
                      border: '1px solid #CBD5E1',
                      fontSize: 13,
                      color: '#0F172A',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </button>
                </div>

                {/* Password Strength Indicator */}
                <div style={{ marginTop: 10 }}>
                  <div style={{
                    height: 5,
                    width: '100%',
                    background: '#E2E8F0',
                    borderRadius: 999,
                    overflow: 'hidden',
                    marginBottom: 8,
                  }}>
                    <div style={{ width: '100%', height: '100%', background: '#10B981', borderRadius: 999 }} />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, marginBottom: 10 }}>
                    <span style={{ color: '#64748B' }}>Kekuatan Kata Sandi:</span>
                    <span style={{ color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                      Sangat Kuat (Memenuhi Standar)
                    </span>
                  </div>

                  {/* Checklist 2x2 */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, fontSize: 11, color: '#059669' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>✓</span> Minimal 8 karakter (terisi 14)
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>✓</span> Mengandung huruf kapital & kecil
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>✓</span> Mengandung digit angka (0-9)
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>✓</span> Mengandung simbol khusus (!@#$%^&*)
                    </div>
                  </div>
                </div>
              </div>

              {/* Konfirmasi Kata Sandi Baru */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#334155', marginBottom: 6 }}>
                  Konfirmasi Kata Sandi Baru <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '10px 42px 10px 14px',
                      borderRadius: 10,
                      border: '1px solid #CBD5E1',
                      fontSize: 13,
                      color: '#0F172A',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, marginTop: 24, paddingTop: 18, borderTop: '1px solid #F1F5F9' }}>
              <button
                type="button"
                style={{
                  padding: '9px 18px',
                  borderRadius: 10,
                  border: '1px solid #CBD5E1',
                  background: 'white',
                  color: '#475569',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Batal
              </button>
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '9px 18px',
                  borderRadius: 10,
                  border: 'none',
                  background: '#2563EB',
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(37,99,235,0.25)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" />
                </svg>
                Simpan Perubahan Password
              </button>
            </div>
          </div>

          {/* CARD 2: AUTENTIKASI DUA LANGKAH (2FA) */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 24,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header Card */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                    <path d="M11 4h2" /><path d="M12 17v.01" />
                  </svg>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>Autentikasi Dua Langkah (2FA)</h3>
                    <span style={{ fontSize: 10, fontWeight: 800, background: '#2563EB', color: 'white', padding: '2px 8px', borderRadius: 999 }}>
                      AKTIF
                    </span>
                  </div>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '3px 0 0 0' }}>
                    Proteksi akses lowongan kerja dari pengambilalihan akun tidak sah.
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <div
                onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                style={{
                  width: 44,
                  height: 24,
                  borderRadius: 999,
                  background: is2FAEnabled ? '#2563EB' : '#CBD5E1',
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
                  left: is2FAEnabled ? 22 : 4,
                  transition: 'left 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }} />
              </div>
            </div>

            {/* Subtext info */}
            <p style={{ fontSize: 12, color: '#475569', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              Setiap upaya masuk dari peramban baru akan meminta kode One-Time Password (OTP) 6 digit yang dikirimkan ke kontak PIC resmi: <span style={{ color: '#2563EB', fontWeight: 600 }}>+62 812-3456-7890</span>.
            </p>

            {/* 2 Radio Method Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
              {/* Option 1: WhatsApp */}
              <div
                onClick={() => setTwoFactorMethod('whatsapp')}
                style={{
                  border: twoFactorMethod === 'whatsapp' ? '2px solid #2563EB' : '1px solid #E2E8F0',
                  background: twoFactorMethod === 'whatsapp' ? '#EFF6FF' : '#F8FAFC',
                  borderRadius: 12,
                  padding: 14,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: '#2563EB', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>WhatsApp OTP</div>
                      <span style={{ fontSize: 9.5, fontWeight: 700, color: '#2563EB' }}>Rekomendasi Disnaker</span>
                    </div>
                  </div>

                  {/* Radio Dot */}
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    border: twoFactorMethod === 'whatsapp' ? '5px solid #2563EB' : '2px solid #CBD5E1',
                    background: 'white',
                    boxSizing: 'border-box',
                  }} />
                </div>
                <div style={{ fontSize: 11, color: '#64748B', lineHeight: 1.4 }}>
                  Pengiriman instan via Bot Resmi Layanan Ketenagakerjaan Kota Tasikmalaya (Centang Hijau).
                </div>
              </div>

              {/* Option 2: Aplikasi TOTP */}
              <div
                onClick={() => setTwoFactorMethod('totp')}
                style={{
                  border: twoFactorMethod === 'totp' ? '2px solid #2563EB' : '1px solid #E2E8F0',
                  background: twoFactorMethod === 'totp' ? '#EFF6FF' : '#F8FAFC',
                  borderRadius: 12,
                  padding: 14,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: '#1E293B', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Aplikasi TOTP</div>
                      <span style={{ fontSize: 9.5, color: '#64748B' }}>Google / Microsoft Authenticator</span>
                    </div>
                  </div>

                  {/* Radio Dot */}
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    border: twoFactorMethod === 'totp' ? '5px solid #2563EB' : '2px solid #CBD5E1',
                    background: 'white',
                    boxSizing: 'border-box',
                  }} />
                </div>
                <div style={{ fontSize: 11, color: '#64748B', lineHeight: 1.4 }}>
                  Gunakan generator kode offline tanpa bergantung pada jangkauan sinyal seluler.
                </div>
              </div>
            </div>

            {/* Footer row: Cadangan Darurat */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 12,
              paddingTop: 12,
              borderTop: '1px solid #F1F5F9',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#475569' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                </svg>
                <span>Cadangan Darurat: <strong>8 Kode Pemulihan Tersimpan</strong></span>
              </div>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563EB',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Buat Ulang Kode
              </button>
            </div>
          </div>

          {/* CARD 3: RIWAYAT SESI & PERANGKAT LOGIN */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 24,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header Card */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                    <path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: 0 }}>Riwayat Sesi & Perangkat Login</h3>
                  <p style={{ fontSize: 12, color: '#64748B', margin: '3px 0 0 0' }}>
                    Daftar terminal perangkat yang tercatat mengakses konsol HRD PT. Sansan Saudaratex.
                  </p>
                </div>
              </div>

              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '7px 12px',
                  borderRadius: 8,
                  border: '1px solid #FECACA',
                  background: '#FEF2F2',
                  color: '#DC2626',
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" />
                </svg>
                Keluar Semua Perangkat Lain
              </button>
            </div>

            {/* List of Devices */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Device 1: Windows (Active) */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 12,
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                      <path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Windows 11 • Chrome 128.0</span>
                      <span style={{ fontSize: 10, fontWeight: 700, background: '#DCFCE7', color: '#15803D', padding: '2px 8px', borderRadius: 999 }}>
                        Sesi Ini (Aktif)
                      </span>
                    </div>
                    <div style={{ fontSize: 11, color: '#64748B', fontFamily: 'monospace' }}>• IP: 180.252.194.66</div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: '#059669' }}>Sedang Berjalan</div>
                  <div style={{ fontSize: 11, color: '#64748B' }}>Kec. Kawalu</div>
                </div>
              </div>

              {/* Device 2: Android */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 12,
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                      <path d="M11 4h2" /><path d="M12 17v.01" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Hayu Gawe Mitra App (Android 14)</div>
                    <div style={{ fontSize: 11, color: '#64748B', fontFamily: 'monospace' }}>• IP: 114.125.43.12</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11.5, color: '#64748B' }}>2 jam yang lalu</div>
                    <div style={{ fontSize: 10.5, color: '#94A3B8' }}>Kota Tasikmalaya, Jawa Barat (Xiaomi Redmi Note 13)</div>
                  </div>
                  <button
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Device 3: MacBook */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 12,
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                      <path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Apple MacBook Air • Safari 17.4</div>
                    <div style={{ fontSize: 11, color: '#64748B', fontFamily: 'monospace' }}>• IP: 182.1.202.61</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11.5, color: '#64748B' }}>3 hari yang lalu</div>
                    <div style={{ fontSize: 10.5, color: '#94A3B8' }}>Bandung, Jawa Barat (Kantor Pusat)</div>
                  </div>
                  <button
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ==================== KOLOM KANAN ==================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* CARD 1: PENANGGUNG JAWAB (PIC) */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 22,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: 0 }}>Penanggung Jawab (PIC)</h3>
                  <p style={{ fontSize: 11.5, color: '#64748B', margin: '2px 0 0 0' }}>
                    Data wakil resmi perusahaan di hadapan Disnaker.
                  </p>
                </div>
              </div>

              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block', marginTop: 4 }} />
            </div>

            {/* Profile Inner Box */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: 14,
              border: '1px solid #E2E8F0',
              padding: 16,
              marginBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#0F172A',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                }}>
                  HG
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#0F172A' }}>Hendra Gunawan, S.Kom</div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: '#2563EB' }}>HR & Legal Manager</div>
                </div>
              </div>

              {/* Data Table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748B' }}>NIK Terdaftar</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: 600, color: '#0F172A' }}>327801********02</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748B' }}>Status Validasi</span>
                  <span style={{ fontSize: 11, fontWeight: 700, background: '#DCFCE7', color: '#15803D', padding: '2px 8px', borderRadius: 999 }}>
                    Terverifikasi Dukcapil
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748B' }}>Email Kedinasan</span>
                  <span style={{ fontWeight: 600, color: '#0F172A', fontSize: 11.5 }}>hrd@sansan-tasik.co.id</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748B' }}>WhatsApp PIC</span>
                  <span style={{ fontWeight: 600, color: '#0F172A', fontSize: 11.5 }}>+62 812-3456-7890</span>
                </div>
              </div>
            </div>

            {/* Re-verify Button */}
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
                border: '1px solid #BFDBFE',
                background: '#EFF6FF',
                color: '#2563EB',
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
              Perbarui Kontak PIC (Re-Verifikasi)
            </button>
          </div>

          {/* CARD 2: PREFERENSI NOTIFIKASI LOKER */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            padding: 22,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: '#EFF6FF',
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: 0 }}>Preferensi Notifikasi Loker</h3>
                <p style={{ fontSize: 11.5, color: '#64748B', margin: '2px 0 0 0' }}>
                  Kanal siaran proses kurasi tim pengawas ketenagakerjaan.
                </p>
              </div>
            </div>

            {/* Checklist Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                {
                  key: 'kurasi',
                  title: 'Kurasi Lowongan Disnaker',
                  desc: 'Update saat draf loker disetujui, ditolak, atau perlu revisi via WA & Email.',
                },
                {
                  key: 'pelamarAk1',
                  title: 'Pelamar Baru Ber-AK1 (Kartu Kuning)',
                  desc: 'Ringkasan harian pelamar prioritas berdomisili lokal Kota Tasikmalaya.',
                },
                {
                  key: 'jobFair',
                  title: 'Undangan Job Fair & Sosialisasi',
                  desc: 'Informasi bursa kerja Pemkot, pelatihan vokasi, & regulasi upah (UMK).',
                },
                {
                  key: 'kedaluwarsa',
                  title: 'Peringatan Kedaluwarsa Loker',
                  desc: 'Pengingat H-3 sebelum masa tayang loker ditutup otomatis oleh sistem.',
                },
              ].map((item) => {
                const isChecked = notifPreferences[item.key as keyof typeof notifPreferences];
                return (
                  <div
                    key={item.key}
                    onClick={() => setNotifPreferences({ ...notifPreferences, [item.key]: !isChecked })}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 12,
                      cursor: 'pointer',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', marginBottom: 2 }}>{item.title}</div>
                      <div style={{ fontSize: 11.5, color: '#64748B', lineHeight: 1.4 }}>{item.desc}</div>
                    </div>

                    <div style={{
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                      background: isChecked ? '#2563EB' : 'white',
                      border: isChecked ? 'none' : '2px solid #CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      flexShrink: 0,
                      marginTop: 2,
                      transition: 'all 0.15s',
                    }}>
                      {isChecked && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CARD 3: ZONA BERBAHAYA REGULASI */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #FEE2E2',
            padding: 22,
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: '#FEF2F2',
                color: '#DC2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4" /><path d="M12 16v.01" />
                  <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.76 2.75" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#991B1B', margin: 0 }}>Zona Berbahaya Regulasi</h3>
                <p style={{ fontSize: 11.5, color: '#64748B', margin: '2px 0 0 0' }}>
                  Penonaktifan atau pembekuan akun kemitraan industri.
                </p>
              </div>
            </div>

            {/* Warning Box */}
            <div style={{
              background: '#FFF5F5',
              border: '1px solid #FED7D7',
              borderRadius: 12,
              padding: '12px 14px',
              marginBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#C53030', marginBottom: 4 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 8v4" /><path d="M12 16h.01" />
                </svg>
                Syarat Penonaktifan Akun
              </div>
              <p style={{ fontSize: 11.5, color: '#742A2A', lineHeight: 1.45, margin: 0 }}>
                Perusahaan wajib memastikan seluruh proses seleksi pelamar selesai, tidak memiliki sangkutan mediasi HI (Hubungan Industrial), serta telah diverifikasi oleh Pengawas Ketenagakerjaan Disnaker Tasikmalaya.
              </p>
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
                border: '1px solid #E2E8F0',
                background: '#F1F5F9',
                color: '#475569',
                fontSize: 12.5,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 15l2 2l4 -4" />
              </svg>
              Ajukan Penutupan Akun Mitra
            </button>
          </div>

        </div>

        </div>
      )}

    </div>
  );
};

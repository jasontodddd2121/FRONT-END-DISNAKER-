import React, { useState } from "react";
import { FrameLogin } from "./index";
import logoDisnaker from "./LOGO.png";
import { KeamananAkses } from "./KeamananAkses";

export const DashboardPekerja = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isPengaturanOpen, setIsPengaturanOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#F8FAFC', minHeight: '100vh', color: '#0F172A', position: 'relative' }}>
      
      {/* ===== HOVER SIDEBAR AUTOMATIS (KIRI) ===== */}
      <aside
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: isSidebarHovered ? 240 : 68,
          background: 'linear-gradient(180deg, #1565C0 0%, #0D47A1 60%, #0A1E3F 100%)',
          color: 'white',
          zIndex: 900,
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isSidebarHovered ? '8px 0 30px rgba(0,0,0,0.25)' : '2px 0 10px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px 0',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        {/* TOP: Header Logo Sidebar */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 18px 24px 18px',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
            marginBottom: 20,
            whiteSpace: 'nowrap',
          }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11.46 8.574a1.993 1.993 0 0 1 3.08 0l.44 .528a2.005 2.005 0 0 0 1.35 .694l.684 .063a1.993 1.993 0 0 1 1.894 2.94l-.325 .607a2.006 2.006 0 0 0 0 1.588l.325 .607a1.993 1.993 0 0 1 -1.894 2.94l-.684 .063a2.005 2.005 0 0 0 -1.35 .694l-.44 .528a1.993 1.993 0 0 1 -3.08 0l-.44 -.528a2.005 2.005 0 0 0 -1.35 -.694l-.684 -.063a1.993 1.993 0 0 1 -1.894 -2.94l.325 -.607a2.006 2.006 0 0 0 0 -1.588l-.325 -.607a1.993 1.993 0 0 1 1.894 -2.94l.684 -.063a2.005 2.005 0 0 0 1.35 -.694l.44 -.528z" /><path d="M14.5 12.5l-2.5 3l-1.5 -2" />
              </svg>
            </div>

            <div style={{
              opacity: isSidebarHovered ? 1 : 0,
              transition: 'opacity 0.25s ease',
              pointerEvents: isSidebarHovered ? 'auto' : 'none',
            }}>
              <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: '0.5px' }}>DISNAKER</div>
              <div style={{ fontSize: 10, opacity: 0.8, fontWeight: 600 }}>KOTA TASIKMALAYA</div>
            </div>
          </div>

          {/* MENU NAVIGASI (SVG TABLER ICONS) */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '0 10px' }}>
            {[
              { id: 'Dashboard', label: 'Dashboard', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h6v8h-6z" /><path d="M4 16h6v4h-6z" /><path d="M14 12h6v8h-6z" /><path d="M14 4h6v4h-6z" />
                </svg>
              )},
              { id: 'Lowongan Saya', label: 'Lowongan Saya', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                </svg>
              )},
              { id: 'Pelamar Masuk', label: 'Pelamar Masuk', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 13h3l3 3h4l3 -3h3" />
                </svg>
              )},
              { id: 'Profil Perusahaan', label: 'Profil Perusahaan', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l18 0" /><path d="M9 8l1 0" /><path d="M9 12l1 0" /><path d="M9 16l1 0" /><path d="M14 8l1 0" /><path d="M14 12l1 0" /><path d="M14 16l1 0" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                </svg>
              )},
            ].map((item) => {
              const isActive = activeMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveMenu(item.id); setIsPengaturanOpen(false); setActiveSubMenu(''); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 12,
                    background: isActive ? 'rgba(255,255,255,0.2)' : 'transparent',
                    border: isActive ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
                    color: 'white',
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    textAlign: 'left',
                    boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                  }}
                >
                  <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
                  <span style={{
                    opacity: isSidebarHovered ? 1 : 0,
                    transition: 'opacity 0.2s ease',
                    overflow: 'hidden',
                  }}>
                    {item.label}
                  </span>
                </button>
              );
            })}

            {/* ===== PENGATURAN AKUN (DROPDOWN EXPANDABLE) ===== */}
            <button
              onClick={() => { setIsPengaturanOpen(!isPengaturanOpen); setActiveMenu('Pengaturan Akun'); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '12px 14px',
                borderRadius: 12,
                background: activeMenu === 'Pengaturan Akun' ? 'rgba(255,255,255,0.2)' : 'transparent',
                border: activeMenu === 'Pengaturan Akun' ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
                color: 'white',
                fontSize: 13,
                fontWeight: activeMenu === 'Pengaturan Akun' ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                textAlign: 'left',
                boxShadow: activeMenu === 'Pengaturan Akun' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37a1.724 1.724 0 0 0 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                </svg>
              </span>
              <span style={{
                opacity: isSidebarHovered ? 1 : 0,
                transition: 'opacity 0.2s ease',
                overflow: 'hidden',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                Pengaturan Akun
                {/* Panah Chevron (buka/tutup) */}
                <svg 
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: isPengaturanOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
                >
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </span>
            </button>

            {/* SUB-MENU DROPDOWN PENGATURAN AKUN */}
            {isPengaturanOpen && isSidebarHovered && (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 4, 
                paddingLeft: 16,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                {/* Sub-item: Keamanan & Akses */}
                <button
                  onClick={() => {
                    setActiveSubMenu('Keamanan & Akses');
                    setActiveMenu('Pengaturan Akun');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 12,
                    background: activeSubMenu === 'Keamanan & Akses' ? '#2563EB' : 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: 13,
                    fontWeight: activeSubMenu === 'Keamanan & Akses' ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    textAlign: 'left',
                    boxShadow: activeSubMenu === 'Keamanan & Akses' ? '0 4px 14px rgba(37,99,235,0.45)' : 'none',
                  }}
                >
                  {/* Shield-Lock Icon (Tabler) */}
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" /><path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12l0 2.5" />
                    </svg>
                  </span>
                  <span>Keamanan & Akses</span>
                </button>

                {/* Sub-item: Permohonan Penghapusan Mitra (Biru Highlight) */}
                <button
                  onClick={() => setActiveSubMenu('Penghapusan Mitra')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 12,
                    background: activeSubMenu === 'Penghapusan Mitra' ? 'rgba(255,255,255,0.15)' : 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: activeSubMenu === 'Penghapusan Mitra' ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    textAlign: 'left',
                    lineHeight: '18px',
                  }}
                >
                  {/* Square-X Icon (Tabler) */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M9 9l6 6" /><path d="M15 9l-6 6" />
                  </svg>
                  Permohonan Penghapusan Mitra
                </button>
              </div>
            )}
          </nav>
        </div>

        {/* BOTTOM: Pusat Bantuan & Keluar Portal */}
        <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            whiteSpace: 'nowrap',
            padding: '8px 6px',
          }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" /><path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" /><path d="M4 15v-3a8 8 0 1 1 16 0v3" />
              </svg>
            </div>
            <div style={{
              opacity: isSidebarHovered ? 1 : 0,
              transition: 'opacity 0.25s ease',
              fontSize: 11,
            }}>
              <div style={{ opacity: 0.8 }}>Pusat Bantuan Disnaker</div>
              <div style={{ fontWeight: 700 }}>0265 - 313997</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ===== LAYOUT UTAMA DASHBOARD ===== */}
      <div style={{ paddingLeft: 68, transition: 'padding-left 0.35s ease' }}>
        {activeSubMenu === 'Keamanan & Akses' ? (
          <KeamananAkses onBackToDashboard={() => { setActiveMenu('Dashboard'); setActiveSubMenu(''); }} />
        ) : (
          <>
            {/* ===== HERO HEADER ===== */}
            <header style={{
          background: 'linear-gradient(135deg, #0A1E3F 0%, #1565C0 50%, #0D47A1 100%)',
          color: 'white',
          padding: '24px 40px 48px 40px',
          position: 'relative',
        }}>
          {/* Top Bar Header */}
          <div style={{ position: 'relative', height: 50, marginBottom: 36 }}>

            {/* ===== POSITION & UKURAN MANUAL LOGO DISNAKER HEADER ===== */}
            <div style={{
              position: 'absolute', // 👈 Posisikan secara bebas/manual
              top: 6,               // 👈 Geser kapsul logo ke ATAS / BAWAH
              left: 0,              // 👈 Geser kapsul logo ke KIRI / KANAN
              width: 263,           // 👈 Ubah lebar kapsul (sesuai Figma: 263px)
              height: 48,           // 👈 Ubah tinggi kapsul
              paddingLeft: 16,      // 👈 Jarak dalam sisi kiri
              paddingRight: 16,     // 👈 Jarak dalam sisi kanan
              paddingTop: 8,        // 👈 Jarak dalam sisi atas
              paddingBottom: 8,     // 👈 Jarak dalam sisi bawah
              background: 'rgba(255,255,255,0.15)',
              borderRadius: 999,
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src={logoDisnaker} 
                alt="Disnaker Logo" 
                style={{ 
                  width: 215,       // 👈 Dimensi lebar gambar logo (215px)
                  height: 32,       // 👈 Dimensi tinggi gambar logo (32px)
                  objectFit: 'contain',
                  marginTop: -10,     // 👈 Geser gambar logonya saja NAIK/TURUN di dalam kapsul (misal: -2 atau 2)
                  marginLeft: 0,    // 👈 Geser gambar logonya saja KIRI/KANAN di dalam kapsul
                }} 
              />
            </div>

            {/* Tombol Kanan Header */}
            <div style={{ position: 'absolute', top: 6, right: 0, display: 'flex', alignItems: 'center', gap: 12 }}>
              <button style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                Unduh Rekap
              </button>
              <button style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                Daftar AK-1
              </button>
              <button 
                onClick={() => setShowLoginModal(true)}
                style={{
                  background: '#FFFFFF',
                  color: '#1565C0',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                🔑 Masuk / Login
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: 34, fontWeight: 800, margin: '0 0 12px 0', letterSpacing: '-0.5px' }}>
              Sampurasun, Warga Tasikmalaya!
            </h1>
            <p style={{ fontSize: 14, opacity: 0.9, lineHeight: '22px', margin: '0 0 28px 0', fontWeight: 400 }}>
              Pusat pelayanan terintegrasi mencakup pencarian kerja, pendaftaran Kartu Kuning (AK-1), pendaftaran/sertifikasi keahlian BLK, serta bursa lowongan terverifikasi di wilayah Priangan Timur.
            </p>

            {/* Search Box */}
            <div style={{
              background: 'white',
              borderRadius: 16,
              padding: '8px 8px 8px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Cari posisi kerja, keahlian BLK, atau NIK pelamar..." 
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: 14,
                  color: '#1E293B',
                  fontFamily: 'inherit',
                }}
              />
              <select style={{
                border: 'none',
                background: '#F8FAFC',
                padding: '10px 14px',
                borderRadius: 10,
                fontSize: 13,
                color: '#475569',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer',
              }}>
                <option>Semua Kategori</option>
                <option>Lowongan Kerja</option>
                <option>Pelatihan BLK</option>
                <option>Data AK-1</option>
              </select>
              <button style={{
                background: '#1565C0',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
              }}>
                Temukan Info
              </button>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
              {['Pencari Mandiri', 'BPC Kota TSM', 'Open Call BLK', 'Sektor DUDI Non-BLK', 'Staf Disnaker/Sejenis'].map((tag, i) => (
                <span key={i} style={{
                  background: 'rgba(255,255,255,0.12)',
                  padding: '4px 12px',
                  borderRadius: 999,
                  fontSize: 12,
                  opacity: 0.9,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main style={{ maxWidth: 1200, margin: '24px auto 40px auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>

          {/* ===== TOP SECTION: WELCOME BANNER + 4 STAT CARDS IN FIGMA GRID ===== */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20, marginBottom: 20 }}>
            
            {/* KIRI: WELCOME CARD PERUSAHAAN MITRA */}
            <div style={{
              background: 'white',
              borderRadius: 24,
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
                  <span style={{ background: '#EFF6FF', color: '#1D4ED8', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>
                    KOTA TASIKMALAYA
                  </span>
                  <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>
                    Mitra Resmi Terverifikasi Disnaker (NIB: 91200048329)
                  </span>
                  <span style={{ color: '#64748B', fontSize: 11 }}>
                    ID WLKP: 7421.TSM.2024
                  </span>
                </div>

                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0B1E3F', margin: '0 0 6px 0', lineHeight: '32px' }}>
                  Selamat Datang di Portal Perusahaan Mitra Disnaker Kota Tasikmalaya
                </h2>
                
                <p style={{ color: '#1E293B', fontSize: 14, fontWeight: 700, margin: '0 0 8px 0' }}>
                  PT. Sansan Saudaratex Jaya <span style={{ fontWeight: 400, color: '#64748B' }}>(Cabang Tasikmalaya - Kawasan Industri Cikurubuk)</span>
                </p>
                
                <p style={{ color: '#64748B', fontSize: 13, lineHeight: '20px', margin: 0 }}>
                  Pantau status kurasi lowongan kerja, verifikasi kartu pencari kerja (AK-1), dan kelola kepatuhan Wajib Lapor Ketenagakerjaan secara real-time.
                </p>
              </div>

              {/* Action Buttons inside Welcome Banner */}
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                <button style={{
                  background: '#0D47A1',
                  color: 'white',
                  border: 'none',
                  padding: '12px 22px',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  + Pasang Lowongan Baru
                </button>
                <button style={{
                  background: '#F8FAFC',
                  color: '#1E293B',
                  border: '1px solid #CBD5E1',
                  padding: '12px 22px',
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: 'pointer',
                }}>
                  📄 Cetak Rekap Kebutuhan Tenaga Kerja
                </button>
              </div>
            </div>

            {/* KANAN: 2 X 2 STAT CARDS GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {/* Stat 1: Total Lowongan */}
              <div style={{ background: 'white', borderRadius: 20, padding: 20, border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ color: '#475569', fontSize: 13, fontWeight: 700 }}>Total Lowongan</span>
                  <div style={{ background: '#EFF6FF', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1D4ED8', fontSize: 16 }}>📑</div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>12 <span style={{ fontSize: 13, fontWeight: 600, color: '#64748B' }}>Posisi</span></div>
                  <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 6 }}>Terdaftar di Disnaker</div>
                </div>
              </div>

              {/* Stat 2: Aktif (Disetujui) */}
              <div style={{ background: 'white', borderRadius: 20, padding: 20, border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ color: '#16A34A', fontSize: 13, fontWeight: 700 }}>Aktif (Disetujui)</span>
                  <div style={{ background: '#DCFCE7', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#15803D', fontSize: 16 }}>✓</div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: '#16A34A', lineHeight: 1 }}>7 <span style={{ fontSize: 13, fontWeight: 600, color: '#16A34A' }}>Tayang</span></div>
                  <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 6 }}>Portal SiapKerja TSM</div>
                </div>
              </div>

              {/* Stat 3: Perlu Tindakan (Pink/Red) */}
              <div style={{ background: '#FEF2F2', borderRadius: 20, padding: 20, border: '1px solid #FCA5A5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ color: '#DC2626', fontSize: 13, fontWeight: 700 }}>Perlu Tindakan</span>
                  <div style={{ background: '#FEE2E2', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626', fontSize: 16 }}>⚠️</div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#DC2626', lineHeight: 1 }}>1 <span style={{ fontSize: 12, fontWeight: 700, color: '#DC2626' }}>Ditolak Disnaker</span></div>
                  <div style={{ fontSize: 11, color: '#EF4444', marginTop: 6, fontWeight: 700 }}>Penyesuaian UMK/Syarat</div>
                </div>
              </div>

              {/* Stat 4: Pelamar Kartu AK-1 (Dark Blue) */}
              <div style={{ background: '#0D47A1', color: 'white', borderRadius: 20, padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ opacity: 0.9, fontSize: 12, fontWeight: 700 }}>Pelamar Kartu AK-1</span>
                  <div style={{ background: 'rgba(255,255,255,0.2)', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>👤</div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1 }}>184 <span style={{ fontSize: 11, fontWeight: 400, opacity: 0.85 }}>Warga TSM</span></div>
                  <div style={{ fontSize: 11, opacity: 0.8, marginTop: 6 }}>Kartu Kuning Terverifikasi</div>
                </div>
              </div>
            </div>
          </div>

          {/* DRAFT LOWONGAN CARD (FULL WIDTH IN ROW BELOW WELCOME) */}
          <div style={{
            background: 'white',
            borderRadius: 20,
            padding: 24,
            border: '1px solid #E2E8F0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ background: '#EEF2FF', width: 54, height: 54, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#4338CA' }}>
                ✏️
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#475569' }}>Draft Lowongan</div>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#0F172A', lineHeight: 1, marginTop: 4 }}>
                  2 <span style={{ fontSize: 14, fontWeight: 600, color: '#64748B' }}>Draft</span>
                </div>
                <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 4 }}>Belum diajukan ke Disnaker</div>
              </div>
            </div>
            <button style={{
              background: '#F1F5F9',
              border: '1px solid #CBD5E1',
              padding: '10px 18px',
              borderRadius: 12,
              fontSize: 13,
              fontWeight: 700,
              color: '#334155',
              cursor: 'pointer',
            }}>
              Lanjutkan Edit Draft
            </button>
          </div>

          {/* ===== WARNING ALERT BANNER ===== */}
          <div style={{
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: 16,
            padding: '16px 24px',
            marginBottom: 28,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <div style={{ color: '#DC2626', fontSize: 12, fontWeight: 800, marginBottom: 4 }}>
                ⚠️ CATATAN DISNAKER: Lowongan: Admin Gudang & Logistik Shift Malam
              </div>
              <div style={{ color: '#7F1D1D', fontSize: 13, lineHeight: '18px' }}>
                Uraian gaji yang dicantumkan berada di bawah standar UMK Kota Tasikmalaya tahun berjalan (Rp 2.630.000) dan jam kerja shift malam belum melampirkan persetujuan fasilitas transportasi pekerja wanita sesuai Perda Ketenagakerjaan.
              </div>
            </div>
            <button style={{
              background: '#DC2626',
              color: 'white',
              border: 'none',
              padding: '10px 18px',
              borderRadius: 10,
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              Revisi & Ajukan Ulang
            </button>
          </div>

          {/* ===== MIDDLE SECTION (TABLE + SIDEBAR REGULASI) ===== */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, marginBottom: 32 }}>
            
            {/* TABLE STATUS KURASI */}
            <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 4px 0', color: '#0F172A' }}>
                    Status Kurasi Lowongan Kerja
                  </h3>
                  <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>
                    Update validasi regulasi penempatan tenaga kerja Disnaker Kota Tasikmalaya
                  </p>
                </div>
                <select style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #CBD5E1', fontSize: 12, color: '#475569' }}>
                  <option>Semua Status (12 Terakhir)</option>
                </select>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #F1F5F9', textAlign: 'left', color: '#64748B', fontSize: 12 }}>
                    <th style={{ padding: '12px 8px' }}>Posisi & Divisi</th>
                    <th style={{ padding: '12px 8px' }}>Kompensasi / Syarat</th>
                    <th style={{ padding: '12px 8px' }}>Pelamar (AK-1)</th>
                    <th style={{ padding: '12px 8px' }}>Status Kurasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '14px 8px', fontWeight: 700, color: '#0F172A' }}>
                      Operator Sewing Garment & QC<br />
                      <span style={{ fontWeight: 400, fontSize: 11, color: '#64748B' }}>Kawasan Cikurubuk • Pabrik Garment A</span>
                    </td>
                    <td style={{ padding: '14px 8px', color: '#1E293B' }}>
                      Rp 2.700.000 - Rp 3.100.000<br />
                      <span style={{ color: '#16A34A', fontSize: 11, fontWeight: 600 }}>Sesuai UMK 2026</span>
                    </td>
                    <td style={{ padding: '14px 8px', fontWeight: 700, color: '#1E3A8A' }}>48 Berkas Masuk</td>
                    <td style={{ padding: '14px 8px' }}>
                      <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999 }}>
                        ● Disetujui (Tayang)
                      </span>
                    </td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '14px 8px', fontWeight: 700, color: '#0F172A' }}>
                      Staff HR & GA Lapangan<br />
                      <span style={{ fontWeight: 400, fontSize: 11, color: '#64748B' }}>Kantor Operasional • Full Time</span>
                    </td>
                    <td style={{ padding: '14px 8px', color: '#1E293B' }}>
                      Rp 3.200.000 - Rp 4.000.000<br />
                      <span style={{ color: '#16A34A', fontSize: 11, fontWeight: 600 }}>Sesuai UMK 2026</span>
                    </td>
                    <td style={{ padding: '14px 8px', fontWeight: 700, color: '#1E3A8A' }}>19 Berkas Masuk</td>
                    <td style={{ padding: '14px 8px' }}>
                      <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999 }}>
                        ● Disetujui (Tayang)
                      </span>
                    </td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '14px 8px', fontWeight: 700, color: '#0F172A' }}>
                      Teknisi Pemeliharaan Mesin Bordir Digital<br />
                      <span style={{ fontWeight: 400, fontSize: 11, color: '#64748B' }}>Workshop Kawasan • Shift Kerja</span>
                    </td>
                    <td style={{ padding: '14px 8px', color: '#1E293B' }}>
                      Rp 2.650.000<br />
                      <span style={{ color: '#CA8A04', fontSize: 11, fontWeight: 600 }}>Sertifikasi BNSP</span>
                    </td>
                    <td style={{ padding: '14px 8px', color: '#94A3B8' }}>Belum dibuka</td>
                    <td style={{ padding: '14px 8px' }}>
                      <span style={{ background: '#FEF3C7', color: '#D97706', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999 }}>
                        ● Menunggu Persetujuan
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginTop: 20, textAlign: 'right', fontSize: 13 }}>
                <a href="#daftar" style={{ color: '#1565C0', textDecoration: 'none', fontWeight: 700 }}>
                  Buka Seluruh Daftar Lowongan →
                </a>
              </div>
            </div>

            {/* SIDEBAR REGULASI & NAVIGASI */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 16px 0', color: '#0F172A' }}>
                  Navigasi Mitra Cepat
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ background: '#EFF6FF', padding: '12px 16px', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1E3A8A', fontSize: 13 }}>Lowongan Saya</div>
                      <div style={{ fontSize: 11, color: '#3B82F6' }}>Kelola 12 posisi & seleksi</div>
                    </div>
                    <span>→</span>
                  </div>

                  <div style={{ background: '#F0FDF4', padding: '12px 16px', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#14532D', fontSize: 13 }}>Profil Perusahaan</div>
                      <div style={{ fontSize: 11, color: '#16A34A' }}>Legalitas, NPWP, & Kontak HR</div>
                    </div>
                    <span>→</span>
                  </div>
                </div>
              </div>

              {/* Panduan Regulasi */}
              <div style={{ background: '#EEF2FF', borderRadius: 20, padding: 24, border: '1px solid #C7D2FE' }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 12px 0', color: '#312E81' }}>
                  📜 Panduan Regulasi Kota Tasikmalaya
                </h3>
                <p style={{ fontSize: 12, color: '#4338CA', lineHeight: '18px', margin: '0 0 16px 0' }}>
                  Pastikan setiap proses publikasi lowongan memenuhi asas legalitas dan standar tenaga kerja daerah.
                </p>

                <div style={{ background: 'white', borderRadius: 12, padding: 14, marginBottom: 10 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: '#1E1B4B' }}>Standar UMK Kota Tasikmalaya</div>
                  <div style={{ fontSize: 11, color: '#6366F1', marginTop: 2 }}>
                    Batas minimum upah rekrutmen baru <br />
                    <strong style={{ color: '#1E1B4B', fontSize: 13 }}>Rp 2.630.000 / bulan.</strong>
                  </div>
                </div>

                <div style={{ background: 'white', borderRadius: 12, padding: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: '#1E1B4B' }}>Zero Pungli & Rekrutmen Gratis</div>
                  <div style={{ fontSize: 11, color: '#475569', marginTop: 2 }}>
                    Dilarang memungut biaya apapun kepada pelamar kerja dalam bentuk tes atau seragam.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== BOTTOM 3 COLUMNS GRID ===== */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 40 }}>
            {/* Card 1 */}
            <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: 11, color: '#16A34A', fontWeight: 800, marginBottom: 6 }}>PROPORSI TENAGA KERJA LOKAL</div>
              <h4 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px 0', color: '#0F172A' }}>
                Pencari Kerja Tasikmalaya (AK-1)
              </h4>
              <p style={{ fontSize: 12, color: '#64748B', lineHeight: '18px', margin: '0 0 16px 0' }}>
                91% pelamar yang masuk terdaftar resmi dengan NIK Kota Tasikmalaya.
              </p>
              <div style={{ background: '#F8FAFC', padding: 12, borderRadius: 12, fontSize: 12, color: '#334155' }}>
                <div>• 167 Pelamar Ber-KTP Tasik</div>
                <div>• 17 Pelamar Luar Daerah (Priangan)</div>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: 11, color: '#2563EB', fontWeight: 800, marginBottom: 6 }}>FASILITAS INDUSTRI MITRA</div>
              <h4 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px 0', color: '#0F172A' }}>
                Unit Produksi Cikurubuk
              </h4>
              <p style={{ fontSize: 12, color: '#64748B', lineHeight: '18px', margin: '0 0 16px 0' }}>
                Laporan K3 & Keselamatan Kerja terverifikasi Disnaker Q2 2026.
              </p>
              <div style={{ background: '#0F172A', color: 'white', padding: 12, borderRadius: 12, fontSize: 11 }}>
                Sertifikasi K3 No: AK1/III/2026/PTSJ-012<br />
                <span style={{ color: '#4ADE80' }}>Status: Memenuhi Pelaporan</span>
              </div>
            </div>

            {/* Card 3: Contact Tim Disnaker */}
            <div style={{ background: '#0D47A1', color: 'white', borderRadius: 20, padding: 24 }}>
              <div style={{ fontSize: 11, opacity: 0.8, fontWeight: 800, marginBottom: 6 }}>LAYANAN KONSULTASI</div>
              <h4 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px 0' }}>
                Tim Pengantar Kerja Disnaker
              </h4>
              <p style={{ fontSize: 12, opacity: 0.9, lineHeight: '18px', margin: '0 0 16px 0' }}>
                Butuh pendampingan verifikasi loker, konsultasi UMK, atau Job Fair Disnaker Kota Tasikmalaya?
              </p>
              <button style={{
                width: '100%',
                background: '#16A34A',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 12,
                marginBottom: 8,
                cursor: 'pointer',
              }}>
                💬 WhatsApp Petugas Disnaker
              </button>
              <button style={{
                width: '100%',
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '10px',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 12,
                cursor: 'pointer',
              }}>
                📞 Telepon Kantor: (0265) 313997
              </button>
            </div>
          </div>

        </main>

        {/* ===== FOOTER ===== */}
        <footer style={{ background: '#0F172A', color: 'white', padding: '32px 40px', fontSize: 12, borderTop: '1px solid #1E293B' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong style={{ fontSize: 14 }}>Dinas Tenaga Kerja Kota Tasikmalaya</strong>
              <div style={{ opacity: 0.6, marginTop: 4 }}>
                © 2026 Pemerintah Kota Tasikmalaya. Hak Cipta Dilindungi Undang-Undang.
              </div>
            </div>
          </div>
        </footer>
          </>
        )}

      </div>

      {/* ===== POPUP / MODAL LOGIN DISPLAY ===== */}
      {showLoginModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowLoginModal(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 20,
                zIndex: 10000,
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: 'none',
                width: 36,
                height: 36,
                borderRadius: '50%',
                fontSize: 18,
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              ✕
            </button>
            <FrameLogin />
          </div>
        </div>
      )}

    </div>
  );
};

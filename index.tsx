import React from "react";
import logoDisnaker from "./LOGO.png";

// SVG Gunung untuk panel kiri
const Mountains = () => (
  <svg viewBox="0 0 570 180" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 180 }}>
    <defs>
      <linearGradient id="mtn-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a1628" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#060e1e" stopOpacity="1" />
      </linearGradient>
    </defs>
    {/* Layer gunung belakang */}
    <polygon points="0,180 70,90 130,130 210,55 290,105 370,45 440,90 510,60 570,85 570,180" fill="#0d1f3c" />
    {/* Layer gunung depan */}
    <polygon points="0,180 50,120 110,155 180,95 260,140 340,80 420,125 500,75 570,105 570,180" fill="#091426" />
    {/* Overlay gelap di bawah */}
    <rect x="0" y="130" width="570" height="50" fill="#060d1c" />
  </svg>
);

// Ikon ceklist kecil
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginRight: 6, flexShrink: 0 }}>
    <circle cx="6" cy="6" r="6" fill="rgba(255,255,255,0.2)" />
    <path d="M3.5 6L5.5 8L8.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Ikon avatar Disnaker
const DisnakerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="7" width="14" height="9" rx="1" stroke="white" strokeWidth="1.5" />
    <path d="M6 7V5a4 4 0 018 0v2" stroke="white" strokeWidth="1.5" />
    <rect x="8" y="10" width="4" height="3" rx="0.5" fill="white" />
  </svg>
);

// Ikon panah kiri/kanan
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FrameLogin = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#0a1628',
    }}>
      {/* Card Utama */}
      <div style={{
        width: 1140,
        height: 797,
        position: 'relative',
        background: 'linear-gradient(135deg, #1565C0 0%, #E3F2FD 100%)',
        borderRadius: 40,
        overflow: 'hidden',
        boxShadow: '0px 25px 65px -12px rgba(0,0,0,0.65)',
        display: 'flex',
      }}>

        {/* ===== PANEL KIRI ===== */}
        <div style={{
          width: 570,
          height: '100%',
          position: 'relative',
          background: 'linear-gradient(160deg, #1a4fa0 0%, #0d2d6b 40%, #071830 100%)',
          borderRadius: '37px 0 0 37px',
          overflow: 'hidden',
          flexShrink: 0,
        }}>

          {/* Efek Glow Moon */}
          <div style={{
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #b8d8f8, #4a85c5 50%, #1a4fa0 80%)',
            boxShadow: '0 0 80px 30px rgba(150, 200, 255, 0.35)',
            top: 50,
            right: 30,
            opacity: 0.85,
          }} />

          {/* Bar Atas Kiri */}
          <div style={{
            position: 'absolute',
            top: 26,
            left: 33,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}>
            {/* Badge LAYANAN RESMI AK-1 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '5px 14px 5px 10px',
              borderRadius: 999,
              border: '0.83px solid rgba(255,255,255,0.7)',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }} />
              <span style={{ color: 'white', fontSize: 9.5, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                LAYANAN RESMI AK-1
              </span>
            </div>
            {/* Panduan NIK */}
            <div style={{
              padding: '5px 14px',
              borderRadius: 999,
              border: '0.86px solid rgba(255,255,255,0.7)',
              color: 'white',
              fontSize: 10,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 400,
            }}>
              Panduan NIK
            </div>
            {/* Bantuan */}
            <div style={{
              padding: '5px 14px',
              borderRadius: 999,
              border: '0.86px solid rgba(255,255,255,0.7)',
              color: 'white',
              fontSize: 10,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 500,
            }}>
              Bantuan
            </div>
          </div>

          {/* Konten Tengah Panel Kiri */}
          <div style={{
            position: 'absolute',
            left: 34,
            top: 195,
            width: 500,
          }}>
            {/* Badge Sistem Informasi */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 14px 5px 10px',
              borderRadius: 999,
              background: 'rgba(21, 101, 192, 0.15)',
              border: '1px solid rgba(255,255,255,0.12)',
              marginBottom: 16,
            }}>
              <CheckIcon />
              <span style={{ color: 'white', fontSize: 11, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500 }}>
                Sistem Informasi Ketenagakerjaan Kota Tasikmalaya
              </span>
            </div>

            {/* Judul Besar */}
            <h1 style={{
              color: 'white',
              fontSize: 36,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              lineHeight: '44px',
              margin: '0 0 16px 0',
            }}>
              Wujudkan Peluang Karir<br />Masa Depan.
            </h1>

            {/* Deskripsi */}
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 13.5,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 400,
              lineHeight: '22px',
              margin: '0 0 20px 0',
            }}>
              Pengurusan Kartu Tanda Pencari Kerja (AK-1 / Kartu Kuning) daring<br />
              dan akses informasi lowongan kerja resmi terverifikasi Pemkot<br />
              Tasikmalaya.
            </p>

            {/* Badge Fitur */}
            <div style={{ display: 'flex', gap: 8 }}>
              {['✓ AK-1 Cetak Mandiri', '✓ Job Fair Berkala', '✓ Pelatihan BLK Gratis'].map((label) => (
                <div key={label} style={{
                  padding: '5px 12px',
                  background: 'rgba(24,24,27,0.2)',
                  borderRadius: 8,
                  border: '1px solid rgba(63,63,70,0.15)',
                  color: 'white',
                  fontSize: 11.5,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 400,
                }}>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Gunung-gunung SVG */}
          <Mountains />

          {/* Overlay gradasi gelap bawah */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 220,
            background: 'linear-gradient(to top, rgba(5,10,20,0.95) 0%, rgba(5,10,20,0.7) 50%, transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* Footer Panel Kiri */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 34,
            width: 490,
            height: 70,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            {/* Avatar + Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(21,101,192,0.3), rgba(255,255,255,0.2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.15)',
              }}>
                <DisnakerIcon />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: 'white', fontSize: 14, fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
                    Disnaker Tasikmalaya
                  </span>
                  {/* Badge centang biru */}
                  <div style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M2 4.5L3.8 6.5L7 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 400 }}>
                  Pemerintah Kota Tasikmalaya
                </div>
              </div>
            </div>

            {/* Tombol Navigasi */}
            <div style={{ display: 'flex', gap: 8 }}>
              {[<ChevronLeft />, <ChevronRight />].map((icon, i) => (
                <div key={i} style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(24,24,27,0.3)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== PANEL KANAN ===== */}
        <div style={{
          flex: 1,
          height: '100%',
          background: 'linear-gradient(180deg, #1976D2 0%, #BBDEFB 100%)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}>

          {/* ===== TOP BAR KANAN (MANUAL POSITIONING) ===== */}
          
          {/* 1. WADAH KAPSUL LOGO DISNAKER */}
          <div style={{
            position: 'absolute',
            top: 26,             // 👈 Atur tinggi dari atas
            left: 30,            // 👈 Atur posisi dari kiri
            width: 263,          // 👈 Lebar kapsul
            height: 48,          // 👈 Tinggi kapsul
            paddingLeft: 16,     // 👈 Jarak dalam kiri
            paddingRight: 16,    // 👈 Jarak dalam kanan
            paddingTop: 8,       // 👈 Jarak dalam atas (untuk geser logo naik/turun)
            paddingBottom: 8,    // 👈 Jarak dalam bawah
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.25)',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Gambar Logo */}
            <img 
              src={logoDisnaker} 
              alt="Logo Disnaker" 
              style={{ 
                width: 215,       // 👈 Ukuran lebar gambar logo (215px sesuai Figma)
                height: 32,      // 👈 Ukuran tinggi gambar logo (32px sesuai Figma)
                objectFit: 'contain',
                marginTop: -10,    // 👈 Atur angka ini jika mau menggeser logo naik/turun (misal: -2 atau 2)
              }} 
            />
          </div>

          {/* 2. WADAH TOMBOL BENDERA & ID */}
          <div style={{
            position: 'absolute',
            top: 26,             // 👈 Atur tinggi dari atas (samakan dengan kapsul logo)
            right: 30,           // 👈 Atur posisi dari kanan
            width: 95,           // 👈 Lebar tombol ID
            height: 48,          // 👈 Tinggi tombol ID (samakan dengan kapsul logo)
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.25)',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            cursor: 'pointer',
          }}>
            {/* Bendera Indonesia bulat */}
            <div style={{ 
              width: 22, 
              height: 22, 
              borderRadius: '50%', 
              overflow: 'hidden', 
              flexShrink: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              border: '0.5px solid rgba(255,255,255,0.3)' 
            }}>
              <div style={{ width: '100%', height: '50%', background: '#CC0001' }} />
              <div style={{ width: '100%', height: '50%', background: '#FFFFFF' }} />
            </div>
            {/* Teks ID */}
            <span style={{ 
              color: 'white', 
              fontSize: 16, 
              fontFamily: 'Plus Jakarta Sans, sans-serif', 
              fontWeight: 600,
              lineHeight: 1,
            }}>
              ID
            </span>
          </div>

          {/* Form Login */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
            {/* Judul Form */}
            <div style={{ textAlign: 'center', marginBottom: 4 }}>
              <h2 style={{
                color: 'white',
                fontSize: 30,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 800,
                margin: '0 0 8px 0',
                lineHeight: '36px',
              }}>
                Halo Pencari Kerja
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 13.5,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 400,
                margin: 0,
              }}>
                Masuk ke akun SiapKerja / Pelayanan AK-1 Online
              </p>
            </div>

            {/* Input NIK / Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ color: 'white', fontSize: 12, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500 }}>
                Nomor Induk Kependudukan (NIK) / Email
              </label>
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: '12px 16px',
                border: '1px solid #CBD5E1',
              }}>
                <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  3278xxxxxxxxxxxx atau email@domain.com
                </span>
              </div>
            </div>

            {/* Input Kata Sandi */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ color: 'white', fontSize: 12, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500 }}>
                  Kata Sandi
                </label>
                <span style={{ color: '#90CAF9', fontSize: 12, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500, cursor: 'pointer' }}>
                  Lupa kata sandi?
                </span>
              </div>
              <div style={{
                background: 'white',
                borderRadius: 12,
                padding: '12px 16px',
                border: '1px solid #CBD5E1',
              }}>
                <span style={{ color: '#94A3B8', fontSize: 14, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  ••••••••
                </span>
              </div>
            </div>

            {/* Verifikasi Keamanan */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: 12,
              padding: '12px 14px',
              border: '1px solid #E2E8F0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <span style={{ color: '#334155', fontSize: 12, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500 }}>
                  Verifikasi Keamanan:{' '}
                </span>
                <span style={{ color: '#334155', fontSize: 12, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                  8 + 5 =
                </span>
              </div>
              <div style={{
                background: 'white',
                borderRadius: 8,
                border: '1px solid #CBD5E1',
                padding: '5px 20px',
                color: '#94A3B8',
                fontSize: 12,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}>
                Jawaban
              </div>
            </div>

            {/* Tombol Masuk */}
            <div style={{
              background: '#1565C0',
              borderRadius: 12,
              padding: '14px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0px 4px 15px rgba(21,101,192,0.4)',
            }}>
              <span style={{ color: 'white', fontSize: 14, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>
                Masuk ke Layanan
              </span>
            </div>

            {/* Link Daftar */}
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: '#64748B', fontSize: 12, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Belum punya akun?{' '}
              </span>
              <span style={{ color: '#1565C0', fontSize: 12, fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 500, cursor: 'pointer' }}>
                Daftar AK-1 Sekarang
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
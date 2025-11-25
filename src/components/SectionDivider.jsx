// File: src/components/SectionDivider.jsx

export default function SectionDivider({
  variant = "wave",
  position = "bottom",
  color = "fill-white",
}) {
  // Tentukan posisi absolut (atas atau bawah)
  const positionClass = position === "bottom" ? "bottom-0" : "top-0";

  return (
    <div
      className={`absolute ${positionClass} left-0 w-full overflow-hidden leading-[0] z-10`}
    >
      {variant === "step" ? (
        /* =========================================
           VARIAN 1: BENTUK KOTAK (STEP)
           Masalah: SVG ini aslinya punya bagian datar di BAWAH.
           Solusi: Jika ditaruh di 'top', kita harus putar 180 derajat agar bagian datarnya pindah ke atas.
        ========================================= */
        <svg
          // PERUBAHAN DISINI: Logika rotasi khusus untuk 'step'
          className={`relative block w-full h-[60px] sm:h-[100px] ${
            position === "top" ? "rotate-180" : ""
          }`}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className={color}
            fillOpacity="1"
            d="M0,160L0,0L180,0L180,224L360,224L360,64L540,64L540,128L720,128L720,288L900,288L900,128L1080,128L1080,256L1260,256L1260,32L1440,32L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"
          ></path>
        </svg>
      ) : (
        /* =========================================
           VARIAN 2: BENTUK LENGKUNG (WAVE)
           Masalah: SVG ini aslinya punya bagian datar di ATAS.
           Solusi: Jika ditaruh di 'bottom', kita harus putar 180 derajat agar bagian datarnya pindah ke bawah.
        ========================================= */
        <svg
          // PERUBAHAN DISINI: Logika rotasi khusus untuk 'wave' (logic lama)
          className={`relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px] ${
            position === "bottom" ? "rotate-180" : ""
          }`}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={color}
          ></path>
        </svg>
      )}
    </div>
  );
}

import React from "react";

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* KOLOM KIRI: GAMBAR */}
          <div className="relative">
            {/* Dekorasi Background Kotak (Pattern) */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            {/* Gambar Utama */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                // Link gambar baru yang lebih stabil (Tema: Hutan/Nature)
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop"
                alt="Teknologi dan Lingkungan EcoMate"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Card Kecil (Statistik/Badge) */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 text-red-600 rounded-full">
                    {/* Icon Daun SVG */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">
                      Misi Kami
                    </p>
                    <p className="text-gray-900 font-bold">
                      Teknologi untuk Bumi yang Lestari
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: KONTEN TEKS */}
          <div>
            <h2 className="text-red-600 font-bold tracking-wider uppercase mb-3 text-sm">
              Tentang EcoMate
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Menjembatani Inovasi Digital & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Pelestarian Alam
              </span>
            </h3>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              EcoMate adalah platform teknologi yang berdedikasi untuk
              memberikan solusi nyata bagi lingkungan. Kami percaya bahwa data
              dan teknologi dapat menjadi katalis perubahan positif untuk planet
              kita.
            </p>

            {/* List Poin */}
            <ul className="space-y-4 mb-8">
              {[
                "Pemantauan lingkungan berbasis data real-time.",
                "Solusi digital untuk komunitas dan organisasi hijau.",
                "Edukasi mitigasi bencana yang mudah diakses.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-8 py-3 font-semibold rounded-none hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Bergabung Sekarang
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 font-semibold rounded-none hover:bg-gray-50 transition">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

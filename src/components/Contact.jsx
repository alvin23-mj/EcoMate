import React, { useState } from "react";

export default function Contact() {
  // State untuk mengelola FAQ mana yang sedang terbuka
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Bagaimana cara melaporkan berita bencana?",
      answer:
        "Anda dapat mengisi formulir di samping dengan menyertakan detail lokasi dan jenis bencana. Tim kami akan memverifikasi laporan Anda secepatnya.",
    },
    {
      question: "Apakah layanan pelaporan ini gratis?",
      answer:
        "Ya, layanan ini 100% gratis untuk masyarakat umum demi percepatan informasi tanggap bencana.",
    },
    {
      question: "Berapa lama waktu respon tim setelah laporan dikirim?",
      answer:
        "Kami berusaha merespon setiap laporan dalam waktu 1x24 jam. Untuk keadaan darurat, silakan hubungi hotline SAR setempat.",
    },
    {
      question: "Apakah data pelapor aman?",
      answer:
        "Kami menjamin kerahasiaan data pribadi Anda. Data hanya digunakan untuk keperluan verifikasi informasi.",
    },
  ];

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-wider uppercase mb-2 text-sm">
            Hubungi Kami
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 leading-tight">
            Punya Pertanyaan atau <br /> Ingin Berkolaborasi?
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* KOLOM KIRI: FORM KONTAK */}
          <div className="bg-gray-50 p-8 border border-gray-100 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h4>
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Alamat Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Pesan Anda
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none"
                  placeholder="Tuliskan pesan atau laporan Anda di sini..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 font-bold tracking-wide hover:bg-red-700 transition duration-300 uppercase text-sm"
              >
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>

          {/* KOLOM KANAN: FAQ (Frequently Asked Questions) */}
          <div className="lg:pl-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Sering Ditanyakan (FAQ)
            </h4>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-0"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left group focus:outline-none"
                  >
                    <span
                      className={`text-lg font-medium transition-colors duration-300 ${
                        openFaqIndex === index
                          ? "text-red-600"
                          : "text-gray-800"
                      } group-hover:text-red-600`}
                    >
                      {item.question}
                    </span>
                    <span className="ml-4">
                      {/* Icon Plus/Minus sederhana menggunakan SVG */}
                      {openFaqIndex === index ? (
                        <svg
                          className="w-6 h-6 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Bagian Jawaban dengan Animasi CSS sederhana */}
                  <div
                    className={`overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-in-out ${
                      openFaqIndex === index
                        ? "max-h-40 opacity-100 mt-3"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tambahan Info Kontak Manual */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h5 className="font-bold text-gray-900 mb-4">
                Butuh bantuan langsung?
              </h5>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <span className="font-semibold text-gray-900">Email:</span>
                support@ecomate.id
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="font-semibold text-gray-900">Telepon:</span>
                +62 812-3456-7890 (Senin - Jumat, 09:00 - 17:00)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

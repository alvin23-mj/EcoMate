import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HotNews() {
  const newsData = [
{
      category: "Gempa Bumi",
      date: "28 Nov 2025",
      title: "Gempa Magnitudo 6.0 Guncang Wilayah Pesisir",
      description:
        "Guncangan kuat terasa hingga ke pusat kota. Tim SAR dikerahkan untuk evakuasi warga di area terdampak longsor.",
      image:
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=800&auto=format&fit=crop",
      url: "/berita/gempa-pesisir",
    },
    {
      category: "Banjir Bandang",
      date: "27 Nov 2025",
      title: "Curah Hujan Tinggi Akibatkan Banjir di 5 Kecamatan",
      description:
        "Sungai utama meluap, merendam ribuan rumah. Warga dihimbau untuk mengungsi ke posko darurat yang telah disediakan.",
      image:
        "https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=800&auto=format&fit=crop",
      url: "/berita/banjir-bandang",
    },
    {
      category: "Erupsi Gunung",
      date: "28 Nov 2025",
      title: "Status Awas: Peningkatan Aktivitas Vulkanik",
      description:
        "Hujan abu vulkanik mulai menyebar ke desa sekitar. Zona merah diperluas hingga radius 7 km dari kawah aktif.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
      url: "/berita/erupsi-gunung",
    },
    {
      category: "Kebakaran Hutan",
      date: "26 Nov 2025",
      title: "Titik Api Terpantau di Kawasan Hutan Lindung",
      description:
        "Angin kencang memperparah penyebaran api. Petugas pemadam kebakaran mengerahkan helikopter water bombing.",
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=800&auto=format&fit=crop",
      url: "/berita/kebakaran-hutan",
    },
  ];

  return (
    <section id="hot-news" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <h2 className="text-red-600 font-bold tracking-wider uppercase mb-2 text-sm">
              Breaking News
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Pantauan Bencana <br /> & Lingkungan Terkini
            </h3>
          </div>
          <a
            href="/berita"
            className="hidden md:inline-block border-b-2 border-red-600 text-red-600 font-semibold pb-1 hover:text-red-700 transition"
          >
            Lihat Semua Berita
          </a>
        </div>

        {/* SWIPER SLIDER SECTION */}
        {/* --swiper-theme-color mengubah warna dot pagination menjadi merah */}
        <div
          className="h-[450px] md:h-[500px]"
          style={{ "--swiper-theme-color": "#dc2626" }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24} // Jarak antar slide (gap-6)
            slidesPerView={1} // Default mobile 1 slide
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true} // Agar slide berputar terus (infinite)
            breakpoints={{
              640: {
                slidesPerView: 2, // Tablet 2 slide
              },
              1024: {
                slidesPerView: 3, // Desktop 3 slide
              },
            }}
            className="h-full !pb-12" // !pb-12 memberi ruang untuk dots pagination di bawah
          >
            {newsData.map((news, index) => (
              <SwiperSlide key={index} className="h-full">
                <a
                  href={news.url}
                  className="relative group block overflow-hidden cursor-pointer shadow-lg h-full rounded-none bg-gray-900"
                >
                  {/* Background Image */}
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300" />

                  {/* Content Positioned at Bottom */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    {/* Badge Category & Date */}
                    <div className="transform transition-transform duration-500 translate-y-0 group-hover:-translate-y-2">
                      <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold mb-3 shadow-md rounded-none">
                        {news.category}
                      </span>
                      <span className="text-gray-300 text-xs ml-3 border-l pl-3 border-gray-500">
                        {news.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug transform transition-transform duration-500 translate-y-0 group-hover:-translate-y-2 line-clamp-2">
                      {news.title}
                    </h3>

                    {/* Description (Slide up animation) */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {news.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile View Button */}
        <div className="mt-4 text-center md:hidden">
          <a
            href="/berita"
            className="block w-full bg-red-600 text-white px-6 py-3 font-medium hover:bg-red-700 transition rounded-none"
          >
            Lihat Semua Berita
          </a>
        </div>
      </div>
    </section>
  );
}

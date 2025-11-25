export default function Services() {
  const services = [
    {
      icon: "fa-globe",
      title: "Monitoring Lingkungan",
      description:
        "Pemantauan real-time kualitas udara, air, dan ekosistem secara komprehensif menggunakan jaringan sensor IoT canggih.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    },
    {
      icon: "fa-chart-bar",
      title: "Analisis Data",
      description: "Big data analytics dan AI untuk prediksi pola lingkungan.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      icon: "fa-mobile-alt",
      title: "Platform Digital",
      description:
        "Aplikasi mobile untuk partisipasi masyarakat dalam aksi nyata.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    },
    {
      icon: "fa-leaf",
      title: "Smart Solutions",
      description:
        "Sistem cerdas untuk efisiensi energi dan pengelolaan limbah.",
      image:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "Edukasi & Workshop",
      description: "Pelatihan dan kampanye hijau untuk kesadaran publik.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    },
  ];

  return (
    <section id="layanan" className="relative py-32 bg-primary-lighter/10">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg
          className="relative block w-full h-[60px] sm:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="fill-white"
            fillOpacity="1"
            d="M0,160L0,0L180,0L180,224L360,224L360,64L540,64L540,128L720,128L720,288L900,288L900,128L1080,128L1080,256L1260,256L1260,32L1440,32L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solusi digital komprehensif untuk monitoring dan pelestarian
            lingkungan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr h-[600px] md:h-[600px]">
          {services.map((service, index) => {
            const isLarge = index === 0;

            return (
              <div
                key={index}
                className={`
                  relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg
                  ${isLarge ? "md:row-span-2 md:col-span-1" : "md:col-span-1"}
                `}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {service.description}
                  </p>

                  <button className="border border-white text-white hover:bg-white hover:text-primary px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-300">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white p-8 shadow-lg rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Siap Bergabung dengan Revolusi Lingkungan Digital?
            </h3>
            <p className="text-gray-600 mb-6">
              Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded hover:bg-primary-dark transition">
                Konsultasi Gratis
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-white transition">
                Lihat Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

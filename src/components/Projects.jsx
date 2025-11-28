import React, { useState } from "react";

// Data diperbarui
const projectsData = [
  {
    id: 1,
    title: "Penanaman 1000 Pohon Bakau",
    category: "Konservasi",
    description:
      "Kegiatan penanaman bibit mangrove di pesisir pantai utara untuk mencegah abrasi air laut dan memperbaiki ekosistem pesisir.",
    status: "Sedang Berjalan",
    current: 65,
    target: 100,
    image:
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Bersih Pantai Kenjeran",
    category: "Aksi Bersih",
    description:
      "Gerakan pungut sampah plastik bersama relawan lokal dan mahasiswa untuk menciptakan pantai yang bersih.",
    status: "Selesai",
    current: 200,
    target: 200,
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Instalasi Biopori Desa",
    category: "Infrastruktur Hijau",
    description:
      "Pemasangan lubang resapan biopori di desa rawan banjir untuk meningkatkan daya serap tanah saat musim hujan.",
    status: "Sedang Berjalan",
    current: 20,
    target: 50,
    // CHANGE: Link gambar diperbarui (Tema Tanah/Ground)
    image:
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Workshop Daur Ulang",
    category: "Edukasi",
    description:
      "Pelatihan pemanfaatan limbah rumah tangga menjadi barang bernilai ekonomis bagi ibu-ibu PKK.",
    status: "Selesai",
    current: 30,
    target: 30,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const openModal = (projectName = "") => {
    setSelectedProject(projectName);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject("");
  };
  const handleDonateSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih! Donasi untuk ${selectedProject} tercatat.`);
    closeModal();
  };

  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <section
      id="projects"
      className="relative py-20 bg-gray-200 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-300/30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header & Nav */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-mulish tracking-wide">
              Ikutlah Dengan Kami!
            </h2>
            <p className="text-gray-600 font-medium">
              Aksi nyata bersama relawan untuk lingkungan.
            </p>
          </div>

          {/* Navigation & Counter */}
          <div className="flex items-center gap-6">
            <div className="text-xl font-bold text-gray-900 font-mono">
              <span className="text-primary">
                {formatNumber(currentIndex + 1)}
              </span>
              <span className="mx-2 text-gray-400">/</span>
              <span>{formatNumber(projectsData.length)}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white border border-gray-400 text-gray-900 rounded-none hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gray-900 text-white border border-gray-900 rounded-none hover:bg-primary hover:border-primary transition-all flex items-center justify-center"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* --- STACKED SLIDER AREA --- */}
        <div className="relative h-[650px] md:h-[600px] w-full flex items-center justify-center">
          {projectsData.map((project, index) => {
            let positionClass =
              "opacity-0 scale-90 z-0 pointer-events-none translate-x-[100%]";

            if (index === currentIndex) {
              positionClass =
                "opacity-100 scale-100 z-30 translate-x-0 shadow-2xl";
            } else if (index === (currentIndex + 1) % projectsData.length) {
              positionClass =
                "opacity-40 scale-95 z-20 translate-x-12 translate-y-4 shadow-lg blur-[1px]";
            } else if (index === (currentIndex + 2) % projectsData.length) {
              positionClass =
                "opacity-20 scale-90 z-10 translate-x-24 translate-y-8 shadow-md blur-[2px]";
            }

            const percentage = Math.min(
              100,
              Math.round((project.current / project.target) * 100)
            );

            return (
              <div
                key={project.id}
                className={`absolute top-0 w-full md:max-w-5xl h-full bg-white transition-all duration-700 ease-in-out flex flex-col md:flex-row rounded-none overflow-hidden border border-gray-100 ${positionClass}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-none opacity-90"
                  />
                  <div className="absolute top-0 left-0 bg-primary px-6 py-2 text-white font-bold text-sm tracking-widest uppercase rounded-none">
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white rounded-none">
                  <span className="text-primary font-bold tracking-wider text-sm mb-2 uppercase border-l-4 border-primary pl-3">
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 font-mulish">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  {project.status === "Sedang Berjalan" ? (
                    <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-none">
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                          Partisipan Terkumpul
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {project.current}{" "}
                          <span className="text-gray-400 text-sm font-normal">
                            / {project.target} Orang
                          </span>
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 h-3 rounded-none overflow-hidden">
                        <div
                          className="bg-primary h-full transition-all duration-1000 relative"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-xs text-gray-400 font-semibold">
                          {percentage}% Terpenuhi
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-8 p-4 bg-green-50 border border-green-100 text-green-800 rounded-none flex items-center gap-3">
                      <i className="fa-solid fa-check-circle text-xl"></i>
                      <div>
                        <p className="font-bold text-sm uppercase">
                          Projek Selesai
                        </p>
                        <p className="text-xs">
                          Terima kasih kepada {project.current} relawan!
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 mt-auto">
                    {project.status === "Sedang Berjalan" && (
                      <button
                        onClick={() => openModal(project.title)}
                        // CHANGE: Menggunakan primary-light agar tetap senada tapi beda sedikit
                        className="flex-1 bg-primary-light text-white py-4 font-bold hover:bg-primary transition-colors rounded-none uppercase tracking-wider text-sm shadow-md"
                      >
                        Ikut Partisipasi
                      </button>
                    )}
                    <button className="px-6 py-4 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors rounded-none uppercase tracking-wider text-sm flex-1">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bawah */}
        <div className="mt-12 text-center border-t border-gray-300 pt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Dukung Operasional Kami
          </h3>

          {/* CHANGE: Button lebih kecil (py-3) dan menggunakan warna Primary */}
          <button
            onClick={() => openModal("Donasi Umum")}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-bold rounded-none hover:bg-primary-dark transition-all uppercase tracking-widest text-sm shadow-lg hover:shadow-xl"
          >
            <i className="fa-solid fa-heart text-red-400"></i>
            Donasi Sekarang
          </button>
        </div>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white w-full max-w-md p-8 shadow-2xl rounded-none border-t-4 border-primary transform transition-all">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              <i className="fa-solid fa-times text-xl"></i>
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-mulish">
              Formulir Partisipasi
            </h3>
            <p className="text-gray-500 text-sm mb-6 border-b pb-4">
              Anda mendaftar untuk: <br />
              <span className="font-bold text-primary">{selectedProject}</span>
            </p>
            <form onSubmit={handleDonateSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:border-primary focus:ring-0 outline-none transition-all bg-gray-50"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                  Email / WhatsApp
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:border-primary focus:ring-0 outline-none transition-all bg-gray-50"
                  placeholder="0812..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-none hover:bg-primary-dark transition-all uppercase tracking-widest text-sm"
              >
                Kirim Pendaftaran
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

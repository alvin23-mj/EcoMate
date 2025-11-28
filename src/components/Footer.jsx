import React from "react";

export default function Footer() {
  const socialLinks = [
    { icon: "fa-instagram", url: "#", label: "Instagram" },
    { icon: "fa-twitter", url: "#", label: "Twitter" },
    { icon: "fa-facebook-f", url: "#", label: "Facebook" },
    { icon: "fa-linkedin-in", url: "#", label: "LinkedIn" },
    { icon: "fa-youtube", url: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* KOLOM 1: BRANDING & SOSMED */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-leaf text-2xl text-blue-500"></i>
              <span className="text-xl font-bold">EcoMate</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Teknologi untuk lingkungan yang lebih baik.
            </p>

            {/* Social Media: Kotak (Rounded-none) & Hover Biru */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-none bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: EKSPLORASI (Sesuai Komponen Baru) */}
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wider text-sm">
              Eksplorasi
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#dashboard" className="hover:text-blue-500 transition">
                  Dashboard System
                </a>
              </li>
              <li>
                <a href="#hot-news" className="hover:text-blue-500 transition">
                  Hot News / Berita
                </a>
              </li>
              <li>
                <a href="#projek" className="hover:text-blue-500 transition">
                  Projek & Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: PERUSAHAAN (Sesuai Komponen Dasar) */}
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wider text-sm">
              Perusahaan
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#tentang" className="hover:text-blue-500 transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-blue-500 transition">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-blue-500 transition">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: INFO KONTAK */}
          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-wider text-sm">
              Kontak
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-blue-500"></i>
                <span>info@ecomate.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-blue-500"></i>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-500"></i>
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 EcoMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

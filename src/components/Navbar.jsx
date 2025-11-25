import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <i
              className={`fas fa-leaf text-3xl transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            ></i>
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              EcoMate
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#beranda"
              className={`transition font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Beranda
            </a>
            <a
              href="#dashboard"
              className={`transition font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Dashboard
            </a>
            <a
              href="#layanan"
              className={`transition font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Layanan
            </a>
            <a
              href="#tentang"
              className={`transition font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Tentang
            </a>
            <a
              href="#kontak"
              className={`transition font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Kontak
            </a>
          </div>

          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i
              className={`fas ${
                mobileMenuOpen ? "fa-times" : "fa-bars"
              } text-xl`}
            ></i>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t transition-all ${
            isScrolled
              ? "bg-white border-primary/10"
              : "bg-black/20 backdrop-blur-md border-white/10"
          }`}
        >
          <div className="px-4 py-3 space-y-3">
            <a
              href="#beranda"
              className={`block font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#dashboard"
              className={`block font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </a>
            <a
              href="#layanan"
              className={`block font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan
            </a>
            <a
              href="#tentang"
              className={`block font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang
            </a>
            <a
              href="#kontak"
              className={`block font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-white/80"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

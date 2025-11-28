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

  // Helper class untuk link menu agar tidak berulang
  const navLinkClass = isScrolled
    ? "text-gray-700 hover:text-primary"
    : "text-white/90 hover:text-white";

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
          {/* LOGO - Klik menuju #beranda */}
          <a
            href="#beranda"
            className="flex items-center space-x-3 group cursor-pointer"
          >
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
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#dashboard"
              className={`transition font-medium ${navLinkClass}`}
            >
              Dashboard
            </a>

            {/* HotNews dengan Badge Notifikasi */}
            <a
              href="#hot-news"
              className={`transition font-medium relative ${navLinkClass}`}
            >
              Hot News
              {/* Badge Notifikasi */}
              <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm animate-pulse">
                4
              </span>
            </a>

            <a
              href="#projects"
              className={`transition font-medium ${navLinkClass}`}
            >
              Projek
            </a>

            <a
              href="#layanan"
              className={`transition font-medium ${navLinkClass}`}
            >
              Layanan
            </a>
            <a
              href="#tentang"
              className={`transition font-medium ${navLinkClass}`}
            >
              Tentang
            </a>
            <a
              href="#kontak"
              className={`transition font-medium ${navLinkClass}`}
            >
              Kontak
            </a>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
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

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t transition-all ${
            isScrolled
              ? "bg-white border-primary/10"
              : "bg-black/80 backdrop-blur-md border-white/10"
          }`}
        >
          <div className="px-4 py-3 space-y-3">
            <a
              href="#dashboard"
              className={`block font-medium ${navLinkClass}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </a>

            {/* HotNews Mobile dengan Badge Inline */}
            <a
              href="#hot-news"
              className={`flex items-center justify-between font-medium ${navLinkClass}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Hot News
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                4 Update
              </span>
            </a>

            <a
              href="#projects"
              className={`block font-medium ${navLinkClass}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projek
            </a>

            <a
              href="#layanan"
              className={`block font-medium ${navLinkClass}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan
            </a>
            <a
              href="#tentang"
              className={`block font-medium ${navLinkClass}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang
            </a>
            <a
              href="#kontak"
              className={`block font-medium ${navLinkClass}`}
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

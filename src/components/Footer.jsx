export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-leaf text-2xl text-primary"></i>
              <span className="text-xl font-bold">EcoMate</span>
            </div>
            <p className="text-gray-400">
              Teknologi untuk lingkungan yang lebih baik
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#layanan" className="hover:text-primary transition">
                  Monitoring
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-primary transition">
                  Analisis
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-primary transition">
                  Platform
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#tentang" className="hover:text-primary transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <i className="fas fa-envelope mr-2"></i>info@ecomate.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>+62 812 3456 7890
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EcoMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

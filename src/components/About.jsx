export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tentang EcoMate
            </h2>
            <p className="text-gray-600 mb-4">
              EcoMate adalah platform teknologi yang berdedikasi untuk
              menjembatani kesenjangan antara inovasi digital dan pelestarian
              lingkungan.
            </p>
            <p className="text-gray-600 mb-4">
              Kami percaya bahwa teknologi dapat menjadi katalis perubahan
              positif untuk planet kita. Melalui solusi digital yang inovatif,
              kami membantu organisasi dan komunitas membuat keputusan yang
              lebih baik untuk lingkungan.
            </p>
            <button className="bg-primary text-white px-6 py-3 hover:bg-primary-dark transition mt-4">
              Bergabung dengan Kami
            </button>
          </div>
          <div className="bg-gradient-to-br from-primary-lighter/20 to-primary-lighter/10 p-12 flex items-center justify-center">
            <i
              className="fas fa-globe text-primary opacity-20"
              style={{ fontSize: "16rem" }}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
}

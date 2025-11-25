export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-primary-lighter/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600">
            Punya pertanyaan atau ingin berkolaborasi? Kami siap membantu Anda
          </p>
        </div>

        <form className="bg-white shadow-lg p-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Nama</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary"
              placeholder="Nama lengkap Anda"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary"
              placeholder="email@contoh.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Pesan
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-primary"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 hover:bg-primary-dark transition font-medium"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}

import bgImage from "../assets/banner-bg.jpg";

export default function Stats() {
  const stats = [
    { number: "1000+", label: "Sensor Terpasang" },
    { number: "50+", label: "Kota Terhubung" },
    { number: "24/7", label: "Monitoring Real-time" },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

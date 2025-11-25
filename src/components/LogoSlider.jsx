export default function LogoSlider() {
  const logos = Array(10).fill("EcoMate");

  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <div className="flex w-full group">
        {/* Bagian 1 */}
        <div className="flex animate-marquee min-w-full justify-around items-center px-8">
          {logos.map((logo, index) => (
            <div
              key={`a-${index}`}
              className="flex items-center space-x-2 mx-8 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {/* Icon tanpa background */}
              <i
                className="fas fa-leaf text-2xl"
                style={{ color: "#004d29" }}
              ></i>

              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: "#004d29" }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>

        {/* Bagian 2 (Duplikat untuk looping) */}
        <div
          className="flex animate-marquee min-w-full justify-around items-center px-8"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <div
              key={`b-${index}`}
              className="flex items-center space-x-2 mx-8 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {/* Icon tanpa background */}
              <i
                className="fas fa-leaf text-2xl"
                style={{ color: "#004d29" }}
              ></i>

              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: "#004d29" }}
              >
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}

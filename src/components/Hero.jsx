import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// --- DATA KOTA ---
const cities = [
  {
    name: "Jakarta",
    lat: -6.2088,
    lon: 106.8456,
    aqi: 142,
    sensors: 245,
    country: "Indonesia",
  },
  {
    name: "Bandung",
    lat: -6.9175,
    lon: 107.6191,
    aqi: 95,
    sensors: 132,
    country: "Indonesia",
  },
  {
    name: "Surabaya",
    lat: -7.2575,
    lon: 112.7521,
    aqi: 89,
    sensors: 156,
    country: "Indonesia",
  },
  {
    name: "Medan",
    lat: 3.5952,
    lon: 98.6722,
    aqi: 78,
    sensors: 189,
    country: "Indonesia",
  },
  {
    name: "Makassar",
    lat: -5.1477,
    lon: 119.4327,
    aqi: 65,
    sensors: 134,
    country: "Indonesia",
  },
  {
    name: "Denpasar",
    lat: -8.6705,
    lon: 115.2126,
    aqi: 42,
    sensors: 167,
    country: "Indonesia",
  },
  {
    name: "Balikpapan",
    lat: -1.2379,
    lon: 116.8529,
    aqi: 55,
    sensors: 98,
    country: "Indonesia",
  },
  {
    name: "Manado",
    lat: 1.4748,
    lon: 124.8421,
    aqi: 38,
    sensors: 87,
    country: "Indonesia",
  },
  {
    name: "Palembang",
    lat: -2.9761,
    lon: 104.7754,
    aqi: 92,
    sensors: 145,
    country: "Indonesia",
  },
  {
    name: "Jayapura",
    lat: -2.5337,
    lon: 140.7181,
    aqi: 25,
    sensors: 45,
    country: "Indonesia",
  },
  {
    name: "IKN Nusantara",
    lat: -0.973,
    lon: 116.708,
    aqi: 45,
    sensors: 120,
    country: "Indonesia",
  },
];

export default function Hero() {
  const [selectedCity, setSelectedCity] = useState(null);

  // Custom Icon Marker
  const createCustomIcon = (aqi) => {
    const isHigh = aqi > 100;
    const colorClass = isHigh ? "bg-red-500" : "bg-blue-600";

    return L.divIcon({
      className: "custom-marker",
      html: `
        <div class="relative w-6 h-6 flex items-center justify-center">
          <div class="absolute w-full h-full rounded-full animate-ping opacity-75 ${colorClass}"></div>
          <div class="relative w-3.5 h-3.5 rounded-full border-2 border-white shadow-lg ${colorClass}"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  };

  return (
    <section
      id="beranda"
      className="relative h-screen w-full bg-slate-900 flex flex-col overflow-hidden"
    >
      {/* --- KONTEN KIRI (TETAP SESUAI PERMINTAAN) --- */}
      <div className="absolute top-0 left-0 z-[1000] pointer-events-none w-full h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full lg:w-1/2 space-y-8 pointer-events-auto pt-20">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-600/90 backdrop-blur-sm px-4 py-2 border-l-4 border-blue-400 animate-fade-in">
              <i className="fas fa-leaf text-green-400"></i>
              <span className="text-sm font-semibold text-white">
                Environmental Intelligence Platform
              </span>
            </div>

            {/* Heading */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                Eco<span className="text-blue-400">Mate</span>
                <span className="text-green-400">.</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400"></div>
            </div>

            {/* Description */}
            <p
              className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Menggabungkan{" "}
              <span className="text-blue-300 font-semibold">
                inovasi digital
              </span>{" "}
              dengan{" "}
              <span className="text-green-300 font-semibold">
                pelestarian lingkungan
              </span>{" "}
              untuk masa depan yang berkelanjutan
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <button className="bg-blue-600 text-white px-8 py-4 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 font-semibold border border-blue-400/30 rounded-none">
                <span>Mulai Sekarang</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="border-2 border-white/80 text-white px-8 py-4 hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold backdrop-blur-sm bg-white/10 rounded-none flex items-center">
                <i className="fas fa-play-circle mr-2"></i>
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Stats Grid */}
            <div
              className="grid grid-cols-3 gap-6 pt-8 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="border-l-4 border-blue-400 pl-4 bg-black/40 backdrop-blur-md p-4">
                <h3 className="text-4xl font-bold text-blue-400 drop-shadow-lg">
                  50+
                </h3>
                <p className="text-gray-200 text-sm mt-1">Kota Terhubung</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4 bg-black/40 backdrop-blur-md p-4">
                <h3 className="text-4xl font-bold text-green-400 drop-shadow-lg">
                  2.5k+
                </h3>
                <p className="text-gray-200 text-sm mt-1">Sensor Aktif</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4 bg-black/40 backdrop-blur-md p-4">
                <h3 className="text-4xl font-bold text-purple-400 drop-shadow-lg">
                  24/7
                </h3>
                <p className="text-gray-200 text-sm mt-1">Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- LIVE MONITORING (FIXED KANAN ATAS) --- */}
      {/* Posisi: top-20 agar tidak tertutup navbar (asumsi navbar 60-80px), right-6 untuk margin */}
      <div className="absolute top-24 right-6 z-[1001] pointer-events-auto flex flex-col gap-3 items-end">
        <div className="flex items-center space-x-2 bg-black/80 backdrop-blur-md px-4 py-2 border border-green-500/30 shadow-lg">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold text-green-400 tracking-wide uppercase">
            Live Monitoring
          </span>
        </div>
        <div className="bg-black/80 backdrop-blur-md p-3 border border-white/10 shadow-lg text-white text-xs space-y-2 w-32">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 border border-white rounded-sm"></span>
            <span>Good AQI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 border border-white rounded-sm"></span>
            <span>Poor AQI</span>
          </div>
        </div>
      </div>

      {/* --- MODAL DETAIL (PINDAH KE KANAN ATAS, DI BAWAH LIVE MONITORING) --- */}
      {/* Posisi: top-64 (24 + tinggi monitoring + gap), right-6 sejajar */}
      {selectedCity && (
        <div className="absolute top-64 right-6 z-[1001] pointer-events-auto animate-slide-in-right">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-none border-l-4 border-blue-500 shadow-2xl w-80 overflow-hidden text-white p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">{selectedCity.name}</h3>
                <p className="text-xs text-slate-400 mt-1">INDONESIA</p>
              </div>
              <button
                onClick={() => setSelectedCity(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center justify-between mb-6 bg-white/5 p-3">
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                  AQI Index
                </div>
                <div
                  className={`text-4xl font-bold ${
                    selectedCity.aqi > 100 ? "text-red-400" : "text-blue-400"
                  }`}
                >
                  {selectedCity.aqi}
                </div>
              </div>
              <div
                className={`px-2 py-1 text-[10px] font-bold uppercase border ${
                  selectedCity.aqi > 100
                    ? "border-red-500 text-red-500"
                    : "border-blue-500 text-blue-500"
                }`}
              >
                {selectedCity.aqi > 100 ? "Poor" : "Good"}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-slate-500 text-[10px] uppercase font-bold">
                  Sensors
                </div>
                <div className="text-white font-bold text-lg">
                  {selectedCity.sensors}
                </div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px] uppercase font-bold">
                  Status
                </div>
                <div className="text-green-400 font-bold text-lg">Active</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MAP CONTAINER --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <MapContainer
          center={[-2.0, 112.0]}
          zoom={5}
          scrollWheelZoom={true}
          className="w-full h-full bg-slate-950"
          zoomControl={false}
        >
          <TileLayer
            attribution="&copy; CartoDB"
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {cities.map((city, index) => (
            <Marker
              key={index}
              position={[city.lat, city.lon]}
              icon={createCustomIcon(city.aqi)}
              eventHandlers={{
                click: () => setSelectedCity(city),
              }}
            />
          ))}
        </MapContainer>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out forwards;
        }
        .leaflet-div-icon {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </section>
  );
}

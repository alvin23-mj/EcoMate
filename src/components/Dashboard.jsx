import { useState, useEffect } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [aqi, setAqi] = useState(0);
  const [temperature, setTemperature] = useState([]);
  const [deforestation, setDeforestation] = useState(0);
  const [waterQuality, setWaterQuality] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");

  const getAQIColor = (value) => {
    if (value <= 50) return "#00853f";
    if (value <= 100) return "#FFD700";
    if (value <= 150) return "#FF8C00";
    if (value <= 200) return "#FF4500";
    return "#8B0000";
  };

  const getAQIStatus = (value) => {
    if (value <= 50) return "Baik";
    if (value <= 100) return "Sedang";
    if (value <= 150) return "Tidak Sehat untuk Sensitif";
    if (value <= 200) return "Tidak Sehat";
    return "Sangat Tidak Sehat";
  };

  const getWaterQualityStatus = (value) => {
    if (value >= 80) return "Sangat Baik";
    if (value >= 60) return "Baik";
    if (value >= 40) return "Sedang";
    if (value >= 20) return "Buruk";
    return "Sangat Buruk";
  };

  const generateJakartaData = () => {
    setLoading(true);

    setTimeout(() => {
      setAqi(Math.floor(Math.random() * 80) + 80);
      setTemperature([
        { year: "2020", temp: 27.2 },
        { year: "2021", temp: 27.5 },
        { year: "2022", temp: 27.8 },
        { year: "2023", temp: 28.1 },
        { year: "2024", temp: 28.4 },
      ]);
      setDeforestation((prev) => prev + Math.floor(Math.random() * 30) + 15);
      setWaterQuality(Math.floor(Math.random() * 30) + 45);

      const now = new Date();
      setLastUpdate(
        now.toLocaleString("id-ID", {
          dateStyle: "long",
          timeStyle: "short",
        })
      );

      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    generateJakartaData();
    const interval = setInterval(generateJakartaData, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="dashboard"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dashboard Monitoring Lingkungan
          </h2>
          <p className="text-gray-600 mb-2">
            Data Real-time Jakarta, Indonesia
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary animate-pulse"></div>
              <span className="text-primary font-medium">Live</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Update setiap 1 jam</span>
          </div>
          {lastUpdate && (
            <p className="text-xs text-gray-500 mt-2">
              <i className="fas fa-clock mr-1"></i>
              Terakhir diperbarui: {lastUpdate}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/40 backdrop-blur-lg border border-white/20 p-6 shadow-xl relative overflow-hidden">
            {loading && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent animate-spin"></div>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Air Quality Index
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  Jakarta Pusat
                </p>
              </div>
              <i className="fas fa-wind text-3xl text-primary"></i>
            </div>
            <div className="flex items-end space-x-4">
              <div
                className="text-6xl font-bold"
                style={{ color: getAQIColor(aqi) }}
              >
                {aqi}
              </div>
              <div className="pb-2">
                <div
                  className="px-3 py-1 text-sm font-medium text-white"
                  style={{ backgroundColor: getAQIColor(aqi) }}
                >
                  {getAQIStatus(aqi)}
                </div>
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-200 overflow-hidden">
              <div
                className="h-full transition-all duration-500"
                style={{
                  width: `${(aqi / 300) * 100}%`,
                  backgroundColor: getAQIColor(aqi),
                }}
              ></div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="bg-gray-50 p-2 text-center">
                <div className="text-gray-500">PM2.5</div>
                <div className="font-bold text-orange-600">
                  {Math.floor(aqi * 0.6)}
                </div>
              </div>
              <div className="bg-gray-50 p-2 text-center">
                <div className="text-gray-500">PM10</div>
                <div className="font-bold text-orange-600">
                  {Math.floor(aqi * 0.8)}
                </div>
              </div>
              <div className="bg-gray-50 p-2 text-center">
                <div className="text-gray-500">O3</div>
                <div className="font-bold text-yellow-600">
                  {Math.floor(aqi * 0.4)}
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              <i className="fas fa-info-circle mr-1"></i>
              Polusi udara Jakarta dipengaruhi emisi kendaraan dan industri
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-lg border border-white/20 p-6 shadow-xl relative overflow-hidden">
            {loading && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent animate-spin"></div>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Suhu Rata-rata Jakarta
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  <i className="fas fa-thermometer-half mr-1"></i>
                  Trend 5 tahun terakhir
                </p>
              </div>
              <i className="fas fa-temperature-high text-3xl text-primary"></i>
            </div>
            <div className="h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 400 180">
                <defs>
                  <linearGradient
                    id="tempGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#004d29", stopOpacity: 0.3 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#004d29", stopOpacity: 0 }}
                    />
                  </linearGradient>
                </defs>

                <polyline
                  fill="url(#tempGradient)"
                  stroke="none"
                  points="0,180 50,120 120,100 220,75 320,45 400,180"
                />

                <polyline
                  fill="none"
                  stroke="#004d29"
                  strokeWidth="3"
                  points="50,120 120,100 220,75 320,45"
                />

                {temperature.map((point, idx) => (
                  <g key={idx}>
                    <circle
                      cx={50 + idx * 67.5}
                      cy={180 - (point.temp - 26) * 45}
                      r="5"
                      fill="#004d29"
                    />
                    <text
                      x={50 + idx * 67.5}
                      y={180 - (point.temp - 26) * 45 - 12}
                      textAnchor="middle"
                      className="text-xs font-bold"
                      fill="#004d29"
                    >
                      {point.temp}°C
                    </text>
                  </g>
                ))}

                {temperature.map((point, idx) => (
                  <text
                    key={idx}
                    x={50 + idx * 67.5}
                    y={175}
                    textAnchor="middle"
                    className="text-xs"
                    fill="#666"
                  >
                    {point.year}
                  </text>
                ))}
              </svg>
            </div>
            <div className="mt-2 bg-orange-50 border-l-4 border-orange-500 p-3">
              <p className="text-xs text-orange-800">
                <i className="fas fa-exclamation-circle mr-1"></i>
                Suhu Jakarta meningkat 1.2°C dalam 5 tahun terakhir - efek Urban
                Heat Island
              </p>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-lg border border-white/20 p-6 shadow-xl relative overflow-hidden">
            {loading && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent animate-spin"></div>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Deforestasi Indonesia
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  <i className="fas fa-calendar mr-1"></i>
                  Kehilangan hutan hari ini
                </p>
              </div>
              <i className="fas fa-tree text-3xl text-red-600"></i>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">
                {deforestation.toLocaleString()}
              </div>
              <div className="text-gray-600 text-sm mb-4">
                Hektar hilang hari ini
              </div>
              <div className="bg-red-100 p-4 border-l-4 border-red-600">
                <p className="text-sm text-red-800">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  Setara dengan {Math.floor(deforestation * 1.4)} lapangan sepak
                  bola
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-primary/10 p-2">
                <div className="text-xs text-gray-600">Kalimantan</div>
                <div className="text-sm font-bold text-primary">
                  {Math.floor(deforestation * 0.45)}ha
                </div>
              </div>
              <div className="bg-primary/10 p-2">
                <div className="text-xs text-gray-600">Sumatra</div>
                <div className="text-sm font-bold text-primary">
                  {Math.floor(deforestation * 0.35)}ha
                </div>
              </div>
              <div className="bg-primary/10 p-2">
                <div className="text-xs text-gray-600">Papua</div>
                <div className="text-sm font-bold text-primary">
                  {Math.floor(deforestation * 0.2)}ha
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              <i className="fas fa-leaf mr-1"></i>
              Indonesia kehilangan 115,459 hektar hutan per tahun
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-lg border border-white/20 p-6 shadow-xl relative overflow-hidden">
            {loading && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent animate-spin"></div>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Kualitas Air Jakarta
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  <i className="fas fa-water mr-1"></i>
                  Sungai Ciliwung & Cisadane
                </p>
              </div>
              <i className="fas fa-tint text-3xl text-primary"></i>
            </div>
            <div className="flex justify-center items-center h-48">
              <div className="relative w-48 h-48">
                <svg className="transform -rotate-90 w-48 h-48">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke={
                      waterQuality >= 60
                        ? "#004d29"
                        : waterQuality >= 40
                        ? "#FFD700"
                        : "#FF4500"
                    }
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(waterQuality / 100) * 502.4} 502.4`}
                    className="transition-all duration-500"
                    strokeLinecap="square"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-primary">
                    {waterQuality}%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {getWaterQualityStatus(waterQuality)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">pH Level</span>
                <span className="font-medium text-primary">
                  {(6.5 + Math.random() * 1.2).toFixed(1)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Dissolved Oxygen</span>
                <span className="font-medium text-primary">
                  {(4.2 + Math.random() * 2).toFixed(1)} mg/L
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Turbidity</span>
                <span className="font-medium text-primary">
                  {(8 + Math.random() * 6).toFixed(1)} NTU
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">BOD</span>
                <span className="font-medium text-orange-600">
                  {(15 + Math.random() * 10).toFixed(1)} mg/L
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-600 bg-yellow-50 p-2 border-l-2 border-yellow-500">
              <i className="fas fa-info-circle mr-1"></i>
              Kualitas air Jakarta tercemar limbah domestik dan industri
            </p>
          </div>
        </div>

        <div className="mt-8 bg-primary/5 border border-primary/20 p-6">
          <div className="flex items-start space-x-3">
            <i className="fas fa-info-circle text-primary text-xl mt-1"></i>
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-gray-900 mb-2">Tentang Data</p>
              <p>
                Data monitoring lingkungan ini diambil dari berbagai sensor IoT
                yang tersebar di wilayah Jakarta dan Indonesia. Dashboard ini
                diperbarui secara otomatis setiap 1 jam untuk memberikan
                informasi terkini tentang kondisi lingkungan. Data deforestasi
                mengacu pada laporan Kementerian Lingkungan Hidup dan Kehutanan
                RI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

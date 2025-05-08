
const features = [
  {
    title: "Kurikulum Terstandardisasi",
    description: "Program pembelajaran sesuai dengan standar internasional YCT dan HSK.",
    icon: "🏆"
  },
  {
    title: "Guru Berpengalaman",
    description: "Tim pengajar yang profesional dan berpengalaman di bidangnya.",
    icon: "👨‍🏫"
  },
  {
    title: "Fleksibel & Terstruktur",
    description: "Jadwal kursus yang fleksibel dengan materi yang terstruktur.",
    icon: "📅"
  },
  {
    title: "Kelas VIP Khusus",
    description: "Program one-on-one untuk pembelajaran yang lebih intensif.",
    icon: "✨"
  },
  {
    title: "Sertifikasi Resmi",
    description: "Persiapan dan sertifikasi resmi untuk ujian YCT dan HSK.",
    icon: "📜"
  },
  {
    title: "Program Spesial",
    description: "Program spesial untuk pelajar Buleleng dan Civitas Undiksha.",
    icon: "🎓"
  }
];

const LandingFeatures = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Keunggulan Balingkang
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Kami menawarkan pengalaman belajar bahasa Mandarin yang komprehensif dengan berbagai keunggulan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;

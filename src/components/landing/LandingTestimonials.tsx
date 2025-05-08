
const testimonials = [
  {
    name: "Putu Adi",
    role: "Mahasiswa Undiksha",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Kursus HSK di Balingkang sangat membantu saya lulus ujian HSK 3 dengan nilai tinggi. Pengajar sangat berpengalaman dan sabar dalam mengajar."
  },
  {
    name: "Lia Wang",
    role: "Orang Tua Murid",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Anak saya sangat menikmati kelas YCT di Balingkang. Metode pengajaran yang menyenangkan membuat dia selalu semangat untuk belajar bahasa Mandarin."
  },
  {
    name: "Wayan Sukma",
    role: "Profesional",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    text: "Kelas VIP Balingkang membantu saya menguasai bahasa Mandarin untuk keperluan bisnis. Jadwal fleksibel dan materi yang disesuaikan kebutuhan sangat membantu."
  }
];

const LandingTestimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Apa Kata Mereka
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Kesuksesan siswa kami adalah bukti kualitas program yang kami tawarkan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;

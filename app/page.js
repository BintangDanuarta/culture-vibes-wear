'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from '@/components/Navbar'


export default function Home() {
  const features = [
    {
      image: '/images/chatbot-mockup.png',
      title: 'Layanan Konsultasi Langsung',
      description: 'Dapatkan bantuan cepat dan jawaban atas pertanyaan Anda seputar pengelolaan sampah langsung dari ahli atau komunitas.',
    },
    {
      image: '/images/tukar-sampah.png',
      title: 'Tukar Sampah Jadi Cuan',
      description: 'Kumpulkan sampah daur ulang Anda dan tukarkan dengan poin, reward menarik, atau bahkan uang tunai melalui bank sampah terdekat.',
    },
    {
      image: '/images/scan-sampah.png',
      title: 'Scan Jenis Sampah',
      description: 'Jelajahi dan ketahui berbagai jenis sampah dengan cepat, hanya dengan memindai menggunakan kamera ponsel Anda.', // Deskripsi sesuai desain
    },
    {
      image: '/images/jemput-sampah.png',
      title: 'Layanan Jemput Sampah',
      description: 'Tidak sempat ke bank sampah? Ajukan permintaan penjemputan sampah dari lokasi Anda dengan mudah melalui aplikasi.',
    },
    {
      image: '/images/dashboard.png',
      title: 'Pantau Progres Daur Ulang',
      description: 'Lihat dampak positif kontribusi Anda dalam pengelolaan sampah dan pantau riwayat transaksi daur ulang Anda secara transparan.',
    },
  ];

  // Data untuk anggota tim / boards (sesuai desain gambar image_2f55d6.png)
  const teamMembers = [
    { name: 'Bintang Danuarta', role: 'Founder', image: '/images/board/bintang.png' },
    { name: 'M. Rizqi Fadhilah', role: 'Founder', image: '/images/board/qilah.png' },
    { name: 'Rizky Fahrureza', role: 'Founder', image: '/images/board/reza.png' },
    // Tambahkan anggota lain jika ada
  ];


  // State untuk melacak slide yang aktif (untuk menampilkan deskripsi yang sesuai)
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <>
    <Navbar />
    <main className="text-white">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('images/waste.jpeg')" }}
      >
        <div className="absolute inset-0 bg-opacity-30 bg-opacity-30 z-0" />
        <div className="relative z-10 text-center px-4">
          <img
            src="/images/treash-logo.png"
            alt="Treash logo"
            className="h-24 md:h-32 mx-auto mb-4"
          />
          <p className="text-xl md:text-2xl font-light">
            Make Your Trash{" "}
            <span className="text-[#82af00] font-semibold">Worth It!</span>
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#121212] py-16">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">
          <h2 className="text-[#82af00] text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
            Treash at Glance
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* TEXT BLOCK - Remains the same */}
            <div className="flex-1 text-sm md:text-base text-justify space-y-4">
              <p>
                Treash hadir sebagai solusi inovatif untuk pengelolaan sampah yang lebih efektif dan berkelanjutan, berkontribusi langsung pada pencapaian beberapa Tujuan Pembangunan Berkelanjutan (SDGs). Aplikasi ini dilengkapi fitur scan jenis sampah yang memberdayakan pengguna untuk mengidentifikasi material sampah secara akurat dan mendapatkan informasi detail mengenai penanganan terbaik, termasuk potensi daur ulang, yang mendukung SDG 12: Konsumsi dan Produksi yang Bertanggung Jawab dengan mendorong pemilahan dan daur ulang. Fitur chatbot edukatif memberikan pengetahuan mendalam seputar pengelolaan sampah yang benar, jenis-jenis sampah, serta tips pengurangan sampah sehari-hari, meningkatkan kesadaran dan pemahaman masyarakat, yang selaras dengan SDG 4: Pendidikan Berkualitas.
              </p>
              <p>
                Treash juga memberdayakan masyarakat untuk berperan aktif dalam menjaga kebersihan lingkungan melalui fitur lapor penumpukan sampah. Pengguna dapat dengan mudah melaporkan lokasi penumpukan sampah ilegal atau tidak terkelola, membantu pihak berwenang merespons dengan cepat dan mencegah dampak negatif terhadap kesehatan dan lingkungan, berkontribusi pada SDG 11: Kota dan Komunitas yang Berkelanjutan dan SDG 3: Kesehatan yang Baik dan Kesejahteraan. Lebih lanjut, fitur setor sampah ke bank sampah memfasilitasi pengguna untuk menemukan lokasi bank sampah terdekat, melihat jenis sampah yang diterima, dan bahkan menjadwalkan penyetoran, sekaligus memberikan insentif ekonomi dan mendukung ekonomi sirkular, yang secara langsung mendukung SDG 12: Konsumsi dan Produksi yang Bertanggung Jawab dan berpotensi menciptakan SDG 8: Pekerjaan Layak dan Pertumbuhan Ekonomi melalui pengembangan sektor daur ulang.
              </p>
              <p>
                Dengan menggabungkan kemudahan identifikasi sampah, edukasi interaktif, partisipasi aktif dalam pelaporan, dan akses ke bank sampah, Treash bertujuan untuk mengubah cara masyarakat berinteraksi dengan sampah. Aplikasi ini tidak hanya meningkatkan kesadaran akan pentingnya pengelolaan sampah yang benar, tetapi juga memberikan solusi praktis dan bermanfaat bagi pengguna untuk berkontribusi pada lingkungan yang lebih bersih dan lestari (SDG 13: Tindakan Iklim) serta menciptakan kota dan komunitas yang lebih berkelanjutan (SDG 11). Treash adalah langkah nyata menuju pengelolaan sampah yang bertanggung jawab dan berkontribusi pada masa depan yang lebih baik bagi semua.
              </p>
            </div>
            <div className="flex-1 flex flex-col md:flex-row gap-6 items-center">
              <img
                src="/images/homepage-mockup.png"
                alt="Mockup App"
                className="w-full md:w-[300px] rounded-lg shadow-lg"
              />
              {/* SDG Icons Block - Horizontal row on mobile, Vertical stack on desktop */}
              <div className="flex gap-4 justify-center md:flex-col md:items-center">
                <img src="/images/sdg-icons/sdg3.png" alt="SDG 3" className="w-20 h-20" />
                <img src="/images/sdg-icons/sdg4.png" alt="SDG 4" className="w-20 h-20" />
                <img src="/images/sdg-icons/sdg11.png" alt="SDG 11" className="w-20 h-20" />
                <img src="/images/sdg-icons/sdg12.png" alt="SDG 12" className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-[#1e1e1e] py-16 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          {/* Section Title */}
          <h2 className="text-[#82af00] text-2xl md:text-3xl font-semibold mb-6 text-center">
            Fitur Unggulan Treash
          </h2>
          {/* Section Description */}
          <p className="text-white text-center mb-12 max-w-2xl mx-auto">
            Treash hadir dengan berbagai fitur inovatif untuk memudahkan Anda dalam mengelola sampah, mendapatkan informasi, dan berkontribusi pada lingkungan secara efektif. Geser atau biarkan otomatis!
          </p>

          {/* Swiper Container */}
          <div className="relative mb-8">
            <Swiper
              // Install modules (Added Autoplay)
              modules={[Navigation, Autoplay]}
              spaceBetween={30} // Jarak antar slide
              slidesPerView={1.2} // Jumlah slide terlihat di mobile (untuk efek sebagian)
              centeredSlides={true} // Menengahkan slide yang aktif
              loop={true} // Mengaktifkan loop (opsional, sesuai desain)
              navigation={{ // Mengaktifkan tombol navigasi
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              // Autoplay settings (Added Autoplay prop)
              autoplay={{
                delay: 3000, // Swipe tiap 3000ms (3 detik)
                disableOnInteraction: false, // Autoplay tidak berhenti saat user interaksi
              }}
              breakpoints={{ // Pengaturan responsif untuk slide per view dan jarak
                640: { // > 640px (md)
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                768: { // > 768px (lg)
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                },
                1024: { // > 1024px (xl)
                  slidesPerView: 4.5,
                  spaceBetween: 60,
                },
                1280: { // > 1280px (2xl or custom)
                  slidesPerView: 4.5,
                  spaceBetween: 70,
                }
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              initialSlide={activeIndex}
              className="pb-8"
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="p-2 bg-gray-800 rounded-lg shadow-xl">
                    <img
                      src={feature.image}
                      alt={`Fitur ${feature.title}`}
                      className="block w-full h-auto rounded-md"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
<div className="swiper-button-prev !text-gray-400 !bg-white hover:!bg-gray-200 transition-colors duration-200 rounded-full !w-10 !h-10 flex items-center justify-center !top-1/2 !-translate-y-1/2 !left-2 md:!left-4 after:!text-xl after:!font-bold" />
<div className="swiper-button-next !text-gray-400 !bg-white hover:!bg-gray-200 transition-colors duration-200 rounded-full !w-10 !h-10 flex items-center justify-center !top-1/2 !-translate-y-1/2 !right-2 md:!right-4 after:!text-xl after:!font-bold" />
          </div>

          {/* Dynamic Feature Description below Swiper */}
          <div className="text-center mt-8">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
              {features[activeIndex].title}
            </h3>
            <p className="text-white text-base md:text-lg font-light max-w-2xl mx-auto">
              {features[activeIndex].description}
            </p>
          </div>
        </div>
      </section>

      <section id="technology" className="px-4 md:px-20 py-20 bg-black text-white">
  <h2 className="text-[#82af00] text-2xl md:text-3xl font-semibold mb-12">How Treash Works?</h2>
  
  <div className="flex justify-center mb-8">
    <img src="/images/flow.png" alt="How Treash Works Diagram" className="rounded-xl border border-white/10" />
  </div>

  <div className="max-w-3xl mx-auto text-sm md:text-base text-justify leading-relaxed">
    <p className="mb-4">
    Arsitektur Treash menggunakan Firebase untuk autentikasi pengguna. Aplikasi klien berinteraksi melalui API Gateway yang melakukan routing ke berbagai layanan backend di Google Cloud (Region Indonesia/Jakarta). Layanan chatbot-api dan trash-api (Vertex AI) menangani fitur chatbot edukasi dan scan jenis sampah. core-api (berjalan di Compute Engine) menjadi inti logika aplikasi.
    </p>
    <p>
    Data terstruktur disimpan di Cloud Firestore (treash_db), sementara gambar disimpan di Cloud Storage (trash-storage). Peta lokasi bank sampah didapatkan dari Maps API. Proses deployment menggunakan Artifact Registry (treash-deploy dan treash-image) untuk menyimpan dan menarik image container. Kode sumber proyek disimpan di GitHub Repository (treash-chatbot, treash-backend, treash-trash).    </p>
  </div>
</section>

      {/* MEET US / BOARDS SECTION */}
      <section id="boards" className="bg-[#121212] py-16 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto text-white">
          <h2 className="text-[#82af00] text-2xl md:text-3xl font-semibold mb-12 text-center">
            Meet Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#1e1e1e] rounded-lg p-6 text-center shadow-lg transition duration-300 transform ease-in-out hover:shadow-2xl hover:scale-105"
              >
                <div className="w-32 h-40 rounded-md mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section id="downloads" className="bg-[#1a1a1a] py-16 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Mockup Aplikasi di Kiri */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/homepage-mockup.png"
              alt="Treash App Mockup"
              className="max-w-xs md:max-w-sm"
            />
          </div>

          {/* Ajakan & Tombol di Kanan */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Sampahmu, Masa Depan Bumi Kita.<br />Kelola dengan Bijak, Gunakan Treash Sekarang!
            </h2>
            <button className="mt-6 w-full md:w-auto bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded transition duration-300">
              Download
            </button>
          </div>

        </div>
      </section>
    </main>
    </>
  );
}
'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from '@/components/Navbar';
import BackToTopButton from "@/components/BackToTopButton";


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
    { name: 'Bintang Danuarta', role: 'UI/UX Designer, Front End Engineer, Hipster', image: '/images/board/bintang.png' },
    { name: 'M. Rizqi Fadhilah', role: 'Machine Learning Engineer, Hustler', image: '/images/board/qilah.png' },
    { name: 'Rizky Fahrureza', role: 'Backend Engineer, Software Architect, Hacker', image: '/images/board/reza.png' },
    // Tambahkan anggota lain jika ada
  ];


  // State untuk melacak slide yang aktif (untuk menampilkan deskripsi yang sesuai)
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <>
      <BackToTopButton />
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
                  Tantangan keberlanjutan lingkungan global, terutama dalam pengelolaan limbah dan konsumsi, semakin mendesak seiring pertumbuhan populasi dan urbanisasi. PBB melalui SDG 12 menekankan pengelolaan sumber daya efisien dan pengurangan limbah. Di Indonesia, dengan produksi sampah mencapai 67 juta ton pada 2022 dan 60% tidak terkelola dengan baik, masalah ini diperparah oleh minimnya infrastruktur, kesadaran masyarakat, serta koneksi antar pihak terkait. Sampah plastik menjadi penyumbang utama pencemaran, dan skala permasalahan di tingkat lokal, seperti yang diungkapkan Daur Tanggung dengan potensi 1 ton sampah per hari dari satu pengepul di Jakarta, menunjukkan urgensi solusi yang efektif.
                </p>
                <p>
                  Krisis pengelolaan sampah di Indonesia mencerminkan ketertinggalan dalam mewujudkan konsumsi dan produksi berkelanjutan, berpotensi menghambat pencapaian SDG lainnya seperti penanganan perubahan iklim dan pertumbuhan ekonomi. Sektor informal seperti pemulung dan pengepul juga belum terhubung dengan sistem digital untuk pemberdayaan ekonomi yang adil. Situasi ini menegaskan perlunya solusi sistemik dan terintegrasi yang memanfaatkan teknologi untuk mengatasi akar permasalahan sampah.
                </p>
                <p>
                  Treash hadir sebagai inovasi yang menggabungkan teknologi AI dan IoT dengan prinsip ekonomi sirkular untuk menjawab tantangan ini. Melalui klasifikasi sampah otomatis, pelacakan pengepul, edukasi interaktif, dan sistem insentif, Treash berupaya menjadi jembatan digital yang menghubungkan masyarakat, lingkungan, dan industri daur ulang. Dengan visi bahwa sampah adalah sumber daya, Treash bertujuan menciptakan solusi yang inklusif, efisien, dan memberikan dampak positif bagi lingkungan, ekonomi, dan sosial secara nyata.
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
                  <img src="/images/sdg-icons/sdg8.png" alt="SDG 8" className="w-20 h-20" />
                  <img src="/images/sdg-icons/sdg12.png" alt="SDG 11" className="w-20 h-20" />
                  <img src="/images/sdg-icons/sdg13.png" alt="SDG 12" className="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="document" className="bg-[#121212] py-16 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-[#82af00] text-2xl md:text-3xl font-semibold mb-6 text-center">
              Need to Know More?
            </h2>
            <p className="text-white text-center mb-8 max-w-2xl mx-auto">
              Pelajari lebih dalam mengenai latar belakang, fitur, dan teknologi yang digunakan oleh Treash melalui dokumen berikut.
            </p>

            {/* PDF Viewer */}
            <div className="w-full h-[800px] rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="/pdf/treash-doc.pdf"
                className="w-full h-full"
                frameBorder="0"
                title="Treash PDF"
              ></iframe>
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#1e1e1e] py-16 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            {/* Title */}
            <h2 className="text-[#82af00] text-2xl md:text-3xl font-semibold mb-6 text-center">
              Our Main Features
            </h2>

            {/* Description */}
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Treash hadir dengan berbagai fitur inovatif untuk memudahkan Anda dalam mengelola sampah, mendapatkan informasi, dan berkontribusi pada lingkungan secara efektif. Geser atau biarkan otomatis!
            </p>

            {/* Swiper */}
            <div className="relative mb-5">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  reverseDirection: true
                }}
                breakpoints={{
                  640: { slidesPerView: 2.5, spaceBetween: 40 },
                  768: { slidesPerView: 3.5, spaceBetween: 50 },
                  1024: { slidesPerView: 4, spaceBetween: 50 },
                  1280: { slidesPerView: 5, spaceBetween: 60 },
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                initialSlide={activeIndex}
                className="pb-8"
              >
                {features.map((feature, index) => (
                  <SwiperSlide key={index} className="overflow-visible">
                    <div className="rounded-lg transition duration-300 hover:shadow-[0_0_20px_#82af00]">
                      <img
                        src={feature.image}
                        alt={`Fitur ${feature.title}`}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Arrows */}
              <div className="swiper-button-prev !text-gray-400 !bg-white hover:!bg-gray-200 transition duration-200 rounded-full !w-10 !h-10 flex items-center justify-center !top-1/2 !-translate-y-1/2 !left-2 md:!left-4 after:!text-xl after:!font-bold" />
              <div className="swiper-button-next !text-gray-400 !bg-white hover:!bg-gray-200 transition duration-200 rounded-full !w-10 !h-10 flex items-center justify-center !top-1/2 !-translate-y-1/2 !right-2 md:!right-4 after:!text-xl after:!font-bold" />
            </div>

            {/* Active Slide Detail */}
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
            <img src="/images/treash-architecture.jpg" alt="How Treash Works Diagram" className="rounded-xl border border-white/10" />
          </div>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-justify leading-relaxed">
            <p className="mb-4">
              Arsitektur Treash menggunakan Firebase untuk autentikasi pengguna. Aplikasi klien berkomunikasi melalui API Gateway yang bertugas melakukan routing permintaan ke berbagai layanan backend di Google Cloud. Layanan-layanan backend ini terbagi menjadi beberapa bagian fungsional yang di-deploy dan dikelola secara terpisah.
            </p>
            <p className='mb-4'>
              Bagian berwarna hijau menangani fitur terkait sampah (trash-api menggunakan Vertex AI untuk kemampuan AI). Proses deployment untuk layanan ini melibatkan Cloud Build (trash-trigger) yang mengambil kode dari GitHub Repository (treash-trash), membangun image container (trash-image di Artifact Registry), dan akhirnya men-deploy-nya ke trash-api. Data yang terkait dengan sampah (kemungkinan gambar) disimpan di Cloud Storage (trash-storage), sementara data terstruktur disimpan di Cloud Firestore (treash_db).
            </p>
            <p className='mb-4'>
              Bagian berwarna biru merupakan inti aplikasi (core-api berjalan di Compute Engine). Proses deployment-nya serupa dengan layanan sampah, menggunakan Cloud Build (core-trigger) dari GitHub Repository (treash-core-backend), membangun image container (core-image di Artifact Registry), dan men-deploy-nya ke core-api. Aplikasi juga memanfaatkan layanan pihak ketiga, yaitu Maps API, kemungkinan untuk fitur lokasi bank sampah.
            </p>
            <p>
              Terakhir, bagian berwarna merah menangani fitur chatbot (chatbot-api juga menggunakan Vertex AI). Proses deployment-nya mengikuti pola yang sama dengan Cloud Build (chatbot-trigger) dari GitHub Repository (treash-chatbot), membangun image container (chatbot-image di Artifact Registry), dan men-deploy-nya ke chatbot-api. Untuk observability, arsitektur ini menggunakan Cloud Logging dan Cloud Monitoring.
            </p>
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
              <button className="mt-6 w-full md:w-auto bg-[#82af00] hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded transition duration-300">
                Download
              </button>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
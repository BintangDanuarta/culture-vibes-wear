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
      image: '/images/homepage-mockup.png',
      title: 'Lihat dan Dapatkan Baju Pilihanmu',
      description: 'Lihat-lihat dan dapatkan baju favoritmu',
    },
    {
      image: '/images/scan-qr.png',
      title: 'Pindai QR di Baju yang Kamu Temukan',
      description: 'Di aplikasi ini, kamu juga bisa memindai QR di baju baju dari CVW',
    },
    {
      image: '/images/fitur-vr.png',
      title: 'Mau Jalan-jalan? Lewat Virtual aja!',
      description: 'Jelajahi dan ketahui berbagai tempat wisata memukau secara virtual.', // Deskripsi sesuai desain
    },
    {
      image: '/images/fitur-video.png',
      title: 'Tonton Video Edukatif',
      description: 'Cara paling Kalcer buat kamu yang penasaran sama budaya di Indonesia',
    },
  ];

  // Data untuk anggota tim / boards (sesuai desain gambar image_2f55d6.png)
  const teamMembers = [
    { name: 'Bintang Danuarta', role: 'CEO & CTO', image: '/images/board/bintang.png' },
    { name: 'Wisnu Miftahul Faris', role: 'CMO & CTO', image: '/images/board/wisnu.png' },
    { name: 'Najla Nurul Husnina', role: 'CMO & COO', image: '/images/board/najla.png' },
    { name: 'Vina Nurhotimah', role: 'CPO & CMO', image: '/images/board/vina.png' },
    { name: 'Aira Nazua Artamevia', role: 'COO & CPO', image: '/images/board/aira.png' },
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
          style={{ backgroundImage: "url('images/backgroun-blue.jpeg')" }}
        >
          <div className="absolute inset-0 bg-opacity-30 bg-opacity-30 z-0" />
          <div className="relative z-10 text-center px-4">
            <img
              src="/images/cvw-logo.png"
              alt="CultureVibesWear logo"
              className="h-24 md:h-32 mx-auto mb-4"
            />
            <p className="text-xl md:text-2xl font-light">
              Aplikasi Kalcer Untukmu yang{" "}
              <span className="text-[white] font-semibold">Berbudaya!</span>
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-16">
          <div className="max-w-screen-xl mx-auto px-6 md:px-16">
            <h2 className="text-[#454545] text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
              Sekilas Tentang CultureVibesWear
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* TEXT BLOCK - Remains the same */}
              <div className="flex-1 text-sm md:text-base text-justify text-[#454545] space-y-4">
                <p>
                  Generasi muda Indonesia, khususnya anak-anak dan remaja di Kabupaten
                  Karawang, tengah menghadapi krisis identitas yang kompleks. Di satu sisi,
                  mereka hidup dalam arus deras globalisasi dan disrupsi teknologi digital yang
                  membawa beragam informasi dan hiburan populer ke dalam genggaman
                  mereka. Di sisi lain, mereka mulai kehilangan keterkaitan emosional dengan
                  nilai-nilai agama Islam dan budaya lokal yang seharusnya menjadi fondasi
                  moral dan karakter mereka.

                </p>
                <p>
                  Minat belajar agama Islam dan budaya secara mendalam mengalami
                  penurunan signifikan. Berdasarkan survei yang dilakukan oleh Badan Litbang
                  dan Diklat Kementerian Agama Republik Indonesia (2020), lebih dari 60%
                  pelajar lebih akrab dengan konten hiburan seperti musik, gim daring, dan media
                  sosial dibandingkan materi keislaman. Hanya 21,6% di antaranya yang
                  mengaku rutin mengikuti kegiatan keagamaan berbasis digital. Data ini
                  menunjukkan bahwa generasi muda cenderung menjauh dari pendekatan
                  tradisional dalam pembelajaran agama, karena dianggap tidak menarik dan
                  tidak relevan dengan kehidupan sehari-hari mereka yang serba visual dan
                  cepat.
                </p>
                <p>
                  Situasi yang sama juga terjadi dalam konteks kebudayaan. Pengetahuan
                  generasi muda tentang sejarah dan warisan budaya lokal sangat terbatas. Di
                  Karawang, situs-situs bersejarah seperti Kompleks Cagar Budaya Batujaya dan
                  Candi Jiwa mengalami penurunan jumlah kunjungan yang signifikan. Data dari
                  Dinas Pariwisata dan Kebudayaan Kabupaten Karawang menunjukkan bahwa
                  tingkat kunjungan ke kawasan tersebut menurun hingga 40% pada tahun 2023
                  dibandingkan tahun sebelumnya, dengan penyebab utama adalah rendahnya
                  minat dari kalangan pelajar dan remaja. Hal ini mengindikasikan adanya
                  keterputusan antara generasi muda dengan warisan budaya daerahnya sendiri
                </p>
                <p>
                  Dalam konteks inilah, CultureVibesWear hadir sebagai jawaban.
                  Sebuah inisiatif berbasis fashion edukatif yang menggabungkan desain
                  busana bernuansa Islam dan budaya Karawang dengan teknologi Augmented
                  Reality (AR). Melalui kaos interaktif yang dipindai QR-nya, pengguna dapat
                  mengakses konten edukatif berupa video dakwah, narasi sejarah, hingga kuis
                  budaya secara langsung dari ponsel mereka. Ini adalah bentuk pendekatan
                  “edutainment” yang dirancang untuk menjembatani dunia nilai dengan dunia
                  digital—mengedukasi sekaligus menghibur, memperkuat identitas keislaman
                  dan kebudayaan, sambil mengurangi ketertarikan pada aktivitas negatif yang
                  destruktif.
                </p>
              </div>
              <div className="flex-1 flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/images/homepage-mockup.png"
                  alt="Mockup App"
                  className="w-full md:w-[300px] rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section id="document" className="bg-[white] py-16 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-[#5FB4D3] text-2xl md:text-3xl font-semibold mb-6 text-center">
              Need to Know More?
            </h2>
            <p className="text-white text-center mb-8 max-w-2xl mx-auto">
              Pelajari lebih dalam mengenai latar belakang, fitur, dan teknologi yang digunakan oleh Treash melalui dokumen berikut.
            </p> */}

        {/* PDF Viewer */}
        {/* <div className="w-full h-[800px] rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="/pdf/treash-doc.pdf"
                className="w-full h-full"
                frameBorder="0"
                title="Treash PDF"
              ></iframe>
            </div>
          </div>
        </section> */}

        <section id="features" className="bg-[#5FB4D3] py-16 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              Fitur Utama Aplikasi CultureVibesWear
            </h2>

            {/* Description */}
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              CultureVibesWear hadir dengan berbagai fitur inovatif untuk mengedukasi pengguna dengan berbagai video edukasi budaya
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
                    <div className="rounded-lg transition duration-300 hover:shadow-[0_0_20px_#5FB4D3]">
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



        <section id="technology" className="px-4 md:px-20 py-20 bg-white text-[#454545]">
          <h2 className="text-[#5FB4D3] text-2xl md:text-3xl font-semibold mb-12">Bagaimana Cara Kerja Aplikasi Ini?</h2>

          <div className="flex justify-center mb-8">
            <img src="/images/cvw-architecture.jpg" alt="How Treash Works Diagram" className="rounded-xl border border-white/10" />
          </div>

          <div className="max-w-3xl mx-auto text-sm md:text-base text-justify leading-relaxed">
            <p className="mb-4">
              Aplikasi CultureVibesWear kami dirancang dengan arsitektur modern berbasis microservices yang berjalan di infrastruktur cloud Google Cloud Platform. Pendekatan ini memecah fungsionalitas kompleks menjadi layanan-layanan yang lebih kecil, mandiri, dan mudah dikelola, memastikan setiap aspek aplikasi dapat berkembang secara independen. Seluruh interaksi dari aplikasi pengguna, baik itu di perangkat mobile maupun web, akan pertama kali melewati API Gateway. Komponen sentral ini tidak hanya bertindak sebagai pintu gerbang utama yang cerdas dalam mengarahkan setiap permintaan ke layanan backend yang tepat, tetapi juga menjaga keamanan dengan memvalidasi identitas pengguna melalui integrasi yang mulus dengan Firebase Authentication.
            </p>
            <p className='mb-4'>
              Salah satu pilar utama dari CultureVibesWear adalah penyajian video edukasi budaya yang kaya, yang diimplementasikan melalui Layanan Video & QR. Layanan khusus ini secara efisien mengelola seluruh katalog video kami. Penting untuk dipahami bahwa file video fisiknya tidak disimpan secara internal, melainkan memanfaatkan keunggulan platform YouTube untuk hosting dan streaming. Layanan Video akan menyimpan metadata esensial—seperti judul yang menarik, deskripsi mendalam, kategori, dan ID unik video YouTube—di dalam database Cloud Firestore yang fleksibel. Fitur pemindaian QR code juga terintegrasi erat di sini; ketika sebuah QR code dipindai oleh pengguna, layanan ini akan dengan cepat menerjemahkan kode tersebut menjadi ID video YouTube yang relevan, memungkinkan aplikasi pengguna untuk segera menyajikan konten edukasi yang dimaksud langsung dari YouTube.Bagian berwarna hijau menangani fitur terkait sampah (trash-api menggunakan Vertex AI untuk kemampuan AI). Proses deployment untuk layanan ini melibatkan Cloud Build (trash-trigger) yang mengambil kode dari GitHub Repository (treash-trash), membangun image container (trash-image di Artifact Registry), dan akhirnya men-deploy-nya ke trash-api. Data yang terkait dengan sampah (kemungkinan gambar) disimpan di Cloud Storage (trash-storage), sementara data terstruktur disimpan di Cloud Firestore (treash_db).
            </p>
            <p className='mb-4'>
              Selain konten video, CultureVibesWear juga memperkaya pengalaman pengguna dengan fitur preview produk-produk budaya yang menarik, yang pengelolaannya ditangani oleh Layanan Produk tersendiri. Layanan ini bertanggung jawab untuk menampilkan informasi detail mengenai setiap produk, termasuk nama, deskripsi yang menggugah, dan yang terpenting, tautan langsung menuju laman pembelian di platform e-commerce populer, Shopee. Sementara semua metadata produk beserta tautan Shopee tersimpan rapi dalam Cloud Firestore, gambar-gambar visual produk yang berkualitas tinggi akan disimpan secara optimal dan efisien di Cloud Storage, memastikan tampilan yang responsif dan menarik di sisi aplikasi pengguna. Ketika seorang pengguna merasa tertarik dan melakukan klik pada sebuah produk, aplikasi akan secara otomatis mengarahkan mereka ke Shopee untuk kemudahan proses pembelian.
            </p>
            <p>
              Manajemen data dalam arsitektur ini terpusat pada Cloud Firestore untuk semua informasi tekstual, metadata, dan data relasional seperti detail video, informasi produk, dan pemetaan antara QR code dengan ID video YouTube. Di sisi lain, Cloud Storage dioptimalkan untuk menangani aset biner seperti gambar produk. Dengan memisahkan fungsi-fungsi inti ke dalam layanan-layanan independen—yakni Layanan Video & QR, serta Layanan Produk—arsitektur CultureVibesWear menawarkan tingkat fleksibilitas dan skalabilitas yang tinggi. Setiap layanan dapat dikembangkan, diperbarui, dan ditingkatkan kapasitasnya secara terpisah tanpa mempengaruhi operasional bagian lain dari aplikasi, memastikan bahwa platform CultureVibesWear dapat terus beradaptasi dan berkembang secara berkelanjutan seiring dengan pertumbuhan kebutuhan dan fitur di masa mendatang.
            </p>
          </div>
        </section>

        {/* MEET US / BOARDS SECTION */}
        <section id="boards" className="bg-[#F2F3F7] py-16 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto text-white">
            <h2 className="text-[#5FB4D3] text-2xl md:text-3xl font-semibold mb-12 text-center">
              Tim Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#5FB4D3] rounded-lg p-6 text-center shadow-lg transition duration-300 transform ease-in-out hover:shadow-2xl hover:scale-105"
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
                  <p className="text-white text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOWNLOAD SECTION */}
        <section id="downloads" className="bg-[#5FB4D3] py-16 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">

            {/* Mockup Aplikasi di Kiri */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/images/homepage-mockup.png"
                alt="CultureVibesWear App Mockup"
                className="max-w-xs md:max-w-sm"
              />
            </div>

            {/* Ajakan & Tombol di Kanan */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Jaga, Lestarikan, dan Budayakan.<br />Gunakan CultureVibesWear Sekarang!
              </h2>
              <button className="mt-6 w-full md:w-auto bg-[#ccfafb] hover:bg-[#1BFBFF] text-[#454545] font-semibold py-3 px-6 rounded transition duration-300">
                Unduh Sekarang
              </button>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
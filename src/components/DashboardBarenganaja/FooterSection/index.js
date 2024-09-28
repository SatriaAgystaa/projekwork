const FooterSection = () => {
  return (
    <footer className="bg-[#FAF5E6] text-[#455A64]">
      <div className="max-w-full mx-auto py-12 md:py-16 px-8 md:px-32">
        <div className="mb-8">
          <img src="/logo.svg" alt="Barenganaja" className="h-10 mb-4" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <p>
              Platform pertama di Indonesia yang memberikan layanan Berlangganan Bersama agar dapat menikmati fitur premium dengan proses berlangganan yang praktis, legal, aman dan murah.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="font-semibold text-lg mb-2">Barenganaja</h2>
              <ul>
                <li className="mb-2">Tentang kami</li>
                <li className="mb-2">Cara Pesan</li>
                <li className="mb-2">Partners</li>
                <li className="mb-2">FAQ</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2">Produk</h2>
              <ul>
                <li className="mb-2">Produk Digital</li>
                <li className="mb-2">Non-Digital</li>
                <li className="mb-2">Belanja Bersama</li>
                <li className="mb-2">Sequrban</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2">Hubungi Kami</h2>
              <ul>
                <li className="mb-2">admin@barenganaja.co.id</li>
                <li className="mb-2">021 202 9876</li>
                <li className="mb-2">Jam Operasional</li>
                <li className="mb-2">09.00 - 21.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#025464] text-white py-4 text-center mt-8">
        <p className="m-0">© 2023 - 2024 PT Narantraya Teknologi Digital</p>
      </div>
    </footer>
  );
};

export default FooterSection;

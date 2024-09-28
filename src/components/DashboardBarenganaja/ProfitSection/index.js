import Image from 'next/image';

const benefits = [
  {
    text: 'Hemat Sampai 70%',
    imgSrc: 'dashboardbarenganaja/profitsection/percent.svg',
    position: 'left'
  },
  {
    text: 'Privasi Terjamin',
    imgSrc: 'dashboardbarenganaja/profitsection/privasi.svg',
    position: 'left'
  },
  {
    text: 'Customer Service Responsive',
    imgSrc: 'dashboardbarenganaja/profitsection/cs.svg',
    position: 'left'
  },
  {
    text: 'Beragam Metode Pembayaran',
    imgSrc: 'dashboardbarenganaja/profitsection/layanan.svg',
    position: 'right'
  },
  {
    text: 'Layanan Legal & Resmi',
    imgSrc: 'dashboardbarenganaja/profitsection/verif.svg',
    position: 'right'
  },
  {
    text: 'Pengingat Pembayaran',
    imgSrc: 'dashboardbarenganaja/profitsection/notif.svg',
    position: 'right'
  }
];

const ProfilSection = () => {
  const leftBenefits = benefits.filter(benefit => benefit.position === 'left');
  const rightBenefits = benefits.filter(benefit => benefit.position === 'right');

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-24 px-8 md:px-32 bg-white">
      <h2 className="text-2xl md:text-3xl text-[#455A64] mb-6 text-center font-semibold leading-tight">
        Ada banyak <span className="text-yellow-500">keuntungan</span> yang<br /> dapat kamu peroleh.
      </h2>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-12">
        {/* Left Benefits */}
        <div className="flex flex-row text-[#455A64] md:flex-col items-center gap-6 sm:items-end sm:w-1/4">
          {leftBenefits.map((benefit, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-[12px] md:text-lg md:block text-center sm:text-left">
                {benefit.text}
              </p>
              <div className="bg-yellow-100 p-3 rounded flex-shrink-0">
                <Image src={benefit.imgSrc} alt={benefit.text} width={32} height={32} />
              </div>
            </div>
          ))}
        </div>

        {/* Image Center */}
        <div className="flex items-center justify-center w-full sm:w-1/2 my-6 sm:my-0">
          <Image src="dashboardbarenganaja/profitsection/trigo.svg" alt="Keuntungan" width={300} height={300} className="sm:w-[410px] sm:h-[410px] object-contain" />
        </div>

        {/* Right Benefits */}
        <div className="flex flex-row text-[#455A64] md:flex-col items-center gap-6 sm:items-start sm:w-1/4">
          {rightBenefits.map((benefit, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded flex-shrink-0">
                <Image src={benefit.imgSrc} alt={benefit.text} width={32} height={32} />
              </div>
              <p className="text-[12px] md:text-lg md:block text-center sm:text-left">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilSection;

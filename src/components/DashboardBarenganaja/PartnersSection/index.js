import React from 'react';

const partners = [
  { src: 'dashboardbarenganaja/patnerssection/axdif.svg', alt: 'Axdif' },
  { src: 'dashboardbarenganaja/patnerssection/flip.svg', alt: 'Flip' },
  { src: 'dashboardbarenganaja/patnerssection/kitabisa.svg', alt: 'Kitabisa' },
  { src: 'dashboardbarenganaja/patnerssection/support.svg', alt: 'Support Seller' },
  { src: 'dashboardbarenganaja/patnerssection/transfez.svg', alt: 'Transfez' },
  { src: 'dashboardbarenganaja/patnerssection/xendit.svg', alt: 'Xendit' },
];

const PartnersSection = () => {
  return (
    <div id="partners" className="bg-[#FAFAFA] w-full text-[#455A64] py-12 md:py-20 px-8 md:px-32 scroll-mt-[60px] md:scroll-mt-[100px]">
      <div className="text-center pb-6">
        <h2 className="text-2xl md:text-3xl mb-6 font-semibold leading-tight">
          Partners <span className="text-yellow-500">Barenganaja</span>
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-between space-x-4 animate-carousel">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-none">
              <img src={partner.src} alt={partner.alt} className="h-12 md:h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;

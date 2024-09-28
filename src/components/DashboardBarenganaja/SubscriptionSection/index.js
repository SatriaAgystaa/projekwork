import React from 'react';

const steps = [
  { src: 'dashboardbarenganaja/subscriptionsection/layanan.svg', alt: 'Proses Layanan', label: 'Proses Layanan' },
  { src: 'dashboardbarenganaja/subscriptionsection/pembayaran.svg', alt: 'Pembayaran', label: 'Pembayaran' },
  { src: 'dashboardbarenganaja/subscriptionsection/jam.svg', alt: 'Menunggu Proses', label: 'Menunggu Proses' },
  { src: 'dashboardbarenganaja/subscriptionsection/cek.svg', alt: 'Pesanan Diterima', label: 'Pesanan Diterima' },
  { src: 'dashboardbarenganaja/subscriptionsection/verif2.svg', alt: 'Selesai', label: 'Selesai' }
];

const SubscriptionSection = () => {
  return (
      <div id="cara-pesan" className="bg-[#FAFAFA] w-full py-12 md:py-20 px-8 md:px-32 text-[#455A64] scroll-mt-[60px] md:scroll-mt-[100px]">
      <div className="text-center pb-6">
        <h2 className="text-2xl md:text-3xl mb-6 font-semibold leading-tight">
          Cara Berlangganan <br/><span className="text-yellow-500">Barenganaja</span>
        </h2>
      </div>
      <div className="flex flex-wrap md:justify-between justify-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="bg-yellow-100 rounded-md w-16 h-16 md:w-24 md:h-24 flex items-center justify-center text-2xl md:text-3xl">
              <img src={step.src} alt={step.alt} className="md:w-14 md:h-14 w-1/2 h-1/2 object-contain" />
            </div>
            <p className="mt-2 text-[13px] md:text-base">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionSection;

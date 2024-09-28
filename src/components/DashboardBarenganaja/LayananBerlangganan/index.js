import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link

const LayananBerlangganan = () => {
  const [services, setServices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Barengan",
      subtitle: "Mau liburan gak ada teman? Barengan Aja yuk!",
      imgSrc: "/icons/premium.png",
    },
    {
      title: "Special Offer",
      subtitle: "Dapatkan diskon hingga 50% dengan Akun VIP!",
      imgSrc: "/icons/vip.png",
    },
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/services');
        const result = await response.json();
        if (result.success) {
          setServices(result.data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="py-8 md:py-10 lg:py-10 px-8 md:px-20 lg:px-32">
      {/* TITLE */}
      <h1 className="text-2xl md:text-1xl text-[#025464] font-semibold mb-5">
        Layanan
      </h1>

      {/* GROUP CARD (Kartu kecil untuk layanan) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {services.map((service) => (
          <Link key={service.id} href={service.url} passHref>
            <div className="p-5 shadow-md rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
              <div className="flex justify-center">
                <img
                  src={`/Payment/${service.img}`}
                  alt={service.name}
                  className="max-w-full max-h-32 object-contain rounded-md"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-gray-700 text-xs md:text-md lg:text-lg">{service.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CAROUSEL */}
      <div className="overflow-hidden rounded-lg w-full mt-8">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 p-5 shadow-md rounded-lg bg-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-5">
                {/* Text Section */}
                <div className="md:w-1/2 flex flex-col justify-center gap-3">
                  <h2 className="text-2xl font-semibold text-[#025464]">
                    {card.title}
                    <span className="text-[#e8aa42]">aja</span>
                  </h2>
                  <p className="text-gray-600">{card.subtitle}</p>
                </div>
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="max-w-full max-h-60 object-contain rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INDICATOR SECTION */}
      <div className="flex justify-center mt-4 gap-2">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`block w-6 h-2 rounded-full ${currentIndex === index ? 'bg-[#025464]' : 'bg-[#e8aa42]'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LayananBerlangganan;

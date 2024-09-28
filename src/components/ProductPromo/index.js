import { useEffect, useState } from 'react';
import axios from 'axios';

const ProdukPromo = () => {
  const [promoProducts, setPromoProducts] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchPromoProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products');
        const filteredPromo = response.data.data.filter(product => product.is_promo);
        setPromoProducts(filteredPromo);
      } catch (error) {
        console.error('Error fetching promo products:', error);
      }
    };

    fetchPromoProducts();
  }, []);

  return (
    <div className="py-8 md:py-10 lg:py-10 px-8 md:px-20 lg:px-32">
      <h2 className="text-xl md:text-2xl text-[#025464] font-semibold mt-8">
        Produk Promo
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-4">
        {promoProducts.map((promo) => (
          <div key={promo.id} className="relative p-4 shadow-md rounded-lg bg-gray-100 flex flex-col items-center">
            {/* Ribbon for discount */}
            <div className="absolute top-0 left-0 bg-yellow-400 text-white text-[8px] p-1 rounded-br-lg rounded-tl-lg">
              Special Promo
            </div>
            <div className="flex justify-center items-center">
              <img
                src={`/dashboardBarenganaja/productSection/${promo.img}`}
                alt={promo.name}
                className="w-full max-w-[60px] max-h-[60px] object-contain"
              />
            </div>
            <div className="mt-2 text-center">
              <p className="font-semibold text-gray-700 text-sm">{promo.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukPromo;

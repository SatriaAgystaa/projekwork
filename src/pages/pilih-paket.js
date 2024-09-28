// pages/pilih-paket.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';

const PilihPaket = () => {
  const router = useRouter();
  const { productName } = router.query; // Get the product name from the query
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (productName) {
      const fetchProductDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/products/${productName}`);
          if (response.data && response.data.data) {
            setProductDetails(response.data.data);
          } else {
            console.error('Error fetching product details:', response.data.message);
          }
        } catch (error) {
          console.error('Failed to fetch product details:', error);
        }
      };

      fetchProductDetails();
    }
  }, [productName]);

  if (!productDetails) {
    return <p>Loading...</p>; // Loading state while fetching product details
  }

  return (
    <div className="p-4">
      {/* Back Button */}
      <button onClick={() => router.back()} className="flex items-center text-[#025464] mb-4">
        <FiArrowLeft className="text-2xl" />
        <span className="ml-2">Back</span>
      </button>

      <h1 className="text-xl font-bold mb-4">{productDetails.name}</h1>

      {/* Product Image */}
      <img
        src={`/dashboardBarenganaja/productSection/${productDetails.img}`}
        alt={productDetails.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Pricing List */}
      <div>
        {productDetails.pricing_schemas && productDetails.pricing_schemas.map((schema, schemaIndex) => (
          <div key={schemaIndex} className="bg-[#FFF8ED] border border-gray-200 rounded-lg p-4 mb-4 shadow-md">
            <h2 className="font-semibold text-lg mb-2">{schema.schema_detail.package_name}</h2>
            {schema.product_subscribing && schema.product_subscribing.map((sub, subIndex) => (
              <div key={subIndex} className="flex justify-between mb-2">
                <span className="text-[#025464] font-semibold">
                  Rp {sub.sharing_price + sub.fee_admin} / {sub.subscribing_type.long} {sub.subscribing_type.type}
                </span>
                <button className="bg-[#025464] text-white py-1 px-3 rounded-full hover:bg-[#013C3A] transition duration-300">
                  Pesan
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PilihPaket;

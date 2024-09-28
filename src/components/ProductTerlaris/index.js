import { useEffect, useState } from "react";
import axios from "axios";

const ProdukTerlaris = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellingProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/orders/all");
        const { data } = response.data;

        // Create an object to count product orders
        const productCount = {};

        data.rows.forEach((order) => {
          const productName = order.product_pricing.product.name;
          const productImg = order.product_pricing.product.img;

          // Initialize or update the product count
          if (productCount[productName]) {
            productCount[productName].count += 1;
          } else {
            productCount[productName] = {
              title: productName,
              imgSrc: `dashboardbarenganaja/productsection/${productImg}`,
              count: 1,
            };
          }
        });

        // Convert the object to an array and sort by the count in descending order
        const sortedProducts = Object.values(productCount).sort(
          (a, b) => b.count - a.count
        );

        // Select only the top 6 products
        setBestSellingProducts(sortedProducts.slice(0, 6));
      } catch (error) {
        console.error("Error fetching best-selling products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellingProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading state while data is being fetched
  }

  return (
    <div className="py-8 md:py-10 lg:py-10 px-8 md:px-20 lg:px-32">
      <h2 className="text-xl md:text-2xl text-[#025464] font-semibold mt-8">
        Produk Terlaris
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-4">
        {bestSellingProducts.map((product, index) => (
          <div key={index} className="relative p-4 shadow-md rounded-lg bg-gray-100 flex flex-col items-center">
            <div className="flex justify-center items-center">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full max-w-[60px] max-h-[60px] object-contain"
              />
            </div>
            <div className="mt-2 text-center">
              <p className="font-semibold text-gray-700 text-sm">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukTerlaris;

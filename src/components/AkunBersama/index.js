import { useEffect, useState } from 'react';
import axios from 'axios';

const AkunBersama = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products');
        if (response.data && response.data.data) {
          const transformedProducts = response.data.data.map(product => ({
            name: product.name,
            img: `/dashboardBarenganaja/productSection/${product.img}`,
            pricing: product.pricing_schemas
              ? product.pricing_schemas.flatMap(schema =>
                  schema.product_subscribing
                    ? schema.product_subscribing.map(sub => ({
                        packageName: schema.schema_detail.package_name,
                        price: sub.package_price,
                        duration: `${sub.subscribing_type.long} ${sub.subscribing_type.type}`,
                        durationValue: `${sub.subscribing_type.long} ${sub.subscribing_type.type}`,
                      }))
                    : []
                )
              : [],
            category: product.category ? product.category.name : 'Uncategorized',
          }));
          setProducts(transformedProducts);
        } else {
          console.error('Error fetching products:', response.data.message);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/categories');
        if (response.data && response.data.data) {
          setCategories(response.data.data);
        } else {
          console.error('Error fetching categories:', response.data.message);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="py-8 px-8 md:px-20 lg:px-32">
      <h1 className="text-2xl font-semibold text-[#025464] mb-6">Akun Bersama</h1>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <div key={index} className="p-5 shadow-md rounded-lg bg-gray-100">
            <div className="flex justify-center mb-3">
              <img
                src={product.img}
                alt={product.name}
                className="max-w-full max-h-32 object-contain rounded-md"
              />
            </div>
            <h2 className="font-semibold text-gray-700">{product.name}</h2>
            <p className="text-gray-600">Category: {product.category}</p>
            {product.pricing.length > 0 && (
              <div className="mt-2">
                <h3 className="font-semibold text-gray-800">Pricing:</h3>
                {product.pricing.map((item, idx) => (
                  <div key={idx} className="text-gray-600">
                    <span>{item.packageName}: </span>
                    <span>{item.price} - {item.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AkunBersama;

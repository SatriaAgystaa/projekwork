import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FiArrowLeft, FiSearch, FiFilter } from 'react-icons/fi';  // Import icons

const AkunBersama = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [showFilter, setShowFilter] = useState(false); // State to show/hide filter form
  const router = useRouter();

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
                        // Calculate the price as sharing_price + fee_admin
                        price: sub.sharing_price + sub.fee_admin,
                        duration: `${sub.subscribing_type.long} ${sub.subscribing_type.type}`,
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

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 6 : 8);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  // Filtering logic
  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory);

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
    setShowFilter(false); // Close filter after selection
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter); // Toggle the filter form
  };

  return (
    <div>
      {/* Full-Width Sticky Navbar */}
      <div className="sticky top-0 z-10 bg-white py-4 shadow-md flex items-center justify-between px-4 w-full">
        {/* Back Button */}
        <button onClick={() => router.back()} className="flex items-center text-[#025464]">
          <FiArrowLeft className="text-2xl" />
        </button>

        {/* Search Bar */}
        <div className="relative w-3/4 md:w-full lg:w-full max-w-xl">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border rounded-lg pl-10"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>

        {/* Filter Icon */}
        <button onClick={toggleFilter} className="text-[#025464] relative">
          <FiFilter className="text-2xl" />
          {showFilter && (
            <div className="absolute z-20 bg-white shadow-md rounded-lg p-4 mt-2 w-48" style={{ left: 'auto', right: '10px' }}>
              <h3 className="font-semibold text-lg mb-4 text-start">Category</h3>
              {/* All Categories option */}
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="category"
                  value="All"
                  id="All"
                  checked={selectedCategory === 'All'}
                  onChange={() => handleCategoryChange('All')}
                  className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#025464] cursor-pointer"
                />
                <label htmlFor="All" className="ml-2">All Categories</label>
              </div>

              {/* Category options */}
              {categories.map((category, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="category"
                    value={category.name}
                    id={category.name}
                    checked={selectedCategory === category.name}
                    onChange={() => handleCategoryChange(category.name)}
                    className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#025464] cursor-pointer"
                  />
                  <label htmlFor={category.name} className="ml-2">{category.name}</label>
                </div>
              ))}
            </div>
          )}
        </button>
      </div>

      {/* Content Section */}
      <div className="md:py-8 py-4 px-4 md:px-20 lg:px-32">
        {/* Product List */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <div
                key={index}
                className="relative bg-[#FFF8ED] border border-gray-200 rounded-xl p-4 shadow-lg flex flex-col justify-between h-full"
              >
                {/* Special Promo Label */}
                {product.is_promo && (
                  <div className="absolute top-2 right-2 bg-[#FFB200] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Special Promo
                  </div>
                )}

                {/* Product Image and Name in a Row */}
                <div className="flex items-center justify-start px-1 mb-3 space-x-2">
                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-10 h-10 object-contain"
                  />

                  {/* Product Name */}
                  <h2 className="font-semibold text-base text-[#1E1E1E]">{product.name}</h2>
                </div>

                {/* Product Pricing List */}
                <div className="mb-3">
                  {product.pricing.length > 0 ? (
                    product.pricing.map((pricing, pricingIndex) => (
                      <div key={pricingIndex} className="mb-3">
                        {/* Product Package Name */}
                        <p className="text-start text-xs text-[#9D9D9D] mb-1 truncate">
                          {pricing.packageName}
                        </p>

                        {/* Product Price and Duration (aligned in flexbox) */}
                        <div className="flex justify-between items-center text-start text-[#025464] font-semibold md:text-base text-xs">
                          <span>
                            Rp {pricing.price.toLocaleString()}
                            <span className="text-[9px] md:text-xs text-yellow-400">/{pricing.duration}</span>
                          </span>
                          <span className="ml-1 text-xs text-[#9D9D9D]">{pricing.duration}</span>
                        </div>

                        {/* Divider */}
                        {pricingIndex !== product.pricing.length - 1 && (
                          <hr className="border-dashed border-gray-300 my-3" />
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-xs text-[#9D9D9D]">No Package Available</p>
                  )}
                </div>

                {/* Force button to bottom */}
                <div className="mt-auto flex justify-center">
                  <button className="bg-[#025464] text-white py-1 px-4 rounded-full hover:bg-[#013C3A] transition duration-300 w-full text-sm">
                    Beli Paket
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center col-span-full bg-[#FFF3F3] rounded-lg p-4 shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 9a7 7 0 1114 0A7 7 0 012 9zm8 8a8.965 8.965 0 01-5.187-1.707C6.57 14.583 7.721 14 9 14h2c1.279 0 2.43.583 3.187 1.293A8.965 8.965 0 0110 17z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-red-500 mb-1">
                No Product Found
              </p>
              <p className="text-xs text-gray-500 text-center">
                Try adjusting your search or filter options.
              </p>
            </div>
          )}
        </div>


        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`mx-1 px-4 py-2 rounded-lg ${currentPage === pageNumber ? 'bg-[#025464] text-white' : 'bg-white border'}`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AkunBersama;

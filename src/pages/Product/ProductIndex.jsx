import axios from "axios";
import { Button, Card, Pagination, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { ClipLoader } from "react-spinners";
import { truncateString } from "../../utils/TruncateString";
import ProductCard from "../../components/ProductCard";

function ProductIndex() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilterCategory(categorySlug);

    getCategories();
    getProducts(categorySlug);
  }, []);

  const getProducts = async (filterCategory) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`,
        {
          params: {
            limit: 10,
            category: filterCategory,
          },
        }
      );
      if (response.data.meta.code == 200) {
        setProducts(response.data.data);
        setPagination(response.data.meta.pagination);
      }
    } catch (error) {
      console.log("error " + error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product-categories`
      );
      if (response.data.meta.code == 200) {
        setCategories(response.data.data);
      }
    } catch (error) {
      console.log("error " + error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const handleFilterByCategory = async (slug) => {
    setIsLoading(true);
    setFilterCategory(slug);
    getProducts(slug);
  };

  const handlePageChange = (page) => {
    getProducts(filterCategory, page);
  };

  return (
    <>
      <MainLayout>
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] px-4 gap-4">
          <div className="hidden md:block bg-white px-4 py-2">
            <div className="mt-7 mb-10">
              <h1
                className="uppercase text-xl mb-4 px-4 font-semibold cursor-pointer"
                onClick={() => handleFilterByCategory("")}
              >
                SEMUA KATEGORI
              </h1>
              <ul className="px-4">
                {isLoadingCategories ? (
                  <p>Loading Categories</p>
                ) : (
                  categories &&
                  categories.map((category, index) => (
                    <li
                      key={index}
                      className={`${"my-2 cursor-pointer text-slate-700 hover:text-black"}${
                        filterCategory == category.slug
                          ? " text-black font-semibold"
                          : ""
                      }`}
                      onClick={() => handleFilterByCategory(category.slug)}
                    >
                      {category.name}
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="mt-7 mb-10">
              <h1 className="uppercase text-xl mb-4 px-4 font-semibold cursor-pointer">
                Batas Harga
              </h1>
              <div className="flex gap-2 mx-4">
                <div>
                  <TextInput
                    id="price_start"
                    type="text"
                    placeholder="Rp Min"
                  />
                </div>
                <div>
                  <TextInput id="price_end" type="text" placeholder="Rp Max" />
                </div>
              </div>
              <div className="flex justify-center mx-4 mt-5">
                <button className="bg-red-600 w-full py-2 text-white rounded-md font-semibold hover:bg-red-700">
                  Terapkan
                </button>
              </div>
            </div>
          </div>
          {/* list product terlaris */}
          <section
            className="bg-white pt-1 px-4 pb-10  min-h-[700px]"
            id="list-kategori mx-4"
          >
            {isLoading && (
              <div className="flex justify-center items-center mt-[300px]">
                <ClipLoader color="#36d7b7" size={50} />
              </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4 md:px-4">
              {products &&
                products.map((product, index) => (
                  <Link to={`/product/${product.slug}`} key={index}>
                    <ProductCard product={product} />
                  </Link>
                ))}
            </div>

            <div className="flex overflow-x-auto sm:justify-center">
              <ul className="flex justify-center items-center space-x-2">
                {/* Tombol ke halaman pertama */}
                {pagination.current_page > 3 && (
                  <>
                    <li>
                      <button
                        className="px-3 py-1 border rounded-md hover:bg-gray-200"
                        onClick={() => handlePageChange(1)}
                      >
                        1
                      </button>
                    </li>
                    {pagination.current_page > 4 && (
                      <li className="disabled">
                        <span className="px-3 py-1 border rounded-md">...</span>
                      </li>
                    )}
                  </>
                )}

                {/* Halaman saat ini dan dua halaman di sekitarnya */}
                {Array.from(
                  { length: Math.min(3, pagination.last_page) },
                  (_, index) => {
                    const pageNumber =
                      Math.max(2, pagination.current_page - 2) + index;
                    if (pageNumber <= pagination.last_page) {
                      return (
                        <li key={pageNumber}>
                          <button
                            className={`px-3 py-1 border rounded-md ${
                              pagination.current_page === pageNumber
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-200"
                            }`}
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </button>
                        </li>
                      );
                    }
                    return null;
                  }
                )}

                {/* Tombol untuk halaman terakhir */}
                {pagination.current_page < pagination.last_page - 2 && (
                  <>
                    {pagination.current_page < pagination.last_page - 3 && (
                      <li className="disabled">
                        <span className="px-3 py-1 border rounded-md">...</span>
                      </li>
                    )}
                    <li>
                      <button
                        className="px-3 py-1 border rounded-md hover:bg-gray-200"
                        onClick={() => handlePageChange(pagination.last_page)}
                      >
                        {pagination.last_page}
                      </button>
                    </li>
                  </>
                )}

                {/* Tombol Next */}
                <li>
                  <button
                    className={`px-3 py-1 border rounded-md ${
                      pagination.current_page === pagination.last_page
                        ? "disabled"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() =>
                      handlePageChange(pagination.current_page + 1)
                    }
                    disabled={pagination.current_page === pagination.last_page}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
            {products.length < 1 && (
              <div className="text-center">
                <p>Product Not Found!</p>
              </div>
            )}
          </section>
        </div>
      </MainLayout>
    </>
  );
}

export default ProductIndex;

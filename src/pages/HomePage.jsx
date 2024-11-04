import React, { useEffect, useState } from "react";
import NavbarMain from "../components/NavbarMain";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingRecommend, setIsLoadingRecommend] = useState(true);

  useEffect(() => {
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

    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
          {
            params: {
              limit: 12,
              type: "best",
            },
          }
        );
        if (response.data.meta.code == 200) {
          console.log(response.data.data);
          setProducts(response.data.data);
        }
      } catch (error) {
        console.log("error " + error);
      } finally {
        setIsLoadingRecommend(false);
      }
    };

    getCategories();
    getProducts();
  }, []);

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }

  function formatRupiah(amount) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(amount);
  }

  return (
    <>
      <MainLayout>
        <div className="px-4">
          {/* list categories */}
          <section
            className="bg-white pt-1 px-4 pb-10 mb-10"
            id="list-kategori"
          >
            <div className="mt-7">
              <h1 className="uppercase text-sm md:text-xl md:px-4 font-normal">
                Kategori
              </h1>
            </div>
            <div className="columns-3 md:columns-10 mt-4">
              {isLoadingCategories ? (
                <p>Loading categories...</p>
              ) : (
                categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex align-middle justify-center p-1 hover:p-2 hover:border"
                  >
                    <Link
                      to={`/products?category=${category.slug}`}
                      className="text-center"
                    >
                      <div className="flex justify-center pb-2">
                        <img
                          src={category.icon}
                          className="h-8 md:h-20"
                          alt={category.name}
                        />
                      </div>
                      <h3 className="text-center text-[8px] md:text-sm font-light">
                        {category.name}
                      </h3>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* list product terlaris */}
          <section className="bg-white pt-1 px-4 pb-10" id="list-kategori">
            <div className="mt-7">
              <h1 className="uppercase text-sm md:text-xl md:px-4 font-normal">
                PRODUK TERLARIS
              </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-4 md:px-4">
              {isLoadingRecommend ? (
                <p>Loading products</p>
              ) : (
                products &&
                products.map((product, index) => (
                  <Link to={`/product/${product.slug}`} key={index}>
                    <ProductCard index={index} product={product} />
                  </Link>
                ))
              )}
            </div>
            <div className="flex justify-center mt-10">
              <Link
                to={"/products"}
                className="text-xs md:text-sm border px-4 md:px-8 py-4 hover:bg-slate-100 text-slate-700"
              >
                Lihat Lainnya
              </Link>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
}

export default HomePage;

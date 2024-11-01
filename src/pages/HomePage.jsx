import React, { useEffect, useState } from "react";
import NavbarMain from "../components/NavbarMain";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";

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
          `${import.meta.env.VITE_API_URL}/api/products`
        );
        if (response.data.meta.code == 200) {
          setProducts(response.data.data.data);
          console.log(response.data.data.data);
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
              <h1 className="uppercase text-xl px-4 font-normal">Kategori</h1>
            </div>
            <div className="columns-10 mt-4">
              {isLoadingCategories ? (
                <p>Loading categories...</p>
              ) : (
                categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex align-middle justify-center p-1 hover:p-2"
                  >
                    <Link to="" className="text-center">
                      <div className="flex justify-center pb-2">
                        <img
                          src={category.icon}
                          className="h-20"
                          alt={category.name}
                        />
                      </div>
                      <h3 className="text-center text-sm font-light">
                        {category.name}
                      </h3>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* list product terlaris */}
          <section
            className="bg-white pt-1 px-4 pb-10 mb-10"
            id="list-kategori"
          >
            <div className="mt-7">
              <h1 className="uppercase text-xl px-4 font-normal">
                PRODUK TERLARIS
              </h1>
            </div>
            <div className="columns-10 mt-4"></div>
          </section>
          {/* list products */}
          <section className="bg-white pt-1 px-4 pb-10" id="list-kategori">
            <div className="mt-7">
              <h1 className="uppercase text-xl px-4 font-normal">
                REKOMENDASI
              </h1>
            </div>
            <div className="grid grid-cols-6 gap-3 mt-4 px-4">
              {isLoadingRecommend ? (
                <p>Loading products</p>
              ) : (
                products &&
                products.map((product, index) => (
                  <Link to="">
                    <div
                      className="border rounded-md hover:contrast-50 p-3"
                      key={index}
                    >
                      <img src="/image/cart.svg" alt="" className="h-22" />
                      <h2 className="uppercase mt-5 mb-10">
                        {truncateString(product.name, 40)}
                      </h2>
                      <div className="flex items-center justify-between">
                        <h2 className="text-base">
                          {formatRupiah(product.price)}
                        </h2>
                        <span className="text-sm">{product.sold} Terjual</span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
}

export default HomePage;

import axios from "axios";
import { Card, Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductIndex() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchProducts = async (page) => {
    try {
      let response = await axios.get(
        `http://localhost:8000/api/products?page=${page}`
      );
      setProducts(response.data.data.data); // Data product
      console.log(response.data.data.data);
      setCurrentPage(response.data.meta.current_page); // Halaman saat ini
      setLastPage(response.data.meta.last_page); // Halaman terakhir
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]); // Menjalankan saat currentPage berubah

  const nextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="container w-full px-20 mt-10">
      <div className="grid grid-cols-3 ">
        {products &&
          products.map((product) => (
            <Link to={`/product/${product.slug}`}>
              <Card
                key={product.id}
                className="max-w-sm mb-5"
                imgAlt={product.name}
                imgSrc={product.image}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>
              </Card>
            </Link>
          ))}
      </div>
      {/* <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div> */}
    </div>
  );
}

export default ProductIndex;

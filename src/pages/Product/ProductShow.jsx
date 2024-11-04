import axios from "axios";
import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { formatRupiah } from "../../utils/FormatRupiah";
import { TextInput } from "flowbite-react";

function ProductShow() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);
  const [image, setImage] = useState("");

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products/${slug}`
      );

      if (response.status == 200) {
        setProduct(response.data.data);
        setImage(response.data.data.image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleQtyOnChange = (type, value) => {
    const qtyCurrent = qty;
    const qtyUpdate = qty;
    if (type === "minus") {
      if (qtyCurrent > 1) setQty(qtyCurrent - 1);
    } else if (type === "plus") {
      if (qtyCurrent < product.qty) setQty(qtyCurrent + 1);
    } else {
      console.log("first");
      if (qtyCurrent < product.qty) {
        setQty(value);
      } else {
        setQty(product.qty);
      }
    }
  };

  const handleChangeImage = (image) => {
    setImage(image);
  };

  return (
    <>
      <MainLayout>
        <section className="px-4 mx-4 bg-white py-5 rounded-md grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
          {product && (
            <>
              <div>
                <img
                  src={image}
                  className="h-80 md:h-[500px] w-full object-cover aspect-square"
                  alt=""
                />
                <div className="columns-5 mt-5">
                  {product.gallery &&
                    product.gallery.map((gallery, index) => (
                      <img
                        src={gallery.photo}
                        className="aspect-square object-cover border-2 hover:brightness-50 cursor-pointer"
                        key={index}
                        onClick={() => handleChangeImage(gallery.photo)}
                      />
                    ))}
                </div>
              </div>
              <div>
                <h1 className="text-2xl">{product.name}</h1>
                <h5 className="my-2">{product.sold} Terjual</h5>

                <h2 className="text-3xl my-10">
                  {formatRupiah(product.price)}
                </h2>

                <div className="flex items-center gap-5">
                  <div className="text-sm md:text-xl font-light">Kuantitas</div>
                  <div className="flex">
                    <button
                      className="border border-slate-300 border-t-1 border-l-1 border-b-1 border-r-0 px-3 hover:bg-slate-200"
                      onClick={() => handleQtyOnChange("minus", null)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="border border-slate-300 w-14 md:w-20 text-center"
                      value={qty}
                      onChange={(e) => handleQtyOnChange("", e.target.value)}
                    />
                    <button
                      className="border border-slate-300 border-t-1 border-l-0 border-b-1 border-r-1 px-3 hover:bg-slate-200"
                      onClick={() => handleQtyOnChange("plus", null)}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm md:text-xl font-light">
                    Tersisa {product.qty} buah
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <button className="text-sm border border-red-700 hover:border-red-500 hover:bg-red-200 text-red-700 px-4 w-full md:w-60 md:px-8 py-1 md:py-4">
                    Masukkan keranjang
                  </button>
                  <button className="text-sm bg-red-700 hover:bg-red-500 px-4 w-full md:w-60 md:px-8 py-1 md:py-4 text-white">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      </MainLayout>
    </>
  );
}

export default ProductShow;

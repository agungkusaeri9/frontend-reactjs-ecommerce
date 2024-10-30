import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import Swal from "sweetalert2";

function ProductShow() {
  const { slug } = useParams();
  const [product, setproduct] = useState([]);
  const [qty, setQty] = useState(1);

  const fetchProductBySlug = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products/` + slug
      );
      setproduct(response.data.data);
    } catch (error) {}
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cart/add-to-cart",
        {
          product_id: product.id, // Pastikan ini adalah objek, bukan array
          amount: qty,
        },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTcyNjM0MTU0MiwiZXhwIjoxNzg2MzQxNDgyLCJuYmYiOjE3MjYzNDE1NDIsImp0aSI6IndGN3h4Ulh1M1lVZFFHMlkiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ._uV2aqziIRlWWeqDlleRI95gfyl_nxHMzwEvbmiJbs0`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Item added to cart:", response.data);
      Swal.fire({
        title: "success!",
        text: response.data.meta.message,
        icon: response.data.meta.status,
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.meta.message,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    fetchProductBySlug(slug);
  }, []);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="px-20 mt-10">
      <div className="flex gap-8">
        {/* Kolom detail produk (kiri) */}
        <div className="flex-1 min-w-[300px]">
          <img
            src={product.image}
            className="w-full h-auto mb-4"
            alt={product.name}
          />

          <p
            className="text-lg mb-4"
            dangerouslySetInnerHTML={{ __html: product.desc }}
          ></p>
        </div>

        {/* Kolom Add To Cart (kanan) */}
        <div className="flex-1 min-w-[300px]">
          <div className="text-left">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Qty" value="Qty" />
              </div>
              <TextInput
                id="qty"
                onChange={(e) => setQty(e.target.value)}
                type="number"
                value={qty}
              />
            </div>

            <Button type="submit">Add To Cart</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductShow;

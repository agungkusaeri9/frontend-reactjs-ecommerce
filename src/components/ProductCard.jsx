import React from "react";
import { truncateString } from "../utils/TruncateString";
import { formatRupiah } from "../utils/FormatRupiah";

function ProductCard({ product, className = "" }) {
  const { id, name, price, sold, image } = product;
  return (
    <>
      <div
        className={`border rounded-md hover:contrast-50 p-2 md:p-3 ${className}`}
      >
        <img
          src={image}
          alt=""
          className="h-15 md:h-22 aspect-square object-cover"
        />
        <h2 className="uppercase text-xs md:text-sm mt-2 md:mt-5 mb-4 md:mb-10">
          {truncateString(name, 40)}
        </h2>
        <div className="flex items-center justify-between">
          <h2 className="text-xs md:text-base">{formatRupiah(price)}</h2>
          <span className="text-[8px] md:text-xs">{sold} Terjual</span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

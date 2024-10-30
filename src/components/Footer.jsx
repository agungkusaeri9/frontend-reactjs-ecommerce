import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
function Footer() {
  const data_pembayaran = [
    "image/seabank.png",
    "image/bca.png",
    "image/bni.png",
    "image/bri.png",
    "image/bsi.png",
    "image/cmb.png",
    "image/mandiri.png",
    "image/permata.png",
    "image/alfamart.png",
    "image/alfamidi.png",
    "image/dandan.png",
    "image/indomaret.png",
    "image/visa.png",
    "image/shopeepay.png",
  ];
  const data_pengiriman = [
    "image/spx.png",
    "image/jt.png",
    "image/jtcargo.png",
    "image/jne.png",
    "image/ninja.png",
    "image/sicepat.png",
    "image/grabexpress.png",
    "image/gosend.png",
    "image/pasaja.png",
  ];

  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto max-w-screen-lg flex gap-[50px]">
        <div>
          <h5 className="font-semibold mb-5">layanan Pelanggan</h5>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Bantuan
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Metode Pembayaran
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                ShopeePay
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Koin Shopee
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Lacak Pesanan Pembeli
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Lacak Pengiriman Penjual
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Gratis Ongkir
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Pengembalian Barang & Dana
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Garansi Shopee
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-5">Jelajahi Shopee</h5>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Tentang Kami
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Karir
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Kebijakan Shopee
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Kebijakan Privasi
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Shopee Mall
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Seller Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Flash Sale
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Kontak Media
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm font-light">
                Shopee Affiliate
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-5">Pembayaran</h5>
          <div className="grid grid-cols-3 gap-4">
            {data_pembayaran &&
              data_pembayaran.map((pembayaran, index) => {
                return (
                  <img
                    key={index}
                    src={pembayaran}
                    className="aspect-video"
                    alt=""
                  />
                );
              })}
          </div>
          <h5 className="font-semibold mb-5 mt-5">Pengiriman</h5>
          <div className="grid grid-cols-3 gap-4">
            {data_pengiriman &&
              data_pengiriman.map((pengiriman, index) => {
                return (
                  <img
                    key={index}
                    src={pengiriman}
                    className="aspect-video"
                    alt=""
                  />
                );
              })}
          </div>
        </div>
        <div>
          <h5 className="font-semibold mb-5">Ikuti Kami</h5>
          <ul>
            <li className="mb-2 flex items-center gap-2">
              <div>
                <FaFacebook />
              </div>
              <div className="text-sm">Facebook</div>
            </li>
            <li className="mb-2 flex items-center gap-2">
              <div>
                <FaInstagram />
              </div>
              <div className="text-sm">Instagram</div>
            </li>
            <li className="mb-2 flex items-center gap-2">
              <div>
                <FaTwitter />
              </div>
              <div className="text-sm">Twitter</div>
            </li>
            <li className="mb-2 flex items-center gap-2">
              <div>
                <FaLinkedin />
              </div>
              <div className="text-sm">Linkedin</div>
            </li>
            <li className="mb-2 flex items-center gap-2">
              <div>
                <GiGraduateCap />
              </div>
              <div className="text-sm">Kampus Shopee</div>
            </li>
          </ul>
          <h5 className="font-semibold mb-5 mt-5">Keamanan</h5>
          <img src="image/keamanan.png" alt="" />
        </div>
        <div>
          <h5 className="font-semibold mb-5">Download Aplikasi Shopee</h5>
          <div className="flex items-center">
            <div>
              <img src="image/qrshopee.png" alt="" className="" />
            </div>
            <div className="">
              <a href="#" className="mb-2">
                <img src="image/appstoreshopee.png" alt="" className="h-4" />
              </a>
              <a href="#" className="mb-2">
                <img src="image/androidshopee.png" alt="" className="h-4" />
              </a>
              <a href="#" className="mb-2">
                <img src="image/apigallery.png" alt="" className="h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

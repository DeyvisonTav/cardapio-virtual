"use client";
import { FaCartShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
export function HeaderComponent() {
  return (
    <div
      className="flex lg:py-6 py-4 px-3 lg:px-[26.5rem] items-center justify-between
        bg-white shadow-lg shadow-zinc-600 w-screen fixed"
    >
      <Link href="/">
        <div
          className="lg:text-2xl text-lg font-bold absolute top-0 left-0 pt-1 pl-3
             lg:pt-4 lg:pl-[26.4rem]"
        >
          <Image src="/Logo.png" alt="Logo" width={50} height={50} />
        </div>
      </Link>
      <div className="flex items-center gap-5">
        <div
          className="lg:text-[20px] text-[18px] flex items-center lg:gap-2 
          bg-zinc-300 gap-1
          lg:p-2 p-1 rounded-md"
        >
          <div className="text-black">
            <FaLocationDot />
          </div>

          <p className="lg:text-sm text-xs">Limoeiro, PE</p>
        </div>
        <Link href="/confirmation-cart">
          <button
            className="lg:text-[20px] text-[18px] bg-yellow-100 lg:p-2 p-1
             rounded-md
           text-yellow-600"
          >
            <FaCartShopping />
          </button>
        </Link>
      </div>
    </div>
  );
}

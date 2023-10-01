"use client";
import { FaCartShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
export function HeaderComponent() {
  return (
    <div className="flex lg:py-8 py-4 items-center justify-between">
      <Link href="/">
        <div className="lg:text-2xl text-lg font-bold">Logo</div>
      </Link>
      <div className="flex items-center gap-5">
        <div
          className="lg:text-[20px] text-[18px] flex items-center lg:gap-2 
          bg-zinc-300 gap-1
          lg:p-2 p-1 rounded-md"
        >
          <div className="text-zinc-600">
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

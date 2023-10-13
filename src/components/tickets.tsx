"use client";
import { FaCartShopping } from "react-icons/fa6";
import { PiTimerFill } from "react-icons/pi";
import { BiPackage } from "react-icons/bi";
import { PiHamburgerFill } from "react-icons/pi";
import { motion } from "framer-motion";
export function TicktsComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div
        className="lg:absolute lg:-mt-[11rem] lg:ml-6 ml-2 flex text-[10px] 
      lg:text-base pt-5 gap-3 
       lg:gap-14 font-normal text-white"
      >
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <div
              className="h-5 w-5 lg:h-8 lg:w-8 flex items-center justify-center
             rounded-full bg-yellow-600 text-white"
            >
              <FaCartShopping />
            </div>
            <p>Compra simples e fácil</p>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className="h-5 w-5 lg:h-8 lg:w-8 flex items-center justify-center
          rounded-full bg-yellow-500 text-white"
            >
              <PiTimerFill />
            </div>
            <p>Entrega rápida</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <div
              className="h-5 w-5 flex lg:h-8 lg:w-8 items-center justify-center
          rounded-full bg-yellow-800 text-white"
            >
              <BiPackage />
            </div>
            <p>Embalagem mantém tudo intacto</p>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className="h-5 w-5 flex lg:h-8 lg:w-8 items-center justify-center
          rounded-full bg-yellow-800 text-white"
            >
              <PiHamburgerFill />
            </div>
            <p>Chega fresquinho até você</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

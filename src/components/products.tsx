"use client";
import { motion } from "framer-motion";
import { ModalComponent } from "./modal";

export function ProductsComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-white pt-8 font-bold pl-4 lg:text-2xl">
            Nosso Cardapio :
          </h1>
        </div>
        <div>
          <ModalComponent />
        </div>
      </div>

      <div className="text-white lg:mt-36 mt-20 text-xs lg:text-base ml-4">
        produtos...
      </div>
    </motion.div>
  );
}

"use client";
import Image from "next/image";
import { CarouselComponent } from "./carousel";
import { motion } from "framer-motion";
import { TicktsComponent } from "./tickets";

export function BannerComponent() {
  return (
    <div className="flex justify-between text-white pt-10">
      <div className="w-[55%] px-2 font-bold text-center pt-5 lg:pt-10 lg:text-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          Descubra o hambúrguer perfeito para saciar seu desejo a qualquer
          momento do dia.
          <p className="text-[10px] lg:text-2xl font-light">
            "Seu hambúrguer onde estiver, a qualquer hora do dia ou da noite."
          </p>
        </motion.div>
      </div>
      <div className="w-[10rem] lg:w-[25rem]">
        <CarouselComponent
          key={1}
          children={[
            <Image src="/burger3.png" alt="burger" width={300} height={300} />,
          ]}
        />
      </div>
    </div>
  );
}

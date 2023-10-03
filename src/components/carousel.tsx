"use client";
import React from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";

interface CarouselProps {
  children: React.ReactNode;
}

export function CarouselComponent({ children }: CarouselProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Carousel autoplay dots={false}>
        {children}
      </Carousel>
    </motion.div>
  );
}

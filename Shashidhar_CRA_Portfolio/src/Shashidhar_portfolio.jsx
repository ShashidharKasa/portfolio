import React from "react";
import { motion } from "framer-motion";

function ShashidharPortfolio() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-sky-100 to-cyan-200 p-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Shashidhar Kasa
      </h1>
      <p className="text-xl text-gray-600 mb-6 text-center max-w-2xl">
        Senior Cloud DevOps / SRE with 11+ years of experience. Passionate
        about automation, cloud-native tools, and building resilient systems.
      </p>
      <a
        href="#"
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Download Resume
      </a>
    </motion.div>
  );
}

export default ShashidharPortfolio;
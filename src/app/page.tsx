"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import FeatureContainer from '@/app/components/featureContainer/FeatureContainer';

export default function Home() {
  return (
    <div className="w-full h-screen" style={{ 
      height: 'calc(100vh - 73px)',
      backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 xmlns:svgjs=%27http://svgjs.dev/svgjs%27 width=%271440%27 height=%27560%27 preserveAspectRatio=%27none%27 viewBox=%270 0 1440 560%27%3e%3cg mask=%27url(%26quot%3b%23SvgjsMask1057%26quot%3b)%27 fill=%27none%27%3e%3crect width=%271440%27 height=%27560%27 x=%270%27 y=%270%27 fill=%27rgba(255%2c 255%2c 255%2c 1)%27%3e%3c/rect%3e%3cpath d=%27M 0%2c174 C 144%2c200.2 432%2c290 720%2c305 C 1008%2c320 1296%2c260.2 1440%2c249L1440 560L0 560z%27 fill=%27rgba(250%2c 160%2c 90%2c 1)%27%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id=%27SvgjsMask1057%27%3e%3crect width=%271440%27 height=%27560%27 fill=%27white%27%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e')",
      backgroundSize: 'cover'
    }}>
      {/* HERO */}
      <div className="flex flex-col md:flex-row gap-12 mx-5 md:mx-10 mt-10">
        <motion.div
          className="flex flex-1 flex-col gap-8 md:gap-12"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-center md:text-left">Impresión y Diseño a tu Alcance</h1>
          <p className="text-sm md:text-lg lg:text-xl text-center md:text-left">
            Explora nuestra amplia gama de servicios de 
            <span className="text-white"> impresión</span> con tarifas accesibles que empiezan desde 
            <span className="text-white"> 0.02€</span> para impresiones en 
            <span className="text-white"> blanco y negro</span> y desde
            <span className="multicolor-text"> 0.15€</span> para impresiones
            <span className="multicolor-text"> a color</span>
          </p>
          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="px-4 py-2 min-w-[120px] cursor-pointer border-none rounded-md text-white transition-colors duration-200 ease-in-out bg-[#F78C2E] hover:bg-[#faa05a]">
              Imprime YA!
            </button>
          </motion.div>
        </motion.div>
        
        {/* Esta imagen se muestra en todos los tamaños de pantalla */}
        <motion.div className="relative flex-1" style={{ height: '400px' }}
          initial={{ opacity: 0, x: 100 }} // Comienza con opacidad 0 y desplazado 100px a la derecha
          animate={{ opacity: 1, x: 0 }} // Anima hacia opacidad 1 y posición original (0)
          transition={{ duration: 1.5 }} // Duración de la transición
        >
          <Image src="/avatar.svg" alt="Avatar" layout="fill" objectFit="contain" />
        </motion.div>
        
        {/* Esta imagen se muestra solo en móvil */}
        <motion.div className="relative md:hidden" style={{ height: '400px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Image src="/avatar.svg" alt="Avatar" layout="fill" objectFit="contain" />
        </motion.div>
      </div>
      {/* SECTION */}
      <FeatureContainer />
    </div>
  );
}

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import FeatureContainer from '@/app/components/featureContainer/FeatureContainer';
import ServiceSlider from './components/ServiceSlider';

export default function Home() {
  return (
    <div className="w-full justify-center bg-white" style={{ background: 'linear-gradient(135deg, #ff9d6c 0%, #bb4e75 40%, #6a3093 100%)', height: '500px' }}>
      <div className="max-w-screen-xl mx-auto w-full">
        {/* HERO */}
        <div className="flex flex-col md:flex-row gap-12 mx-5 md:mx-10 lg:mx-20 2xl:mx-10">
          <motion.div
            className="flex flex-1 flex-col gap-8 md:gap-12"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl text-center md:text-left mt-16">Copistería en Villanueva de la Cañada</h1>
            
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button className="px-4 py-2 min-w-[200px] cursor-pointer border-none rounded-md text-white transition-colors duration-200 ease-in-out bg-tangerine-300 hover:bg-[#faa05a]">
                Imprime YA!
              </button>
            </motion.div>
          </motion.div>

          {/* Esta imagen se muestra en todos los tamaños de pantalla */}
          <motion.div className="relative flex-1 mt-16" style={{ height: '400px' }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image src="/libro1.svg" alt="Avatar" fill className="object-contain" />
          </motion.div>

          {/* Esta imagen se muestra solo en móvil */}
          <motion.div className="relative md:hidden w-full max-w-[300px] mx-auto" style={{ height: '300px', margin: '-100px auto 0 auto', padding: '0px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image src="/libro1.svg" alt="Avatar" layout="fill" objectFit="contain" />
          </motion.div>
        </div>
        
        {/* SECTION */}
          <FeatureContainer />
        
      </div>
    </div>
  );
}

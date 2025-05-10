'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import img1 from '../../../public/evento/1.png';
import img2 from '../../../public/evento/2.png';
import img3 from '../../../public/evento/3.png';
import img4 from '../../../public/evento/4.png';
import img5 from '../../../public/evento/5.png';
import img6 from '../../../public/evento/6.png';
import img7 from '../../../public/evento/7.png';
import img8 from '../../../public/evento/8.png';
import img9 from '../../../public/evento/9.jpg';
import img10 from '../../../public/evento/10.jpg';

const imagensLinha1 = [img1, img2, img3, img4, img9];
const imagensLinha2 = [img5, img6, img7, img8, img10];

const scrollVariants = {
  animateLeft: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 60,
        ease: 'linear',
      },
    },
  },
  animateRight: {
    x: ['-100%', '0%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 60,
        ease: 'linear',
      },
    },
  },
};

export function SobreEvento() {
  return (
    <section className="w-full -mt-32 flex flex-col items-center py-12 bg-white overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">Sobre o Evento</h2>
      <div className="w-[130px] h-1 bg-green-600 mb-8"></div>

      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-4"
          variants={scrollVariants}
          animate="animateLeft"
        >
          {[...imagensLinha1, ...imagensLinha1].map((img, i) => (
            <Image
              key={`linha1-${i}`}
              src={img}
              alt={`Evento ${i}`}
              className="w-[300px] h-[200px] object-cover"
            />
          ))}
        </motion.div>
      </div>

      <div className="overflow-hidden w-full mt-6">
        <motion.div
          className="flex gap-4"
          variants={scrollVariants}
          animate="animateRight"
        >
          {[...imagensLinha2, ...imagensLinha2].map((img, i) => (
            <Image
              key={`linha2-${i}`}
              src={img}
              alt={`Evento ${i}`}
              className="w-[300px] h-[200px] object-cover"
            />
          ))}
        </motion.div>
      </div>

        <button className="bg-green-600 mt-10 text-white text-base md:text-[18px] w-full sm:w-[320px] h-[50px] md:h-[70px] rounded-md font-semibold hover:bg-green-700 transition">
            Ver mais sobre
        </button>
    </section>
  );
}
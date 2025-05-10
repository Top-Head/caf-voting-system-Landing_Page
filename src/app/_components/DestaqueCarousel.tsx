'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import img1 from '/public/Destaque/a.png';
import img2 from '/public/Destaque/b.png';
import avatar1 from '/public/Destaque/avatar1.png';
import avatar2 from '/public/Destaque/avatar2.png';
import Image from 'next/image';

const testimonials = [
  {
    image: img1,
    title: 'Transformar o homem para transformar a sociedade',
    description: 'A escola é um palco de revolução de mentes, no sentido de termos o homem transformado e por consequência a sociedade.',
    author: 'Otavio Yegi Afonso',
    role: 'Direitor Geral',
    avatar: avatar1,
  },
  {
    image: img2,
    title: 'Não tenha motivação, tenha objetivos e disciplina.',
    description: 'Motivação? Motivação é para quem não tem objetivo, pois quem tem objetivo não precisa de motivação!',
    author: 'Antonio Campost Gabriel',
    role: 'Coordenador de Informática',
    avatar: avatar2,
  },
  {
    image: img2,
    title: 'Não tenha motivação, tenha objetivos e disciplina.',
    description: 'Motivação? Motivação é para quem não tem objetivo, pois quem tem objetivo não precisa de motivação!',
    author: 'António Campos Gabriel',
    role: 'Coordenador de Informática',
    avatar: avatar2,
  },
  {
    image: img2,
    title: 'Não tenha motivação, tenha objetivos e disciplina.',
    description: 'Motivação? Motivação é para quem não tem objetivo, pois quem tem objetivo não precisa de motivação!',
    author: 'António Campos Gabriel',
    role: 'Coordenador de Informática',
    avatar: avatar2,
  },
];

export default function DestaqueCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < testimonials.length - 3) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <section className="w-[1320px] mx-auto flex items-center justify-center py-10 px-4">
      <button onClick={prev} className="rounded-full border p-2 mr-4 hover:bg-gray-100 transition">
        <ArrowLeft className="flex items-center justify-center" />
      </button>

      <div className="relative overflow-hidden w-[1260px] h-[550px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 420}px)` }}
        >
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white border w-[375px] h-[523px] flex-shrink-0 mx-2 shadow-md">
              <div className="relative h-[247px] overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 ease-in-out"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
                {/*<div className="absolute top-3 left-3 bg-green-600 rounded-full w-16 h-6 mt-[180px] z-50" />*/}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-[17px]">{item.title}</h3>
                <p className="text-[15px] text-gray-700 mt-4">{item.description}</p>

                <hr className="my-4" />
                <div className="flex items-center gap-2">
                  <Image src={item.avatar} alt={item.author} width={40} height={40} className="rounded-full w-[55px] h-[55px]" />
                  <div>
                    <p className="font-semibold text-sm">{item.author}</p>
                    <p className="text-xs text-gray-600">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={next} className="rounded-full border p-2 ml-4 hover:bg-gray-100 transition">
        <ArrowRight />
      </button>
    </section>
  );
}

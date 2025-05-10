'use client';

import { useState } from 'react';
import { Box, ChevronDown } from 'lucide-react';
import box from '../../../public/mynaui_box-solid.png';
import { image } from 'framer-motion/client';
import Image from 'next/image';

const faqs = [
  { question: 'Como faço para votar ?', answer: 'Você pode votar acessando o site oficial e seguindo as instruções.' },
  { question: 'Quem pode votar ?', answer: 'Todos os cidadãos com registro válido podem votar.' },
  { question: 'Até quando posso votar?', answer: 'Você pode votar até o dia 15 de novembro às 17h.' },
  { question: 'Onde posso ver o resultado?', answer: 'O resultado será divulgado no site oficial após o encerramento da votação.' },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1253px] flex justify-between items-center mx-auto px-4 py-12 -mt-16">
      <div className="flex flex-col gap-2 mb-4">
        <div className='flex items-center gap-2'>
            <Image src={box} alt='imagem' />
            <span className="text-green-600 font-semibold text-[32px]">FAQ</span>
        </div>
        <h2 className="text-[54px] leading-tight" style={{ fontFamily: 'var(--font-koulen)' }}>PERGUNTAS MAIS<br />FREQUENTES</h2>
      </div>
      

      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-300 w-[737px] rounded p-4 cursor-pointer transition"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium ml-5">{faq.question}</span>
              <ChevronDown
                className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-800 ml-5">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';
import { Mail, Send } from 'lucide-react';
import logo from '../../../public/i.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-green-100 py-10 -mt-[400px]">

        <div className="flex flex-col items-center">
            <div className="flex justify-between w-full max-w-5xl items-center mb-6">
                <Image
                    src={logo}
                    alt="Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                />

                <div className="flex flex-wrap justify-center gap-6 text-sm text-black text-[18px] font-normal font-sans">
                    <a href="#">Sobre o sistema de votação</a>
                    <a href="#">Políticas de privacidade</a>
                    <a href="#">Termos e condições</a>
                    <a href="#">Política de Cookies</a>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center'>

        <h2 className="text-lg font-bold text-black mb-4 mt-6">
          BOLETIM INFORMATIVO
        </h2>

        <form className="flex justify-center items-center gap-2 w-full max-w-md mx-auto mb-4">
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 w-full">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Endereço de email"
              className="w-[400px] h-[40px] outline-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white p-3 h-[53px] w-[100px] rounded-md transition"
          >
            <Send />
          </button>
        </form>

        </div>

        <div className="flex flex-col items-center mt-10">
            <p className="text-[16px] text-black mt-auto text-center">
                © 2025 João Tambue, Todos os direitos reservados.
            </p>
        </div>
        

    </footer>
  );
}

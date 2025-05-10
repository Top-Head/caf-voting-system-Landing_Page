import Image from 'next/image';
import logo from '../../../public/image.jpg';
import votoImagem from '../../../public/im.png';
import img1 from '../../../public/bly.png';
import img2 from '../../../public/joao.png';
import img3 from '../../../public/lucelio.png';
import img4 from '../../../public/nazareth.png';

export function Hero() {
  return (
    <main className="bg-white font-sans min-h-screen flex justify-center">
      <div className="w-full px-4 lg:w-[1246px] lg:px-0">

        {/* Navbar */}
        <header className="w-full flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4 md:gap-0">
          <Image src={logo} alt="Logo" width={60} height={60} />

          <div className="inline-flex items-center gap-2 md:gap-6 px-3 md:px-6 py-2 border border-green-200 rounded-full flex-wrap justify-center">
            <button className="text-black text-sm md:text-[16px] font-medium">Início</button>
            <button className="text-black text-sm md:text-[16px] font-medium">Sobre</button>
            <button className="text-black text-sm md:text-[16px] font-medium">Lista de competidores</button>
          </div>
            
          <button className="md:ml-4 border w-[113px] h-[44px] border-green-600 text-green-600 px-3 md:px-5 py-1 rounded-sm hover:bg-green-600 hover:text-white transition">
            Login
          </button>
        </header>

        <section className="bg-[#B2E1CA] rounded-xl mx-2 md:mx-6 mt-1 p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">

            <div className='flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-0 items-center justify-between w-full lg:w-[1050px] mx-auto'>

                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] text-black" style={{ fontFamily: 'var(--font-koulen)' }} >
                    VOTE NO SEU<br />
                    PARTICIPANTE FAVORITO E<br />
                    AJUDE-O A ALCANCAR O<br />
                    PRIMEIRO LUGAR
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-center justify-center md:justify-start mt-6">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex -space-x-3">
                            <Image src={img1} width={32} height={32} className="w-[44px] h-[44px] rounded-full border-2 border-white" alt="Avatar 1" />
                            <Image src={img2} width={32} height={32} className="w-[44px] h-[44px] rounded-full border-2 border-white" alt="Avatar 2" />
                            <Image src={img3} width={32} height={32} className="w-[44px] h-[44px] rounded-full border-2 border-white" alt="Avatar 3" />
                            <Image src={img4} width={32} height={32} className="w-[44px] h-[44px] rounded-full border-2 border-white" alt="Avatar 4" />
                            <div className="w-[44px] h-[44px] bg-gray-200 text-xs flex items-center justify-center rounded-full border-2 border-white font-semibold">+48</div>
                            </div>
                            <span className="text-sm font-semibold text-black">Participantes</span>
                        </div>

                        <div className="text-center">
                            <p className="text-2xl md:text-[32px] font-bold text-black">+99</p>
                            <p className="text-sm font-semibold text-black">Projetos científico</p>
                        </div>

                        <div className="text-center">
                            <p className="text-2xl md:text-[32px] font-bold text-black">+99</p>
                            <p className="text-sm font-semibold text-black">Competidores</p>
                        </div>
                    </div>
                </div>

                {/* Imagem e botão */}
                <div className="flex flex-col items-center gap-6 md:gap-12 lg:gap-24">

                    <Image src={votoImagem} alt="Vote" width={290} height={290} className='w-[200px] md:w-[290px]' />

                    <button className="bg-green-600 text-white text-base md:text-[18px] w-full sm:w-[320px] h-[50px] md:h-[70px] rounded-md font-semibold hover:bg-green-700 transition">
                        Ver competidores
                    </button>

                </div>
            </div>

        </section>
      </div>
    </main>
  );
}
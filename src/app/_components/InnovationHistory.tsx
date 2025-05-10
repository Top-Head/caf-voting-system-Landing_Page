import Image from 'next/image';

const testimonials = [
  {
    name: 'João Tambue',
    role: 'Expositor da edição 2024',
    image: '/joao.png',
    content: `Participar da Mega Feira foi, sem dúvida, uma das experiências mais marcantes da minha vida.
Ter a chance de apresentar meu projeto para tantas pessoas, receber feedbacks e ver o impacto do que criei me fez acreditar ainda mais no meu potencial.
A feira não só me impulsionou como estudante, mas também me inspirou a seguir carreira na área de tecnologia.
É incrível fazer parte de algo que transforma ideias em realidades.`
  },
  {
    name: 'Carla Menezes',
    role: 'Expositora 2023',
    image: '/user1.png',
    content: `A Mega Feira abriu portas que eu nem imaginava. Conheci profissionais incríveis e fiz conexões que levo até hoje.`
  },
  {
    name: 'Pedro Souza',
    role: 'Visitante 2022',
    image: '/user2.png',
    content: `Ver tantos jovens apresentando ideias inovadoras me deixou esperançoso sobre o futuro da tecnologia.`
  },
  {
    name: 'Aline Rocha',
    role: 'Mentora 2024',
    image: '/user3.png',
    content: `Mentorar esses talentos foi uma experiência única. A energia da feira é contagiante!`
  },
  {
    name: 'Felipe Martins',
    role: 'Jurado 2023',
    image: '/user4.png',
    content: `Avaliar projetos tão criativos foi um desafio e um privilégio. A cada ano a feira se supera.`
  },
];

export default function InnovationHistory() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-8 px-6 py-12 bg-white relative overflow-hidden">
      {/* Texto à esquerda */}
      <div className="max-w-xl z-10">
        <h2 className="text-4xl font-black uppercase leading-snug text-black">
          Ao longo dos anos, uma<br />história de <span className="text-green-700">Inovacao</span>
        </h2>
        <p className="text-lg mt-6 text-gray-800 leading-relaxed">
          "Anos de inovação.<br />
          Milhares de ideias. Muitas histórias para contar.<br />
          Veja o que quem viveu a feira tem a dizer."
        </p>
      </div>

      {/* Depoimentos sobrepostos */}
      <div className="relative w-full max-w-md h-[480px]">
        {testimonials.map((item, index) => {
          const zIndex = index === 0 ? 50 : 10 + index;
          const rotate = index === 0 ? 'rotate-0' : `rotate-${(index % 2 === 0 ? 1 : -1) * (index + 1)}`;
          const translate = `translate-x-[${index * 6}px] translate-y-[${index * 6}px]`;
          const opacity = index === 0 ? 'opacity-100' : 'opacity-80';

          return (
            <div
                key={index}
                className={`absolute top-0 left-0 bg-white border border-gray-300 shadow-md p-6 w-full transition-all duration-300 ease-in-out ${rotate} ${opacity} ${index === 0 ? 'hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-pointer' : ''}`}
                style={{
                    transform: `translate(${index * 10}px, ${index * 10}px) rotate(${(index % 2 === 0 ? 1 : -1) * (index * 1.5)}deg)`,
                    zIndex,
                }}
                >

              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                “{item.content}”
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

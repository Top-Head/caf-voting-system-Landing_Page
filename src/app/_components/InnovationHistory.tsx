import Image from 'next/image';


export default function InnovationHistory() {
  return (
    <section className="flex flex-col -mt-10 justify-center items-center h-screen px-6 py-12 bg-white relative overflow-hidden">
      {/* Texto à esquerda */}
        <h2 className="whitespace-nowrap text-8xl -mt-24 text-center font-bold">
          Ao longo dos anos, uma<br />história de <span className="text-green-700">Inovação</span>
        </h2>
        <div className=" mt-4">
          <p className="text-4xl text-center font-semibold mt-6 text-gray-800 leading-relaxed">
            "Anos de inovação.<br />
            Milhares de ideias. Muitas histórias para contar.<br />
            Veja o que quem viveu a feira tem a dizer."
          </p>
        </div>
        

    </section>
  );
}

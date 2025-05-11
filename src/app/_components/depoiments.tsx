"use client";

import { useRef } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import img1 from "../../../public/avatares/Joao.jpg";
import img2 from "../../../public/avatares/david.jpg";
import img3 from "../../../public/avatares/mbala.jpg";
import img4 from "../../../public/avatares/joy.jpg";
import Image from "next/image";
import { StaticImageData } from "next/image";


// ===========================
// Tipagens
// ===========================
type ImageProps = {
  src: string | StaticImageData;
  alt?: string;
};

type FeatureSectionProps = {
  icon: ImageProps;
  title: string;
  description: string;
  personName: string;
  personTitle: string;
};


type Props = {
  heading: string;
  featureSections: FeatureSectionProps[];
};

export type Layout417Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// ===========================
// Componente Principal
// ===========================
export const Layout417 = (props: Layout417Props) => {
  const { heading, featureSections } = {
    ...Layout417Defaults,
    ...props,
  } as Props;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <section ref={containerRef}>
      <div className="container relative h-[300svh] lg:h-[300vh] -mt-32">
        <div className="sticky top-0 grid h-[100svh] grid-cols-1 content-center items-center justify-center px-[5%] md:flex md:content-normal md:px-0 lg:h-screen">

          {/* Cartões animados */}
          <div className="sticky top-0 mx-auto mt-12 flex min-h-[24.5rem] w-full max-w-sm flex-col items-center justify-center sm:mt-24 md:relative lg:mt-0">
            {featureSections.map((section, index) => (
              <FeatureSection
                key={index}
                section={section}
                index={index}
                totalSections={featureSections.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Camada de fundo */}
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

// ===========================
// Componente de Seção de Destaque
// ===========================
const FeatureSection = ({
  section,
  index,
  totalSections,
  scrollYProgress,
}: {
  section: FeatureSectionProps;
  index: number;
  totalSections: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const sectionScrollStart = index / totalSections;
  const sectionScrollEnd = (index + 1) / totalSections;

  const rotate = useTransform(scrollYProgress, [sectionScrollStart, sectionScrollEnd], [0 + index * 3, -10]);
  const translateY = useTransform(scrollYProgress, [sectionScrollStart, sectionScrollEnd], ["0vh", "-120vh"]);

  return (
    <motion.div
      className="absolute mx-6 flex w-[500px] h-[400px] flex-col justify-between border border-border-primary bg-white p-8 shadow-lg md:mx-0"
      style={{
        rotate: isMobile && index === totalSections - 1 ? "9deg" : rotate,
        translateY: isMobile && index === totalSections - 1 ? undefined : translateY,
        zIndex: `${totalSections - index}`,
      }}
    >
      <div className=" flex items-center gap-2 mb-6 md:mb-8">
        <Image src={section.icon.src} alt={section.icon.alt ?? "Imagem"} width={100} height={100} className="w-[55px] h-[55px] object-cover rounded-full" />
        <div>
          <h1 className="text-[16px] font-semibold text-black">
            {section.personName}
          </h1>
          <h1>
            {section.personTitle}
          </h1>
        </div>
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.title}</h3>
      <p>{section.description}</p>
    </motion.div>
  );
};

// ===========================
// Dados Padrão
// ===========================
export const Layout417Defaults: Layout417Props = {
  heading: "Reals",
  featureSections: [
    {
      icon: {
        src: img1,
        alt: "Imagem João 1",
      },
      title: "Subheading one",
      description: '"Participar da Mega Feira foi, sem dúvida, uma das experiências mais marcantes da minha vida. Ter a chance de apresentar meu projeto para tantas pessoas, receber feedbacks e ver o impacto do que criei me fez acreditar ainda mais no meu potencial. A feira não só me impulsionou como estudante, mas também me inspirou a seguir carreira na área de tecnologia. É incrível fazer parte de algo que transforma ideias em realidades."',
       personName: "João Tambue",
      personTitle: "Expositor da edição 2023",
    },
    {
      icon: {
        src: img2,
        alt: "Imagem João 2",
      },
      title: "Subheading two",
      description: "Texto do segundo card.",
      personName: "David Armando",
      personTitle: "Convidada especial",
    },
    {
      icon: {
        src: img3,
        alt: "Imagem João 3",
      },
      title: "Subheading three",
      description: "Texto do terceiro card.",
      personName: "Domingos Mbala",
      personTitle: "Mentor técnico",
    },
    {
      icon: {
        src: img4,
        alt: "Imagem João 4",
      },
      title: "Subheading four",
      description: "Texto do quarto card.",
      personName: "Antonica",
      personTitle: "Palestrante internacional",
    },
  ],
};


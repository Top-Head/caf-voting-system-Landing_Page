import { Hero } from "./_components/hero";
import { SobreEvento} from "./_components/SobreEvento";
import FaqSection from "./_components/FaqSection";
import DestaqueCarousel from "./_components/DestaqueCarousel";
import InnovationHistory from "./_components/InnovationHistory";
import { Testimonial23 } from "./_components/depoiments";

export default function Home () {
  return(
    <main>
      <Hero />
      <SobreEvento />
      <FaqSection />
      <DestaqueCarousel />
      <InnovationHistory />
      <Testimonial23 />
    </main>
  )
}
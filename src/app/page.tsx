import { Hero } from "./_components/hero";
import { SobreEvento} from "./_components/SobreEvento";
import FaqSection from "./_components/FaqSection";
import { Title } from './_components/title';
import DestaqueCarousel from "./_components/DestaqueCarousel";
import InnovationHistory from "./_components/InnovationHistory";
import { Layout417 } from "./_components/depoiments";
import Footer from "./_components/Footer";


export default function Home () {
  return(
    <main>
      <Hero />
      <SobreEvento />
      <FaqSection />
      <Title />
      <DestaqueCarousel />
      <InnovationHistory />
      <Layout417 />
      <Footer />
    </main>
  )
}
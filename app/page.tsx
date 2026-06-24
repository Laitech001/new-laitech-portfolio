import { Header, Footer, AmbientBackground } from "@/components/layout";
import { 
  Hero,
  LogoCloud,
  Work,
  Approach,
  Stack,
  Testimonial,
  Contact, 
} from '@/components/sections'
export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <AmbientBackground />
      <Header />

      <main id="main">
        <Hero />
        <LogoCloud />
        <Work />
        <Approach />
        <Stack />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

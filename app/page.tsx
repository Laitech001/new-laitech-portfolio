import { Header, Footer, AmbientBackground } from "@/components/layout";
import { 
  Hero,
  FeaturedProject,
  ProjectGrid,
  About,
  Journey,
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
        <ProjectGrid />
        <FeaturedProject />
        <About />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

import Footer from "./components/Footer";
import HeaderComponent from "./components/Header";
import NavComponent from "./components/NavConponent";
import SectionAmbassadeur from "./components/SectionAmbassadeur";
import SectionAttentes from "./components/SectionAttentes";
import SectionAvantages from "./components/SectionAvantages";
import SectionBlog from "./components/SectionBlog";
import SectionCalen from "./components/SectionCalen";
import SectionFaq from "./components/SectionFaq";
import SimpleSection from "./components/SimpleSection";

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <div id="about">
        <SimpleSection opacity={0.8}>
          <p>
          Créé en 2022 au Gabon , Cabalou est une plateforme de mise en relation entre les propriétaires d'hébergements et les voyageurs d’affaires. Celle-ci permet aux professionnels en voyage de réserver des logements confortables, fiables et idéalement situés dans diverses villes d'Afrique.
          </p>
          <p>
          Chaque jour, nous travaillons avec passion et détermination pour devenir la plateforme de voyage la plus aimée, la plus utilisée et la plus rentable pour les professionnels en Afrique d’ici 2030.
          </p>
          <p>
          Nous sommes convaincus que Cabalou est bien plus qu’un service d’hébergement, c'est l'occasion pour les voyageurs de vivre une expérience authentique car chaque voyage d’affaires en Afrique est une opportunité d’immersion culturelle .
          </p>
        </SimpleSection>
      </div>
      <SectionAmbassadeur />
      <SectionAttentes />
      <SectionAvantages />
      <SectionFaq />
      <Footer />
    </main>
  )
}

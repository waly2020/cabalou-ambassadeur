"use client"
import { useState } from "react";
import HeaderComponent from "./components/Header";
import SectionAmbassadeur from "./sections/SectionAmbassadeur";
import SectionAttentes from "./sections/SectionAttentes";
import SectionAvantages from "./sections/SectionAvantages";
import SectionFaq from "./sections/SectionFaq";
import SimpleSection from "./sections/SimpleSection";
import Footer from "./sections/Footer";

export default function Home() {
  const [active,setActive] = useState("");
  const setDisplay = () =>{
    if(active == "active"){
      setActive("")
    }else{
      setActive("active")
    }
  }
  return (
    <main>
      <HeaderComponent />
      <div id="about">
        <SimpleSection opacity={0.8}>
          <p>
          Créé en 2022 au Gabon , Cabalou est une plateforme de mise en relation entre les propriétaires d'hébergements et les voyageurs d’affaires. Celle-ci permet aux professionnels en voyage de réserver des logements confortables, fiables et idéalement situés dans diverses villes d'Afrique.
          <button className={`btn-read-more plus ${active}`} onClick={setDisplay}>..Lire plus</button>
          </p>
          <div className={`read-more ${active}`}>
          <p>
          Chaque jour, nous travaillons avec passion et détermination pour devenir la plateforme de voyage la plus aimée, la plus utilisée et la plus rentable pour les professionnels en Afrique d’ici 2030.
          </p>
          <p>
          Nous sommes convaincus que Cabalou est bien plus qu’un service d’hébergement, c'est l'occasion pour les voyageurs de vivre une expérience authentique car chaque voyage d’affaires en Afrique est une opportunité d’immersion culturelle.
          <button className={`btn-read-more ${active}`} onClick={setDisplay}>Lire moins</button>
          </p>
          </div>
        </SimpleSection>
      </div>
      <SectionAmbassadeur />
      <SectionAttentes />
      <SectionAvantages />
      <SectionFaq />
      <Footer/>
    </main>
  )
}

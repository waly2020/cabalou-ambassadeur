import "../../styles/home/devenirAbass.scss";
import StepCard from "./StepCard";
import Image from "next/image";
import {FaUserAlt,FaUserCheck,FaRegEdit,FaRegThumbsUp} from "react-icons/fa"

export default function SectionAmbassadeur(){
    return (
        <section className="devenir-ambassadeur" id="tuto">
          <div className="da-sec-titre">
            <h2>Comment devenir ambassadeur ?</h2>
          </div>
          <div className="da-sec-steps">
            <StepCard icon={<FaRegEdit/>} step={1} titre="Inscription">
              <p>Pour vous inscrire veuillez remplir le formulaire.</p>
            </StepCard>
            <StepCard icon={<FaRegThumbsUp/>} step={2} titre="Vérification et Présélection">
              <p>
              Les informations données par le candidat feront l’objet d’une vérification.Cabalou se charge de traiter toutes les demandes reçues et de recontacter les meilleurs postulants.
              </p>
            </StepCard>
            <StepCard icon={<FaRegThumbsUp/>} step={3} titre="Seléction">
              <p>
              Entretien en ligne ou téléphonique par un panel de l'équipe Cabalou.
              </p>
            </StepCard>
            <StepCard icon={<FaUserAlt/>} step={4} titre="Entretien">
              <p>
              Le candidat retenu après entretien sera contacté dans 72 heures.

              </p>
            </StepCard>
          </div>
        </section>
    );
} 
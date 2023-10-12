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
            <StepCard icon={<FaRegEdit/>} step={1} titre="Inscription"/>
            <StepCard icon={<FaRegThumbsUp/>} step={2} titre="Entretien a l'agence"/>
            <StepCard icon={<FaUserAlt/>} step={3} titre="Enregistrement des biens"/>
          </div>
        </section>
    );
}
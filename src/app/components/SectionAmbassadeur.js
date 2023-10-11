import "../../styles/home/devenirAbass.scss";
import StepCard from "./StepCard";
import Image from "next/image";
import {FaUserAlt,FaUserCheck,FaRegEdit,FaRegThumbsUp} from "react-icons/fa"

export default function SectionAmbassadeur(){
    return (
        <section className="devenir-ambassadeur" id="tuto">
          <div className="canvas">
            <div className="canvas-img cm-1"></div>
            <div className="canvas-img cm-2"></div>
            <div className="canvas-img cm-3"></div>
            <div className="canvas-img cm-4"></div>
          </div>
            <div className="am-sec-step">
              <h2>Comment devenir ambassadeur ?</h2>
              <StepCard step={1} titre="L'inscription en ligne." icon={<FaUserAlt/>} color="#faaa3a"/>
              <StepCard step={2} titre="L'entretient a l'agence." icon={<FaRegEdit/>} color="#46c4d9"/>
              <StepCard step={3} titre="Vous patientez les resulats." icon={<FaRegThumbsUp/>} color="#ee7a77"/>
              <StepCard step={4} titre="On vous appel." icon={<FaUserCheck/>}/>
              <a href="#" className="link-form">
              <button className="cta">Je commence mon inscription !</button>
              </a>
            </div>
            <div className="am-sec-img">
              <Image src="/assets/images/sec-ambassadeurs.png" width={1500} height={1000} alt="devenir ambassadeur"/>
            </div>
        </section>
    );
}
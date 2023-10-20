"use client";
import { useState } from "react";
import "../../styles/forms/style.scss";
import {AiOutlineUser,AiOutlineMail,AiOutlineNumber,AiOutlineHome,AiFillPieChart} from "react-icons/ai";
import {LiaHospitalSymbolSolid,LiaBirthdayCakeSolid} from "react-icons/lia";
import {PiStudentBold} from "react-icons/pi";
import {GiAchievement,GiSkills,GiNetworkBars} from "react-icons/gi";
import {MdWorkOutline} from "react-icons/md";
import Image from "next/image";
import IconInput from "../components/IconInput";
import InputSelect from "../components/InputSelect";
import CheckBox from "../components/CheckBox";
export default function FormPage() {
    const [index,setIndex] = useState(0);
    const activeStep = (i) =>{
        if(index == i){
            return "active";
        }else{
            return "none";
        }
    }
    const activeStepNumber = (i) =>{
      if(i <= index){
          return "active";
      }else{
          return "none";
      }
  }
    const incrementIndex = () =>{
        if(index < 4){
            setIndex(index + 1);
        }
    }
    const desIncrementIndex = () =>{
        if(index >= 1){
            setIndex(index - 1);
        }
    }
  return (
    <>
      <main className="body-form">
        <form className="form-step">
          <div className="form-step-image">
            <Image
              src="/assets/logo/logo.svg"
              width={200}
              height={80}
              alt="logo"
            />
          </div>
          <div className="step-form-content">

            <div className="step-chart">

              <div className="progress-bar">
                <div className="progress-bar-anime" style={{width : `${(100/3) * index}%`}}></div>
                <div className={`progress-step ps-0 ${activeStepNumber(0)}`}>1</div>
                <div className={`progress-step ps-1 ${activeStepNumber(1)}`}>2</div>
                <div className={`progress-step ps-2 ${activeStepNumber(2)}`}>3</div>
                <div className={`progress-step ps-3 ${activeStepNumber(3)}`}>4</div>
              </div>

            </div>

            <div className="steps-form">
              <div className={`step-form-item sfi-1 ${activeStep(0)}`}>
                <IconInput type="text" name="name" placeholder="Votre nom..." className="g-col-6" icon={<AiOutlineUser/>}/>
                <IconInput type="text" name="last-name" placeholder="Votre prenom..." className="g-col-6" icon={<AiOutlineUser/>}/>
                <IconInput type="email" name="email" placeholder="Votre email..." className="g-col-6" icon={<AiOutlineMail/>}/>
                <IconInput type="tel" name="telephone" placeholder="Numero de telephone..." className="g-col-3" icon={<p className="text-icon">+241</p>}/>
                <IconInput type="text" name="residence" placeholder="Residence..." className="g-col-3" icon={<AiOutlineHome/>}/>
                <IconInput type="date" name="date-naissance" placeholder="date de naissance..." className="g-col-3" icon={<LiaBirthdayCakeSolid/>}/>
                <IconInput type="text" name="lieu-naissance" placeholder="Lieu de naissance..." className="g-col-3" icon={<LiaHospitalSymbolSolid/>}/>
              </div>
              <div className={`step-form-item sfi-2 ${activeStep(1)}`}>
                <InputSelect name="statut" values={["Demandeur d'emploi","Employé","Chomage"]} placeholder="Statut actuel d'emploi" className="g-col-6"/>
                <IconInput type="number" placeholder="annee d'etude" name="etude" icon={<AiOutlineNumber/>} iconEnd={<p className="text-icon ic-end">ans</p>} className="g-col-6"/>
                <IconInput type="text" name="diplome" placeholder="Diplomes obtenus" icon={<PiStudentBold/>} className="g-col-6"/>
                <IconInput name="specialites" placeholder="Votre specialisation..." icon={<GiAchievement/>} className="g-col-6"/>
              </div>
              <div className={`step-form-item sfi-3 ${activeStep(2)}`}>
                <InputSelect values={["0 - 12 mois","1 - 2 mois","2 - 3 mois","3 - 4 mois","4 - 5 mois","5 ans et plus"]} name="a" placeholder="Annee d'experience" className="g-col-6"/>
                <IconInput name="entreprise" placeholder="Entreprise..." icon={<MdWorkOutline/>} className="g-col-3"/>
                <IconInput name="poste" placeholder="Poste occupe..." icon={<GiNetworkBars/>} className="g-col-3"/>
                <IconInput name="reponsabilites" placeholder="Responsabilite..." icon={<AiFillPieChart/>} className="g-col-6"/>
                <CheckBox values={["Communication","Relations","Marche immobilier local","Technologie","Compétences informatiques"]} className="g-col-6"/>
              </div>
              <div className={`step-form-item sfi-4 ${activeStep(3)}`}></div>
            </div>

            <div className="step-button">
                <button className="preview" type="button" onClick={desIncrementIndex}>Retour</button>
                <button className="next" type="button" onClick={incrementIndex} style={{display : index >= 3 ? "none" : "block"}}>Suivant</button>
                <button className="next" type="submit" style={{display : index >= 3 ? "block" : "none"}}>Envoyé ma candidature</button>
            </div>

          </div>
        </form>
      </main>
    </>
  );
}

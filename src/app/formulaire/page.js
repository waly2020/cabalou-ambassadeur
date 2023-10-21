"use client";
import { useState } from "react";
import "../../styles/forms/style.scss";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineNumber,
  AiOutlineHome,
  AiFillPieChart,
} from "react-icons/ai";
import { LiaHospitalSymbolSolid, LiaBirthdayCakeSolid,LiaLanguageSolid } from "react-icons/lia";
import { PiStudentBold } from "react-icons/pi";
import { GiAchievement, GiNetworkBars } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import IconInput from "../components/IconInput";
import InputSelect from "../components/InputSelect";
import CheckBox from "../components/CheckBox";
import TextAreas from "../components/TextAreas";

export default function FormPage() {
  const values = [
    { label: "Communication", check: false },
    { label: "Relations", check: false },
    { label: "Marché immobilier local", check: false },
    { label: "Tourisme local.", check: false },
    { label: "Compétences informatiques", check: false },
    { label: "Autres competance", check: false },
  ];
  const descUser = [
    { label: "Proactif", check: false },
    { label: "Autonome", check: false },
    {
      label: "Orienté solutions et toujours prêt à résoudre les problèmes",
      check: false,
    },
    {
      label:
        "Passionné par la culture locale et désireux de la partager avec d'autres",
      check: false,
    },
    { label: "Intègre et digne de confiance", check: false },
  ];
  const anglais = [
    {
      label: "Écrit",
      check: false,
    },
    {
      label: "Parlé",
      check: false,
    },
  ];
  const francais = [
    {
      label: "Écrit",
      check: false,
    },
    {
      label: "Parlé",
      check: false,
    },
  ];
  const [index, setIndex] = useState(0);
  const activeStep = (i) => {
    if (index == i) {
      return "active";
    } else {
      return "none";
    }
  };
  const activeStepNumber = (i) => {
    if (i <= index) {
      return "active";
    } else {
      return "none";
    }
  };
  const incrementIndex = () => {
    if (index < 5) {
      setIndex(index + 1);
    }
  };
  const desIncrementIndex = () => {
    if (index >= 1) {
      setIndex(index - 1);
    }
  };
  return (
    <>
      <main className="body-form">
        <form className="form-step">
          <div className="step-form-content">
            <div className="step-chart">
              <div className="progress-bar">
                <div
                  className="progress-bar-anime"
                  style={{ width: `${(100 / 4) * index}%` }}
                ></div>
                <div className={`progress-step ps-0 ${activeStepNumber(0)}`}>
                  1
                </div>
                <div className={`progress-step ps-1 ${activeStepNumber(1)}`}>
                  2
                </div>
                <div className={`progress-step ps-2 ${activeStepNumber(2)}`}>
                  3
                </div>
                <div className={`progress-step ps-3 ${activeStepNumber(3)}`}>
                  4
                </div>
                <div className={`progress-step ps-4 ${activeStepNumber(4)}`}>
                  5
                </div>
              </div>
            </div>

            <div className="steps-form">
              <div className={`step-form-item sfi-1 ${activeStep(0)}`}>
                <IconInput
                  type="text"
                  name="name"
                  placeholder="Votre nom..."
                  className="g-col-6"
                  icon={<AiOutlineUser />}
                />
                <IconInput
                  type="text"
                  name="last-name"
                  placeholder="Votre prenom..."
                  className="g-col-6"
                  icon={<AiOutlineUser />}
                />
                <IconInput
                  type="email"
                  name="email"
                  placeholder="Votre email..."
                  className="g-col-6"
                  icon={<AiOutlineMail />}
                />
                <IconInput
                  type="tel"
                  name="telephone"
                  placeholder="Numero de telephone..."
                  className="g-col-3"
                  icon={<p className="text-icon">+241</p>}
                />
                <IconInput
                  type="text"
                  name="residence"
                  placeholder="Residence..."
                  className="g-col-3"
                  icon={<AiOutlineHome />}
                />
                <IconInput
                  type="date"
                  name="date-naissance"
                  placeholder="date de naissance..."
                  className="g-col-3"
                  icon={<LiaBirthdayCakeSolid />}
                />
                <IconInput
                  type="text"
                  name="lieu-naissance"
                  placeholder="Lieu de naissance..."
                  className="g-col-3"
                  icon={<LiaHospitalSymbolSolid />}
                />
              </div>
              <div className={`step-form-item sfi-2 ${activeStep(1)}`}>
                <InputSelect
                  name="statut"
                  values={["Demandeur d'emploi", "Employé", "Chomage"]}
                  placeholder="Statut actuel d'emploi"
                  className="g-col-6"
                />
                <IconInput
                  type="number"
                  placeholder="annee d'etude"
                  name="etude"
                  icon={<AiOutlineNumber />}
                  iconEnd={<p className="text-icon ic-end">ans</p>}
                  className="g-col-6"
                />
                <IconInput
                  type="text"
                  name="diplome"
                  placeholder="Diplomes obtenus"
                  icon={<PiStudentBold />}
                  className="g-col-6"
                />
                <IconInput
                  name="specialites"
                  placeholder="Votre specialisation..."
                  icon={<GiAchievement />}
                  className="g-col-6"
                />
              </div>
              <div className={`step-form-item sfi-3 ${activeStep(2)}`}>
                <InputSelect
                  values={[
                    "0 - 12 mois",
                    "1 - 2 mois",
                    "2 - 3 mois",
                    "3 - 4 mois",
                    "4 - 5 mois",
                    "5 ans et plus",
                  ]}
                  name="a"
                  placeholder="Annee d'experience"
                  className="g-col-6"
                />
                <IconInput
                  name="entreprise"
                  placeholder="Entreprise..."
                  icon={<MdWorkOutline />}
                  className="g-col-3"
                />
                <IconInput
                  name="poste"
                  placeholder="Poste occupe..."
                  icon={<GiNetworkBars />}
                  className="g-col-3"
                />
                <IconInput
                  name="reponsabilites"
                  placeholder="Responsabilite..."
                  icon={<AiFillPieChart />}
                  className="g-col-6"
                />
                <CheckBox
                  contentClass="g-col-1"
                  values={values}
                  className="g-col-6"
                  title="Domaineds de competences"
                />
              </div>
              <div className={`step-form-item sfi-4 ${activeStep(3)}`}>
                <CheckBox
                contentClass="g-col-1"
                  values={descUser}
                  className="g-col-6"
                  title="Comment vous decririerz-vous ?"
                />
                <InputSelect
                  values={[
                    "1 a 2 heurs/jour",
                    "2 a 4 heurs/jour",
                    "4 huers et plus par jour",
                  ]}
                  placeholder="Quel temps pouvez-vous consacrer à l'activité d'ambassadeur?"
                  className="g-col-3"
                />
                <IconInput icon={<LiaLanguageSolid/>} name="langue" className="g-col-3" placeholder="Quelles langues vernaculaires parlez-vous ?" controller={(v)=>{console.log(v)}}/>
                <p className="g-col-6">Langues</p>
                <CheckBox
                  values={francais}
                  title="Francais"
                  className="g-col-3"
                />
                <CheckBox
                  values={anglais}
                  title="Anglais"
                  className="g-col-3"
                />
              </div>
              {/*  */}
              <div className={`step-form-item sfi-5 ${activeStep(4)}`}>
                <TextAreas className="g-col-6" min={1} max={255}/>
              </div>
              {/*  */}
            </div>

            <div className="step-button">
              <button
                className="preview"
                type="button"
                onClick={desIncrementIndex}
              >
                <IoMdArrowRoundBack />
              </button>
              <button
                className="next"
                type="button"
                onClick={incrementIndex}
                style={{ display: index >= 4 ? "none" : "block" }}
              >
                Suivant
              </button>
              <button
                className="next"
                type="submit"
                style={{ display: index >= 4 ? "block" : "none" }}
              >
                Envoyé ma candidature
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

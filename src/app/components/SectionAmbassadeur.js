import "../../styles/home/devenirAbass.scss";
import StepCard from "./StepCard";
import {FaUserAlt,FaUserCheck,FaRegEdit,FaRegThumbsUp} from "react-icons/fa"

export default function SectionAmbassadeur(){
    return (
        <section className="devenir-ambassadeur">
            <div className="am-section-texte">
                <h2>Comment devenir ambassadeur ?</h2>
                <p>Sint culpa cupidatat ut Lorem.Excepteur reprehenderit cillum ut quis ullamco quis aute ea consequat labore qui tempor commodo.</p>
            </div>
            <div className="am-card-section">
                <StepCard icon={<FaUserAlt className="am-icon"/>} step={1} titre="Première étape" color="#4c23b0">
                  <p className="content-card-para">
                     Excepteur consectetur magna sit consectetur esse nisi reprehenderit.
                     Excepteur consectetur magna sit consectetur esse nisi reprehenderit.
                  </p>
                </StepCard>
                {/*  */}
                <StepCard icon={<FaUserCheck className="am-icon"/>} step={2} titre="Deuxième étape" color="#369cee">
                  <p>
                     Excepteur consectetur magna sit consectetur esse nisi reprehenderit.
                     Excepteur consectetur magna sit consectetur esse nisi reprehenderit.
                  </p>
                </StepCard>
                {/*  */}
                <StepCard icon={<FaRegEdit className="am-icon"/>} step={3} titre="Troisième étape" color="#48dbfc">
                  <p>
                     Excepteur consectetur magna sit consectetur esse nisi reprehenderit.
                     Excepteur consectetur magna sit consectetur esse nisi reprehenderit.
                  </p>
                </StepCard>
                {/*  */}
                <StepCard icon={<FaRegThumbsUp className="am-icon"/>} step={4} titre="Quatrième étape" color="#b748ec">
                  <p>
                     Excepteur consectetur magna sit consectetur esse nisi reprehenderit.
                     Excepteur consectetur magna sit consectetur esse nisi reprehenderit.
                  </p>
                </StepCard>
            </div>
        </section>
    );
}
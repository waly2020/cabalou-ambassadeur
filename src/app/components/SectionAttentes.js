import "../../styles/home/sectionAttentes.scss"
import {FaUserAlt,FaUserCheck,FaRegEdit,FaRegThumbsUp} from "react-icons/fa"
import Mission from "./Mission";
export default function SectionAttentes(){
    return (
        <>
        <section className="sectionAttentes" id="attentes">
        <div className="att-background"></div>
        <div className="section-content-text">
           <h2>vos missions</h2>
        </div>
        <div className="att-section-card">
            {/*  */}
            <Mission icon={<FaRegEdit/>}>
            <h3>Orienter de nouveaux hébergeurs vers Cabalou</h3>
            </Mission>
            {/*  */}
            {/*  */}
            <Mission icon={<FaRegThumbsUp/>}>
            <h3>Renforcer  la confiance et la fiabilité de la marque Cabalou</h3>
            </Mission>
            {/*  */}
            {/*  */}
            <Mission icon={<FaUserCheck/>}>
            <h3>Participer au développement de Cabalou</h3>
            </Mission>
            {/*  */}
            {/*  */}
            <Mission icon={<FaUserAlt/>}>
            <h3>Informer sa communauté locale des événements de Cabalou</h3>
            </Mission>
            {/*  */}
        </div>
        </section>
        </>
    );
}
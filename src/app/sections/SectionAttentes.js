import "../../styles/home/sectionAttentes.scss"
import {FaHandPointRight} from "react-icons/fa"
import Mission from "../components/Mission";
import Button from "../components/Button";
import Image from "next/image";
export default function SectionAttentes(){
    return (
        <>
        <section className="sec-mission" id="attentes">
            <div className="sec-mission-content">
                <div className="sec-m-titre">
                    <h2>Vos missions</h2>
                </div>
                <div className="sec-m-mission">
                <Mission icon={<FaHandPointRight/>}>
                    <p>
                    Orienter de nouveaux hébergeurs vers Cabalou.
                    </p>
                </Mission>
                <Mission icon={<FaHandPointRight/>}>
                    <p>
                    Renforcer  la confiance et la fiabilité de la marque Cabalou.
                    </p>
                </Mission>
                <Mission icon={<FaHandPointRight/>}>
                    <p>
                    Participer au développement de Cabalou.
                    </p>
                </Mission>
                <Mission icon={<FaHandPointRight/>}>
                    <p>
                    Informer sa communauté locale des événements de Cabalou.
                    </p>
                </Mission>
                </div>
                <Button/>
            </div>
            <div className="sec-mission-image">
                <Image src="/assets/images/mission.jpg" width={1000} height={667} alt="vos missions"/>
            </div>
        </section>
        </>
    );
}
import Image from "next/image";
import "../../styles/home/simpleSection.scss";
export default function SimpleSection({reverse = false,titre = "A propos de nous.",image = "header1.jpg",opacity = 0.5,children}){
    return (
        <section className={`section ${reverse ? "reverse" : ""}`}>
            <div className="section-image" style={{backgroundImage : `url(./assets/images/${image})`}}>
                <div className="section-image-overlay" style={{background : `rgba(0, 0, 0,${opacity})`}}>
                    <Image src={"./assets/logo/logo.svg"} width={300} height={90} alt="logo du site"/>
                </div>
            </div>
            <div className="section-content-text">
                <h2>{titre}</h2>
                {children}
            </div>
        </section>
    );
}
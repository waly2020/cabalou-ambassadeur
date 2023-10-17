import Image from "next/image";
import "../../styles/home/simpleSection.scss";
export default function SimpleSection({reverse = false,titre = "A propos de nous.",image = "header1.jpg",opacity = 0.5,id = "",children}){
    return (
        <section className={`section ${reverse ? "reverse" : ""}`} id={id}>
            <div className="section-image" style={{backgroundImage : `url(./assets/images/${image})`}}>
            </div>
            <div className="section-content-text">
                <h2>{titre}</h2>
                {children}
            </div>
        </section>
    );
}
import Image from "next/image";
import "../../styles/home/footer.scss";
import {FaFacebookSquare,FaWhatsappSquare} from "react-icons/fa"
export default function Footer(){
    return (
        <div className="footer">
        <div className="info">
        <Image src="./assets/logo/logo.svg" width={120} height={70} alt="Logo du site"/>
        <p>Laborum laboris ut mollit labore nulla.Deserunt minim cillum exercitation adipisicing.</p>
        <div className="f-resaux">
            <div className="f-icn">
                <FaFacebookSquare/>
            </div>
            <div className="f-icn">
                <FaWhatsappSquare/>
            </div>
        </div>
        </div>
        <div className="f-nav">
            <p>CABALOU</p>
            <ul>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Conditions d'utilisation</a></li>
                <li><a href="#">Politique de confidentialite</a></li>
            </ul>
        </div>
        <div className="f-contact">
            <p>Contact</p>
            <ul>
                <li><a href="#">Aide et FAQs</a></li>
                <li><a href="#">Reclamations</a></li>
                <li><a href="#">Contactez nous</a></li>
            </ul>
        </div>
        </div>
    );
}
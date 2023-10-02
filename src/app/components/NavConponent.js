import Image from "next/image";
import"../../styles/nav/nav.scss";
export default function NavComponent(){
    return (
    <>
    <nav className="menu">
        <div className="logo">
            <Image src="./assets/logo/logo.svg" width={120} height={70} alt="logo du site"/>
        </div>
        <ul className="links">
            <li><a href="#" className="active">Accueil</a></li>
            <li><a href="#">A propos</a></li>
            <li><a href="#">Comment ca marche ?</a></li>
            <li><a href="#">Attantes et avantages</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Evenement</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
        <a href="#" className="inscription">
           <button>Inscription</button>
        </a>
    </nav>
    </>);
}
"use client";
import Image from "next/image";
import"../../styles/nav/nav.scss";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import Button from "./Button";

export default function NavComponent(){
    const [burger,setBurger] = useState("");
    const toggle = () =>{
        if(burger){
            setBurger("");
        }else{
            setBurger("active");
        }
    }
    return (
    <>
    <div className={`menu-shadow ${burger}`} onClick={toggle}></div>
    <nav className="menu">
        <div className="logo">
            <Image src="./assets/logo/logo.svg" width={120} height={70} alt="logo du site"/>
        </div>

        <ul className="links">
            <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Accueil</Link></li>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>A propos</Link></li>
            <li><Link activeClass="active" to="tuto" spy={true} smooth={true} offset={-70} duration={500}>Etre ambassadeur ?</Link></li>
            <li><Link activeClass="active" to="attentes" spy={true} smooth={true} offset={-70} duration={500}>Vos missions</Link></li>
            <li><Link activeClass="active" to="avantages" spy={true} smooth={true} offset={-70} duration={500}>Avantages</Link></li>
            <li><Link activeClass="active" to="faq" spy={true} smooth={true} offset={-70} duration={500}>FAQ</Link></li>
        </ul>
        <Button/>
        <button className={`burger ${burger}`} onClick={toggle}>
            <div className="b-h"></div>
            <div className="b-m"></div>
            <div className="b-b"></div>
        </button>
    </nav>
    <nav className={`navBar ${burger}`}> 
        <div className="navBar-header">
        <a href="#" className="inscription">
           <button>Je postule</button>
        </a>
        </div>
        <ul className="links">
            <li><Link onClick={toggle} activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Accueil</Link></li>
            <li><Link onClick={toggle} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>A propos</Link></li>
            <li><Link onClick={toggle} activeClass="active" to="tuto" spy={true} smooth={true} offset={-70} duration={500}>Etre ambassadeur ?</Link></li>
            <li><Link onClick={toggle} activeClass="active" to="attentes" spy={true} smooth={true} offset={-70} duration={500}>Vos missions</Link></li>
            <li><Link onClick={toggle} activeClass="active" to="avantages" spy={true} smooth={true} offset={-70} duration={500}>Avantages</Link></li>
            <li><Link onClick={toggle} activeClass="active" to="faq" spy={true} smooth={true} offset={-70} duration={500}>FAQ</Link></li>
        </ul>
    </nav>
    </>);
}
"use client";

import { useEffect, useState } from "react";
import "../../styles/home/header.scss"
import Button from "./Button";
export default function HeaderComponent(){
    const [cpt,setCpt] = useState(0);
    let time;
    let [next,setNext] = useState(0);
    const active = (index,nextImg)=>{
        return index == nextImg ? "active" : "";
    }
    useEffect(()=>{ 
       // eslint-disable-next-line react-hooks/exhaustive-deps
       time = setInterval(() => {
            if(cpt >= 5){
                setCpt(0);
                setNext(next >= 2 ? 0 : next + 1);
            }else{
                setCpt(cpt + 1);
            }
        }, 2000);
        return () => clearInterval(time);
    },[cpt]);

    return (
        <>
        <header id="home">
            <div className="header-images">
                <div className={`header-img-2 ${active(1,next)}`}></div>
                <div className={`header-img-1 ${active(0,next)}`}></div>
                <div className={`header-img-3 ${active(2,next)}`}></div>
            </div>
            {/* <div className="overlay"></div> */}
            <div className="content-header">
                 <span className="empty-span"></span>
                {/* texte header */}
                <div className="header-textes">
                    <h1>Rejoignez notre Communauté</h1>
                    <p>Devenez ambassadeur Cabalou,une expérience humaine et un complément de revenu.</p>
                    <Button/>
                </div>
                {/* btn slide */}
                <div className="header-btn">
                    <button className={`header-btn-slider ${active(0,next)}`}></button>
                    <button className={`header-btn-slider ${active(1,next)}`}></button>
                    <button className={`header-btn-slider ${active(2,next)}`}></button>
                </div>
            </div>
        </header>
        </>
    );
}
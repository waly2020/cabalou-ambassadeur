"use client";

import {AiOutlinePlus,AiOutlineLine} from "react-icons/ai"

export default function Faq({onPress,index = 1,clickedIndex = 0}){
    return (
        <div className="faq">
            <div className="faq-header">
                <div className="faq-header-texte">
                    <p>
                        Minim sunt non aliquip qui incididunt proident sunt non aliquip qui
                        Minim sunt non aliquip qui incididunt proinim sunt non aliquip ?
                    </p>
                </div>
                <div className="faq-header-btn-content" onClick={onPress}>
                    <button className={`faq-header-btn ${index == clickedIndex ? "active" : ""}`}>
                        <AiOutlinePlus className={`faq-icn ${index != clickedIndex ? "active" : ""}`}/>
                        <AiOutlineLine className={`faq-icn ${index == clickedIndex ? "active" : ""}`}/>
                    </button>
                </div>
            </div>
            <div className={`faq-body ${clickedIndex == index ? "active" : ""}`}>
                <p>
                    Fugiat labore eu proident eu reprehenderit reprehenderit in aliquip consectetur aute consequat anim aliquip proident. Esse nulla nisi laborum culpa tempor in. Voluptate labore nostrud nulla exercitation veniam eiusmod irure aliquip aliquip reprehenderit. Veniam irure officia sit ex dolore occaecat labore enim excepteur. Ipsum elit dolor consequat veniam dolore ex pariatur mollit irure.
                </p>
            </div>
        </div> 
    );
}
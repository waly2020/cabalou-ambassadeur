"use client";

import {AiOutlinePlus,AiOutlineLine} from "react-icons/ai"

export default function Faq({onPress,index = 1,clickedIndex = 0,question,children}){
    return (
        <div className="faq">
            <div className="faq-header">
                <div className="faq-header-texte">
                    <p>
                       {question}
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
                {children}
            </div>
        </div> 
    );
}
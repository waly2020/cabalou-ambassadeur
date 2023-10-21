import { useRef, useState } from "react";

/**
 * 
 * @param {{className : String,min : number,max : number}} param0 
 * @returns 
 */
export default function TextAreas ({className,min,max}){
    const [sizeText,setSizeText] = useState(0);
    return (
        <div className={`text-area ${className}`}>
            <label htmlFor="sms">Parler nous de vous.{`(${sizeText}/${max})`}</label>
            <textarea id="sms" minLength={min} maxLength={max} name="sms" placeholder="Soyez bref et pricis..." onChange={(e)=> {setSizeText(e.target.value.length)}} required/>
        </div>
    );
}
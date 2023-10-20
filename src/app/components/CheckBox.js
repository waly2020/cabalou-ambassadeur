import { useState } from "react";
import {BsCheckAll} from "react-icons/bs";
/**
 * 
 * @param {{className : String,values : [String]}} param0 
 * @returns 
 */
export default function CheckBox({className,values}){
    const [checked,setChecked] = useState("none");
    return (
        <>
            <div className={`checkbox ${className}`}>
              <p className="checkbox-title">Domaineds de competences</p>
              <div className="checkbox-content">
                {values.map((item,i) => <button key={i} type="button"><span className={checked}><BsCheckAll/></span> {item}</button>)}
              </div>
            </div>
        </>
    );
}
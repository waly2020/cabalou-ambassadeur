import { useState } from "react";
import {AiOutlineCaretDown} from "react-icons/ai";
/**
 * 
 * @param {{
 * values : [String],
 * placeholder : String,
 * name : String,
 * className : String
 * }} param0 
 * @returns {JSX.Element}
 */
export default function InputSelect({values,placeholder,name,className}){
    const [inputValue,setInputValue] = useState("");
    const [active,setActive] = useState("none");
    const addValue = (value) =>{
        setInputValue(value);
        setActive("none");
    }
    const manageActive = () =>{
        if(active  == "active"){
            setActive("none")
        }else{
            setActive("active");
        }
    }
    return (
        <>
            <div className={`input-select ${className}`}>
                <input onClick={manageActive} type="text" name={name} id="statut" placeholder={placeholder} readOnly value={inputValue == undefined ? "" : inputValue}/>
                <label className={`select-icon ${active}`} onClick={manageActive}><AiOutlineCaretDown/></label>
                <div className={`select-option ${active}`}>
                    {values.map((item,i,a) => <button key={i} type="button" className={`option-item oi-${i}`} onClick={() => {addValue(item)}}>{item}</button>)}
                </div>
            </div>
        </>
    );
}
import { useState } from "react";
import {BsCheckAll} from "react-icons/bs";
/**
 * 
 * @param {{className : String,values : [{label : String,check : boolean}],title : String,contentClass : String}} param0 
 * @returns 
 */
export default function CheckBox({className,values,title,contentClass}){
    const [checked,setChecked] = useState([...values]);
    const checkboxEven = (id = 0) => {
      if(checked[id].check){
        values[id].check = false;
        setChecked([...values]);
      }else{
        values[id].check = true;
        setChecked([...values]);
      }
    }
    return (
        <>
            <div className={`checkbox ${className}`}>
              <p className="checkbox-title">{title}</p>
              <div className={`checkbox-content`}>
                {checked.map((item,i) => <button key={i} type="button" onClick={()=>{checkboxEven(i)}} className={contentClass}><span className={item.check ? "active" : "none"}><BsCheckAll/></span> {item.label}</button>)}
              </div>
            </div>
        </>
    );
}
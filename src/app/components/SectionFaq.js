"use client"; 
import { useState } from "react";
import "../../styles/home/sectionFaq.scss";
import Faq from "./Faq";
export default function SectionFaq(){
    const [clickedIndex,setClikedIndex] = useState(0);
    const activeFaq = (index,click) =>{
        if(index == click){
            setClikedIndex(0);
        }else{
            setClikedIndex(index);
        }
    }
    return (
        <div className="sectionFaq" id="faq">
            <h2>Des réponses à vos questions</h2>
            <Faq onPress={() => {activeFaq(1,clickedIndex)}} index={1} clickedIndex={clickedIndex}/>
            <Faq onPress={() => {activeFaq(2,clickedIndex)}} index={2} clickedIndex={clickedIndex}/>
            <Faq onPress={() => {activeFaq(3,clickedIndex)}} index={3} clickedIndex={clickedIndex}/>
            <Faq onPress={() => {activeFaq(4,clickedIndex)}} index={4} clickedIndex={clickedIndex}/>
        </div>
    );
}
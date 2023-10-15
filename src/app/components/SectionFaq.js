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
            <Faq onPress={() => {activeFaq(1,clickedIndex)}} index={1} clickedIndex={clickedIndex} question="Comment serai-je rémunéré ?">
                <p>
                Vous serez rémunéré par commission par rapport aux objectifs fixés par Cabalou.
                </p>
            </Faq>

            <Faq onPress={() => {activeFaq(2,clickedIndex)}} index={2} clickedIndex={clickedIndex} question="Quel diplôme avoir pour être ambassadeur ?">
                <p>
                Il serait appréciable d’avoir un diplôme en gestion du tourisme. Cependant, tout autre diplômediplôme supérieursupérieur est accepté.
                </p>
            </Faq>

            <Faq onPress={() => {activeFaq(3,clickedIndex)}} index={3} clickedIndex={clickedIndex} question="Comment se passe l’entretien à Cabalou ?">
                <p>
                L’entretien se passe avec un panel de jury qui posera des questions et simulera une mise en situation du candidat pour évaluer sa réactivité et son sens de l'initiative.
                </p>
            </Faq>

            <Faq onPress={() => {activeFaq(4,clickedIndex)}} index={4} clickedIndex={clickedIndex} question="Quelle est la limite d'âge pour être ambassadeur ?">
                <p>
                Un ambassadeur Cabalou doit être âgé de 28 à 45 ans.
                </p>
            </Faq>

            <Faq onPress={() => {activeFaq(5,clickedIndex)}} index={5} clickedIndex={clickedIndex} question="Quel statut a un ambassadeur Cabalou ?">
                <p>
                Un ambassadeurambassadeur Cabalou n’est pas un employé de Cabalou. Il a un statut de travailleur indépendant.
                </p>
            </Faq>

            <Faq onPress={() => {activeFaq(6,clickedIndex)}} index={6} clickedIndex={clickedIndex} question="Quels sont les avantages d'êtred'être ambassadeur Cabalou ?">
                <p>
                Être ambassadeur Cabalou vous permet de vivre une expérience humaine à travers une grande communauté panafricaine de voyageurs et d’avoir un complément de revenu.
                </p>
            </Faq>
        </div>
    );
}
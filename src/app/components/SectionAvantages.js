import Image from "next/image";
import {FaCheckDouble} from "react-icons/fa";
import "../../styles/home/sectionAvantages.scss";
import AvantageItem from "./AvantageItem";
import Button from "./Button";

export default function SectionAvantages(){
    return (
        <>
        <div className="sectionAvantages" id="avantages">
            <div className="sa-image">
                <Image src="/assets/images/avantages.png" width={1964} height={1750} className="sa-image-img" alt="avantages"/>
            </div>
            <div className="sa-texte">
                <div className="sa-texte-titre">
                    <h2>Les avantages</h2>
                </div>
                <div className="sa-item-content">
                    {/*  */}
                    <AvantageItem>
                        <h3>Complément de revenu.</h3>
                    </AvantageItem>
                    {/*  */}
                    {/*  */}
                    <AvantageItem>
                        <h3>Faire partie d’une grande communauté panafricaine de voyageurs.</h3>
                    </AvantageItem>
                    {/*  */}
                    {/*  */}
                    <AvantageItem>
                        <h3>Vivre une expérience humaine.</h3>
                    </AvantageItem>
                    {/*  */}
                    {/*  */}
                    <AvantageItem>
                        <h3>Participer aux évènements.</h3>
                    </AvantageItem>
                    {/*  */}
                <Button/>
                </div>
            </div>
        </div>
        </>
    );
}
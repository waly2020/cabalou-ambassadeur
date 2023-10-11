import "../../styles/home/sectionAttentes.scss"
import {FaUserAlt,FaUserCheck,FaRegEdit,FaRegThumbsUp} from "react-icons/fa"
import Mission from "./Mission";
export default function SectionAttentes(){
    return (
        <>
        <section className="sectionAttentes" id="attentes">
        <div className="section-content-text">
           <h2>vos missions</h2>
        </div>
        <div className="att-section-card">
            {/*  */}
            <Mission/>
            {/*  */}
            {/*  */}
            <Mission/>
            {/*  */}
            {/*  */}
            <Mission/>
            {/*  */}
        </div>
        </section>
        </>
    );
}
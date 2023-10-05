import Image from "next/image";
import {FaCheckDouble} from "react-icons/fa";
import "../../styles/home/sectionAvantages.scss";

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
                    <p>
                        Duis tempor in consectetur occaecat deserunt irure mollit consectetur.
                        Duis tempor in consectetur occaecat deserunt.
                    </p>
                </div>
                <div className="sa-item-content">
                    {/*  */}
                    <div className="sa-item">
                        <div className="sa-item-icon">
                            <div className="sa-item-icon-content">
                                <FaCheckDouble className="sa-icon"/>
                            </div>
                        </div>
                        <div className="sa-item-texte">
                            <h3>vous aurez l'avantage de...</h3>
                            <p>
                                Voluptate ut consequat culpa deserunt sint magna adipisicing.
                                Voluptate ut consequat culpa deserunt sint magna.
                                Voluptate ut consequat culpa deserunt sin.
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="sa-item">
                        <div className="sa-item-icon">
                            <div className="sa-item-icon-content">
                                <FaCheckDouble className="sa-icon"/>
                            </div>
                        </div>
                        <div className="sa-item-texte">
                            <h3>vous aurez l'avantage de...</h3>
                            <p>
                                Voluptate ut consequat culpa deserunt sint magna adipisicing.
                                Voluptate ut consequat culpa deserunt sint magna.
                                Voluptate ut consequat culpa deserunt sin.
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="sa-item">
                        <div className="sa-item-icon">
                            <div className="sa-item-icon-content">
                                <FaCheckDouble className="sa-icon"/>
                            </div>
                        </div>
                        <div className="sa-item-texte">
                            <h3>vous aurez l'avantage de...</h3>
                            <p>
                                Voluptate ut consequat culpa deserunt sint magna adipisicing.
                                Voluptate ut consequat culpa deserunt sint magna.
                                Voluptate ut consequat culpa deserunt sin.
                            </p>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
        </>
    );
}
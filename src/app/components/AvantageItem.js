import {FaCheckDouble} from "react-icons/fa";

export default function AvantageItem({children}) {
    return (
        <>
            <div className="sa-item">
                <div className="sa-item-icon">
                    <div className="sa-item-icon-content">
                        <FaCheckDouble className="sa-icon" />
                    </div>
                </div>
                <div className="sa-item-texte">
                    {children}
                </div>
            </div>
        </>
    );
}
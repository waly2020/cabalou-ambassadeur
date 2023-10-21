import "../../styles/forms/input.scss";
/**
 * 
 * @param {{name : String,placeholder : String,type : String,icon : HTMLElement,iconEnd : HTMLElement,controller : (value : String) => void}} param0 
 * @returns {JSX.Element}
 */
export default function IconInput({name,placeholder,type,className,icon,iconEnd = null,controller}){
    return (
        <>
            <div className={`input-icon ${className} ${iconEnd == null ? 'ic-label' : 'ic-desc'}`}>
                <label htmlFor={name} className="content-icon">
                    {icon}
                </label>
                <input className={iconEnd == null ? "" : "have-end"} type={type} name={name} id={name} placeholder={placeholder} required onChange={(e) => {controller(e.target.value)}}/>
                {iconEnd == null ? null : (<label htmlFor={name} className="content-icon ic-desc-ic">
                    {iconEnd}
                </label>)}
            </div>
        </>
    );
}
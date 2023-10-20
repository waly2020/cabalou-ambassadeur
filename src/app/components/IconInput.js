import "../../styles/forms/input.scss";

export default function IconInput({name,placeholder,type,className,icon,iconEnd = null}){
    return (
        <>
            <div className={`input-icon ${className} ${iconEnd == null ? 'ic-label' : 'ic-desc'}`}>
                <label htmlFor={name} className="content-icon">
                    {icon}
                </label>
                <input className={iconEnd == null ? "" : "have-end"} type={type} name={name} id={name} placeholder={placeholder}/>
                {iconEnd == null ? null : (<label htmlFor={name} className="content-icon ic-desc-ic">
                    {iconEnd}
                </label>)}
            </div>
        </>
    );
}
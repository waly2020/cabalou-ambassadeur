export default function Mission({icon,children}){
    return (
        <>
        {/*  */}
        <div className="att-card-item">
                <p className="att-icon">
                    {icon}
                </p>
                {children}
        </div>
            {/*  */}
        </>
    );
} 
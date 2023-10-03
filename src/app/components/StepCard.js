
export default function StepCard({step = 0,icon,titre = "step 0",color = "royalblue",children}){
    return (
        <div className="am-card">
            <div className="am-card-main-conten" style={{background : color}}>
                <div className="am-card-conten">
                    <div className="am-card-icn">
                        {icon}
                    </div>
                    <div className="am-card-content-text">
                        <h3>{titre}</h3>
                        {children}
                    </div>
                </div>
            </div>
            <div className="am-card-step" style={{background : color}}>
                <div className="shadow-icon">
                {icon}
                </div>
                <p>{step < 10 ? "0" + step : step}</p>
            </div>
        </div>
    );
}
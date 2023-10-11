
export default function StepCard({step = 0,icon,titre = "step 0",color = "royalblue"}){
    return (
        <div className="am-card">
            <p className="am-step-item" style={{color : color}}><span className="am-card-icon" style={{background : color}}>{icon}</span>étape {step < 10 ? "0" + step : step}</p>
            <p className="am-step-item-desc">{titre}</p>
        </div>
    );
}
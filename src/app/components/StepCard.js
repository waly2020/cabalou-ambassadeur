
export default function StepCard({step = 0,icon,titre = "step 0",children}){
    return (
        <div className="am-card">
            <div className="am-card-icon">
                <p className="am-icon-icon">
                  {icon}
                </p>
                <p className="am-step-item">{step}</p>
            </div>
            <p className="am-step-item-desc">{titre}</p>
            <div className="am-step-desc">
            {children}
            </div>
        </div>
    );
} 
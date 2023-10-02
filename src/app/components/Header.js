import "../../styles/home/header.scss"
export default function HeaderComponent(){
    return (
        <>
        <header>
            <div className="header-images">
                <div className="header-img-2"></div>
                <div className="header-img-1"></div>
            </div>
            {/* <div className="overlay"></div> */}
            <div className="content-header">
                <span className="empty-span"></span>
                {/* texte header */}
                <div className="header-textes">
                    <h1>Notre service, votre succès en déplacement</h1>
                    <p>Lorem dolor ipsum dolorem ipsum odolorLorem dolor ipsum dolorem ipsum odolorLorem dolor ipsum dolorem ipsum odolorLorem dolor ipsum dolorem ipsum odolor</p>
                    <button>Inscription</button>
                </div>
                {/* btn slide */}
                <div className="header-btn">
                    <button className="header-btn-slider active"></button>
                    <button className="header-btn-slider"></button>
                </div>
            </div>
        </header>
        </>
    );
}
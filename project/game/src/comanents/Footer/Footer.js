import "./Footer.css";
function Footer() {
    return(
        <div className="footer">
            <div className="footer-container">
            <div className="name">
            <h3>Tashkilot haqida</h3>
            <p>biz haqimizda</p>
            <p>yangiliklar</p>
             <p>aloqa uchun malumotlar</p>
            </div>
            <div className="name">
            <h3>Imkoniyatlar</h3>
            <p>uqtuvchilarga</p>
            <p>ota-onalarga</p>
             <p>uquvchilarga</p>
            </div>
            <div className="name">
            <h3>Hamkorlar</h3>
            <p>hamkorlar xizmati</p>
            </div>
            <div className="name">
            <h3>Qulab quvatlash</h3>
           <h4>qulab quvatlash xizmati</h4>
           <button className="box-but">Tashkilot ulash</button>
            </div>
            </div>
           

           <div className="eng-pasti">
            <p className="foyda">foydali narsalar</p>
            <p>2023 OOO Kundalik </p>
           </div>
       
        </div>
   
    )
}
export default Footer;
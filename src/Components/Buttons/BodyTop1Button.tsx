import react from "react";
import './BodyTop1Button.css'
interface BodyTop1Buttonprops{
    label: string;
    ContactLink: string;
    ButtonColor: string;
    TextColor: string;


}
const BodyTop1Button: react.FC<BodyTop1Buttonprops>=({ label, ContactLink, ButtonColor, TextColor}) =>{
    return (
        <button className="Top1Button" style={{backgroundColor: ButtonColor, }}>
            <a className="GeneralLink" href={ContactLink} target="_blank" rel="noreferrer">
                <div className="ButtonInformation"> 
                    <div className="ButtonText"><p className="Paragraph" style={{color:TextColor}}> {label}</p></div>
                </div>
            </a>
            
        </button>
    );

};
export default BodyTop1Button;
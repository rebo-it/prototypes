import react from "react";
import './HeaderButton.css'
interface HeaderButtonprops{
    label: string;
    ContactLink: string;


}
const HeaderButton: react.FC<HeaderButtonprops>=({ label, ContactLink }) =>{
    return (
        <button className="ContactButton">
            <a className="GeneralLink" href={ContactLink} target="_blank" rel="noreferrer">
                <div className="ButtonInformation"> 
                    <div className="ButtonText"><p className="Paragraph"> {label}</p></div>
                </div>
            </a>
            
        </button>
    );

};
export default HeaderButton;
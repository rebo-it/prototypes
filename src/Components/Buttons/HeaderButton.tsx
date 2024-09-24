import react from "react";
import './HeaderButton.css'
interface HeaderButtonprops{
    label: string;
    ContactLink: string;
    IconClass: string;


}
const HeaderButton: react.FC<HeaderButtonprops>=({ label, ContactLink, IconClass }) =>{
    return (
        <button className="ContactButton">
            <a className="GeneralLink" href={ContactLink} target="_blank" rel="noreferrer">
                <div className="ButtonInformation"> 
                    <div className="ButtonText"> <i className={IconClass}></i><p className="Paragraph"> {label}</p></div>
                </div>
            </a>
            
        </button>
    );

};
export default HeaderButton;
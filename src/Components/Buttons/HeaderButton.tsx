import react from "react";
import './HeaderButton.css'
interface HeaderButtonprops{
    label: string;
    ContactLink: string;
    IconClass: string;
    IconColor: string;

}
const HeaderButton: react.FC<HeaderButtonprops>=({ label, ContactLink, IconClass, IconColor }) =>{
    return (
        <button className="ContactButton" style={{color:'white'}}>
            <a className="GeneralLink" href={ContactLink} target="_blank" rel="noreferrer">
                <div className="ButtonInformation"> 
                    <div className="ButtonText"> <i className={IconClass} style={{color:IconColor}}></i><p className="Paragraph"> {label}</p></div>
                </div>
            </a>
            
        </button>
    );

};
export default HeaderButton;
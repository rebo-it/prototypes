import react from "react";
import './ContactButton.css'
interface ContactButtonprops{
    label: string;
    ContactLink: string;
    IconChosen: string;
    IconColor: string;
    IconSize: string;
    IconFont: string;

}
const ContactButton: react.FC<ContactButtonprops>=({ label, ContactLink, IconChosen, IconColor, IconFont, IconSize}) =>{
    return (
        <button className="ContactButton">
            <a className="GeneralLink" href={ContactLink} target="_blank" rel="noreferrer">
                <div className="ButtonInformation"> 
                    <div className="Icon"><i className={IconChosen}style={{ font: IconFont, fontSize: IconSize, color: IconColor }}  ></i></div> 
                    <div className="IconText"><p className="Paragraph"> {label}</p></div>
                </div>
            </a>
            
        </button>
    );

};
export default ContactButton;
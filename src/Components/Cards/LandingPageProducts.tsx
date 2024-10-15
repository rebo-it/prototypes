import react from "react";
import './LandingPageProducts.css';
interface LandingPageProductsprops{
    label: string;
    ContactLink: string;

    label2: string;

}
const LandingPageProducts: react.FC<LandingPageProductsprops>=({ label, ContactLink,  label2 }) =>{
    return (
<div className="card sm" >
  <img src={require("/WIP/prototypes/src/Components/Figma Components/casco1.png")} className="ImageEquipment card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="ProductName card-title text-white" style={{fontSize:'calc(1.25rem+0.5vw)'}}>{label}</h5>
    <a href={ContactLink} className="CardLink btn " >{label2} </a>
  </div>
</div>
    );
};

export default LandingPageProducts;
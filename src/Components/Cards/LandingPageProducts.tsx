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
  <img src={require("/WIP/prototypes/src/images/casco1.png")} className="ImageEquipment card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="ProductName card-title text-white">{label}</h5>
    <a href={ContactLink} className="CardLink btn " style={{width:'8rem', height:'1.5rem'}}>{label2} </a>
  </div>
</div>
    );
};

export default LandingPageProducts;
import react from "react";
import './LandingPageProducts.css';
interface LandingPageProductsprops{
    label: string;
    ContactLink: string;

    label2: string;

}
const LandingPageProducts: react.FC<LandingPageProductsprops>=({ label, ContactLink,  label2 }) =>{
    return (
<div className="card sm" style={{width:'15vw'}}>
  <img src={require("/WIP/prototypes/src/images/casco1.png")} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-white">{label}</h5>
    <a href={ContactLink} className="CardLink btn btn-primary " style={{width:'12vw'}}>{label2} </a>
  </div>
</div>
    );
};

export default LandingPageProducts;
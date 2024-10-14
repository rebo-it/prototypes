import react from "react";

interface QualityCardsprops{
    label: string;
    ContactLink: string;

    label2: string;

}
const QualityCards: react.FC<QualityCardsprops>=({ label, ContactLink,  label2 }) =>{
    return (
<div className="card sm" >
   <span className="rounded-circle">
   <img src={require("/WIP/prototypes/src/Components/Figma Components")} className="ImageEquipment card-img-top img-fluid" alt="..."/>
    </span> 
  
  <div className="card-body">
    <h5 className="ProductName card-title text-white" style={{fontSize:'calc(1.25rem+0.5vw)'}}>{label}</h5>
    <a href={ContactLink} className="CardLink btn " >{label2} </a>
  </div>
</div>
    );
};

export default QualityCards;
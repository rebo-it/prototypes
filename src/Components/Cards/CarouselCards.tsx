import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LandingPageProducts from './LandingPageProducts';


function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center " style={{height:'400px'}} >
        <LandingPageProducts label='Equipo de protección industrial' label2='VER PRODUCTO' ContactLink=''/>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{height:'400px'}}  >
        <LandingPageProducts label='Equipo de protección industrial' label2='VER PRODUCTO' ContactLink='' />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{height:'400px'}}  >
        <LandingPageProducts label='Equipo de protección industrial' label2='VER PRODUCTO' ContactLink='' />
      </div>
    </Carousel.Item>
  </Carousel>
  );
}

export default ProductCarousel;
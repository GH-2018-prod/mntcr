import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="./img/header1-1200x600.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="./img/header2-1200x600.png"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="./img/header3-1200x600.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
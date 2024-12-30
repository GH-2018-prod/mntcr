import Carousel from 'react-bootstrap/Carousel';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
import { rotatorDesk, rotatorMob, rotatorKidsDesk, rotatorKidsMob } from "../../assets/index";

export const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <Link to="/clases">
          <img
            id="header1"
            className="d-block w-100"
            src={ isMobile ? rotatorMob : rotatorDesk } 
            alt="First slide"
          />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Link to="/clases">
          <img
            className="d-block w-100"
            src={ isMobile ? rotatorKidsMob : rotatorDesk } 
            alt="Second slide"
          />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <Link to="/clases">
        <img
          className="d-block w-100"
          src={ isMobile ? rotatorKidsMob : rotatorDesk } 
          alt="Third slide"
        />
        </Link>
      </Carousel.Item>
    </Carousel>
  )
}
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const HomeGrid = () => {
  return (
    <Container>
      <Row>
        <Col lg={4} md={6} className="mt-5 d-flex align-items-stretch">
          <Card > 
            {/*<Card.Img variant="top" src={HpTile1} />*/}
            <Card.Body >
              <Card.Title>Misión</Card.Title>
              <Card.Text>
                Nuestra misión es una en la que como profesores creemos con pasión y determinación. 
              </Card.Text>
              <Card.Text>
               Nuestra misión se enfoca en poder brindar diferentes clases dependiendo de las necesidades y necesidades del estudiante y al mismo tiempo hacerlos sentir capaces de lograr su objetivo con el idioma inglés con confianza al aprender con hablantes nativos. 
              </Card.Text>
              <Link to="/teachers" className="text-decoration-underline">
              <p >Leer mas</p> 
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mt-5 d-flex align-items-stretch">
          <Card >
            {/*<Card.Img variant="top" src={HpTile1} />*/}
            <Card.Body  >
              <Card.Title>Visión</Card.Title>
              <Card.Text>
              Nuestra visión como academia y como profesionales es fomentar y proporcionar un ambiente cómodo y seguro donde nuestros estudiantes se sientan motivados y escuchados al aprender el idioma inglés. 
              </Card.Text>
              <Card.Text>
              Nuestra academia brinda a los alumnos las habilidades y conocimientos necesarios para comunicarse y sentirse seguros al aplicar esto en el mundo real y sentirse orgullosos de cada paso del camino con su progreso aprendiendo con nuestra academia y nuestros profesores nativos.
              </Card.Text>
              <Link to="/testimonios" className="text-decoration-underline">
              <Card.Text>
              Leer mas
              </Card.Text>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mt-5 d-flex align-items-stretch">
          <Card >
            {/*<Card.Img variant="top" src={HpTile1} />*/}
            <Card.Body >
              <Card.Title>Valores</Card.Title>
              <Card.Text >
                Nuestros valores como academia se centran en la integridad, la aspiración y la compasión con nuestros estudiantes, ya que sabemos que todo es un viaje y queremos estar allí en cada paso para fortalecer y orientar adecuadamente en el viaje de cada estudiante con una nueva y divertida mejora perceptiva y desarrollando un nuevo lenguaje.
              </Card.Text>
              <Link to="/faqs" className="text-decoration-underline">
              <Card.Text >
                Leer mas
              </Card.Text> 
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
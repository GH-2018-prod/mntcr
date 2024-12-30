import { logInImage } from '../../assets';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const TeachersContent = () => {
  return (

    <Container >
      <h3 className='pt-3 pb-4 m-5 text-center'>"Teaching is a work of HEART"</h3>
      <Row className='pt-3 pb-4'>
        <Col lg={8} md={6}>
          <h4 className='pb-3 text-center'>About Us</h4>
          <p>
          Cual es la METODOLOGÍA para nuestras clases en Mynativeteacher Costa Rica ?  
          </p>
          <p>
          Aquí en Mynativeteacher Costa Rica una academia virtual en línea hemos creado un programa que atiende las necesidades de cada persona a la hora de dominar el idioma inglés, enfocándose principalmente en la parte de comunicación del idioma con profesores nativos para preparate para el futuro.  
          </p>
          <p>
          Nuestra academia y profesores nativos entienden tus ganas de aprender, tu frustración, tus errores y nuestro equipo de profesores nativos está aquí para guiarte y ayudarte a aprender lo mejor que puedas. 
          </p>
          <p>
          Ofrecemos un número de clases diferentes dependiendo de las necesidades e implementos del estudiante, vocabulario, gramática y comunicación. Clases privadas y grupales para toda los edades desde los 7 anos.  
          </p>
          <p>
          Creemos firmemente que cuando está en un grupo cada estudiante tiene la oportunidad de hablar, interactuar y siente que tiene tiempo suficiente para expresar sus ideas, por eso nuestras clases grupales están diseñadas para tener un máximo de 6 estudiantes, lo que nos distingue de otros institutos. . Para revisar las diferentes clases que ofrecemos, visite la pestaña Nuestras clases. 
          </p>
          <p>
          Nuestro objetivo y nuestras clases te preparan para la comunicación diaria, ya sea expresando tus ideas, relacionadas con el trabajo, tomando un examen de inglés como el Toeic, Cambridge, Belts entra otros  o sumergiéndote en un ambiente Inglés.
          </p>

        </Col>
        <Col lg={4} md={6}>
          <img
          src={ logInImage }
          alt="" width={200}
          className="rounded-circle"
        />
          <p>
            <em>Teacher Jennifer</em>        
          </p>
        </Col>
      </Row>

      <Row className='pt-3 pb-4'>
        <Col lg={8} md={6}>
          <h4 className='pb-3 text-center'>Teacher Jennifer</h4>
          <p>
            Mi prioridad como teacher de mynativeteacher ha sido la enseninza conciente a partir de los maestros y hacia los estudiantes. Por esta razon, la comprension activa y conciente de todo el equipo de native teacher ha procuparado dar todo el conocimiento que poseemos.
          </p>
          <p>
            ponemos a la orden todos nuestros medios para que nuestros estudiantes alcancen todas sus metas
          </p>
          <p>
            Mi nombre es Teacher Jennifer y les deseo lo mejor en este viaje!
          </p>
        </Col>
        <Col lg={4} md={6}>
        <img
          src={ logInImage }
          alt="" width={200}
          className="rounded-circle"
        />
          <p ></p>
        </Col>
      </Row>
    </Container>
  )
}

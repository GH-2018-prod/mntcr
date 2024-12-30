import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';
import { videoYancy } from '../../assets';


export const TestimoniosContent = () => {
  return (
    <Container >
      <h3 className='pt-3 pb-4 m-5 text-center'>Somos mas que maestros. Somos amigos!</h3>
      <Row >
        <Col className='mb-5'>
          <h4 className='pb-3 text-center'>Excellent and easy!</h4>
          <p className='text-justify'>
            Jennifer classes are an excellent and easy going way to practice your speaking English
            skills every week. One of the aspects that I valued the most of her classes, is that she
            promotes a safe space so you can feel comfortable expressing and practicing all the things
            you feel are needed to work on. An extra but appreciated other thing is that you also have
            the chance to meet and interact with very nisce people, with who you share not only the
            interest of growing in this language but algo experiment the richness in the interaction with
            other perspectives in all the different and interest topics that we touch together every class.
          </p>
          <em>
            <b>María José Gutiérrez</b>
          </em>
        </Col>
        <Col>
          <h4 className='pb-3 text-center'>Works up your confidence</h4>
          <p>
            Hi there 👋🏼, this is Yanci ✌🏼!Before I started classes with Jennifer, I was lacking self confidence to speak and practice English with anyone, loosing any chance to improve at all! Hopefully, I found out about  these speaking classes with a Canadian native speaker, which sounded tremendously challenging for myself but took the opportunity anyway! Thanks God ! I can say that I found not only a wonderful teacher and human being but also great  classmates that wanted to improve, love and learn everything about the language as well! I’ve been taught that making mistakes and keep trying are wonderful tools to succeed! Nowadays, I can say my fluency and communication skills are improving! I’ve learned about topics that wouldn’t picture myself chatting about! It completely has fulfilled my expectations in this journey to be a fluent English speaker!
          </p>
          <em>
            <b>Yanci Hernández</b>
          </em>
        </Col>
      </Row>

      <Row className="p-5 text-center">
        <Col className="video-responsive">
          <h4 className="pb-3 text-center">
            Madeline's experience
          </h4>
          <ReactPlayer
            className="pb-3"                
            url={ videoYancy }
            width="100%"
            controls
            volume={0.5}
          />
        </Col>
      </Row>

      <Row className='pb-4'>
        <Col className='mb-5'>
          <h4 className='pb-3 text-center'>Dynamic and fun classes</h4>
          <p>
            The English classes with Jennifer are the best classes that I have taken in my life, I don’t exaggerate. She provides me material and tips for improve my pronunciation. Her classes are dynamic and we can practice with interesting topics. These classes help me to feel more confident and comfortable when speaking. Over the years in the classes, I have improved a lot my English skills and I will continue because the language is the key to the future.  If you have the opportunity the learn English, I would recommend Jennifer’s Classes, you will notice the difference.
          </p>
          <em>
            <b>Anabelle Carvajal</b>
          </em>
        </Col>

        <Col>
          <h4 className='pb-3 text-center'>Exito asegurado</h4>
          <p>
            Aprender inglés siempre ha sido un tema difícil para mí. Hace algunos meses una muy buena amiga me recomendó  a la teacher Jennifer y desde entonces estoy feliz y motivada.
            Curso el nivel principiante y desde el día 1, su motivación y profesionalismo me engancharon de sus clases y si a eso le sumas que es hablante nativa tienes el éxito  asegurado.
            Recomendadísima 100%.
          </p>
          <em>
            <b>Grettel Montero</b>
          </em>
        </Col>
      </Row>

      <Row className='pb-4'>
        <Col className='mb-5'>
          <h4 className='pb-3 text-center'>Comoda y satisfecha</h4>
          <p>
            Yo inicie el curso de Ingles  A1 con la Teacher Jennifer Flanagan el 14 de setiembre del 2022 Me encuentro muy comoda y satisfecha con el curso ya que son clases muy dinamicas y participativas en donde nos brinda gran variedad de vocabulario , quizes y practicas le estoy sinceramente agradecida.
          </p>
          <em>
            <b>Fanny Moreno</b>
          </em>
        </Col>

        <Col>
          <h4 className='pb-3 text-center'>Perdi el miedo a hablar</h4>
          <p>
            Teacher Jennifer es muy comprometida con sus estudiantes. Sus clases son 100% conversacionales, desde el primer momento mejoré mis bloqueos  y perder el miedo al hablar. Se enfocan mucho en pronunciación. Es amable y amena.
          </p>
          <em>
            <b>Arellys Morales</b>
          </em>
        </Col>
      </Row>

      
    </Container>
  )
}

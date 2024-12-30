import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
export const FaqsContent = () => {
    return (
        <Container>
            <div className='pt-3 pb-4 m-5 text-center'>
                <h3 >Preguntas frecuentes</h3>
            </div>
            <Accordion defaultActiveKey="0" className="m-5">                
              
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Cual es la metodología para nuestras clases en Mynativeteacher Costa Rica ?  </Accordion.Header>
                    <Accordion.Body>
                        <p>
                        Aquí en Mynativeteacher Costa Rica una academia virtual en línea hemos creado un programa que atiende las necesidades de cada persona a la hora de dominar el idioma inglés, enfocándose principalmente en la parte de comunicación del idioma con profesores nativos para preparate para el futuro.  
                        </p>
                        <p>
                        Nuestra academia y profesores nativos entienden tus ganas de aprender, tu frustración, tus errores y nuestro equipo de profesores nativos está aquí para guiarte y ayudarte a aprender lo mejor que puedas. 
                        </p>
                        <p>
                        Ofrecemos un número de clases diferentes dependiendo de las necesidades e implementos del estudiante, vocabulario, gramática y comunicación. Clases privadas y grupales par…
                        </p>
                        <p>
                        Creemos firmemente que cuando está en un grupo cada estudiante tiene la oportunidad de hablar, interactuar y siente que tiene tiempo suficiente para expresar sus ideas, por eso nuestras clases grupales están diseñadas para tener un máximo de 6 estudiantes, lo que nos distingue de otros institutos. . Para revisar las diferentes clases que ofrecemos, visite la pestaña Nuestras clases. 
                        </p>
                        <p>
                        Nuestro objetivo y nuestras clases te preparan para la comunicación diaria, ya sea expresando tus ideas, relacionadas con el trabajo, tomando un examen de inglés como el Toeic, Cambridge, Belts entra otros  o sumergiéndote en un ambiente Inglés.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" >
                    <Accordion.Header>
                        2. Cómo puedo saber mi nivel de inglés o escoger la mejor clase para mis necesidades?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                        At mynativeteacher costa rica we offer a free asssement of your level via zoom with one of our native teachers if you wish to incorporate into a group as we believe that each person requires to be at the same level in order to advance apropriately in the English language. In order to determine this we schedule a free assessment video call via zoom  with one of our teachers to verify your level by listening for pronunication, vocabulary and fluency and from there we accordingly determine the best level to enter. Private classes are one on one therefore this process is not necessary as the teacher will create a lesson plan and speaking topics that best suit your needs.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                            3. Como hago la prueba de ubicación y como funciona?  
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                        In order for you to do our free assessment  we ask that you please contact us via our whatsapp number so that we can schedule the 15 minute  zoom video call for you with one of our teachers at a time that is most conveient for you. During the free assessment we determine your level  and what class would best suit your needs depending on what you are looking for.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" >
                    <Accordion.Header>
                            4. Que Plataforma usan para las clases y que debo llevar a la clase?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Zoom, Teams
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        5. Quienes son los profesores, que experiencia tiene y de donde son?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Nativos Americanos y Canadienses
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        6. Alguna de las clases incluye material de apoyo o libros?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Libros y grabaciones de las clases en vivo.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        7. Cuánto tiempo lleva completar cada nivel?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Proveemos las mismas herramientas para cada estudiante. El avance dependera mucho del empeno del estudiante.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        8. Por qué deberías elegir dar este paso que cambia tu vida y aprender con nosotras?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Mejores oportunidades laborales. Mejor crecimiento laboral y como reto personal.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        9. Tengo que pagar matrícula?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Pago de matricula es requerida para formalizar y reservar el espacio del estudiante.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        10. Cuáles son los métodos de pago que acepta?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Actualmente los pagos se realizan a travez de SINPE o SINPE movil.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                    <Accordion.Header>
                        11. Cuál es el precio de cada clase y qué tan grandes son las clases grupales?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Contamos con 6, 5, 4 personas por grupo dependiendo del nivel. Las clases grupales empizan con un costo de 3,000 colones.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                    <Accordion.Header>
                        12. Qué pasa si no puedo asistir a una clase, puedo reprogramarlo? 
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Contamos con clases de reposicion para los estudiantes que por diversas razones no pueden asistar a clases.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                    <Accordion.Header>
                        13. Cual es la edad a partir de la cual ensenamos?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Clases privadas o grupales contamos con diversas edades a partir de 10 anios. 
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                    <Accordion.Header>
                        14. El sistema de ensenanza es solamente en linea?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            La metodoliga de ensenanza online es nuestro metodo para todos los estudiantes.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                    <Accordion.Header>
                        15. Cuales son nuestros horarios de atencion y cuales los horarios?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Ofrecemos clases en las mananas, tardes y noches.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                    <Accordion.Header>
                        16. Cual es la politica de cancelacion?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Ofrecemos reposicion de clases en diversos horarios. El pago es final una vez canceladas la matricula.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="16">
                    <Accordion.Header>
                        17. Puedo hacer una clase de prueba antes de compromenterme con el estudio?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Por supuesto. Ofrecemos clases gratuitas de prueba.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="17">
                    <Accordion.Header>
                        18. Ofrecemos algun tipo de certificado con la conclusion del estudio?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                           Otorgamos un certificado de participacion una vez completado.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="18">
                    <Accordion.Header>
                        19. Tiene mas preguntas?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                        Para informacion adicional contactenos a travez de las redes sociales.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

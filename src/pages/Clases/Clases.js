import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import StudentsFooter from '../StudentsFooter/StudentsFooter'
import StudentsHeader from '../StudentsHeader/StudentsHeader'
const Clases = () => {
  return (
    <div>
      <header>
        <StudentsHeader />
      </header>
      <main>
        <Container>
          <Row className='text-center m-5'>
            <Col>
              <h3>
              MyNativeTeacher Costa Rica ofrece:
              </h3>
              <p>
              TODAS LAS CLASES SON VIRTUALES
              <br/>
              Clases desde 3000 mil colones y con NATIVOS!!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                Ingles desde 0 (básico) para Adolescentes y adultos
              </h3>
              <ul>
                <li >Con Teacher Jennifer, NATIVO</li>
                <li >3000 mil por clase</li>
                <li >4 semanas a 12 mil </li>
                <li >5 semanas a 15 mil </li>
                <li >1 hora por zoom</li>
                <li >Max 8 personas </li>
                <li >Pagos cada primero de mes </li>
              </ul>
              <p>
              Matricula 50% de una mensualidad, incluye quizzes cada mes, documentos de refuerzo, ayuda del teacher, guardar su espacio y grabaciones de cada clase. 
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src="./img/block1.png"
                />
                <Figure.Caption>
                Adult Classes
                </Figure.Caption>
              </Figure>

            </Col>
            <Col>
            <h3>
              Clase de Ingles para niños desde 0 y manualidades
            </h3>
              <ul>
              <li>Con Teacher Jennifer, NATIVO </li>
              <li>7-8 anos </li>
              <li>9-10 anos </li>
              <li>11-13 anos </li>
              <li>3000 mil por clase</li>
              <li>4 semanas a 12 mil</li>
              <li>5 semanas a 15mil </li>
              <li>1 hora por zoom</li>
              <li>Max 8 niños </li>
              <li>Pagos cada primero de mes </li>
              </ul>
              <p>
              Matricula 50% de una mensualidad, incluye quizzes cada mes, documentos de refuerzo y tareas pequenas, ayuda del teacher, guardar su espacio. Libro de starters y flyers de Cambridge por medio de correo electrónico. 
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src="./img/block2.png"
                />
                <Figure.Caption>
                  Kids Classes
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
              Teen Club Adolescente Club Conversational Ingles 
              </h3>
              <ul>
              <li>14-17 anos Teacher NATIVO</li>
              <li>3500 por clase </li>
              <li>4 semanas 14 mil  </li>
              <li>5 semanas 17500  </li>
              <li>1 hora por zoom </li>
              <li>Max 6 personas </li>
              </ul>
              <p>
              Matricula 50% de una mensualidad, incluye quizzes cada mes, documentos de refuerzo y tareas pequenas, ayuda del teacher, guardar su espacio. 
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src="./img/block3.png"
                />
                <Figure.Caption>
                  Teen Club Adolescente Club Conversational
                </Figure.Caption>
              </Figure>

            </Col>
            <Col>
            <h3>
              A2 Grammar Vocabulary Communication 
            </h3>
              <ul>
                <li>Grammatica, Vocabulario y Communicacion *speaking*</li>
                <li>3500 por clase  </li>
                <li>4 semanas 14 mil   </li>
                <li>5 semanas 17500 </li>
                <li>Max 8 estudiantes </li>
                <li>1 hora por zoom  </li>
              </ul>
              <p>
              Matricula 50% de una mensualidad, incluye quizzes cada mes, documentos de refuerzo y tareas pequenas, ayuda del teacher, guardar su espacio. Clase grabado. Menores de edad sin camera. 
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src="./img/block1.png"
                />
                <Figure.Caption>
                A2 Grammar Vocabulary Communication 
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <h3>
              B1 Grammar Vocabulary Communication 
              </h3>
              <ul>
              <li>Grammatica, Vocabulario y Communicacion *speaking*</li>
              <li>Teacher NATIVO</li>
              <li>3500 por clase   </li>
              <li>4 semanas 14 mil  </li>
              <li>5 semanas 17500 </li>
              <li>Max 8 estudiantes  </li>
              <li>1 hora por zoom   </li>
              </ul>
              <p>
              Matricula 50% de una mensualidad, incluye quizzes cada mes, documentos de refuerzo y tareas pequeñas, ayuda del teacher, guardar su espacio. Clase grabado. Menores de edad sin camera. 
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src=""
                />
                <Figure.Caption>
                B1 Grammar Vocabulary Communication 
                </Figure.Caption>
              </Figure>

            </Col>
            <Col>
            <h3>
              B1 Conversational Class 
            </h3>
              <ul>
                <li>Teacher NATIVO</li>
                <li>3000 por clase  </li>
                <li>4 semanas 12 mil    </li>
                <li>5 semanas 15 mil </li>
                <li>Max 6 personas  </li>
                <li>1 hora por zoom  </li>
              </ul>
              <p>
              Assessment audio para nivel gratis. 5 minutos llamada via zoom para conocer al teacher Jennifer gratis. Matricula 50% de una mensualidad, ayuda del teacher fuera de la clase y para guardar su espacio. Grabación de clase, si no puedes venir a clase tienes que avisar al teacher con 12 horas de anticipación o pierdes su clase pero puedes ver la grabación.  
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src=""
                />
                <Figure.Caption>
                B1 Conversational Class 
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>
              B2 Converational Class
              </h3>
              <ul>
              <li>Teacher NATIVO</li>
              <li>3000 por clase  </li>
              <li>4 semanas 12 mil   </li>
              <li>5 semanas 15 mil </li>
              <li>Max 6 personas  </li>
              <li>1 hora por zoom  </li>
              </ul>
              <p>
              Assessment audio para nivel gratis. 5 minutos llamada via zoom para conocer al teacher Jennifer gratis. Matricula 50% de una mensualidad, ayuda del teacher fuera de la clase y para guardar su espacio. Grabación de clase, si no puedes venir a clase tienes que avisar al teacher con 12 horas de anticipación o pierdes su clase pero puedes ver la grabación. 
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src=""
                />
                <Figure.Caption>
                B2 Converational Class
                </Figure.Caption>
              </Figure>

            </Col>
            <Col>
            <h3>
            Teachers Corner 
            </h3>
              <ul>
                <li>Una clase especial para practicar para TOEIC </li>
                <li>Teacher NATIVO  </li>
                <li>4000 por clase    </li>
                <li>4 semanas 16 mil </li>
                <li>5 semanas 20 mil </li>
                <li>Max 5 personas   </li>
                <li>1 hora por zoom    </li>
              </ul>
              <p>
              Reading comprehension, listening skills, describing pictures, pronunciation, fluency and MOST importantly eliminate nerves and feel more confident. Grabación de clase, si no puedes venir a clase tienes que avisar al teacher con 12 horas de anticipación o pierdes su clase pero puedes ver la grabación. 
              </p>
              <p>
              Matricula 50% de una mensualidad, ayuda del teacher fuera de la clase y para guardar su espacio. Libro de TOIEC para practicar. 
              </p>

              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src=""
                />
                <Figure.Caption>
                A2 Grammar Vocabulary Communication 
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>
              Private Class
              </h3>
              <ul>
              <li>12 mil colones por clase </li>
              <li>1 to 1  </li>
              <li>Teacher NATIVO </li>
              <li>1 hora por zoom  </li>
              <li>1 hora por zoom </li>
              <li>Max 6 personas </li>
              </ul>
              <p>
              Matricula 50% de una mensualidad, ayuda del teacher fuera de la clase, documentos de refuerzo y para guardar su espacio. 5 minutos llamada via zoom para conocer al teacher Jennifer gratis.
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src=""
                />
                <Figure.Caption>
                Private Class
                </Figure.Caption>
              </Figure>

            </Col>
            <Col>
            <h3>
            Semi Private Class
            </h3>
              <ul>
                <li>2 personas al mismo nivel </li>
                <li>Teacher NATIVO </li>
                <li>1 hora por zoom    </li>
                <li>Max 2 estudiantes</li>
                <li>12 mil en total *6 mil por estudiante* </li> 
              </ul>
              <p>
              Matricula 50% de una mensualidad, ayuda del teacher fuera de la clase, documentos de refuerzo y para guardar su espacio. 5 minutos llamada via zoom para conocer al teacher Jennifer gratis.
              </p>
              <Figure>
                <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src=""
                />
                <Figure.Caption>
                Semi Private Class
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Row className='text-center m-5'>
            <Col>
            <h3>
            30-minute classes * on the go*
            </h3>
              <ul>
                <div>Teacher Nativo </div>
                <div>Max 1 estudiante</div>
                <div>30 minutos por zoom     </div>
                <div>5000 por clase </div>
              </ul>
              <p>
              Matricula 50% de una mensualidad, ayuda del teacher fuera de la clase, documentos de refuerzo y para guardar su espacio. 5 minutos llamada via zoom para conocer al teacher Jennifer gratis.
              </p>
            <Figure.Image
                  max-width={'15%'}
                  height={'auto'}
                  alt="171x180"
                  src="./img/block4.png"
                />
            </Col>
          </Row>

          <Row className='text-center m-5'>
            <Col>
            <Figure.Image
                  width={'100%'}
                  height={'auto'}
                  alt="171x180"
                  src="./img/calendar.png"
                />
            </Col>
          </Row>

          
        </Container>
      </main>
      <footer>
        <StudentsFooter />
      </footer>
    </div>
  )
}
export default Clases
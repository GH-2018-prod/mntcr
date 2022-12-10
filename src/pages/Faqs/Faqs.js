import StudentsFooter from '../StudentsFooter/StudentsFooter'
import StudentsHeader from '../StudentsHeader/StudentsHeader'

import Accordion from 'react-bootstrap/Accordion';
const Faqs = () => {
    return (
        <div>
            <header>
                <StudentsHeader />
            </header>
            <main >
                <h1 className="text-center m-5">
                    And these are your questions!
                </h1>
                <Accordion defaultActiveKey="0" className="text-center m-5">
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>You are so freaking curious</Accordion.Header>
                        <Accordion.Body>
                        <p>
                           ...and your curiosity this is a little more more has led you to this point.. be proud :D 
                           </p>
                           <p>
                           this is a little more mor this is a little more more this is a little more more  this is a little more more  this is a little more more 
                           </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Now you are so proud you can't keep it to yourself?</Accordion.Header>
                        <Accordion.Body>
                        <p>
                           ...and your curiosity this is a little more more has led you to this point.. be proud :D 
                           </p>
                           <p>
                           this is a little more mor this is a little more more this is a little more more  this is a little more more  this is a little more more 
                           </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" >
                        <Accordion.Header>You are so freaking curious</Accordion.Header>
                        <Accordion.Body>
                        <p>
                           ...and your curiosity this is a little more more has led you to this point.. be proud :D 
                           </p>
                           <p>
                           this is a little more mor this is a little more more this is a little more more  this is a little more more  this is a little more more 
                           </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Now you are so proud you can't keep it to yourself?</Accordion.Header>
                        <Accordion.Body>
                        <p>
                           ...and your curiosity this is a little more more has led you to this point.. be proud :D 
                           </p>
                           <p>
                           this is a little more mor this is a little more more this is a little more more  this is a little more more  this is a little more more 
                           </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" >
                        <Accordion.Header>You are so freaking curious</Accordion.Header>
                        <Accordion.Body>
                        <p>
                           ...and your curiosity this is a little more more has led you to this point.. be proud :D 
                           </p>
                           <p>
                           this is a little more mor this is a little more more this is a little more more  this is a little more more  this is a little more more 
                           </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>Now you are so proud you can't keep it to yourself?</Accordion.Header>
                        <Accordion.Body>
                        <p>
                           ...and your curiosity this is a little more more has led you to this point.. be proud :D 
                           </p>
                           <p>
                           this is a little more mor this is a little more more this is a little more more  this is a little more more  this is a little more more 
                           </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </main>
            <footer>
                <StudentsFooter />
            </footer>
        </div>
    );
}
export default Faqs;
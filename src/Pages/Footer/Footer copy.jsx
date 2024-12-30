import { Facebook, Instagram } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div className="text-center text-lg-start text-white mt-4" >
      
      <Container className='mt-5 mb-5'>
      <hr/>
        <Row >
          <Col className="text-center">
            <a
              className="btn btn-lg text-white m-1"
              style={{ backgroundColor: '#3b5998' }}
              href="https://www.facebook.com"
              role="button"
            ><Facebook /></a>
            <a
              className="btn btn-lg text-white m-1 instagram"
              href="https://www.instagram.com"
              role="button"
            ><Instagram /></a>
          </Col>
          <Col className="text-center text-black">
            <p>
              San Jose, Costa Rica  © 2023 Copyright My Native Teacher
            </p>

            <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
  </footer>
</div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

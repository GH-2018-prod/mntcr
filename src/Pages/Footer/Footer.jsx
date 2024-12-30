import { Facebook, Instagram } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { logo } from '../../assets'
import { Box } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Container className='mt-5 mb-5' >
      <Row >
        <Col className="text-center">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img src={logo} className="bi" width="30" height="24" />
              </a>
              <span className="mb-3 mb-md-0 text-muted">© 2024 My Native Teacher CR</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

              <li className="ms-3">
                <Box fontSize={36} pt={2}>
                  <a href="https://www.instagram.com">
                    <Instagram />
                  </a>
                </Box>
              </li>
              <li className="ms-3">
                <Box fontSize={36} pt={2}>
                  <a href="https://www.facebook.com">
                    <Facebook />
                  </a>
                </Box>
              </li>
            </ul>
          </footer>
        </Col>
      </Row>
    </Container>

  )
}

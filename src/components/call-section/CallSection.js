import "./callSection.scss"
import { Container, Row, Col } from 'react-bootstrap';

const CallSection = () => {
    return(
        <section className="callto-section set-bg" style={{ backgroundImage: 'url(https://mdk.pw/img/ctc-bg.jpg)' }}>
            <Container>
              <Row>
                <Col lg={10} className="m-auto">
                  <div className="ctc-text">
                    <h2>We Create Trends For The World</h2>
                    <p>
                      Donec faucibus consequat ante. Mauris eget mi sed ex efficitur porta id non quam. Cras aliquam turpis tellus, 
                      quis laoreet lacus congue sed. Nullam at est quis urna vestibulum interdum. Praesent auctor leo ut massa 
                      ultrices tempor.
                    </p>
                    <a href="/" className="primary-btn ctc-btn">Work With Us</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
    )
}


export default CallSection;
import "./callSection.scss"
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const CallSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])

    return(
        <section className="callto-section set-bg" style={{ backgroundImage: 'url(https://mdk.pw/img/ctc-bg.jpg)' }}>
            <Container>
              <Row>
                <Col lg={10} className="m-auto">
                  <div className="ctc-text" 
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine">
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
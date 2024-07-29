import "./counterSection.scss";
import { useEffect, useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';

const CounterSection = () => {
    const [projectCount, setProjectCount] = useState(0);
    const [eventCount, setEventCount] = useState(0);
    useEffect(() => {
        const animateCount = (target, setState, duration) => {
          let start = 0;
          const end = parseInt(target);
          const increment = end / (duration / 100);
          const stepTime = Math.abs(Math.floor(duration / (end / increment)));
          
          const timer = setInterval(() => {
            start += increment;
            setState(Math.ceil(start));
            if (start >= end) {
              clearInterval(timer);
              setState(end);
            }
          }, stepTime);
        };
  
        animateCount(2034, setProjectCount, 4000);
        animateCount(1054, setEventCount, 4000);
      }, []);

    return(
        <section className="counter-section spad">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="counter-text">
                    <div className="section-title">
                      <span>Number Speaks</span>
                      <h2>We have a lot of <br />experience</h2>
                    </div>
                    <a href="/" className="primary-btn">Read More</a>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="counter-item">
                    <div className="ci-number count">
                      {projectCount}
                    </div>
                    <div className="ci-text">
                      <h4>Successful projects</h4>
                      <p>Since its establishment in 2005, Fashion has been focusing on project management &
                        implementation through cooperation.</p>
                    </div>
                  </div>
                  <div className="counter-item">
                    <div className="ci-number count">
                      {eventCount}
                    </div>
                    <div className="ci-text">
                      <h4>Events</h4>
                      <p>Since its establishment in 2005, Fashion has been focusing on project management &
                        implementation through cooperation.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
    )
}




export default CounterSection;
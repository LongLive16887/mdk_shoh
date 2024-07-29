import { Container, Row, Col } from 'react-bootstrap';
import "./aboutUsSecondSection.scss";
import { useState, useEffect } from 'react';

const AboutUsSecondSection = () => {
    const [memberCount, setMemberCount] = useState(0);
    const [partnerCount, setPartnerCount] = useState(0);
    const [branchCount, setBranchCount] = useState(0);
    const [designsCount, setDesignsCount] = useState(0);

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

          return () => clearInterval(timer); // Clear interval on cleanup
        };

        const memberTimer = animateCount(8384, setMemberCount, 3000);
        const partnerTimer = animateCount(6880, setPartnerCount, 3000);
        const branchTimer = animateCount(8384, setBranchCount, 3000);
        const designsTimer = animateCount(6880, setDesignsCount, 3000);

        return () => {
            clearInterval(memberTimer);
            clearInterval(partnerTimer);
            clearInterval(branchTimer);
            clearInterval(designsTimer);
        };
      }, []);
      
    return (
        <section className="about-us-section spad">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="as-pic">
                            <img src="https://mdk.pw/img/about-us.jpg" alt="About us" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="as-text ap-text">
                            <div className="section-title">
                                <span>About us</span>
                                <h2>About Story</h2>
                            </div>
                            <p className="f-para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="s-para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                            <div className="about-counter">
                                <div className="ac-item">
                                    <h2 className="ab-count">{memberCount}</h2>
                                    <p>Member</p>
                                </div>
                                <div className="ac-item">
                                    <h2 className="ab-count">{partnerCount}</h2>
                                    <p>Partner</p>
                                </div>
                                <div className="ac-item">
                                    <h2 className="ab-count">{branchCount}</h2>
                                    <p>Branch</p>
                                </div>
                                <div className="ac-item">
                                    <h2 className="ab-count">{designsCount}</h2>
                                    <p>Designs</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUsSecondSection;

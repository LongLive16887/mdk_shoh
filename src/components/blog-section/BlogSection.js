import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import photo from "../../assets/tan1.webp"

const BlogSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  

  
  return (
    <section className="blog-section latest-blog spad">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="section-title" data-aos="zoom-in-left">
              <span>Latest Blog</span>
              <h2>From Our Blog</h2>
            </div>
          </Col>
        </Row>
        <Row>
        <Col md={6}>
              <div className="blog-item" data-aos="zoom-in-left">
                <Row>
                  <Col lg = {6}>
                    <div 
                      className="bi-pic set-bg" 
                      style={{ backgroundImage: `url(${photo})` }} 
                    />
                  </Col>
                  <Col lg = {6}>
                    <div className="bi-text">
                      <ul>
                        <li>
                          <img 
                            src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/calendar.svg" 
                            alt="calendar" 
                            height="16" 
                            width="16" 
                          /> 
                          {"August 9, 2019"}
                        </li>
                        <li>
                          <img 
                            src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/comment.svg" 
                            alt="comment" 
                            height="16" 
                            width="16" 
                          /> 
                          0
                        </li>
                      </ul>
                      <h4><a href="/">Every Single Way You Can Wear Pastel Makeup This Spring</a></h4>
                      <p>Never ever think of giving up. Winners never quit and</p>
                      <div className="bt-author">
                        <div className="ba-pic">
                          <img src={photo} alt="Author" />
                        </div>
                        <div className="ba-text">
                          <h5>Jeff Rodriguez</h5>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="blog-item" data-aos="zoom-in-left">
                <Row>
                  <Col lg={6} >
                    <div 
                      className="bi-pic set-bg" 
                      style={{ backgroundImage: `url(${photo})` }} 
                    />
                  </Col>
                  <Col lg={6} >
                    <div className="bi-text">
                      <ul>
                        <li>
                          <img 
                            src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/calendar.svg" 
                            alt="calendar" 
                            height="16" 
                            width="16" 
                          /> 
                          {"August 9, 2019"}
                        </li>
                        <li>
                          <img 
                            src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/comment.svg" 
                            alt="comment" 
                            height="16" 
                            width="16" 
                          /> 
                          0
                        </li>
                      </ul>
                      <h4><a href="/">Every Single Way You Can Wear Pastel Makeup This Spring</a></h4>
                      <p>Never ever think of giving up. Winners never quit and</p>
                      <div className="bt-author">
                        <div className="ba-pic">
                          <img src={photo} alt="Author" />
                        </div>
                        <div className="ba-text">
                          <h5>Jeff Rodriguez</h5>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;

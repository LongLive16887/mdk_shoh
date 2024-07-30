import React from 'react';
import {  Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import "./breadCrumb.scss"


const BreadcrumbComponent = () => {
  const location = useLocation();
  const path = location.pathname;
  const pageTitles = {
    '/about-us': 'About Us',
    '/blog': 'Blog',
  };

  return (
    <section className="breadcrumb-section">
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <div className='breadcrumb-option'>
              <a href="/">Home</a>
              <span>{pageTitles[path]}</span>
            </div>
          </Col>
          <Col lg={6} md={6} className="text-right">
            <div className="breadcrumb-text">
              <h3>{pageTitles[path]}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BreadcrumbComponent;

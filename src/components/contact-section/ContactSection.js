import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './contactSection.scss';

const ContactSection = () => {
    return (
        <section className="contact-section spad">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="contact-text">
                            <h4>Contacts Us</h4>
                            <div className="ct-item">
                                <div className="ci-icon">
                                    <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/location-pin.svg" alt="Location" />
                                </div>
                                <div className="ci-text">
                                    <ul>
                                        <li>
                                            <span>Our Location</span>
                                            60-49 Road 11378 New York
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ct-item">
                                <div className="ci-icon">
                                <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/mobile.svg" alt="Mobile Icon" />
                                </div>
                                <div className="ci-text">
                                    <ul>
                                        <li>
                                            <span>Phone:</span>
                                            +65 11.188.888
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ct-item">
                                <div className="ci-icon">
                                    <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/email.svg" alt="Email Icon" />
                                </div>
                                <div className="ci-text">
                                    <ul>
                                        <li>
                                            <span>Mail</span>
                                            hellocolorlib@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="contact-option">
                            <h4>Leave A Comment</h4>
                            <Form className="comment-form contact-form">
                                <Row>
                                    <Col lg={6}>
                                        <input type="text" placeholder="Name" />
                                    </Col>
                                    <Col lg={6}>
                                        <input type="text" placeholder="Email" />
                                    </Col>
                                    <Col lg={12}>
                                        <textarea as="textarea" placeholder="Messages" />
                                        <a type="submit" className="site-btn">Send Message</a>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactSection;

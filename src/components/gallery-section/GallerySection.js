import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './gallerySection.scss';

const GallerySection = () => {
    const [modalContent, setModalContent] = useState(null);

    const handleMediaClick = (src, width, height) => {
        setModalContent({ src, width, height });
    };

    const closeModal = () => {
        setModalContent(null);
    };

    useEffect(() => {
        const handleClick = (event) => {
          const target = event.currentTarget;
          document.querySelectorAll('.gallery-controls li').forEach((li) => {
            li.classList.remove('active');
          });
          target.classList.add('active');
        };
    
        document.querySelectorAll('.gallery-controls li').forEach((li) => {
          li.addEventListener('click', handleClick);
        });
    
        const containerEl = document.querySelector('.gallery-filter');
        if (containerEl) {
          const mixitup = require('mixitup');
          const mixer = mixitup(containerEl);
        }
    
        return () => {
          document.querySelectorAll('.gallery-controls li').forEach((li) => {
            li.removeEventListener('click', handleClick);
          });
        };
      }, []);

    return (
        <section className="gallery-section spad">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="gallery-controls">
                            <ul>
                                <li className="active" data-filter=".all">All gallery</li>
                                <li data-filter=".fashion">Fashion</li>
                                <li data-filter=".model">Model</li>
                                <li data-filter=".event">Event</li>
                                <li data-filter=".other">Other</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="gallery-filter">
                    <Col lg={6} className="mix all fashion">
                        <div className="gs-item">
                            <video
                                width="100%"
                                height="auto"
                                src="https://mdk.pw/img/port/Comp 113.mp4"
                                autoPlay
                                muted
                                loop
                                onClick={() => handleMediaClick('https://mdk.pw/img/port/Comp 113.mp4', 600, 600)}
                            >
                                <source src="https://mdk.pw/img/port/Comp 113.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6} className="mix all model">
                                <div className="gs-item">
                                    <video
                                        width="100%"
                                        height="auto"
                                        src="https://mdk.pw/img/port/photo_2024-02-12_21-32-55.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        onClick={() => handleMediaClick('https://mdk.pw/img/port/photo_2024-02-12_21-32-55.mp4', 600, 600)}
                                    >
                                        <source src="https://mdk.pw/img/port/photo_2024-02-12_21-32-55.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </Col>
                            <Col lg={6} className="mix all event">
                                <div className="gs-item">
                                    <video
                                        width="100%"
                                        height="auto"
                                        src="https://mdk.pw/img/port/photo_2023-06-26_10-05-39.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        onClick={() => handleMediaClick('https://mdk.pw/img/port/photo_2023-06-26_10-05-39.mp4', 600, 600)}
                                    >
                                        <source src="https://mdk.pw/img/port/photo_2023-06-26_10-05-39.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </Col>
                            <Col lg={6} className="mix all other">
                                <div className="gs-item">
                                    <video
                                        width="100%"
                                        height="auto"
                                        src="https://mdk.pw/img/port/jerry.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        onClick={() => handleMediaClick('https://mdk.pw/img/port/jerry.mp4', 600, 600)}
                                    >
                                        <source src="https://mdk.pw/img/port/jerry.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </Col>
                            <Col lg={6} className="mix all fashion">
                                <div className="gs-item">
                                    <video
                                        width="100%"
                                        height="auto"
                                        src="https://mdk.pw/img/port/Comp 1_1.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        onClick={() => handleMediaClick('https://mdk.pw/img/port/Comp 1_1.mp4', 600, 600)}
                                    >
                                        <source src="https://mdk.pw/img/port/Comp 1_1.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6} className="mix all event">
                                <div className="gs-item">
                                    <video
                                        width="100%"
                                        height="auto"
                                        src="https://mdk.pw/img/port/ae.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        onClick={() => handleMediaClick('https://mdk.pw/img/port/ae.mp4', 600, 600)}
                                    >
                                        <source src="https://mdk.pw/img/port/ae.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </Col>
                            <Col lg={6} className="mix all model other">
                                <div className="gs-item">
                                    <video
                                        width="100%"
                                        height="auto"
                                        src="https://mdk.pw/img/port/Comp 12222_2.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        onClick={() => handleMediaClick('https://mdk.pw/img/port/Comp 12222_2.mp4', 600, 600)}
                                    >
                                        <source src="https://mdk.pw/img/port/Comp 12222_2.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="mix all fashion event">
                        <div className="gs-item">
                            <video
                                width="100%"
                                height="auto"
                                src="https://mdk.pw/img/port/qwinsnew.mp4"
                                autoPlay
                                muted
                                loop
                                onClick={() => handleMediaClick('https://mdk.pw/img/port/qwinsnew.mp4', 600, 600)}
                            >
                                <source src="https://mdk.pw/img/port/qwinsnew.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                    <Col lg={6} className="mix all fashion event">
                        <div className="gs-item">
                            <video
                                width="100%"
                                height="auto"
                                src="https://mdk.pw/img/port/alkatras.mp4"
                                autoPlay
                                muted
                                loop
                                onClick={() => handleMediaClick('https://mdk.pw/img/port/alkatras.mp4', 600, 600)}
                            >
                                <source src="https://mdk.pw/img/port/alkatras.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                    <Col lg={6} className="mix all fashion event">
                        <div className="gs-item">
                            <video
                                width="100%"
                                height="auto"
                                src="https://mdk.pw/img/port/Comp 1 volumetric.mp4"
                                autoPlay
                                muted
                                loop
                                onClick={() => handleMediaClick('https://mdk.pw/img/port/Comp 1 volumetric.mp4', 600, 600)}
                            >
                                <source src="https://mdk.pw/img/port/Comp 1 volumetric.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                    <Col lg={6} className="mix all fashion event">
                        <div className="gs-item">
                            <video
                                width="100%"
                                height="auto"
                                src="https://mdk.pw/img/port/Comp 1.mp4"
                                autoPlay
                                muted
                                loop
                                onClick={() => handleMediaClick('https://mdk.pw/img/port/Comp 1.mp4', 600, 600)}
                            >
                                <source src="https://mdk.pw/img/port/Comp 1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                </Row>
            </Container>

            {modalContent && (
                <div className="modal-container" onClick={closeModal}>
                    <div className="modal-content" style={{ width: modalContent.width, height: modalContent.height}}>
                        <video
                            width="100%"
                            height="auto"
                            src={modalContent.src}
                            controls
                            autoPlay
                        >
                            <source src={modalContent.src} type="video/mp4" />
                        </video>
                        <a className="primary-btn"  onClick={closeModal}>X</a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default GallerySection;

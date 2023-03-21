/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
>>>>>>> 238bef9437c48a1f5e97182c5fe5a5148a8518d8
=======
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
>>>>>>> 3dc05eac152858ab09265fa63adcaa887c719516

export const CarouselComponent = ({ categorias }) => {
    const [newItem, setNewItem] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e, item) => {
        setNewItem(item)
        setShow(true)
    }

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <Container>
            <Row className="justify-content-center m-3">
                <ItemsCarousel
                    infiniteLoop
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<BsFillArrowLeftCircleFill style={{ color: '#ff8a84', fontSize: '50px' }}></BsFillArrowLeftCircleFill>}
                    rightChevron={<BsFillArrowRightCircleFill style={{ color: '#ff8a84', fontSize: '50px' }}></BsFillArrowRightCircleFill>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {categorias.map((item, index) => [
                        <div key={index} style={{ height: 200, background: '#ffffff', objectFit: 'cover' }}>
                            <Row>
                                <Col>
                                    <Image src={item.src} style={{ width: '14rem', height: "200px" }} onClick={e => handleShow(e, item)} />
                                </Col>
                                <Col>
                                    <div >
                                        <h5 style={{ lineHeight: '180px', textAlign: 'center' }}>{item.name}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ])}
                    <Modal
                        show={show}
                        onHide={handleClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Categoria elegida</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                    <Image src={newItem.src} style={{ width: '14rem', height: "200px" }} />
                                </Col>
                                <Col>
                                    <div >
                                        <h5 style={{ lineHeight: '180px', textAlign: 'center' }}>{newItem.name}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </Modal>
                </ItemsCarousel>
            </Row>
        </Container>
    );
};
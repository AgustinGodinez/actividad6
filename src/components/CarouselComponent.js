/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export const CarouselComponent = ({ categorias }) => {

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
                                    <Image src={item.src} style={{ width: '14rem', height: "200px" }} />
                                </Col>
                                <Col>
                                    <div >
                                        <h5 style={{ lineHeight: '180px', textAlign: 'center' }}>{item.name}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    ])}
                </ItemsCarousel>
            </Row>
        </Container>
    );
};
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Button, Card, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const CarouselCard = ({ products }) => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    console.log(products);
    return (
        <Container >
            <Row>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={20}
                    leftChevron={<BsFillArrowLeftCircleFill style={{ color:'#ff8a84' ,fontSize: '50px' }}></BsFillArrowLeftCircleFill>}
                    rightChevron={<BsFillArrowRightCircleFill style={{ color:'#ff8a84' ,fontSize: '50px' }}></BsFillArrowRightCircleFill>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {
                        products.map((product) => (
                            <Col key={product.id}>
                                <Card className='my-2' style={{ width: '24rem' }}>
                                    <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title >
                                            <Stack direction="horizontal" gap={2}>
                                                <div>
                                                    <div className='title-card'>{product.title}</div>
                                                </div>
                                                <div className="ms-auto shadow-text fw-bold" >$ {product.price}</div>
                                            </Stack>
                                        </Card.Title>
                                        <Stack direction="horizontal" gap={1}>
                                            <IconContext.Provider value={{ color: "red", size: '20px' }} >
                                                <div className=" ms-auto">
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiOutlineStar />
                                                </div>
                                            </IconContext.Provider>

                                            <div className="shadow-text fw-bold mx-2 " style={{ fontSize: '20px' }}>{product.start}</div>
                                        </Stack>
                                        <Card.Text style={{ margin: '20px' }}>
                                            <div style={{ fontWeight: '600' }}>
                                                {product.description}
                                            </div>
                                        </Card.Text>
                                        <Stack direction="horizontal" gap={1}>
                                            <div>
                                            </div>
                                            <div className='ms-auto'>
                                                <Button variant="primary" style={{ color: 'white', fontWeight: 'bold' }}>
                                                    Ver mas
                                                </Button>
                                            </div>
                                        </Stack>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </ItemsCarousel>
            </Row>
        </Container>
    );
};
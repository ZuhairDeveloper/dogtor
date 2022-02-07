import React, { useEffect, useState, } from "react";
import ModalSkeleton from "./ModalSkeleton";
import { Container, Row, Col } from "react-bootstrap"
import { AiOutlineEye } from "react-icons/ai"
import { FaLongArrowAltRight, FaArrowsAltH } from "react-icons/fa"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import "./lookingforservicemodal.css"

const LookingForServiceModal = ({ open, setOpen, onUpdate, }) => {
    const [isApiCall, setIsApiCall] = useState(false);
    // const [cityName, setCityName] = useState(prevData?.name)
    const [address, setAddress] = useState('')
    const [firstCardSelection, setFirstCardSelection] = useState(1)

    return (
        <ModalSkeleton open={open} setOpen={setOpen} className="looking-for-service-modal">
            <section className="looking-for-service-modal-section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            {/* Modal Header */}
                            <Row className="modal-header">
                                <Col lg={4} md={3} xs={12}>
                                    <p>Estoy buscando un servicio para mi:</p>
                                </Col>
                                <Col lg={8} md={9} xs={12}>
                                    <ul className="header-list">
                                        <li className="selected-list">Perro</li>
                                        <li>Gato</li>
                                        <li>Mamíferos</li>
                                        <li>Reptiles</li>
                                        <li>Otros</li>
                                    </ul>
                                </Col>
                            </Row>

                            {/* Modal Content */}
                            {/* First Cards Row */}
                            <Row className="first-cards-row">
                                <Col lg={6}>
                                    <Row>
                                        <p>Para cuando estás fuera de casa</p>
                                        <Col lg={6} md={6} xs={12}>
                                            <div className={`first-card ${firstCardSelection === 1 && 'selected-first-card'}`} onClick={() => setFirstCardSelection(1)}>
                                                <div>
                                                    <p>Cuidadog</p>
                                                    <div className="card-icons">
                                                        <BsFillSunFill size={12} className="green-icon" />
                                                        <FaArrowsAltH size={12} className="white-icon" />
                                                        <BsFillMoonFill size={12} className="white-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} xs={12}>
                                            <div className={`first-card ${firstCardSelection === 2 && 'selected-first-card'}`} onClick={() => setFirstCardSelection(2)}>
                                                <div className="">
                                                    <AiOutlineEye className="icon-center" />
                                                    <p>Ojeadog</p>
                                                </div>
                                            </div>
                                        </Col>

                                    </Row>

                                </Col>
                                <Col lg={6}>
                                    <p>Para cuando estés en casa</p>
                                    <Row>
                                        <Col lg={6} md={6} xs={12}>
                                            <div className={`first-card ${firstCardSelection === 3 && 'selected-first-card'}`} onClick={() => setFirstCardSelection(3)}>
                                                <div className="">
                                                    <p>Paseadog</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={6} xs={12}>
                                            <div className={`first-card ${firstCardSelection === 4 && 'selected-first-card'}`} onClick={() => setFirstCardSelection(4)}>
                                                <p>Bañadog</p>
                                            </div>
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>

                            {/* Input Boxes */}
                            <Row className="input-boxes-row">
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <p>Alojamiento de perros cerca de</p>
                                        <input placeholder="Código postal o dirección" />
                                    </div>
                                </Col>
                                <Col lg={4} md={6} xs={6}>
                                    <div>
                                        <p>Para esos días</p>
                                        <input type={'date'} />
                                    </div>
                                </Col>
                                <Col lg={1} md={2} xs={2}>
                                    <div className="arrow-center">
                                        <FaLongArrowAltRight />
                                    </div>

                                </Col>
                                <Col lg={3} md={6} xs={6}>
                                    <div>
                                        <p>Salida</p>
                                        <input type={'date'} />
                                    </div>
                                </Col>
                            </Row>
                            {/* Second Cards Row */}
                            <Row>
                                <Col lg={9} md={9} xs={9}>
                                    <Row className="second-card-row">
                                        <Col lg={3} md={3} xs={6}>
                                            <div className="second-card">
                                                <div>
                                                    <p>Pequeño</p>
                                                    <p>0-7kg</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={3} xs={6}>
                                            <div className="second-card">
                                                <div>

                                                    <p>Mediano</p>
                                                    <p>7-18kg</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={3} xs={6}>
                                            <div className="second-card">
                                                <div>
                                                    <p>Grande</p>
                                                    <p>18-45kg</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={3} xs={6}>
                                            <div className="second-card">
                                                <div>
                                                    <p>Gigante</p>
                                                    <p>45+kg</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={3} md={3} xs={3}>
                                    <div className="buscar-btn-box">
                                        <button>Buscar</button>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </section>
        </ModalSkeleton >
    );
};

export default LookingForServiceModal;

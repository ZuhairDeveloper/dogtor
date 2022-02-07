import React, { useEffect, useState, } from "react";
import ModalSkeleton from "./ModalSkeleton";
import { Container, Row, Col } from "react-bootstrap"
import "./enteraddressmodal.css"

const EnterAddressModal = ({ open, setOpen, onUpdate, }) => {
    const [isApiCall, setIsApiCall] = useState(false);
    // const [cityName, setCityName] = useState(prevData?.name)
    const [address, setAddress] = useState('')

    return (
        <ModalSkeleton open={open} setOpen={setOpen} className="enter-address-modal">
            <section className="enter-address-modal-section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <p className="heading">Ingresa tu dirección</p>
                            <p className="tagline">¿Dónde quieres recibir tu pedido?</p>
                            <input placeholder="Ingresa tu dirección"/>
                            <button>Buscar</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </ModalSkeleton >
    );
};

export default EnterAddressModal;

import React from "react"
import ModalSkeleton from "./ModalSkeleton";
import { Container, Row, Col } from "react-bootstrap"
import { MdOutlineCancelPresentation } from "react-icons/md"
import { GrFormLocation } from "react-icons/gr"
import "./selectandexplorecitymodal.css"

function SelectAndExploreCityModal({ open, setOpen }) {

    return (
        <ModalSkeleton open={open} setOpen={setOpen} className="select-and-explore-modal" noRadius>
            <section className="select-and-explore-city-modal">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <MdOutlineCancelPresentation className="cancel-icon" onClick={() => setOpen(false)} />
                            <div className="location-heading-and-input">
                                <h2><GrFormLocation className="location-icon" /><span>Seleccionar y explorar una ciudad</span></h2>
                                <input placeholder="Paris, Madrid, Buen..." />
                                <p>Introducir la ubicación</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </ModalSkeleton >
    )
}

export default SelectAndExploreCityModal
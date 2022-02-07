import React from "react"
import ModalSkeleton from "./ModalSkeleton";
import { Container, Row, Col } from "react-bootstrap"
import { MdOutlineCancelPresentation } from "react-icons/md"
import { GrFormLocation } from "react-icons/gr"
import "./locationselectionmodal.css"

function LocationSelectionModal({ open, setOpen }) {

    return (
        <ModalSkeleton open={open} setOpen={setOpen} className="location-modal" noRadius>
            <section className="location-selection-modal">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <MdOutlineCancelPresentation className="cancel-icon" onClick={() => setOpen(false)} />
                            <div className="location-heading-and-input">
                                <h2><GrFormLocation className="location-icon" /><span>Selecciona un continente</span></h2>
                                <input placeholder="America, Europa, Asia…" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </ModalSkeleton >
    )
}

export default LocationSelectionModal
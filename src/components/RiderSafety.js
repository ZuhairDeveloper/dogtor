import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Falso } from "../constant/imagePath";
import "./ridersafety.css";

function RiderSafety() {
  return (
    <section className="rider-safety-section">
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="rider-safety-left">
                  <h3>Nuestro pacto con tu seguridad</h3>
                  <p>
                    Concada función de seguridad que añadimos y cada estándar de
                    las directrices de la comunidad que mantenemos, nos
                    comprometemos a crear un entorno seguro para nuestros
                    usuarios. Consulta más información sobre las directrices de
                    la comunidad
                  </p>
                  <h6 className="bold-b black">
                    Ver todas las funciones de seguridad
                  </h6>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="rider-safety-right">
                  <Image alt="" src={Falso} className="rider-safety-img" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RiderSafety;

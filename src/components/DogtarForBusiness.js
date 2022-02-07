import React from "react";
import {
  LocationsCircle,
  Dogtar4Business,
  SmallIconD4B,
} from "../constant/imagePath";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./dogtarforbusiness.css";

function DogtarForBusiness() {
  return (
    <section className="dogtor-for-business-section">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Row className="gx-0 dogtor-for-business-box">
              <Col lg={7} md={7} sm={6} xs={12}>
                <div className="dogtar-for-business-left-box">
                  <h3>
                    Dogtor
                    <span>4</span>
                    Business
                    <Image src={SmallIconD4B} className="d4b-small-icon" />
                  </h3>
                  <p>La mejor manera de organizar e impulsar tu negocio B2B.</p>
                  <button className="start-now-btn font-15 mt-2 bold-b">
                    Empieza ahora
                  </button>
                </div>
              </Col>

              <Col lg={5} md={5} sm={6} xs={12}>
                <div className="dogtar-for-business-right-box">
                  <Image
                    alt=""
                    src={Dogtar4Business}
                    className="dogtar-for-business-right-box-img"
                  />
                </div>
              </Col>

              {/* ABSOLUTE IMAGE */}
              <div className="locations-circle-img position-absolute">
                <Image alt="" src={LocationsCircle} className="w-100 h-100" />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DogtarForBusiness;

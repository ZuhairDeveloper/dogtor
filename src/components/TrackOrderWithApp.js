import React, { useState } from "react";
import {
  MobileAppIcon,
  DashboardIcon,
  DevelopmentIcon,
  SmartPhone,
  AppStore,
  GooglePlay,
  TrackOrderSmallIcon1,
  TrackOrderSmallIcon2,
  TrackOrderDashboardImg,
  TrackOrderDevelopmentImg,
} from "../constant/imagePath";
import { Image, Row, Col, Container } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import "./trackorderwithapp.css";

function TrackOrderWithApp() {
  const [section, setSection] = useState(1);

  return (
    <section className="track-order-section">
      <Container>
        <Row>
          <Col lg={12}>
            {section === 1 && (
              <>
                <Row className="buttons-row">
                  <Col md={4} sm={6} xs={12}>
                    <div>
                      <button className="mobile-app-btn bold-b">
                        <span className="track-order-btn-icon">
                          <Image
                            alt=""
                            src={MobileAppIcon}
                            className="img-fluid"
                          />
                        </span>
                        Mobile App
                      </button>
                    </div>
                  </Col>
                  <Col md={4} sm={6} xs={12}>
                    <div>
                      <button
                        className="dashboard-btn bold-b"
                        onClick={() => setSection(2)}
                      >
                        <span className="track-order-btn-icon">
                          <Image
                            alt=""
                            src={DashboardIcon}
                            className="img-fluid"
                          />
                        </span>
                        Dashboard
                      </button>
                    </div>
                  </Col>
                  <Col md={4} sm={6} xs={12}>
                    <div>
                      <button
                        className="development-btn bold-b"
                        onClick={() => setSection(3)}
                      >
                        <span className="track-order-btn-icon">
                          <Image
                            alt=""
                            src={DevelopmentIcon}
                            className="img-fluid"
                          />
                        </span>
                        Development
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row className="track-order-main-content-row">
                  <Col lg={4} md={12} xs={12}>
                    <div className="left-section">
                      <h3>
                        <span>Sigue tus pedidos con la </span>

                        <span className="bold-b black">App de Dogtor</span>
                      </h3>
                      <p>
                        Rastrea todos tus pedidos en tiempo real, y pide desde
                        donde quieras.
                      </p>
                      <div className="platforms">
                        <Image
                          alt=""
                          src={GooglePlay}
                          className="track-order-app-platform"
                        />
                        <Image
                          alt=""
                          src={AppStore}
                          className="ms-3 track-order-app-platform"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={8} md={12} xs={12}>
                    <div className="right-section">
                      <Image alt="" src={SmartPhone} className="img-fluid" />
                    </div>
                  </Col>
                </Row>
              </>
            )}

            {section === 2 && (
              <Row className="dashboard-data-row">
                <Col lg={{ offset: 2, span: 8 }}>
                  <p>
                    Inicia entregas instantáneas o programadas con nuestra
                    plataforma de entrega Saas
                  </p>
                  <h3>No se necesita integración de IT</h3>
                  <Row>
                    <Col lg={11} md={11} xs={11}>
                      <div className="dashboard-img">
                        <Image
                          alt=""
                          src={TrackOrderDashboardImg}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={1} md={1} xs={1}>
                      <div className="close-icon-box">
                        <AiOutlineClose
                          className="close-icon"
                          onClick={() => setSection(1)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}

            {section === 3 && (
              <Row className="development-data-row">
                <Col lg={{ offset: 2, span: 8 }}>
                  <p>
                    Integra nuestra <h3>API</h3> en tu método de pago y ofrece
                    entregas instantáneas o programadas{" "}
                    <h3>A TODOS TUS CLIENTES</h3>
                  </p>
                  <Row>
                    <Col lg={11} md={11} xs={11}>
                      <div className="development-img">
                        <Image
                          alt=""
                          src={TrackOrderDevelopmentImg}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={1} md={1} xs={1}>
                      <div className="close-icon-box">
                        <AiOutlineClose
                          className="close-icon"
                          onClick={() => setSection(1)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
      <div className="bg-img-top"></div>
      <div className="bg-img-bottom"></div>
      <div className="top-circle-icon">
        <Image alt="" className="img-fluid" src={TrackOrderSmallIcon1} />
      </div>
      <div className="bottom-circle-icon">
        <Image alt="" className="img-fluid" src={TrackOrderSmallIcon2} />
      </div>
    </section>
  );
}

export default TrackOrderWithApp;

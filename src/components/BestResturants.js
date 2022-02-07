import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { AiOutlineLike, AiOutlineClockCircle } from "react-icons/ai";
import "./bestresturants.css";

function BestResturantCard({ image, buttonText }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Col lg={6} md={6} xs={12} sm={12}>
      <div
        className={`best-resturant-card-2 ${isHover && "hover-color-2"}`}
        onMouseOver={() => {
          setIsHover(true);
          return;
        }}
        onMouseLeave={() => {
          setIsHover(false);
          return;
        }}
      >
        <Image alt="" src={image} className="card-img" />
        <button className="best-resturant-card-2-text">{buttonText}</button>

        <div
          className={`${
            isHover ? "hover-color-1" : "d-none"
          } best-resturant-card-2-hover-text-box`}
        >
          <div>
            <AiOutlineLike size={20} className="like" />
            <span className="percentage">95%</span>
            <span className="views">(500+)</span>
          </div>
          <div>
            <span className="time-duration">20-30 Min</span>
            <AiOutlineClockCircle size={20} className="text-white" />
          </div>
        </div>
      </div>
    </Col>
  );
}

function BestResturants({ data }) {
  const [isHover, setIsHover] = useState(false);
  const items = data.items.slice(1);
  return (
    <section className="best-resturants-section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="bold-b">{data?.title}</h2>
            <Row>
              <Col md={12} lg={4} sm={12} xs={12}>
                <div
                  className={` best-resturant-card-1 ${
                    isHover && "hover-color-2"
                  }`}
                  onMouseOver={() => {
                    setIsHover(true);
                    return;
                  }}
                  onMouseLeave={() => {
                    setIsHover(false);
                    return;
                  }}
                >
                  <Image
                    alt=""
                    src={data?.items[0].image}
                    className="card-img"
                  />
                  <button className="best-resturant-card-1-text">
                    {data?.items[0].title}
                  </button>
                  <div
                    className={`${
                      isHover ? "hover-color-1" : "d-none"
                    } best-resturant-card-1-hover-text-box`}
                  >
                    <div>
                      <AiOutlineLike size={20} className="like" />
                      <span className="percentage">95%</span>
                      <span className="views">(500+)</span>
                    </div>
                    <div>
                      <span className="time-duration">20-30 Min</span>
                      <AiOutlineClockCircle size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={8} sm={12} xs={12}>
                <Row>
                  {items?.map((item) => {
                    return (
                      <BestResturantCard
                        image={item?.image}
                        buttonText={item?.title}
                      />
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BestResturants;

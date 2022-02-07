import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import {
  PopularIn1,
  PopularIn2,
  PopularIn3,
  PopularIn4,
  PopularIn5,
  PopularIn6,
  PopularIn7,
  PopularIn8,
  PopularIn9,
  Mercadona,
  MissSushi,
  BurgerKing,
  Bershka,
  Game,
  PapaJohns,
  Goiko,
} from "../constant/imagePath";
import { AiOutlineLike, AiOutlineClockCircle } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import "./mostpopular.css";

function MostPopularItemCard({ image, buttonText, title, icon }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="most-popular-card"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`most-popular-card-img-box ${
          isHover && "most-popular-card-hover"
        }`}
      >
        <Image alt="" src={image} className="card-img" />
        <div className={`most-popular-hover-icon ${!isHover && "d-none"}`}>
          <Image alt="" src={icon} className="" />
        </div>
      </div>
      {isHover ? (
        <div
          className={`${isHover ? "most-popular-card-text-hover" : "d-none"}`}
        >
          <div>
            <AiOutlineLike size={20} className="text-white" />
            <span className="percentage">95%</span>
            <span className="views">(500+)</span>
          </div>
          <div>
            <span className="time-duration">20-30 Min</span>
            <AiOutlineClockCircle size={20} className="text-white" />
          </div>
        </div>
      ) : (
        <p className="most-popular-card-title bold-b">{title}</p>
      )}
    </div>
  );
}

function MostPopularInYourCity() {
  const [data, setData] = useState([
    { image: PopularIn1, title: "GOIKO GRILL", icon: Goiko },
    { image: PopularIn2, title: "MERCADONA", icon: Mercadona },
    { image: PopularIn3, title: "BERSHKA", icon: Bershka },
    { image: PopularIn4, title: "GAME", icon: Game },
    { image: PopularIn5, title: "ESTANCO", icon: "" },
    { image: PopularIn6, title: "PAPA JOHN’S", icon: PapaJohns },
    { image: PopularIn7, title: "CARREFOUR", icon: "" },
    { image: PopularIn8, title: "BURGUER KING", icon: BurgerKing },
    { image: PopularIn9, title: "MiSS SUSHI", icon: MissSushi },
  ]);

  const addData = [
    { image: PopularIn1, title: "GOIKO GRILL", icon: Goiko },
    { image: PopularIn2, title: "MERCADONA", icon: Mercadona },
    { image: PopularIn3, title: "BERSHKA", icon: Bershka },
  ];

  return (
    <section className="most-popular-section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="bold-b">Lo más demandado de tu ciudad</h2>
            <p className="most-popular-section-tagline">
              Todas las tiendas en demanda, entregado en menos de 30 minutos.
            </p>
            <Row>
              {data?.map((item) => {
                return (
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <MostPopularItemCard
                      image={item?.image}
                      buttonText={item?.title}
                      title={item?.title}
                      icon={item?.icon}
                    />
                  </Col>
                );
              })}
            </Row>
            <div
              className="add-more-btn-box"
              onClick={() => {
                let newData = [...data];
                setData([...newData, ...addData]);
              }}
            >
              <p className="add-icon">
                <MdAdd size={20} className="text-white" />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MostPopularInYourCity;

import React, { useState } from "react";
import { FiFlag } from "react-icons/fi";
import { BiCurrentLocation } from "react-icons/bi";
import { Image, Row, Col, Container } from "react-bootstrap";
import {
  Pet,
  Resturant,
  Market,
  Pharmacy,
  Whatever,
  Stores,
} from "../constant/imagePath";
import EnterAddressModal from "./EnterAddressModal";
import LocationSelectionModal from "./LocationSelectionModal";
import { MdKeyboardArrowDown } from "react-icons/md";
import SelectAndExploreCityModal from "./SelectAndExploreCityModal";
import LookingForServiceModal from "./LookingForServiceModal";
import "./spanishflip.css";

function CircleItem({ image, title, data, setSelectedData }) {
  return (
    <Col lg={2} md={3} sm={3} xs={6} className="banner-circle-card-col">
      <div className="banner-circle-card" onClick={() => setSelectedData(data)}>
        <div>
          <Image alt="" className="img-fluid" src={image} />
        </div>
        <p className="h-20 font-15 text-center">{title}</p>
      </div>
    </Col>
  );
}

function SpanishFlip({ circleCardsData, setSelectedData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openLocationModal, setOpenLocationModal] = useState(false);

  return (
    <section className="banner-section">
      <Container>
        <Row>
          <Col md={12}>
            <div className="header-heading">
              <h2 className="bold-b">¡Los españoles FLIPAN</h2>
              <p>
                Volamos por ti en
                <span>
                  <span>Madrid</span>
                  <MdKeyboardArrowDown
                    className="arrow-down"
                    onClick={() => setOpenLocationModal(true)}
                  />
                </span>
              </p>

              {/* Address Box */}
              <div className="address-box">
                <div className="address-flag-icon">
                  <FiFlag size={25} />
                </div>
                <Row>
                  <Col lg={7} md={7} sm={9} xs={9}>
                    <input
                      placeholder="What's your address?"
                      onFocus={() => setIsOpen(true)}
                    />
                  </Col>
                  <Col lg={1} md={1} sm={3} xs={3}>
                    <BiCurrentLocation size={23} />
                  </Col>
                  <Col lg={4} md={4} className="use-current-location">
                    <span>Use current location</span>
                  </Col>
                </Row>
              </div>

              {/* Header-section-cards */}
              <div className="banner-cards">
                <Row>
                  <Col lg={12}>
                    <Row>
                      {circleCardsData?.map((item) => {
                        return (
                          <CircleItem
                            title={item?.title}
                            data={item?.data}
                            image={item?.image}
                            setSelectedData={setSelectedData}
                          />
                        );
                      })}
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <LocationSelectionModal
        open={openLocationModal}
        setOpen={setOpenLocationModal}
      />
      {/* <LookingForServiceModal
                open={openLocationModal}
                setOpen={setOpenLocationModal}
            /> */}
      {/* <SelectAndExploreCityModal
                open={openLocationModal}
                setOpen={setOpenLocationModal}
            /> */}
      <EnterAddressModal open={isOpen} setOpen={setIsOpen} />
    </section>
  );
}

export default SpanishFlip;

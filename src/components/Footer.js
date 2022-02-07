import React from "react"
import { Row, Col, Container, Button, Image } from "react-bootstrap"
import { } from "react-icons"
import { logo, GooglePlay, AppStore } from "../constant/imagePath"

import { FaFacebookF, FaInstagramSquare } from "react-icons/fa"
import { GrTwitter } from "react-icons/gr"
import { BsQuestionCircleFill, BsYoutube } from "react-icons/bs"

import { MdOutlineLanguage } from "react-icons/md"
import { AiFillQuestionCircle, AiFillLinkedin } from "react-icons/ai"
import './footer.css'


function Footer() {
	return (
		<section className="footer-section">
			<Container>
				<Row>
					<Col lg={12}>
						<Row className="footer-row-1">
							<Col lg={3} md={6} xs={12} className="footer-col-no-1">
								<div className="footer-logo">
									<Image src={logo} className="img-fluid" />
								</div>
								<div>
									<p>
										<BsQuestionCircleFill size={20.13} className="icon-white-and-bold" />
										<span className="icon-text">Ubicación</span>
									</p>
									<p>
										<MdOutlineLanguage className="icon-white-and-bold" size={20.13} />
										<span className="icon-text">Español (España)</span>
									</p>
									<p>
										<AiFillQuestionCircle className="icon-white-and-bold" size={20.13} />
										<span className="icon-text">Centro de ayuda</span>
									</p>
									<div className="footer-btns-box">
										<button className="footer-btn">Hazte Dogter</button>
										<button className="footer-btn">Hazte Socio</button>
									</div>
								</div>
							</Col>
							<Col lg={3} md={6} xs={12} className="footer-col-no-2">
								<h6>Conócenos</h6>
								<p>Empresa</p>
								<p>Únete al equipo</p>
								<p>Privacidad</p>
								<p>Legal</p>
								<p>Seguridad </p>
								<p>Accesibilidad</p>
								<p>Datos Personales
								</p>
								<p>Establecimientos </p>
							</Col>
							<Col lg={3} md={6} xs={12} className="footer-col-no-3">
								<h6>Productos</h6>
								<p>Empresa</p>
								<p>Restaurantes</p>
								<p>Tiendas</p>
								<p>Market</p>
								<p>Mascotas </p>
								<p>Farmacia</p>
								<p>Lo que sea
								</p>
								<p>Dogtor Pay</p>

							</Col>
							<Col lg={3} md={6} xs={12} className="footer-col-no-4">
								<h6>Dogtor</h6>
								<p>Cittify</p>
								<p>Dogtor Smile</p>
								<p>Dogtor Care</p>
								<p>Life at Dogtor</p>
								<p>Concepts
								</p>
								<p>Dogtor Design</p>
								<p>Ambassadors
								</p>
								<p>Level  3</p>
							</Col>
						</Row>

						<div className="mode-and-follow-us">
							<p>Modo</p>
							<p>Descarga nuestra app</p>
							<p>Siguenos</p>
						</div>
						<Row className="footer-row-2">
							<Col md={3} xs={12} className="footer-row-2-col-1">
								<div>
									<p>Repartidores</p>
									<p>Negocios</p>
									<p>4Business</p>
								</div>
							</Col>
							<Col md={6} xs={12} className="footer-row-2-col-2">
								<div>
									<div className="mobile-platform">
										<Image alt="" src={GooglePlay} className="img-fluid" />
									</div>
									<div className="mobile-platform">
										<Image alt="" src={AppStore} className="img-fluid" />
									</div>
								</div>
							</Col>
							<Col md={3} xs={12} className="footer-row-2-col-3">
								<div>
									<span><FaFacebookF  size={20} /></span>
									<span><GrTwitter size={19} /></span>
									<span><BsYoutube size={22} /></span>
									<span><AiFillLinkedin size={22} /></span>
									<span><FaInstagramSquare size={22} /></span>
								</div>
							</Col>
						</Row>

						<p className="copy-rights">&copy;2022 Dogtor Technology INC</p>

					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Footer
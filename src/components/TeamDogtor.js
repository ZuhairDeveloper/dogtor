import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import DogtorCard from "./DogtorCard"
import { WallClock, DogtarWithMobile, DeliveryBoy } from "../constant/imagePath"
import './teamdogtor.css'

function TeamDogtor() {


  const dogtorCards = [
    {
      image: DeliveryBoy,
      title: 'Repartidores',
      tagline: 'Solo las horas que quieras',
      description: 'Se tu propio jefe, con horarios flexible e ingresos competitivos. Regístrate y colabora con Dogtor.',
      buttonText: 'Empieza a repartir'
    },
    {
      image: DogtarWithMobile,
      title: 'Negocios',
      tagline: 'Conoce a tus nuevos clientes',
      description: 'Impulsa tu negocio convirtiéndote en Partner Dogtor, aprovechando las herramientas, y tecnologías que lleva a todo una ciudad a tu negocio.',
      buttonText: 'Regístra tu negocio'
    },
    {
      image: WallClock,
      title: '¡Unete al equipo!',
      tagline: 'Retos para igualar tu talento',
      description: '¿Buscas un nuevo reto escalable? Si tienes ambición, propósitos, eres apasionado por lo que haces y te gusta trabajar en equipo, ¡queremos conocerte!',
      buttonText: 'Unete al equipo'
    },
  ]


  return (
    <section className="team-dogtor-section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Equipo Dogtor</h2>
            <Row className="team-dogtor-cards-row">
              {
                dogtorCards.map((item, index) => {
                  return (
                    <Col key={item?.title} lg={4}
                      // md={{span:6, offset:dogtorCards?.length===3 && index===2 && 3}} 
                      md={6}
                      sm={12} xs={12}>
                      <DogtorCard image={item?.image} title={item?.title} tagline={item?.tagline} description={item?.description} buttonText={item?.buttonText} />
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>


    </section>
  )

}


export default TeamDogtor
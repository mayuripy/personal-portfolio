import { Container, Row } from "react-bootstrap"

export const Banner = () => {
  return(
    <section className="banner" id="home">
    <Container>
        <Row className="align-item-center">
            <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>('Hi i'm sebdecoded')<span className="wrap">Web devloper</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
             <button onClick={() => console.log('connect')}>let's Connect <ArrowRightCircle size={25} /></button>
            </Col>
            <Col  xs={12} md={6} xl={5}>
              <img src={header-img} alt="header img" />
            </Col>
        </Row>
    </Container>
    </section>
  )
}
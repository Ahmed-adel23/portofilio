import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>see my projects at once <br></br> & leave here your email </h3>
            </Col>
            <Col md={6} xl={7}>
              <form >
                <div className="new-email-bx">
                  <input  type="email"  placeholder="Email Address" />
                  <button type="submit" onClick={(e) => e.preventDefault()} >Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}

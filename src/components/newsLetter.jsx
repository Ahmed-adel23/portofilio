import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col  md={6}  sm={12} >
              <h3>see my projects at once  & leave here your email </h3>
            </Col>
            <Col md={6}  sm={12}>
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

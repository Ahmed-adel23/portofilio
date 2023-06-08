import { Col, Row } from "react-bootstrap";
export const Newsletter = () => {
  return (
      <Row >
          <Row className="newsletter-bx mx-auto">
            <Col  lg={6}  md={12} className="text-center mb-3" >
              <h3>see my projects at once <br/> & leave here your email </h3>
            </Col>
            <Col lg={6}  md={12}>
                <div className="new-email-bx d-flex align-item-center">
                  <input  type="email"  placeholder="Email Address" />
                  <button >Submit</button>
                </div>
            </Col>
          </Row>
      </Row>
  )
}

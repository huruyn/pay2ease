import {
  Col,
  Form,
  Row,
  FormControl,
  Button,
} from 'react-bootstrap';

export default function ChangeYourAddress() {
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          Change Your Address
        </p>
      </div>
      <div style={{ padding: 10, backgroundColor: '#DEE9F7' }}>
        <p style={{ marginBottom: 0, fontSize: 14 }} className="d-flex">
          <div
            style={{
              width: 20,
              height: 25,
              border: '1px dotted grey',
              textAlign: 'center',
              marginRight: 10,
            }}
          >
            P
          </div>
          All fields are required unless stated as optional.
        </p>
      </div>
      <div className="mt-4">
        <h5
          style={{
            borderBottom: '1px solid grey',
            paddingBottom: 15,
            paddingTop: 10,
          }}
        >
          Current Address
        </h5>
        <div className="pt-3 pb-3">
          <div>MR. DUANE TOUGH</div>
          <div>717-157 ADELAIDE ST W</div>
          <div>TORONTO, Ontario</div>
          <div>M5H 4E7</div>
          <div>410-553-1372</div>
        </div>
      </div>
      <div className="mt-4">
        <h5
          style={{
            borderBottom: '1px solid grey',
            paddingBottom: 15,
            paddingTop: 10,
          }}
        >
          Enter your details
        </h5>
        <div className="pt-3 pb-3">
          <p>
            For joint accounts, submitting this form does not change the contact
            information for both account holders. The other account holder will
            also have to submit a form.
          </p>
          <Row className="mt-3">
            <Col md={6}>
              <Form.Label htmlFor="address">Address</Form.Label>
              <FormControl id="address" aria-describedby="address" />
            </Col>
            <Col md={6}>
              <Form.Label htmlFor="city">City</Form.Label>
              <FormControl id="city" aria-describedby="city" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <Form.Label htmlFor="province">Province</Form.Label>
              <FormControl id="province" aria-describedby="province" />
            </Col>
            <Col md={6}>
              <Form.Label htmlFor="postal_code">Postal Code</Form.Label>
              <FormControl id="postal_code" aria-describedby="postal_code" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <Form.Label htmlFor="home_phone">Home Phone</Form.Label>
              <FormControl id="home_phone" aria-describedby="home_phone" />
            </Col>
            <Col md={6}>
              <Row>
                <Col md={8}>
                  <Form.Label htmlFor="business_phone">
                    Business Phone
                  </Form.Label>
                  <FormControl
                    id="business_phone"
                    aria-describedby="business_phone"
                  />
                </Col>
                <Col md={4}>
                  <Form.Label htmlFor="extension">Extension</Form.Label>
                  <FormControl id="extension" aria-describedby="extension" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <Form.Label htmlFor="month">Effective date</Form.Label>
              <Row>
                <Col xs="auto">
                  <Form.Select>
                    <option>Month</option>
                  </Form.Select>
                </Col>
                <Col xs="auto">
                  <Form.Select>
                    <option>Day</option>
                  </Form.Select>
                </Col>
                <Col xs="auto">
                  <Form.Select>
                    <option>Year</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12} className="bg-light p-3" style={{ fontWeight: 500 }}>
              <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>
                +
              </span>
              <span>Note</span>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Button variant="light" className="d-flex">
                <div
                  style={{
                    width: 20,
                    height: 25,
                    border: '1px dotted grey',
                    textAlign: 'center',
                    marginRight: 10,
                  }}
                >
                  P
                </div>
                Cancel
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button className="zippy-btn d-flex">
                Next
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

import {
  Col,
  Form,
  Row,
  FormControl,
  Button,
} from 'react-bootstrap';

export default function AddCardHolder() {
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>Add a Cardholder</p>
      </div>
      <div style={{ padding: 10, backgroundColor: '#FAF0F3' }}>
        <div className="d-flex justify-content-between">
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
            We are sorry. You do not have a credit card that allows you to
            complete this request.
          </p>
          <p>
            {'{'}
            Result #0356
            {'}'}
          </p>
        </div>
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
          <ul>
            <li>
              The additional card will be mailed to the primary cardholder or
              business within 2 or 4 weeks.
            </li>
            <li>All fields are required unless stated as optional.</li>
          </ul>
        </p>
      </div>
      <Row className="mt-4">
        <Col md={12} className="bg-light p-3" style={{ fontWeight: 500 }}>
          <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>+</span>
          <span>Before you begin</span>
        </Col>
      </Row>
      <div className="mt-3">
        <Row className="mt-3">
          <Col md={6}>
            <Form.Label htmlFor="credit_card">Credit Card</Form.Label>
            <FormControl id="credit_card" aria-describedby="credit_card" />
          </Col>
          <Col md={2}>
            <Form.Label htmlFor="title">Title</Form.Label>
            <FormControl id="title" aria-describedby="title" />
          </Col>
          <Col md={4}>
            <Form.Label htmlFor="first_name">First Name</Form.Label>
            <FormControl id="first_name" aria-describedby="first_name" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={2}>
            <Form.Label htmlFor="credit_card">Initials</Form.Label>
            <FormControl id="credit_card" aria-describedby="credit_card" />
          </Col>
          <Col md={4}>
            <Form.Label htmlFor="title">Last Name</Form.Label>
            <FormControl id="title" aria-describedby="title" />
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="first_name">Date of birth</Form.Label>
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
        <Row className="mt-3">
          <Col md={6}>
            <Form.Label htmlFor="credit_card">Home phone</Form.Label>
            <FormControl id="credit_card" aria-describedby="credit_card" />
          </Col>
          <Col md={4}>
            <Form.Label htmlFor="title">Business phone</Form.Label>
            <FormControl id="title" aria-describedby="title" />
          </Col>
          <Col md={2}>
            <Form.Label htmlFor="first_name">Extension</Form.Label>
            <FormControl id="first_name" aria-describedby="first_name" />
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <h5
          style={{
            borderBottom: '1px solid grey',
            paddingBottom: 15,
            paddingTop: 10,
          }}
        >
          Address
        </h5>
        <div className="pt-3 pb-3">
          <Row>
            <Col md={12}>
              <Form.Check
                type="checkbox"
                label="Same address as primary cardholder"
              />
            </Col>
          </Row>
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
              <Form.Label htmlFor="email">Email</Form.Label>
              <FormControl id="email" aria-describedby="email" />
              <Form.Check
                type="checkbox"
                label="Send status updates to this email address"
              />
            </Col>
          </Row>
        </div>
      </div>
      <Row className="mt-4 pb-4" style={{ borderBottom: '1px solid grey' }}>
        <Col md={12} className="bg-light p-3" style={{ fontWeight: 500, borderBottom: '1px solid grey' }}>
          <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>+</span>
          <span>Terms and Conditions</span>
        </Col>
        <Col md={12} className="mt-3">
          <Form.Check
            type="checkbox"
            label="I have read, understand and agree to the terms and Conditions."
          />
        </Col>
      </Row>
      <div className="mt-4">
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
  );
}

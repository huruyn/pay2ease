import {
  Col,
  Form,
  Row,
  Button,
} from 'react-bootstrap';

export default function ApplyForOrChangeOverdraftProtectionService() {
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          Spte 1 of 2
          <br />
          Overdraft protection service
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
          <ul>
            <li>Processing your request may take up to 2 business days</li>
            <li>All fields are required unless stated as optional</li>
          </ul>
        </p>
      </div>
      <Row className="mt-4 pb-4">
        <Col
          md={12}
          className="bg-light p-3"
          style={{ fontWeight: 500, borderBottom: '1px solid grey' }}
        >
          <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>+</span>
          <span>Before you begin</span>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Form.Label htmlFor="from_acount">From</Form.Label>
          <Row>
            <Col md="12">
              <Form.Select id="from_acount">
                <option>- Choose an account -</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Form.Label htmlFor="choose_option">Choose an option</Form.Label>
          <Row>
            <Col md="12">
              <Form.Select id="choose_option">
                <option>Select...</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="mt-4">
        <Row className="mt-4 pt-3" style={{ fontWeight: 500, borderTop: '1px solid grey' }}>
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

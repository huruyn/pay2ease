import {
  Col,
  Form,
  Row,
  FormControl,
  Button,
  InputGroup,
} from 'react-bootstrap';

export default function MortgagePrepayment() {
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          Mortgage Prepayment
        </p>
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
            You don&apos;t have an account that allows you to complete this
            request
          </p>
          <p>
            {'{'}
            Result #0328
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
              Make sure you have enough money in your account when submitting
              your prepayment request. Use the same account for your prepayment
              that you use for your regular mortgage payments
            </li>
            <li>
              Your payment is effective immediately. Depending on your province,
              it may take up to five business days for this to be reflected on
              your mortgage account.
            </li>
            <li>
              All fields are required unless stated as optional. If you need
              help, contact ZippyX Mortgage at 1-888-264-6843 or
              {' '}
              <span style={{ textDecoration: 'underline' }}>write to us</span>
              .
            </li>
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
      <Row className="mt-4">
        <Col md={12} className="bg-light p-3" style={{ fontWeight: 500 }}>
          <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>+</span>
          <span>
            Make a mortgage payment with your Aventura or Gold Bonus Points.
            Make a
            {' '}
            <span style={{ textDecoration: 'underline' }}>
              Payment with Points
            </span>
          </span>
          <span> today</span>
        </Col>
      </Row>
      <div className="mt-3">
        <Row className="mt-3">
          <Col md={6}>
            <Form.Label htmlFor="mortgage_account">Mortgage Account</Form.Label>
            <Row>
              <Col md="12">
                <Form.Select id="mortgage_account">
                  <option> </option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="payment_amount">Amount of prepayment</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
            <Form.Text className="mb-3 text-muted">Minimum of $100.</Form.Text>
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
          <Col md={4}>
            <Form.Label htmlFor="daytime_phone">Datetime phone</Form.Label>
            <FormControl id="daytime_phone" aria-describedby="daytime_phone" />
          </Col>
          <Col md={2}>
            <Form.Label htmlFor="extension">Extension</Form.Label>
            <FormControl id="extension" aria-describedby="extension" />
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
      <Row className="mt-4 pb-4">
        <Col
          md={12}
          className="bg-light p-3"
          style={{ fontWeight: 500, borderBottom: '1px solid grey' }}
        >
          <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>+</span>
          <span>Note</span>
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

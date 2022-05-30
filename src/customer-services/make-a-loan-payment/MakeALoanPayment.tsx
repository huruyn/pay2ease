import React from 'react';
import {
  Col,
  Form,
  Row,
  FormControl,
  Button,
  InputGroup,
} from 'react-bootstrap';

export default function MakeALoanPayment() {
  const [selectedRef, setSelectedRef]: any = React.useState('');
  const handleToggleStyle = (element: any) => {
    setSelectedRef(element);
  };

  const payPartialAmountStyle = {
    color: selectedRef === 'pay_partial_amount' ? 'black' : 'grey',
    background: '#f2f3f2',
    cursor: 'pointer',
  };
  const payFullAmountStyle = {
    color: selectedRef === 'pay_full_amount' ? 'black' : 'grey',
    background: '#f2f3f2',
    cursor: 'pointer',
  };
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          Make a Loan Payment
        </p>
      </div>
      <div style={{ padding: 10, backgroundColor: '#FAF0F3' }}>
        <div className="d-flex justify-content-between">
          <div style={{ marginBottom: 0, fontSize: 14 }} className="d-flex">
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
            You don&apos;t have an account that allows to complete this request
          </div>
          <p>
            {'{'}
            Result #0328
            {'}'}
          </p>
        </div>
      </div>
      <div style={{ padding: 10, backgroundColor: '#DEE9F7' }}>
        <div style={{ marginBottom: 0, fontSize: 14 }} className="d-flex">
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
            <li>It may take up to 2 business days to process your request.</li>
            <li>All fields are required unless stated as optional.</li>
          </ul>
        </div>
      </div>
      <Row className="mt-4">
        <Col md={12} className="bg-light p-3" style={{ fontWeight: 500 }}>
          <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>+</span>
          <span>
            Make a loan payment with your Aventura or Gold Bonus Points.
            {' '}
            <span style={{ textDecoration: 'underline' }}>
              Make a Payment with Points
            </span>
          </span>
          <span> today</span>
        </Col>
      </Row>
      <div className="mt-3">
        <Row className="mt-3">
          <Col md={6}>
            <Form.Label htmlFor="leading_account">Leading Account</Form.Label>
            <Row>
              <Col md="12">
                <Form.Select id="leading_account">
                  <option> </option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            <Form.Label>Choose an option</Form.Label>
            <Row>
              <Col md="6">
                <div
                  className="p-5 option-btn"
                  aria-hidden="true"
                  style={payPartialAmountStyle}
                  onClick={() => handleToggleStyle('pay_partial_amount')}
                  onKeyDown={() => handleToggleStyle('pay_partial_amount')}
                >
                  <h3>Pay Partial amount</h3>
                  <div>
                    Make sure you have enough money in your account during the
                    next 2 days so we can process your payment
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div
                  className="p-5 option-btn"
                  aria-hidden="true"
                  style={payFullAmountStyle}
                  onClick={() => handleToggleStyle('pay_full_amount')}
                  onKeyDown={() => handleToggleStyle('pay_full_amount')}
                >
                  <h3>Pay Partial amount</h3>
                  <div>
                    Make sure you have enough money in your account during the
                    next 2 days so we can process your payment
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Label htmlFor="payment_amount">Payment Amount</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="leading_account">From</Form.Label>
            <Row>
              <Col md="12">
                <Form.Select id="leading_account">
                  <option>- Choose an account -</option>
                </Form.Select>
              </Col>
            </Row>
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
      <Row className="mt-4 pb-4" style={{ borderBottom: '1px solid grey' }}>
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

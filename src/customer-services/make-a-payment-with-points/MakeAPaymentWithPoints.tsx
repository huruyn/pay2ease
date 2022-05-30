import React from 'react';
import {
  Col,
  Form,
  Row,
  FormControl,
  Button,
} from 'react-bootstrap';

export default function MakeAPaymentWithPoints() {
  const [selectedRef, setSelectedRef]: any = React.useState('');
  const handleToggleStyle = (element: any) => {
    setSelectedRef(element);
  };

  const paymentWithPointsStyle = {
    color: selectedRef === 'payment_with_points' ? 'black' : 'grey',
    background: '#f2f3f2',
    height: '100%',
    cursor: 'pointer',
  };
  const financialProductsWithPointsStyle = {
    color: selectedRef === 'financial_products_points' ? 'black' : 'grey',
    background: '#f2f3f2',
    height: '100%',
    cursor: 'pointer',
  };
  const fieldSetStyle = {
    borderBottom: '2px solid grey',
  };
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          Payment with Points
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
      <div style={{ backgroundColor: 'rgb(242 243 242)' }} className="mt-3 p-3">
        <div style={{ marginBottom: 0, fontSize: 14 }}>
          <h5>Being your request</h5>
          <ul>
            <li>
              The credit card you apply your Points to has to be the same as the
              credit card you get Points from.
            </li>
            <li>
              Only cards with enough Points can be used towards a redemption.
            </li>
            <li>
              All fields must be filled in unless labelled &quot;Optional&quot;.
            </li>
          </ul>
        </div>
      </div>

      <Row className="mt-3">
        <Col md={12}>
          <h6 style={fieldSetStyle} className="pb-2 mb-3">
            Select what to redeem for
          </h6>
          <Row>
            <Col md="6">
              <div
                className="p-5 text-center option-btn"
                aria-hidden="true"
                style={paymentWithPointsStyle}
                onClick={() => handleToggleStyle('payment_with_points')}
                onKeyDown={() => handleToggleStyle('payment_with_points')}
              >
                <div
                  className="mb-2"
                  style={{
                    border: '1px dotted black',
                    height: '125px',
                    borderRadius: '4px',
                  }}
                >
                  p
                </div>
                <h5>Payment with Points</h5>
                <div>A credit card bill payment</div>
              </div>
            </Col>
            <Col md="6">
              <div
                className="p-5 text-center option-btn"
                aria-hidden="true"
                style={financialProductsWithPointsStyle}
                onClick={() => handleToggleStyle('financial_products_points')}
                onKeyDown={() => handleToggleStyle('financial_products_points')}
              >
                <div
                  className="mb-2"
                  style={{
                    border: '1px dotted black',
                    height: '125px',
                    borderRadius: '4px',
                  }}
                >
                  p
                </div>
                <h5>Financial Products with Points</h5>
                <div>A deposit or contribution to a financial product</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="mt-3">
        <h6 style={fieldSetStyle} className="pb-2 mb-3">
          How many Points do you want to use?
        </h6>
        <Row className="mt-3">
          <Col md={6}>
            <Row>
              <Col md="12">
                <Form.Select id="points_num">
                  <option> </option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <h6 style={fieldSetStyle} className="mt-4 pb-2 mb-2">
          Do you want to receive updates about this request?
        </h6>
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
      <div className="mt-4">
        <Row className="mt-4 pt-3" style={{ borderTop: '1px solid grey' }}>
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

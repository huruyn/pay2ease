import {
  Col,
  Form,
  Row,
  FormControl,
  Button,
  InputGroup,
} from 'react-bootstrap';

export default function RequestACreditCardBalanceTransfer() {
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          Credit card balance transfer
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
            We are sorry. You don&apos;t have an account that allows you to
            complete this request
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
              It may take up to 5 business days for the funds to transfer out of
              your account.
            </li>
            <li>All fields are required unless stated as optional.</li>
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
      <div className="mt-3">
        <Row className="mt-3">
          <Col md={6}>
            <Form.Label htmlFor="transfer_to">Transfer balance to</Form.Label>
            <Row>
              <Col md="12">
                <Form.Select id="transfer_to">
                  <option> </option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="payment_amount">
              CVVV2
              <span style={{ border: '1px dotted black' }}>P</span>
            </Form.Label>
            <FormControl
              id="payment_amount"
              aria-describedby="payment_amount"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Label htmlFor="transfer_from">
              Transfer balance from
              <span style={{ border: '1px dotted black' }}>P</span>
            </Form.Label>
            <Row>
              <Col md="12">
                <Form.Select id="transfer_from">
                  <option> - Non-ZippyX card account - </option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="non_zippyx_card_number">
              Non-ZippyX card number
            </Form.Label>
            <FormControl
              id="non_zippyx_card_number"
              aria-describedby="non_zippyx_card_number"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Label htmlFor="transfer_amount">Transfer amount</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Transfer Amount" />
            </InputGroup>
          </Col>
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
          <span>Terms and Conditions</span>
        </Col>
        <Col md="12" className="pt-3">
          <div>
            <Form.Check
              type="checkbox"
              id="agree_terms_and_conditions"
              label="I have read, understand and agree to the Terms and Conditions"
            />
          </div>
        </Col>
      </Row>
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

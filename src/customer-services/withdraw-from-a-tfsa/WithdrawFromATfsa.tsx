import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
  InputGroup,
} from 'react-bootstrap';

export default function WithdrawFromATfsa() {
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          Withdraw from a TFSA
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
            You don&apos;t have an account that allows you to complete this request.
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
              Important Information for Regular Investment Plans(RIP): RIP funds
              take 5 business days to clear after your date of deposit. Once
              cleared, you can withdraw the RIP amount.
              <p>
                For example, your monthly RIP of $1,000 is deposited for a total
                TFSA balance of $10,000. Until the $1,000 clears on the 5th
                business day, ZippyX will only process a withdrawal of up to
                $9,000.
              </p>
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
      <Row className="mt-3">
        <Col md={6}>
          <Form.Label>From</Form.Label>
          <Form.Select>
            <option> </option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Label>To</Form.Label>
          <Form.Select>
            <option>- Choose an account -</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Form.Label>Amount</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <FormControl
              placeholder="Amount"
              aria-label="Amount"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <Form.Label>Date of transfer</Form.Label>
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
          <Form.Label htmlFor="email">Email</Form.Label>
          <FormControl id="email" aria-describedby="email" />
          <Form.Check
            type="checkbox"
            label="Send status updates to this email address"
          />
        </Col>
      </Row>
      <Row className="mt-4 pt-3" style={{ borderTop: '1px solid #e7e7e7' }}>
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
  );
}

import {
  Col,
  Form,
  FormControl,
  Row,
  Button,
} from 'react-bootstrap';

export default function SetUpDirectDepositWithCanadaRevenueAgency() {
  return (
    <div className="page-content">
      <div style={{ padding: 10, backgroundColor: '#F2F3F2' }}>
        <p style={{ textAlign: 'center', marginBottom: 0 }}>
          Register for direct deposit with the Canada Revenue Agency
        </p>
      </div>
      <div className="mt-3">
        <p>
          Please note that registering for direct deposit with the CRA
          doesn&apos;t automatically enrol you for government benefit programs.
          <a href="/" className="text-black">
            Visit the Government of Canada website to apply for government
            benefits including COVID-19 relief benefits.
          </a>
        </p>
        <p>
          Direct deposit is a convenient way to receive your CAnada Revenue
          Agency payments and benefits.
        </p>
        <p>
          If you receive payments from the Canada Revenue Agency and have a
          Canadian bank account, you can sign up for direct deposit of certain
          payments, including:
        </p>
        <ul>
          <li>Canada Emergency Response Benefit(CERB)</li>
          <li>Income tax refund</li>
          <li>
            Goods and services tax or harmonized sales tax(GST/HST) credit
          </li>
          <li>Canada child benefit</li>
          <li>Working income tax benefit</li>
          <li>Ontario trillium benefit</li>
          <li>Canada Recovery Sickness Benefit(CRSB)</li>
          <li>Canada Recovery Caregiving Benefit(CRCB)</li>
          <li>Canada Recovery Benefit(CRB)</li>
        </ul>
      </div>
      <div>
        <h5
          className="pb-2 pt-2 mb-2 mt-3"
          style={{ borderBottom: '1px solid grey' }}
        >
          Personal information
        </h5>
        <p>
          To receive eligible payments, this information must match the
          information on file with the Canada Revenue Agency.
        </p>
        <Row>
          <Col>
            <Form.Label style={{ color: 'grey', fontSize: 14 }}>Legal name</Form.Label>
            <p>MR. DUANE TOUGH</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Label style={{ color: 'grey', fontSize: 14 }}>Date of birth(Month/Day/Year)</Form.Label>
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
          <Col md={6}>
            <Form.Label style={{ color: 'grey', fontSize: 14 }}>Social Insurance Number (9 digits)</Form.Label>
            <FormControl type="text" />
          </Col>
        </Row>
      </div>
      <div>
        <h5
          className="pb-2 pt-2 mb-2 mt-3"
          style={{ borderBottom: '1px solid grey' }}
        >
          Set up direct deposit
        </h5>
        <p>Select the account you want to deposit the payments into.</p>
        <Row>
          <Col md={6}>
            <Form.Label style={{ color: 'grey', fontSize: 14 }}>Deposit account</Form.Label>
            <Form.Select>
              <option>Select an account</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="12">
            <div className="p-4" style={{ border: '1px solid grey' }}>
              <p>
                I authorize ZippyX to share my information, date of birth,
                Social Insurance Number(SIN) and full name with the Canada
                Revenue Agency (CRA) for the purposes of establishing direct
                deposit, including to identify me. By Providing my
                information to the CRA, I authorize the Receiver General to
                deposit in the bank account number provided, any amounts to be
                paid to me by the CRA, until the CRA is otherwise notified by
                me. I understand that this authorization will replace all of my
                previous direct deposit authorizations. I also acknowledge
                reading the Privacy Statement found below.
              </p>
            </div>
            <div
              className="p-4"
              style={{ background: '#a1a1a1', color: 'white' }}
            >
              <Form.Check
                type="checkbox"
                name="agree-send-information"
                label="Yes, Please send my information to the CRA to set up direct deposit"
                id="agree-send-information"
              />
            </div>
          </Col>
        </Row>
      </div>
      <Row className="mt-4">
        <Col md={12} className="bg-light p-3" style={{ fontWeight: 500 }}>
          <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>+</span>
          <span>Privacy Statement</span>
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
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

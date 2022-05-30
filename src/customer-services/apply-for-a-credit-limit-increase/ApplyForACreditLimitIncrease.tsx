import React from 'react';
import {
  Alert,
  Button, Col, Form, Row, Stack,
} from 'react-bootstrap';

export interface IProps {
  title: string,
}

const TitleSection: React.FC<IProps> = ({ title }) => (
  <div className="border-bottom border-2 border-secondary px-4 py-2" style={{ backgroundColor: '#D0D0D0', color: '#000' }}>
    <i />
    {title}
  </div>
);

const Title = () => (
  <Row>
    <Col>
      <div className="border-top border-2 border-danger" />
      <h1>
        ZippyX
        <i />
      </h1>
    </Col>
  </Row>
);

const AlertsSection = () => (
  <div>
    <Row>
      <Col>
        <Alert variant="secondary" className="mb-0 rounded-0 text-dark text-center py-3" style={{ fontSize: 15 }}>
          Credit limit increase
        </Alert>
      </Col>
    </Row>
    <Row>
      <Col>
        <Alert variant="danger" className="zippy-btn mb-0 rounded-0 text-dark py-2 px-5">
          <i />
          We are sorry. You do not have a credit card that allows you to complete this request
        </Alert>
      </Col>
    </Row>
    <Row>
      <Col>
        <Alert variant="danger" className="mb-0 rounded-0 text-dark py-0 px-5">
          <Stack direction="horizontal" gap={2}>
            <div>
              <i />
              <br />
              <br />
            </div>
            <div>
              <i />
              <ul>
                <li>Processing may take up to 5 business days.</li>
                <li>All fields are required unless stated as optional </li>
              </ul>
            </div>
          </Stack>
        </Alert>
      </Col>
    </Row>
  </div>
);

const BeforYouBeginSection = () => (
  <Row className="pt-5">
    <Col xs={12}>
      <TitleSection title="Before you begin" />
    </Col>
    <Col>
      <Row className="align-items-center pt-3">
        <Col xs={6} className="pt-3">
          <br />
          Choose a credit card
          <Form.Select aria-label="Default select example">
            <option>&nbsp;</option>
          </Form.Select>
        </Col>
        <Col xs={6} className="pt-3">
          Amount to add to your credit limit
          <i />
          <br />
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Between $100 and $99,900 in $100 increments</div>
          <Form.Control type="number" placeholder="$" />
        </Col>

        <Col xs={6} className="pt-3">
          Gross annual personal income
          <i />
          <Form.Control type="number" placeholder="$" />
        </Col>
        <Col xs={6} className="pt-3">
          Gross annual household income
          <i />
          <Form.Control type="number" placeholder="$" />
        </Col>
        <Col xs={6} className="pt-3">
          Email
          <Form.Control type="number" placeholder="dtough@hotmail.com " />
          <Form.Check
            id="confirm"
            type="checkbox"
            label="Send status updates to this email address "
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

const TermsConditionsSection = () => (
  <Row className="pt-5">
    <Col xs={12}>
      <TitleSection title="Terms and Conditions" />
    </Col>
    <Col xs={12} className="px-5 pt-1">
      <Row>
        <Col>
          <Form.Check
            id="confirm"
            type="checkbox"
            label="I have read, understand and agree to the Terms and Conditions."
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

const NoteSection = () => (
  <Row className="pt-5">
    <Col xs={12}>
      <TitleSection title="Note" />
    </Col>
  </Row>
);

const EndSection = () => (
  <Row className="pt-5">
    <Col className="text-start">
      <Button variant="light">
        <i />
        Cancel
      </Button>
    </Col>
    <Col className="text-end">
      <Button variant="light">Next</Button>
    </Col>
  </Row>
);

function ApplyForACreditLimitIncrease() {
  return (
    <div className="page-content">
      <Row>
        <Col xs={12}>
          <Title />
          <AlertsSection />
        </Col>
        <Col xs={12} className="px-5">
          <BeforYouBeginSection />
          <TermsConditionsSection />
          <NoteSection />
          <EndSection />
        </Col>
      </Row>
    </div>
  );
}

export default ApplyForACreditLimitIncrease;

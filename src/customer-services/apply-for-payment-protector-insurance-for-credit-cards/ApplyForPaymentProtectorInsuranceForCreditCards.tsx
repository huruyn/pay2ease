import React from 'react';
import {
  Alert,
  Button, Col, Form, Row,
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

const Divider = () => <div className="border-top my-3" />;

const AlertsSection = () => (
  <div>
    <Row>
      <Col>
        <Alert variant="secondary" className="mb-0 rounded-0 text-dark text-center py-3" style={{ fontSize: 15 }}>
          Apply for ZippyX Payment Protector
          <sup>
            TM
          </sup>
          &nbsp;Insurance for Credit Cards
        </Alert>
      </Col>
    </Row>
    <Row>
      <Col>
        <Alert variant="danger" className="mb-0 rounded-0 text-dark py-2 px-5">
          <Row>
            <Col className="text-start" xs="auto">
              <i />
              We are sorry. You do not have a credit card that allows you to complete this request.
            </Col>
            <Col className="text-end">
              {'{Result:#0356}'}
            </Col>
          </Row>
        </Alert>
      </Col>
    </Row>
    <Row>
      <Col>
        <Alert variant="danger" className="mb-0 rounded-0 text-dark py-2 px-5">
          <i />
          All fields are mandatory unless otherwise stated as optional.
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
        <Col>&nbsp;</Col>
      </Row>
    </Col>
  </Row>
);

const EligibilitySection = () => (
  <Row className="pt-5">
    <Col xs={12}>
      <TitleSection title="Eligibility" />
    </Col>
    <Col xs={12} className="px-5 pt-1">
      <Row>
        <Col xs={12}>
          <Form.Check
            id="confirm"
            type="checkbox"
            label="I have read the eligibility requirements and confirm that I am eligible to apply for this product."
          />
        </Col>
      </Row>
    </Col>
    <Col xs={12} className="mt-0">
      <div className="border-top my-1" />
      <p className="text-muted">
        If you feel you do not meet any of these eligibility requirements, please contact Canadian
        Premier Life Insurance Company at 1 800 893-2862 for further assistance.
      </p>
    </Col>
  </Row>
);

const YourInformationsSection = () => (
  <Row className="mt-5">
    <Col>
      <h5 className="mb-0">Your information</h5>
    </Col>
    <Divider />
    <Col>
      <Row>
        <Col xs={6} className="pt-3 text-muted">
          Choose a credit card to insure
          <Form.Select aria-label="Default select example">
            <option>&nbsp;</option>
          </Form.Select>
        </Col>
        <Col xs={6} className="pt-3 text-muted">
          Email address (optional)
          <Form.Control type="number" placeholder="dtough@hotmail.com " />
          <p className="text-muted">
            An email will be sent to this email address,
            confirming successful submission of application.
          </p>
        </Col>
      </Row>
    </Col>
  </Row>
);

const CoverageCostSection = () => (
  <Row className="mt-5">
    <Col>
      <h5 className="mb-0">Coverage plan and cost to you</h5>
    </Col>
    <Divider />
    <Col>
      You are applying for the&nbsp;
      <b>
        Primary Cardholder Coverage Plan&nbsp;
      </b>
      of ZippyX
      Payment Protector Insurance for the credit card selected above.
      Monthly cost is $0.99 per $100 of the amount owing
      on the insured credit card on its statement date,
      plus applicable taxes.
    </Col>
  </Row>
);

const TermsConditionsSection = () => (
  <Row className="mt-5">
    <Col>
      <h5 className="mb-0">Summary of Terms and Conditions</h5>
    </Col>
    <Divider />
    <Col>
      <Row>
        <Col className="text-start my-2">
          <b>
            Things you should know about this Insurance
          </b>
        </Col>
        <Col className="text-end my-2">
          <i />
          ZippyX Payment Protector Terms and Conditions (PDF, 1355KB)
        </Col>
      </Row>
      <Row>
        <Col style={{ overflow: 'hidden' }}>
          <div
            style={
              {
                maxHeight: '200px', overflowY: 'scroll', paddingRight: '15px', boxSizing: 'content-box', msOverflowStyle: 'none', overflowInline: 'hidden',
              }
            }
            className="p-3 border border-secondary border-bottom-0"
          >
            Purchasing this insurance is optional, and is not required to obtain any ZippyX product
            or service.
            <br />
            <br />
            Individual circumstances may vary. You may wish to contact the licensed insurer&apos;s
            representative, or a licensed insurance agent if you need advice about your
            insurance needs.
            <br />
            <br />
            This section summarizes key important information about this insurance.
            Please read this information carefully before applying because it is
            designed to help you decide if this insurance meets your needs.
            <br />
            <br />
            <b>
              You are not covered by this insurance until your application is approved
              by the insurer,
              Canadian Premier Life Insurance Company
              (&quot;Canadian Premier&quot; or the &quot;Insurer&quot;).
            </b>
            &nbsp;If your application is approved, you will receive a certificate of insurance
            in the mail indicating the effective date of your coverage.
            Your certificate will also contain the complete details of your coverage,
            including the benefits, cost, eligibility conditions, limitations and exclusions,
            and how to make a claim. Your certificate will be mailed to
            you approximately 2 weeks from the date of
          </div>
          <div
            className="px-4 py-2"
            style={{
              backgroundColor: '#606366',
              color: '#fff',
            }}
          >
            <Form.Check
              id="confirm"
              type="checkbox"
              label="I have read, understand, agree and consent to the information in this section "
            />
          </div>
        </Col>
      </Row>
      <div className="border-top mt-5 mb-3" />
    </Col>
  </Row>
);

const EndSection = () => (
  <Row>
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

function ApplyForPaymentProtectorInsuranceForCreditCards() {
  return (
    <div className="page-content">
      <Row>
        <Col xs={12}>
          <Title />
          <AlertsSection />
        </Col>
        <Col xs={12} className="px-5">
          <BeforYouBeginSection />
          <EligibilitySection />
          <YourInformationsSection />
          <CoverageCostSection />
          <TermsConditionsSection />
          <EndSection />
        </Col>
      </Row>
    </div>
  );
}

export default ApplyForPaymentProtectorInsuranceForCreditCards;

import React from 'react';
import {
  Alert,
  Button,
  Col,
  Form,
  Row,
  Stack,
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

const AlertsSection = () => (
  <div>
    <Row>
      <Col>
        <Alert variant="secondary" className="mb-0 rounded-0 text-dark text-center py-3" style={{ fontSize: 15 }}>
          Change mortgage payment amount
        </Alert>
      </Col>
    </Row>
    <Row>
      <Col>
        <Alert variant="danger" className="mb-0 rounded-0 text-dark py-2 px-5">
          <i />
          You don&apos;t have an account that allows you to complete this request.
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
                <li>
                  The amount you can increase without a prepayment charge depends on
                  the type of mortgage you have. The payment increase is only applied
                  to the principal and interest amounts. Taxes and mortgage creditor
                  insurance will remain unchanged.
                </li>
                <li>
                  For limits specific to your mortgage, refer to the instructions in
                  &ldquo;Before you begin.&ldquo;
                </li>
                <li>
                  We&quot;ll review the payment amount change request before processing.
                  This may take up to 3 business days.
                </li>
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
      <Row className="align-items-top pt-3">
        <Col xs={6} className="pt-3">
          Mortgage account
          <Form.Select aria-label="Default select example">
            <option>&nbsp;</option>
          </Form.Select>
        </Col>
        <Col xs={6} className="pt-3">

          Increase payment amount to
          <Form.Control type="number" placeholder="$" />
        </Col>

        <Col xs={6} className="pt-3">
          From
          <Form.Select aria-label="Default select example">
            <option>- Choose an account -</option>
          </Form.Select>
        </Col>

        <Col xs={6} className="pt-3">
          <div>
            <Row>
              <Col xs={8}>
                Daytime phone
                <Form.Control type="tel" placeholder="" />
              </Col>
              <Col xs={4}>
                Extension
                <Form.Control type="text" placeholder="Optional" />
              </Col>
            </Row>
            If we need more information, a ZippyX Mortgage Representative will
            contact you within 2 business days at the above number.
          </div>
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

const NoteSection = () => (
  <Row className="pt-4">
    <Col xs={12}>
      <TitleSection title=" Note" />
    </Col>
  </Row>
);

const EndSection = () => (
  <Row className="pt-4">
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

function ChangeMortgagePaymentDetails() {
  return (
    <div className="page-content">
      <Row>
        <Col xs={12}>
          <AlertsSection />
        </Col>
        <Col xs={12} className="px-5">
          <BeforYouBeginSection />
          <NoteSection />
          <EndSection />
        </Col>
      </Row>
    </div>
  );
}

export default ChangeMortgagePaymentDetails;

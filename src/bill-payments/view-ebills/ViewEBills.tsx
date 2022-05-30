import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

const NumberedCircle = ({ num, title, text }: { num: number, title: string, text: string }) => (

  <Row className="mt-4">
    <Col className="text-center " style={{ flex: '0' }}>
      <p className="border border-2 border-danger text-danger rounded-circle px-2">
        <b>{num}</b>
      </p>
    </Col>
    <Col>
      <h5>{title}</h5>
      {text}
    </Col>
  </Row>
);

export default function ViewEBills() {
  return (
    <div className="page-content">
      <CommonPageContainer title="View Ebills">
        <Row>
          <Col>
            <Row>
              <Col xs={9}>
                <div>
                  <p>
                    Register for eBills to view, manage, and pay your bills online. In
                    partnership with epost
                    <sup>TM</sup>
                    &nbsp;from Canada Post, you can receive
                    statements through ZippyX
                    with one login and password.
                  </p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="border p-2 rounded">
                  <b>You can also:</b>
                  <br />
                  Find Mailers available through epost &gt;
                  <br />
                  Learn how epost protects your privacy &gt;
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h5 className="mb-0">
              Simplify your bill management by signing up today!
            </h5>
          </Col>
          <div className="border-top my-3" />
          <Col>
            <Row>
              <Col>
                <h6>Register for eBills:</h6>
              </Col>
            </Row>

            <NumberedCircle
              num={1}
              title="Sign up for your free epost mailbox."
              text={`Read and agree to the Terms and conditions,
              then select "Next" to start the registration process.`}
            />

            <NumberedCircle
              num={2}
              title="Add Mailers."
              text={`These are the companies from which you want
            to receive your bills and
            statements.`}
            />

            <NumberedCircle
              num={3}
              title="Receive, view, pay and manage your bills."
              text="Your bills will now be delivered to your epost mailbox."
            />

            <Row className="mt-4">
              <Col>
                Want to leam more about receiving bills online?
                <u>Take a tour</u>
                .
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h5 className="mb-0">Terms and Conditions</h5>
          </Col>
          <div className="border-top my-3" />
          <Col>
            <Row>
              <Col>
                Please read the following terms and conditions
                and print a copy for your records. To continue,
                check the box at the bottom of the agreement,
                then select &quot;Next&quot;.
                If you do not agree, you will not be
                registered for the service.
              </Col>
            </Row>
            <Row>
              <Col className="text-end my-2">
                <i />
                Print or save Terms and Conditions (588 KB)
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
                  <h6>Terms and Conditions for eBills service</h6>
                  <b>1.</b>
                  General: Your use of ZippyX&apos;s Electronic Document
                  Presentment service, known as the eBills service,
                  (the &quot;EDP Service&quot;) is governed by these terms
                  and conditions and the Electronic Access Agreement or
                  by their successor agreements. The Electronic Access Agreement
                  may be viewed by selecting the &quot;Agreements&quot;
                  link at the bottom of most pages of ZippyX.
                  In these terms and conditions, &quot;ZippyX means Canadian
                  Imperial Bank of Commerce and its affiliated companies.
                  <br />
                  <b>2.</b>
                  Basic service and epost service:
                  The EDP Service includes access to both a basic
                  document presentment service and the epost
                  document presentment service. The epost service
                  will allow you to receive documents from additional Mailers.
                  However, to access the epost service, you must first
                  register for an epost mailbox with epost, a service provided by
                  Canada Post Corporation. If you register for an epost mailbox,
                  your use of the epost service will also be govemed by additional terms
                  and conditions with Canada Post Corporation that will be made available
                  to you during the epost mailbox registration process.
                  You may access your epost mailbox from ZippyX,
                  from the online banking websites of certain
                  other financial institutions and also through wwwepost.ca.
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
                    label="I agree to be bound by the Terms and Conditions for the eBills service."
                  />
                </div>
              </Col>
            </Row>
            <div className="border-top my-3" />
            <Row>
              <Col className="text-start">
                <i />
                Cancel
              </Col>
              <Col className="text-end">
                <Button className="btn zippy-btn">Next</Button>
              </Col>
            </Row>
          </Col>

        </Row>
      </CommonPageContainer>
    </div>
  );
}

import { Row, Col, Button } from 'react-bootstrap';
import { PageIds } from '../SendMoney';

const SecurityRecipientPage = ({
  navigateSteps,
  showModal,
  setCurrentStep,
}: any): JSX.Element => (
  <>
    <h4>Security Question for Recipient</h4>
    <p className="mt-4 mb-4">
      CHELSEA TOUGH is registered for Autodeposit. This transfer does not
      require a security question
    </p>
    <hr style={{ height: '1px', width: '100%' }} />
    <Row className="mt-4 mb-4">
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
        <Button
          variant="outline-danger"
          className="d-flex"
          style={{ marginRight: 10 }}
          onClick={() => {
            navigateSteps(PageIds.DetailsPageId);
            setCurrentStep(1);
          }}
        >
          Back
        </Button>
        <Button
          variant="danger"
          className="zippy-btn d-flex"
          onClick={() => {
            navigateSteps('send-money-verify');
            showModal(true);
          }}
        >
          Continue
        </Button>
      </Col>
    </Row>
  </>
);

export default SecurityRecipientPage;

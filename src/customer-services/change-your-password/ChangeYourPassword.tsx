import {
  Col,
  Row,
  Form,
  Button,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function ChangeYourPassword() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Change Your Password">
        <div>
          <p>
            Create a password to use when you sign on to ZippyX.
          </p>
          <Row className="mt-3">
            <Col md={12}>
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" placeholder="Current Password" style={{ width: 400 }} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12}>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" style={{ width: 400 }} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" style={{ width: 400 }} />
            </Col>
          </Row>
          <Row className="mt-4 pt-4" style={{ borderTop: '1px solid grey' }}>
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
                Save
              </Button>
            </Col>
          </Row>
        </div>
      </CommonPageContainer>
    </div>
  );
}

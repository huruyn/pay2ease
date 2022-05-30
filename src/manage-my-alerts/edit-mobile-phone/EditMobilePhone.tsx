import {
  Col, Modal, Row, Form,
} from 'react-bootstrap';

export interface EditMobilePhoneContentProps {
  handleCancel: () => void;
  handleNext: () => void;
}

export const EditMobilePhoneContent = ({
  handleCancel,
  handleNext,
}: EditMobilePhoneContentProps) => (
  <>
    <Row style={{ padding: '30px' }}>
      <h3>MOBILE PHONE NUMBER UPDATE</h3>
      <ul style={{ marginLeft: '25px' }}>
        <li style={{ marginBottom: '6px' }}>
          This will be your SMS (Short Message Service) mobile phone number on
          file with ZippyX.
        </li>
        <li style={{ marginBottom: '6px' }}>
          If you choose to recieve SMS alerts, ZippyX will use this number to
          send alerts to you.
        </li>
        <li style={{ marginBottom: '6px' }}>
          The alerts service is only available to Canadian wireless device
          numbers.
        </li>
        <li style={{ marginBottom: '6px' }}>
          Standard messaging and data rates may apply, ZippyX will send you a
          monthly reminder through SMS text message to allow you to opt out of
          recieving SMS text message from us.
        </li>
      </ul>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          margin: '30px 0px',
        }}
      >
        <Col>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="MobilePhone"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Col md={4}>
              <Form.Label column>Mobile phone number:</Form.Label>
            </Col>
            <Col md={8}>
              <Form.Control type="tel" style={{ width: '120px' }} required />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Row>
    <Row
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
        padding: '20px 10px',
        backgroundColor: '#e3e3e3',
        margin: '0px',
      }}
    >
      <Col>
        <button
          type="button"
          id="cancel-btn-edit-mobile-phone"
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            padding: '5px 12px',
            border: '0',
          }}
          onClick={handleCancel}
        >
          <i />
          Cancel
        </button>
      </Col>
      <Col style={{ textAlign: 'end' }}>
        <button
          type="button"
          id="next-btn-edit-mobile-phone"
          style={{
            borderRadius: '3px',
            padding: '5px 12px',
            backgroundColor: '#C41F3E',
            borderColor: '#C41F3E',
            color: 'white',
          }}
          onClick={handleNext}
        >
          Next
        </button>
      </Col>
    </Row>
  </>
);
export interface EditMobilePhoneProps extends EditMobilePhoneContentProps {
  show: boolean;
}
const EditMobilePhone = ({
  show,
  handleCancel,
  handleNext,
}: EditMobilePhoneProps) => (
  <Modal animation={false} show={show} size="lg">
    <Modal.Body style={{ padding: '0px' }}>
      <EditMobilePhoneContent
        handleCancel={handleCancel}
        handleNext={handleNext}
      />
    </Modal.Body>
  </Modal>
);

export default EditMobilePhone;

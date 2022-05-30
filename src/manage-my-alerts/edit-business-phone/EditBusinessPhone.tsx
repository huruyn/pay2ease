import {
  Col, Modal, Row, Form,
} from 'react-bootstrap';

export interface EditBusinessPhoneContentProps {
  handleCancel: () => void;
  handleSave: () => void;
}

export const EditBusinessPhoneContent = ({
  handleCancel,
  handleSave,
}: EditBusinessPhoneContentProps) => (
  <>
    <Row style={{ padding: '30px' }}>
      <h3>BUSINESS PHONE NUMBER UPDATE</h3>
      <ul style={{ marginLeft: '25px' }}>
        <li style={{ marginBottom: '6px' }}>
          This is your business phone number on file with ZippyX.
        </li>
        <li style={{ marginBottom: '6px' }}>
          ZippyX will use this phone number to contact you or send you alerts.
        </li>
        <li style={{ marginBottom: '6px' }}>
          Phone numbers with extension cannot be used to recieve ZippyX alerts.
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
        <Col md={6}>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="BusinessPhone"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Col md={6}>
              <Form.Label column>Business phone:</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Control type="tel" style={{ width: '120px' }} required />
            </Col>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group
            className="mb-3"
            controlId="Extension"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Form.Label column style={{ marginRight: '10px' }}>
              Extension:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                placeholder=""
                style={{ padding: '7px 0px', width: '100px' }}
              />
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
          id="cancel-btn-edit-business-phone"
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
          id="save-btn-edit-business-phone"
          style={{
            borderRadius: '3px',
            padding: '5px 12px',
            backgroundColor: '#C41F3E',
            borderColor: '#C41F3E',
            color: 'white',
          }}
          onClick={handleSave}
        >
          Save
        </button>
      </Col>
    </Row>
  </>
);

export interface EditBusinessPhoneProps extends EditBusinessPhoneContentProps {
  show: boolean;
}
const EditBusinessPhone = ({
  show,
  handleCancel,
  handleSave,
}: EditBusinessPhoneProps) => (
  <Modal animation={false} show={show} size="lg">
    <Modal.Body style={{ padding: '0px' }}>
      <EditBusinessPhoneContent
        handleCancel={handleCancel}
        handleSave={handleSave}
      />
    </Modal.Body>
  </Modal>
);

export default EditBusinessPhone;

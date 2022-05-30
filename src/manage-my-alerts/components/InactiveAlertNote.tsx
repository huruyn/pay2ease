import { Col, Row } from 'react-bootstrap';

export default function InactiveAlertNote() {
  return (
    <div className="mt-2">
      <hr
        style={{
          marginTop: '3rem',
          height: '2px',
          color: 'C4C4C4',
        }}
      />
      <div className="d-flex">
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
        <span style={{ fontWeight: 'bold' }}>Note:</span>
      </div>
      <div className="d-flex flex-column">
        <ul>
          <li>
            An inactive alert status applies to bank accounts that were
            automatically transferred from Paperless to eStatements. If your
            alert status is displayed as &apos;Inactive&apos;, it means you have
            not agreed to the terms and conditions for eStatements. Once you
            have accepted the terms and conditions, your alerts will be activated
            and you will not see an &apos;Inactive&apos; alert status.
          </li>
          <li>
            In the case of credit cards, your alerts status will always be
            active.
          </li>
          <li>
            ZippyX Alerts Terms and Conditions are now a part of the
            <a href="/" className="text-black">
              Electronic Access Agreement
            </a>
          </li>
        </ul>
        <Row>
          <Col md={12} className="d-flex align-items-center mt-2">
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
            <span>
              eStatement Terms and Conditions (last updated: November 2011)
              (PDF, 145KB).
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

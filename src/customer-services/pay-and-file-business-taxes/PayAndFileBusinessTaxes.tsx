import { Col, Row } from 'react-bootstrap';

export default function PayAndFileBusinessTaxes() {
  return (
    <div className="page-content">
      <Row
        style={{
          justifyContent: 'space-between',
          marginTop: '15px',
          marginBottom: '15px',
        }}
      >
        <h3>GOVERNMENT PAYMENT & FILING SERVICE</h3>
        <span>
          <i />
          <i />
        </span>
      </Row>
      <Row>
        <Col>
          <Row
            style={{
              padding: '15px 0px',
              margin: '0px 2px',
            }}
          >
            <Row>
              <p>
                This service provides a simple and fast way to pay taxes to
                federal and provincial government agencies, giving you more
                control over your cash flow.
              </p>

              <p>To register for the service select : &quot;Next&quot;</p>
              <p>
                if you are already register. select &quot;Next&quot; to connect
                to the ZippyX Govemment Payment and Filing service website.
              </p>
              <p>
                You will need to sign on again ff you would like to continue
                using Online Banligng after you make government payments or
                filings.
              </p>
              <p>
                For support, call the Payment and Filing Help Desk
                <u>
                  {'  '}
                  1-800-206-9444
                </u>
              </p>
            </Row>
          </Row>
          <hr style={{ width: '100%' }} />
          <Col
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '10px',
              marginTop: '-13px',
              borderRadius: '4px',
              padding: '6px 0px',
            }}
          >
            <button
              type="button"
              style={{
                marginRight: '15px',
                border: '2px solid grey',
                borderRadius: '4px',
                backgroundColor: 'white',
                color: 'black',
                padding: '5px 12px',
              }}
            >
              My Accounts
            </button>
            <button
              type="button"
              style={{
                borderRadius: '4px',
                padding: '5px 12px',
              }}
            >
              Next
            </button>
          </Col>
        </Col>
      </Row>
    </div>
  );
}

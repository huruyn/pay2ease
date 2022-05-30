import { Col, Row } from 'react-bootstrap';

interface QuickLink {
  id: number;
  url: string;
  text: string;
}

const LinkElement = ({ url, text, id }: QuickLink): JSX.Element => (
  <a
    href={url}
    key={id}
    style={{ textDecoration: 'none', padding: '8px 8px', color: 'black' }}
  >
    {text}
  </a>
);

export default function OrderCheques() {
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      text: 'Stop payment of cheques',
      url: './',
    },
    {
      id: 2,
      text: 'send money faster with lnterac e-Transfer®',
      url: './',
    },
  ];

  return (
    <div className="page-content">
      <Row
        style={{
          justifyContent: 'space-between',
          marginTop: '15px',
          marginBottom: '15px',
        }}
      >
        <h3>ORDER CHEQUES</h3>
        <span>
          <i />
          <i />
          <i />
        </span>
      </Row>
      <Row>
        <Col md={9}>
          <Row
            style={{
              padding: '15px 0px',
              margin: '0px 2px',
            }}
          >
            <Row>
              <ul>
                <li>
                  <p>
                    The cost of your order will be charged to the account you
                    select.
                  </p>
                </li>
                <li>
                  <p>
                    <p>Your cheques will arrive in 71 to 10 business days.</p>
                  </p>
                </li>
              </ul>
            </Row>
            <Row style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <Col md={3}>
                <h4>Account</h4>
              </Col>
              <Col md={6}>
                <select
                  className="form-control"
                  style={{ padding: '10px 10px' }}
                >
                  <option selected>Choose an account</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                </select>

                <ul>
                  <li>
                    Before ordering cheques, please make sure
                    <u style={{ fontWeight: 'bold' }}>
                      {'  '}
                      your address is correct
                    </u>
                  </li>
                  <li>
                    If you changed your address during this session it will not
                    be reflected in the cheque order process until you exit and
                    sign back on to ZippyX.
                  </li>
                  <li>
                    If you don&apos;t want your home address, phone number
                    and/or email address to appear on your cheques, you can
                    indicate this later in the ordering process.
                  </li>
                </ul>
              </Col>
            </Row>
          </Row>
          <hr style={{ height: '1px', width: '100%' }} />
          <Col
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
              marginTop: '-18px',
              borderRadius: '4px',
              padding: '6px 0px',
            }}
          >
            <button
              type="button"
              style={{
                marginRight: '15px',
                border: '2px solid white',
                borderRadius: '4px',
                backgroundColor: 'white',
                color: 'black',
                padding: '5px 12px',
              }}
            >
              <i />
              Cancel
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
          <hr style={{ height: '1px' }} />
          <Row>
            <i />
            <h6 style={{ fontWeight: 'bold' }}>Note:</h6>
            <ul>
              <li>
                <p>
                  Make sure you&apos;re ordering cheques for the correct account
                  verify the transit number and account number.
                </p>
              </li>
              <li>
                <p>
                  Standard charges apply to online cheque orders You can confirm
                  these charges before you complete your order.
                </p>
              </li>
            </ul>
          </Row>
        </Col>
        <Col md={3}>
          <Row
            style={{
              border: 'solid #AAAAAA 1px',
              justifyItems: 'space-between',
              margin: '0px 0px 20px 0px',
            }}
          >
            <h6 style={{ paddingTop: '10px' }}>You can also:</h6>
            {quickLinks.map((q) => LinkElement(q))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

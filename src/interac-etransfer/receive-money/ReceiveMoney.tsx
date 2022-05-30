import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CommonPageContainer from '../../common/CommonPageContainer';

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

export default function ReceiveMoney() {
  const navigate = useNavigate();
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      text: 'View upcoming bill payments and transfers',
      url: './',
    },
    {
      id: 2,
      text: 'Register for lnterac e-Transfer® Autodeposits',
      url: './',
    },
    {
      id: 3,
      text: 'Change your statement preferences',
      url: './',
    },
  ];

  return (
    <div className="page-content">
      <CommonPageContainer title="Receive Money">
        <Row>
          <Col md={9}>
            <Row>
              <Col>
                <Row>
                  <i />
                  <p>
                    To collect an Interac e-Transfers®&sup1;, check your email and
                    en your Interac e-Transfer notice. Select the link included in
                    the body of the text to begin the deposit process.
                  </p>
                  <br />
                  <p>
                    Deposits made after 6:00 pm ET will be processed the next
                    business day.
                  </p>
                </Row>
              </Col>
            </Row>
            <hr style={{ height: '1px', width: '100%' }} />
            <Col
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
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
                  border: '2px solid grey',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '5px 12px',
                }}
                onClick={() => {
                  navigate('/interac-etransfer/status/received');
                }}
              >
                Check Status
              </button>
              <button
                type="button"
                style={{
                  borderRadius: '4px',
                  padding: '5px 12px',
                }}
                onClick={() => navigate('/interac-etransfer/learn-more')}
              >
                Learn More
              </button>
            </Col>
            <hr style={{ height: '1px' }} />
            <Row>
              <i />
              <h6 style={{ fontWeight: 'bold' }}>Note:</h6>
              <p>&sup1;Your use of lnterac e-Transfer® is subject to the </p>
              <p>
                <i />
                lnterac e-Transferl Terms and conditions (PDF, 197 KB).
              </p>
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
      </CommonPageContainer>
    </div>
  );
}

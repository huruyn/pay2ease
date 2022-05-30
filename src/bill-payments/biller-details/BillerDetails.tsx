import { Col, Row } from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

interface QuickLink {
  id: number;
  url: string;
  text: string;
}

const LinkElement = ({ url, text, id }: QuickLink): JSX.Element => (
  <a href={url} key={id} style={{ textDecoration: 'none', padding: '8px 8px', color: 'black' }}>{text}</a>
);

export default function BillerDetails() {
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      text: 'Pay Bills',
      url: './',
    },
    {
      id: 2,
      text: 'Add or Edit Payees',
      url: './',
    },
    {
      id: 3,
      text: 'Manage My Alerts',
      url: './',
    },
    {
      id: 4,
      text: 'View eBills',
      url: './',
    },
  ];
  const result: string = '{Result #0069}';
  return (
    <div className="page-content">
      <CommonPageContainer title="Payee Details">
        <Row style={{ justifyContent: 'space-between', marginTop: '15px', marginBottom: '15px' }}>
          <h3>PAYEE DETAILS</h3>
          <span>
            <i />
            <i />
          </span>
        </Row>
        <Row>
          <Col md={9}>
            <Row
              style={
              {
                border: '2px solid #8E1B4A', borderRadius: '5px', padding: '15px 0px', margin: '0px 2px',
              }
            }
            >
              <Col>
                <Row>
                  <i />
                  <p>
                    You currently do not have any payees set up for online Bill Payment.
                    Please add a payee to proceed.
                  </p>
                </Row>
                <Row style={{ justifyContent: 'flex-end', paddingRight: '15px' }}>

                  {result}

                </Row>
              </Col>
            </Row>
            <hr style={{ height: '2px', width: '100%' }} />
            <button
              type="button"
              style={
              {
                width: '30%', alignSelf: 'flex-end', marginLeft: '70%', marginBottom: '10px', marginTop: '15px', borderRadius: '4px', padding: '6px 0px',
              }
            }
            >
              Add Payee
            </button>
          </Col>
          <Col md={3}>
            <Row style={{ border: 'solid #AAAAAA 1px', justifyItems: 'space-between', margin: '0px 0px 20px 0px' }}>
              <h6 style={{ paddingTop: '10px' }}>You can also:</h6>
              {quickLinks.map((q) => (LinkElement(q)))}
            </Row>
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}

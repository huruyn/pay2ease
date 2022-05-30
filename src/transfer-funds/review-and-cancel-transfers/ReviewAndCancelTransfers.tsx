import { Col, Row, Table } from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

interface QuickLink {
  id: number;
  url: string;
  text: string;
}

const LinkElement = ({ url, text, id }: QuickLink): JSX.Element => (
  <a href={url} key={id} style={{ textDecoration: 'none', padding: '8px 8px', color: 'black' }}>{text}</a>
);

export default function ReviewAndCancelTransfers() {
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      text: 'Set up a transfer',
      url: './',
    },
    {
      id: 2,
      text: 'Edit your "Postdated Transfer" alerts',
      url: './',
    },
  ];
  return (
    <div className="page-content">
      <CommonPageContainer title="Review & Cancel Transfers">
        <Row>
          <Col md={9}>
            <h6 style={{ marginTop: '20px 0px' }}>Overview</h6>
            <ul>
              <li>
                To delete an upcoming transfer,
                check the box next to it, then select &ldquo;Delete Transfer&ldquo;.
              </li>
              <li>
                For a recurring transfer,
                this will delete the next transfer and all remaining
                transfers in the series.
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <Row style={{ border: 'solid #AAAAAA 1px', justifyItems: 'space-between', margin: '0px 0px 20px 0px' }}>
              <h6 style={{ paddingTop: '10px' }}>You can also:</h6>
              {quickLinks.map((q) => (LinkElement(q)))}
            </Row>
          </Col>
        </Row>

        <hr style={
        {
          height: '2px',
          color: 'C4C4C4',
          margin: '0px',
        }
      }
        />
        <Table className="table table-borderless">
          <thead style={
          {
            height: '40px',
            background: '#EEEEEE',
            margin: '0px',
          }
        }
          >
            <tr>
              <th scope="col" style={{ width: '20%' }}>FROM</th>
              <th scope="col" style={{ width: '20%' }}>TO</th>
              <th scope="col" style={{ width: '15%' }}>AMOUNT</th>
              <th scope="col" style={{ width: '15%' }}>DATE</th>
              <th scope="col" style={{ width: '30%' }}>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>
                <Row style={{ justifyContent: 'center', margin: '20px 0' }}>
                  You do not have any upcoming transfers.
                </Row>
              </td>
            </tr>
          </tbody>
        </Table>
        <hr style={
        {
          height: '2px',
          color: 'C4C4C4',
          margin: '0px',
        }
      }
        />
      </CommonPageContainer>
    </div>
  );
}

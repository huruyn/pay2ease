import { Col, Row } from 'react-bootstrap';

interface TableDataType {
  id: number;
  name: string;
  transitNumber: string;
  accountNumber: string;
}
interface QuickLink {
  id: number;
  url: string;
  text: string;
}
const TableData: TableDataType[] = [
  {
    id: 1,
    name: 'chequing',
    transitNumber: '01702',
    accountNumber: '81-99639',
  },
  {
    id: 2,
    name: 'Savings',
    transitNumber: '01702',
    accountNumber: '81-99668',
  },
  {
    id: 3,
    name: 'Others',
    transitNumber: '01702',
    accountNumber: '96-00797',
  },
];
const LinkElement = ({ url, text, id }: QuickLink): JSX.Element => (
  <a
    href={url}
    key={id}
    style={{ textDecoration: 'none', padding: '8px 8px', color: 'black' }}
  >
    {text}
  </a>
);
export default function UnlinkAccountsFromYourDebitCard() {
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      text: 'Review Transfer',
      url: './',
    },
    {
      id: 2,
      text: 'View Upcoming and Past Payments',
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
        <h3>UNLINK ACCOUNTS</h3>
        <span>
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
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                marginBottom: '15px',
              }}
            >
              <p style={{ marginRight: '15px', fontWeight: 'bold' }}>Step :</p>
              <div
                style={{
                  height: '30px',
                  width: ' 30px',
                  border: '2px solid red',
                  backgroundColor: 'red',
                  display: 'inline-block',
                  borderRadius: '50%',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                1
              </div>
              <hr
                style={{
                  width: '25px',
                  alignSelf: 'center',
                  borderWidth: '2px',
                  borderColor: 'black',
                  backgroundColor: 'black',
                  marginBottom: 'auto',
                }}
              />
              <div
                style={{
                  height: '30px',
                  width: ' 30px',
                  border: '2px solid #000',
                  display: 'inline-block',
                  borderRadius: '50%',
                  textAlign: 'center',
                }}
              >
                2
              </div>
            </div>
            <Row>
              <h4>Unlink an Existing Account from Your Debit Card</h4>
              <p>
                Unlink an Existing Account from Your Debit Card will not close
                the account
              </p>
              <p>
                IMPORTANT: Any future dated transactions including transfers or
                bill payments involving an account that is unlinked will be
                deleted Please review your future dated transaction prior to
                unlinking an account
              </p>
              <p>If you unlink a bank account</p>

              <ul>
                <li>
                  You may not able to access the unlinked account or perfom
                  certain atlas (e.g., transfer funds) through ZippyX.
                </li>
                <li>
                  You will not be able to use the account for interac® point of
                  sale transactions.
                </li>
              </ul>
              <p>if you unlink a credit card account:</p>
              <ul>
                <li>
                  You will not be able to transfer funds between your credit
                  card and bank account(s) through ZippyX.
                </li>
                <li>
                  You will not be able to access your credit card at bank
                  machines when using your debit card.
                </li>
              </ul>
              <p>
                If you&apos;d like to link your account to your debit card in
                the future, select &quot;Link Account&quot; beside the account
                on the &quot;My Account&quot; page
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Accounts currently linked to ZippyX debit card 4506 4457 3443 3434
              </p>
            </Row>
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
      <table className="table table-borderless">
        <thead
          style={{
            height: '40px',
            background: '#EEEEEE',
            margin: '0px',
          }}
        >
          <tr>
            <th scope="col" style={{ width: '33%' }}>
              ACCOUNT NAME
            </th>
            <th scope="col" style={{ width: '33%' }}>
              TRANSIT NUMBER
            </th>
            <th scope="col" style={{ width: '33%' }}>
              ACCOUNT NUMBER
            </th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((data) => (
            <tr key={data.id} style={{ borderBottom: '1px solid #F4F4F4' }}>
              <td>
                <input
                  type="checkbox"
                  name="brand"
                  style={{ marginRight: '10px' }}
                />
                {data.name}
              </td>

              <td>{data.transitNumber}</td>
              <td>{data.accountNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
            border: '2px solid grey',
            borderRadius: '4px',
            backgroundColor: 'white',
            color: 'black',
            padding: '5px 12px',
          }}
        >
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
    </div>
  );
}

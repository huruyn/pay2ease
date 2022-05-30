import { Col, Row, Table } from 'react-bootstrap';

export default function CreateOrEditAccountNickname() {
  return (
    <div className="page-content">
      <Row>
        <Col>
          <h2>ACCOUNT NICKNAME</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ul>
            <li>
              To create an account nickname, select the &quot;Create&quot; link next to the account
            </li>
            <li>
              To edit an existing account nickname, select the &quot;Edit&quot; link next to the
              account
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Table>
            <thead style={{ backgroundColor: '#f2f3f2' }}>
              <tr>
                <th>ACCOUNTS</th>
                <th>ACCOUNT NICKNAME</th>
              </tr>
            </thead>
            <tbody className="border-top-0">
              <tr>
                <td>Chequing (8199639)</td>
                <td><u>Create</u></td>
              </tr>
              <tr>
                <td>Savings (8199698)</td>
                <td><u>Create</u></td>
              </tr>
              <tr>
                <td>Other (9640797)</td>
                <td><u>Create</u></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="border-top border-1 mt-4 pt-2">
        <Col>
          <b>Note:</b>
          <br />
          You can add nicknames to all your accounts in ZippyX. You&apos;ll see the
          nickname instead of the account name in ZippyX. However, on ZippyX ATMs, on
          the phone or in Banking Centres we&apos;ll be using the account name, not the nickname.
        </Col>
      </Row>
    </div>
  );
}

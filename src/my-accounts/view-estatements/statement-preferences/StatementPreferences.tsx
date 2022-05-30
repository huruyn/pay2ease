import { Row, Table } from 'react-bootstrap';
import CommonPageContainer from '../../../common/CommonPageContainer';

export interface AccountType {
  id: number,
  account: string,
  number: string,
  alertStatus: string,
  statemetOption: string,
  contactMethods: string,
}

export default function StatementPreferences() {
  const Accounts: AccountType[] = [
    {
      id: 1,
      account: 'Chequing ',
      number: '01702-81-99639',
      statemetOption: 'eStatement',
      alertStatus: 'Inactive',
      contactMethods: 'Message Center Primary email (email@gmail.com)',
    },
    {
      id: 2,
      account: 'Savings ',
      number: '01702-81-99639',
      statemetOption: 'eStatement',
      alertStatus: 'Inactive',
      contactMethods: '',
    },
    {
      id: 3,
      account: 'Other ',
      number: '01702-81-99639',
      statemetOption: 'eStatement',
      alertStatus: 'Inactive',
      contactMethods: '',
    },
  ];
  return (
    <div className="page-content">
      <CommonPageContainer title="Statement Preferences">
        <Row style={{ justifyContent: 'space-between', marginTop: '15px' }}>
          <div style={{ marginTop: '20px' }}>
            <span>
              <h6>BANK ACCOUNTS</h6>
              <i />
            </span>
          </div>
          <hr style={
            {
              height: '3px',
              color: 'C4C4C4',
              margin: '0px',
            }
          }
          />
          <Row>
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
                  <th scope="col" style={{ width: '25%' }}>Account</th>
                  <th scope="col" style={{ width: '25%' }}>STATEMENT OPTION</th>
                  <th scope="col" style={{ width: '15%' }}>{' '}</th>
                  <th scope="col" style={{ width: '35%' }}>
                    <span>
                      CONTACT METHODS FOR ALERTS
                      <i />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                Accounts.map((account, index) => (
                  <tr key={account.id} style={{ borderBottom: index === Accounts.length - 1 ? '' : '1px solid #EEEEEE' }}>
                    <td>
                      <span style={{ marginTop: '20px' }}>
                        <h6>{account.account}</h6>
                        <h6>{`(${account.number})`}</h6>
                      </span>
                    </td>
                    <td>
                      <span>
                        <h6>{account.statemetOption}</h6>
                        <h6>{`(Alerts: ${account.alertStatus})`}</h6>
                      </span>
                    </td>
                    <td>
                      <h6><a href="./" style={{ color: 'black', verticalAlign: 'center' }}>Edit Preferences</a></h6>
                    </td>
                    <td>
                      <span style={{ marginTop: '20px' }}>
                        <h6>{account.contactMethods}</h6>
                      </span>
                    </td>

                  </tr>
                ))
              }
              </tbody>
            </Table>

          </Row>
          <hr style={{ height: '1px' }} />
          <button
            type="button"
            style={
            {
              width: '20%', alignSelf: 'flex-end', marginLeft: '80%', marginBottom: '10px', marginTop: '10px',
            }
          }
          >
            My Account
          </button>
          <hr style={{ height: '1px' }} />
          <Row>
            <i />
            <h6 style={{ fontWeight: 'bold' }}>Note:</h6>
            <ul>
              <li>
                An inactive alert status applies to bank accounts that were automatically
                transferred from Paperless to eStatements.
                If your alert status is displayed as inactive,
                it means you have not agreed to the terms and conditions for eStatements.
              </li>
              <li>
                If you opened your account within the last 30 days and requested mailed
                quarterly statements,you may still see Mailed Statement as your statement option.
                Your preferences will display correctly after the next statement cycle
              </li>
              <li>
                Changes to your preferences for bankbooks
                will not be reflected until processing is complete.
              </li>
              <li style={{ listStyle: 'none' }}>
                <i />
                Bank Accounts eStatement Terms and Conditions (May 2016) (PDF, 146 KB)
              </li>
              <li style={{ listStyle: 'none' }}>
                <i />
                Credit Card eStatement Terms and Conditions (May 2016) (PDF, 127 KB)
              </li>
              <li style={{ listStyle: 'none' }}>
                <i />
                Personal Line of Credit eStatement Terms and
                Conditions (PDF, 100 KB) Last updated October 2019
              </li>
              <li style={{ listStyle: 'none' }}>
                <i />
                ZippyX Securities Inc. and PPS Consent
                to Electronic Delivery (November 2014) (PDF, 47 KB)
              </li>
            </ul>
            <p>
              To view or save a eStatement as a PDF you will
              need Adobe Acrobat Reader°.
              Please download it before opening your eStatement.
            </p>
            <p>
              Portable Document Format (PDF) is a standard form of printable
              web document. With a PDF, you can save and print your
              statements for your personal record keeping.
            </p>
          </Row>
        </Row>
      </CommonPageContainer>
    </div>
  );
}

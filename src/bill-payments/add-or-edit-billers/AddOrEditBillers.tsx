import { Button, Form, Table } from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function AddOrEditBillers() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Add or Edit Payees">
        <ul className="mt-4">
          <li>On this page, you can edit your existing payees or add new ones</li>
          <li>
            Edit your &quot;New bill payee has been added&quot; alert
            {' '}
            <a href="/" className="text-black">
              delivery preferences
            </a>
          </li>
          <li>
            Note: To register your government taxes as a payee or pay and file
            your business taxes, refer to
            {' '}
            <a href="/" className="text-black">
              Government Payment and Filing Service
            </a>
          </li>
          <li>
            If you&apos;re trying to pay a ZippyX bill, you may need to
            {' '}
            <a href="/" className="text-black">
              link your ZippyX Account
            </a>
          </li>
        </ul>
        <div className="mt-2">
          <div className="d-flex p-2" style={{ borderBottom: '2px solid grey' }}>
            <h5>ADD A PAYEE</h5>
            <div
              style={{
                width: 20,
                height: 25,
                border: '1px dotted grey',
                textAlign: 'center',
                marginRight: 10,
              }}
              title="print"
            >
              P
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <span style={{ fontWeight: 500 }}>
              Here are some things you can do before starting your search for a
              payee
            </span>
            <p>When searching for payees by name:</p>
            <ul>
              <li>
                Type the full name of the company if abbreviated name is 2
                characters or less (for example TD should be Toronto Dominion).
              </li>
              <li>
                Try using a generic name such as &quot;Simplii Visa&quot; instead
                of the specific name of your credit card (for example
                &quot;Aventura Visa&quot;).
              </li>
            </ul>
            <p>When searching for payees by keyword:</p>
            <ul>
              <li>
                Insert a comma in between keywords (for example &quot;VISA,
                Simplii&quot;) when searching for more than one keyword.
              </li>
              <li>
                Use specific keywords (for example &quot;Hydro Quebec&quot;
                instead of &quot;Hydro&quot;).
              </li>
            </ul>
            <div className="d-flex align-items-center mt-3">
              <span>Enter Company Name:</span>
              <Form.Control
                type="text"
                placeholder=""
                style={{ width: 300, marginLeft: 10, marginRight: 10 }}
              />
              <Button
                variant="outline-danger"
                className="d-flex"
                style={{ width: 'auto', marginRight: 10 }}
              >
                My Accounts
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="d-flex p-2" style={{ borderBottom: '2px solid grey' }}>
            <h5>EDIT PAYEES</h5>
            <div
              style={{
                width: 20,
                height: 25,
                border: '1px dotted grey',
                textAlign: 'center',
                marginRight: 10,
              }}
              title="print"
            >
              P
            </div>
          </div>
          <ul className="mt-2">
            <li>
              To register your government taxes as a payee, refer to
              {' '}
              <a href="/" className="text-black">
                Government Payment and Filing Service
              </a>
            </li>
            <li>
              Create nicknames for your payees to make it easier for you to
              recognize. The nickname will appear instead of the payee name. The
              nickname will only appear when you access your accounts through
              ZippyX.
            </li>
            <li>
              Deleting a payee will delete any future one-time and recurring
              payments that you have scheduled for the payee.
            </li>
            <li>
              To update an account number, first delete the payee and then add the
              payee again using the new account number.
            </li>
          </ul>
        </div>
        <Table className="mt-4">
          <thead>
            <tr className="bg-light" style={{ borderTop: '1px solid #c5c5c5' }}>
              <th>PAYEE NAME</th>
              <th>NICKNAME</th>
              <th>RECURRENT PAYMENTS</th>
              <th>DISPLAY ON PAY BILLs PAGE</th>
              <th>DELETE PAYEE</th>
            </tr>
          </thead>
          <tbody style={{ borderTop: 'none' }}>
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', color: 'grey', fontSize: 14 }}>
                You currently do not have any payees set up for the online Bill
                Payments. Please add a payee to proceed
              </td>
            </tr>
          </tbody>
        </Table>
      </CommonPageContainer>
    </div>
  );
}

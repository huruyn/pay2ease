import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import transactions from './transactions';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function ViewAccountDetails() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Deposit Account Details">
        <p>
          Receive notifications when
          {' '}
          <u>held funds are released</u>
          {' '}
          and are available to you; when you exceed your bank machine withdrawal and your Point of
          Sale daily limit.
        </p>
        <div className="row">
          <div className="col-6">
            <Form.Select>
              <option>Chequing (01702-81-99639) $2,260.57</option>
            </Form.Select>
          </div>
          <div className="col-6 text-end">
            <DropdownButton as={ButtonGroup} title="Manage My Account" variant="outline-primary">
              <Dropdown.Item>Manage My Account</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="border-primary mt-2 pt-4 pb-2" style={{ backgroundColor: '#f4f4f4', borderTop: '3px solid' }}>
          <div className="row mx-0">
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <h3>Balance:</h3>
                <h3>$2,260.57</h3>
              </div>
              <div className="d-flex justify-content-between">
                <span>Funds on Hold:</span>
                <span>$0.00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Overdraft Limit:</span>
                <span>N/A</span>
              </div>
              <div className="d-flex justify-content-between">
                <b>Available Funds:</b>
                <b>$2,260.57</b>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <div><b>Product Name:</b></div>
                  <div>Everyday® Checking</div>
                  <div><b>Statement Option:</b></div>
                  <div>View and Edit</div>
                </div>
                <div className="col-6">
                  <div>
                    <b>Transit Number:</b>
                    {' '}
                    01702
                  </div>
                  <div>
                    <b>Institution Number:</b>
                    {' '}
                    010
                  </div>
                  <div>
                    <b>Account Number:</b>
                    {' '}
                    8199639
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div><b>Daily ATM Widthdrawal Limit</b></div>
                  <div>$3,000.00</div>
                </div>
                <div className="col-6">
                  <div><b>Daily Debit Purchase Limit</b></div>
                  <div>$3,000.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12">
              <Button variant="outline-primary">View Upcoming Bills and Transfers</Button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-9 px-4">
            <h3 className="d-inline">PAST TRANSACTIONS</h3>
            {' '}
            (October 12, 2021 to November 14, 2021)
          </div>
          <div className="col-3 text-end">
            <Button variant="outline-primary">Transaction Glossary</Button>
          </div>
        </div>
        <div className="border-primary my-2" style={{ borderTop: '3px solid' }} />
        <div className="row align-items-center">
          <div className="col-3">
            <Button variant="outline-primary">Custom Search</Button>
          </div>
          <div className="col-9 text-end">
            <span className="px-3">View:</span>
            <b>Last 4 weeks</b>
            <span className="px-3">|</span>
            <u>Last 3 months</u>
            <span className="px-3">|</span>
            <u>Last 6 months</u>
            <span className="px-3">|</span>
            <u>Last 12 months</u>
          </div>
        </div>
        <div className="border-primary my-2" style={{ borderTop: '1px solid' }} />
        <div className="row my-2">
          <div className="col-12 text-end">
            <u>Questions about your transactions?</u>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Table>
              <thead style={{ backgroundColor: '#f4f4f4' }}>
                <tr>
                  <th>DATE</th>
                  <th>TRANSACTIONS</th>
                  <th>DEBIT</th>
                  <th>CREDIT</th>
                  <th>RUNNING BALANCE</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {transactions.map((transaction) => (
                  <tr key={transaction.join()}>
                    <td>{transaction[0]}</td>
                    <td>{transaction[1]}</td>
                    <td>{transaction[2]}</td>
                    <td>{transaction[3]}</td>
                    <td>{transaction[4]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p>
              For a description of transactions that are included in the ZippyX SmartTM Account
              monthly fee and the fees for other Personal Services, visit ZippyX or review
              Personal Account Service Fees (PDF, 210 KB).
            </p>
            <p>
              * Foreign Currency Conversion Fee - If you withdraw foreign currency
              from a bank machine located outside of Canada, you are charged the same
              conversion rate ZippyX is required to pay, plus an administration fee
              of 2.5% of the converted amount (this is in addition to any transaction
              fee applicable to the withdrawal and the network fee).
            </p>
            <div className="border-primary my-1" style={{ borderTop: '1px solid' }} />
            <p className="mt-4">
              <b>Note:</b>
            </p>
            <p>
              Transactions from today that are reflected in your balance may not be
              displayed on this page if a paper statement was recently issued, or if
              a transaction is backdated. These transactions will appear in your history
              the following business day.
            </p>
            <p>
              For questions about service fees or Non-Sufficient Fund (NSF) charges,
              review a list of service charges and account fees.
            </p>
          </div>
        </div>
      </CommonPageContainer>
    </div>
  );
}

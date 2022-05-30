import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function DownloadTransactions() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Download Transactions">
        <ul>
          <li>
            Choose an account, a display period and your financial management software, then select
            &quot;Download Transactions&quot;.
          </li>
          <li>
            This information could take several seconds to download. If the number of transactions
            within your selected display period exceeds the allowable download limit, you will have
            to select &quot;All within date range&quot; and choose a shorter time period to obtain
            your results.
          </li>
        </ul>
        <div className="row align-items-top">
          <div className="col-3">Account:</div>
          <div className="col-6">
            <Form.Select>
              <option>Choose an account</option>
            </Form.Select>
          </div>
        </div>
        <div className="border-primary my-3" style={{ borderTop: '1px solid' }} />
        <div className="row align-items-top">
          <div className="col-3">Display:</div>
          <div className="col-9">
            <Form>
              <Form.Check type="radio" name="display" id="display-last" label="All since last download" />
              <Form.Check type="radio" name="display" id="display-all" label="All available" />
              <Form.Check type="radio" name="display" id="display-range" label="All within date range" />
              <div className="row mt-2 align-items-center">
                <div className="col-2 px-4">From:</div>
                <div className="col-4">
                  <Form.Select>
                    <option>October</option>
                  </Form.Select>
                </div>
                <div className="col-2">
                  <Form.Select>
                    <option>1</option>
                  </Form.Select>
                </div>
                <div className="col-2">
                  <Form.Select>
                    <option>2021</option>
                  </Form.Select>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-2 px-4">To:</div>
                <div className="col-4">
                  <Form.Select>
                    <option>November</option>
                  </Form.Select>
                </div>
                <div className="col-2">
                  <Form.Select>
                    <option>9</option>
                  </Form.Select>
                </div>
                <div className="col-2">
                  <Form.Select>
                    <option>2021</option>
                  </Form.Select>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="border-primary my-3" style={{ borderTop: '1px solid' }} />
        <div className="row align-items-top">
          <div className="col-3">Financial management software:</div>
          <div className="col-6">
            <Form.Select>
              <option>Choose your software</option>
            </Form.Select>
          </div>
        </div>
        <div className="border-primary my-3" style={{ borderTop: '1px solid' }} />
        <div className="row">
          <div className="col-12 text-end">
            <Button className="mx-2" variant="outline-primary">My Accounts</Button>
            <Button>Download Transactions</Button>
          </div>
        </div>
      </CommonPageContainer>
    </div>
  );
}

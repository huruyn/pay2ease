import {
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import CommonPageContainer from '../../common/CommonPageContainer';

const Divider = () => <div className="border-top my-3" />;

const LeftCol = () => (
  <Col xs={9}>
    <Row>
      <Col>
        <b>Step: 1 - 2</b>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4 className="mt-4">Set up transfer details</h4>
        <p>Enter your transfer details</p>
        <p>
          Can&apos;t find your account in the list? Select &quot;Link Account&quot; below the
          account you would like to add to your transfer list on the My Accounts page.
        </p>
      </Col>
    </Row>
    <Row className="align-items-center mt-4">
      <Col xs={3}>From:</Col>
      <Col xs={6}>
        <Form.Select>
          <option>Choose an account</option>
        </Form.Select>
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center mt-4">
      <Col xs={3}>To:</Col>
      <Col xs={6}>
        <Form.Select>
          <option>Choose an account</option>
        </Form.Select>
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>Amount:</Col>
      <Col xs={6}>
        <Form.Control type="number" step=".01" placeholder="$" />
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center mt-4">
      <Col xs={3}>How often:</Col>
      <Col xs={6}>
        <Form.Select>
          <option>Once</option>
        </Form.Select>
      </Col>
    </Row>
    <Divider />
    <Row className="align-items-center">
      <Col xs={3}>
        Transfer date:
      </Col>
      <Col xs={6}>
        <Row>
          <Col xs="auto">
            <Form.Select>
              <option>November</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select>
              <option>9</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select>
              <option>2021</option>
            </Form.Select>
          </Col>
        </Row>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col className="text-end">
        <Button>Next</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col>
        <b>Note:</b>
        <br />
        <ul>
          <li>
            For post-dated and recurring transfers, funds must be available in your account 1
            business day before the scheduled transfer date; otherwise the transaction may be
            cancelled without notice to you.
          </li>
          <li>
            Transfer requests submitted after 6 p.m. ET will be processed the next business day.
          </li>
          <li>
            The &quot;Account Balance&quot; that is displayed may include any funds on hold. The
            &quot;Available Funds&quot; shows how much money is available immediately to make a
            transfer.
          </li>
        </ul>
      </Col>
    </Row>
  </Col>
);

const RightCol = () => (
  <Col xs={3}>
    <div className="border p-2 rounded">
      <b>You can also:</b>
      <br />
      Contribute to a TFSA &gt;
      <br />
      Widthdraw from a TFSA &gt;
      <br />
      Contribute to an RRSP &gt;
      <br />
      Make an additional loan payment &gt;
      <br />
      Make a mortgage payment &gt;
    </div>
  </Col>
);

export default function TransferFunds() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Transfers">
        <Row>
          <LeftCol />
          <RightCol />
        </Row>
      </CommonPageContainer>
    </div>
  );
}

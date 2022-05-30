import {
  Col,
  Row,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import {
  ESTATEMENTS_2020,
  ESTATEMENTS_2021,
  DOCUMENT_LINKS,
} from './Estatements';
import CommonPageContainer from '../../common/CommonPageContainer';

export default function ViewEStatements() {
  return (
    <div className="page-content">
      <CommonPageContainer title="EStatements">
        <Row>
          <Col md={9}>
            <Row className="align-items-md-end">
              <Col md={8}>
                <Form.Label>Account:</Form.Label>
                <Form.Select>
                  <option>Chequing (07102-81-99639) $2,260.57</option>
                  <option value="1">Chequing (07102-81-99639) $2,260.57</option>
                  <option value="2">Chequing (07102-81-99639) $2,260.57</option>
                  <option value="3">Chequing (07102-81-99639) $2,260.57</option>
                </Form.Select>
              </Col>
              <Col>
                <Button variant="link" className="text-black">View Account Details</Button>
              </Col>
            </Row>
            <Row className="align-items-md-start mt-3">
              <Col md={8} className="d-flex">
                <span className="font-weight-bold">Statement Option: </span>
                <div
                  className="d-flex flex-column align-items-start"
                  style={{ marginLeft: 5 }}
                >
                  <div>Estatement</div>
                  <Button variant="link" className="text-black" style={{ padding: 0 }}>
                    Edit Preference
                  </Button>
                </div>
              </Col>
              <Col>
                <span className="font-weight-bold">Alerts: </span>
                <span>Inactive</span>
              </Col>
            </Row>
            <div className="mt-2">
              <Row>
                <Col md={12} className="bg-light p-3" style={{ fontWeight: 500 }}>
                  <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>
                    -
                  </span>
                  <span>Statements from 2021</span>
                </Col>
              </Row>
              <div className="p-3">
                {ESTATEMENTS_2021.map((item) => (
                  <Row key={item.key}>
                    <Col md={12} className="d-flex align-items-center mt-2">
                      <div
                        style={{
                          width: 20,
                          height: 25,
                          border: '1px dotted grey',
                          textAlign: 'center',
                          marginRight: 10,
                        }}
                      >
                        P
                      </div>
                      <span>{item.title}</span>
                    </Col>
                  </Row>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <Row>
                <Col md={12} className="bg-light p-3" style={{ fontWeight: 500 }}>
                  <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>
                    -
                  </span>
                  <span>Statements from 2020</span>
                </Col>
              </Row>
              <div className="p-3">
                {ESTATEMENTS_2020.map((item) => (
                  <Row key={item.key}>
                    <Col md={12} className="d-flex align-items-center mt-2">
                      <div
                        style={{
                          width: 20,
                          height: 25,
                          border: '1px dotted grey',
                          textAlign: 'center',
                          marginRight: 10,
                        }}
                      >
                        P
                      </div>
                      <span>{item.title}</span>
                    </Col>
                  </Row>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <Row>
                <Col md={12} className="bg-light p-3" style={{ fontWeight: 500 }}>
                  <span style={{ color: 'rgb(220, 53, 69)', marginRight: 5 }}>
                    +
                  </span>
                  <span>Statements from 2019</span>
                </Col>
              </Row>
            </div>
            <div
              className="mt-4 p-3"
              style={{
                borderTop: '1px solid #e5e5e5',
                borderBottom: '1px solid #e5e5e5',
              }}
            >
              <Row className="d-flex justify-content-end">
                <Button
                  variant="outline-danger"
                  className="d-flex"
                  style={{ width: 'auto', marginRight: 10 }}
                >
                  My Accounts
                </Button>
                <Button
                  className="zippy-btn d-flex"
                  style={{ width: 'auto' }}
                >
                  Statement Options
                </Button>
              </Row>
            </div>
            <div className="mt-2">
              <div className="d-flex">
                <div
                  style={{
                    width: 20,
                    height: 25,
                    border: '1px dotted grey',
                    textAlign: 'center',
                    marginRight: 10,
                  }}
                >
                  P
                </div>
                <span style={{ fontWeight: 'bold' }}>Note:</span>
              </div>
              <p>
                An inactive alert status applies to bank accounts that were
                automatically transferred from Paperless to eStatements. If your
                alert status is displayed ad &quot;inactive&quot;, it means you
                have not agreed to the terms and conditions for eStatements
              </p>
              {DOCUMENT_LINKS.map((item) => (
                <Row key={item.key}>
                  <Col md={12} className="d-flex align-items-center mt-2">
                    <div
                      style={{
                        width: 20,
                        height: 25,
                        border: '1px dotted grey',
                        textAlign: 'center',
                        marginRight: 10,
                      }}
                    >
                      P
                    </div>
                    <span>{item.title}</span>
                  </Col>
                </Row>
              ))}
              <p>
                To view or save a eStatement as a PDF you will need Adobe Acrobat
                Reader. Please download it before opening your eStatement.
              </p>
              <p>
                Portable Document Format(PDF) is a standard form of printable web
                document. With a PDF, you can save and print your statements for
                your personal record keeping.
              </p>
            </div>
          </Col>
          <Col md={3}>
            <Card className="p-3 bg-white">
              <Card.Title>You can also:</Card.Title>
              <Card.Body>
                <a
                  href="/"
                  className="text-decoration-none text-black"
                  style={{ fontSize: 12, marginTop: 5, marginBottom: 5 }}
                >
                  Set Up Alerts
                  <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                    {'>'}
                  </span>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CommonPageContainer>
    </div>
  );
}

import PropTypes from 'prop-types';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  PERSONAL_INFORMATION_OPTIONS,
  SECURE_MESSAGE_OPTIONS,
  BANK_ACCOUNT_OPTIONS,
  CREDIT_CARD_OPTIONS,
  OFFER_OPTIONS,
  LOAN_OPTIONS,
  INVESTMENT_OPTIONS,
  FREQUENT_QUESTIONS,
} from './ServiceOptions';
import CommonPageContainer from '../../common/CommonPageContainer';

const LinkItem = (props: any) => {
  const { isNew, title, to } = props;
  return (
    <div style={{ paddingLeft: 5, paddingRight: 5 }}>
      <div style={{ padding: 10, borderBottom: '1px solid #d9d9d9' }}>
        <Link
          to={to}
          className="text-decoration-none text-black"
          style={{
            marginTop: 5,
            marginBottom: 5,
            display: 'block',
          }}
        >
          {isNew && (
            <div
              className="bg-danger"
              style={{
                height: 24,
                fontSize: 12,
                padding: 3,
                marginRight: 5,
                display: 'inline-block',
                color: 'white',
                textAlign: 'center',
                borderRadius: 5,
              }}
            >
              New
            </div>
          )}
          {title}
          <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
            {'>'}
          </span>
        </Link>
      </div>
    </div>
  );
};

LinkItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
};

LinkItem.defaultProps = {
  isNew: false,
};

export default function CustomerServices() {
  return (
    <div className="page-content">
      <CommonPageContainer title="Customer Services">
        <div className="mt-4">
          <h4>ZIPPYX INFORMATION</h4>
          <Row style={{ borderTop: '2px solid grey' }}>
            <Col md={6} style={{ padding: 0 }}>
              <div style={{ backgroundColor: '#ebebeb', padding: 10 }}>
                <h5>Personal information and Settings</h5>
              </div>
              {PERSONAL_INFORMATION_OPTIONS.map((item) => (
                <LinkItem to={item.to} title={item.title} isNew={item.is_new} key={`personal_${item.key}`} />
              ))}
            </Col>
            <Col md={6} style={{ padding: 0 }}>
              <div style={{ backgroundColor: '#ebebeb', padding: 10 }}>
                <h5>Secure messages and alerts</h5>
              </div>
              {SECURE_MESSAGE_OPTIONS.map((item) => (
                <LinkItem to={item.to} title={item.title} isNew={item.is_new} key={`secure_${item.key}`} />
              ))}
            </Col>
          </Row>
        </div>
        <div>
          <h4>ACCOUNT SERVICES</h4>
          <Row style={{ borderTop: '2px solid grey' }}>
            <Col md={6} style={{ padding: 0 }}>
              <div style={{ backgroundColor: '#ebebeb', padding: 10 }}>
                <h5>Bank Accounts</h5>
              </div>
              {BANK_ACCOUNT_OPTIONS.map((item) => (
                <LinkItem to={item.to} title={item.title} isNew={item.is_new} key={`bank_${item.key}`} />
              ))}
            </Col>
            <Col md={6} style={{ padding: 0 }}>
              <div style={{ backgroundColor: '#ebebeb', padding: 10 }}>
                <h5>Credit Cards</h5>
              </div>
              {CREDIT_CARD_OPTIONS.map((item) => (
                <LinkItem to={item.to} title={item.title} isNew={item.is_new} key={`credit_${item.key}`} />
              ))}
            </Col>
          </Row>
          <Row style={{ borderTop: '2px solid grey' }}>
            <Col md={6} style={{ padding: 0 }}>
              <div style={{ backgroundColor: '#ebebeb', padding: 10 }}>
                <h5>Exclusive offers and benefits</h5>
              </div>
              {OFFER_OPTIONS.map((item) => (
                <LinkItem to={item.to} title={item.title} isNew={item.is_new} key={`offer_${item.key}`} />
              ))}
            </Col>
          </Row>
          <Row style={{ borderTop: '2px solid grey' }}>
            <Col md={6} style={{ padding: 0 }}>
              <div style={{ backgroundColor: '#ebebeb', padding: 10 }}>
                <h5>Mortagages and Loans</h5>
              </div>
              {LOAN_OPTIONS.map((item) => (
                <LinkItem to={item.to} title={item.title} isNew={item.is_new} key={`loan_${item.key}`} />
              ))}
            </Col>
            <Col md={6} style={{ padding: 0 }}>
              <div style={{ backgroundColor: '#ebebeb', padding: 10 }}>
                <h5>Investment Accounts</h5>
              </div>
              {INVESTMENT_OPTIONS.map((item) => (
                <LinkItem to={item.to} title={item.title} isNew={item.is_new} key={`investment_${item.key}`} />
              ))}
            </Col>
          </Row>
        </div>
        <div
          className="mt-4"
          style={{
            backgroundColor: '#e9e9e9',
            padding: 15,
            paddingTop: 25,
            paddingBottom: 25,
          }}
        >
          <Row>
            <Col md={8}>
              <h5>Frequently Asked Questions</h5>
              <ul className="mt-4" style={{ listStyle: 'none', padding: 0 }}>
                {FREQUENT_QUESTIONS.map((item) => (
                  <li key={`question_${item.key}`}>
                    <a
                      href="/"
                      className="text-decoration-none text-black"
                      style={{
                        marginTop: 5,
                        marginBottom: 5,
                        display: 'block',
                        fontSize: 15,
                      }}
                    >
                      {item.title}
                      <span style={{ color: 'rgb(220, 53, 69)', marginLeft: 5 }}>
                        {'>'}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-end">
                <a
                  href="/"
                  className="text-black"
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    display: 'block',
                    fontSize: 15,
                  }}
                >
                  More frequently asked questions
                </a>
              </div>
            </Col>
            <Col md={4} style={{ padding: 10, borderLeft: '1px solid #dbdbdb' }}>
              <p>
                Use our automated help for immediate answers to your questions
              </p>
              <Button
                className="zippy-btn d-flex"
                style={{ width: 'auto' }}
              >
                Ask a Question
              </Button>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
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
            <a href="/" className="text-black">Trademarks</a>
          </p>
        </div>
      </CommonPageContainer>
    </div>
  );
}

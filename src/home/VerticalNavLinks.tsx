import Nav from 'react-bootstrap/Nav';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ZippyCashLogo from '../assets/img/general/ZippyCash_Logo.svg';

export default function VerticalNavLinks() {
  const { pathname } = useLocation();

  return (
    <div className="vertical-nav-wrapper noselect">
      <Nav className="vertical-nav">
        <Link to="/" className="navbar-brand">
          <img src={ZippyCashLogo} alt="" />
        </Link>
        <Nav.Link className="nav-link" id="my-account-link" as={NavLink} to="/my-accounts">
          <i className="zippy-cash-icon zc-home" />
          My Accounts
          <i className="dropdown zippy-cash-icon zc-up" />
        </Nav.Link>
        {pathname.startsWith('/my-accounts') && (
          <Nav className="flex-column" style={{ marginLeft: '20px' }}>
            <Nav.Link as={NavLink} to="/my-accounts/view-account-details">View Account Details</Nav.Link>
            <Nav.Link as={NavLink} to="/my-accounts/download-transactions">Download Transactions</Nav.Link>
            <Nav.Link as={NavLink} to="/my-accounts/view-estatements">
              View eStatements
              <i className="dropdown zippy-cash-icon zc-up" />
            </Nav.Link>
            {pathname.startsWith('/my-accounts/view-estatements') && (
              <Nav className="flex-column" style={{ marginLeft: '20px' }}>
                <Nav.Link as={NavLink} to="/my-accounts/view-estatements/statement-preferences">Statement Preferences</Nav.Link>
              </Nav>
            )}
            <Nav.Link as={NavLink} to="/my-accounts/upcoming-bill-payments-and-transfers">Upcoming Bill Payments and Transfers</Nav.Link>
          </Nav>
        )}
        <Nav.Link className="nav-link" as={NavLink} to="/interac-etransfer">
          <i className="zippy-cash-icon zc-interac-etransfer" />
          Interac e-Transfer
          <i className="dropdown zippy-cash-icon zc-up" />
        </Nav.Link>
        {pathname.startsWith('/interac-etransfer') && (
          <Nav className="flex-column" style={{ marginLeft: '20px' }}>
            <Nav.Link as={NavLink} to="/interac-etransfer/status">Status</Nav.Link>
            <Nav.Link as={NavLink} to="/interac-etransfer/send-money">Send Money</Nav.Link>
            <Nav.Link as={NavLink} to="/interac-etransfer/request-money">Request Money</Nav.Link>
            <Nav.Link as={NavLink} to="/interac-etransfer/contact-list">Contact List</Nav.Link>
            <Nav.Link as={NavLink} to="/interac-etransfer/edit-my-profile">Edit My Profile</Nav.Link>
            <Nav.Link as={NavLink} to="/interac-etransfer/autodeposit-settings">Autodeposit Settings</Nav.Link>
            <Nav.Link as={NavLink} to="/interac-etransfer/receive-money">Receive Money</Nav.Link>
            <Nav.Link as={NavLink} to="/interac-etransfer/learn-more">Learn More</Nav.Link>
          </Nav>
        )}
        <Nav.Link className="nav-link" as={NavLink} to="/my-wallet/zippy-money/send/transaction-start">
          <i className="zippy-cash-icon zc-interac-etransfer" />
          My Wallet
          <i className="dropdown zippy-cash-icon zc-up" />
        </Nav.Link>
        {pathname.startsWith('/my-wallet') && (
          <Nav className="flex-column" style={{ marginLeft: '20px' }}>
            <Nav.Link as={NavLink} to="/my-wallet/zippy-money/send/transaction-start">Zippy Money</Nav.Link>
            <Nav.Link as={NavLink} to="/my-wallet/status">Status</Nav.Link>
            <Nav.Link as={NavLink} to="/my-wallet/load">Load</Nav.Link>
            <Nav.Link as={NavLink} to="/my-wallet/get">Get</Nav.Link>
            <Nav.Link as={NavLink} to="/my-wallet/funding-source">Funding Source</Nav.Link>
            <Nav.Link as={NavLink} to="/my-wallet/auto-deposit">Auto Deposit</Nav.Link>
          </Nav>
        )}
        <Nav.Link className="nav-link" as={NavLink} to="/bill-payments">
          <i className="zippy-cash-icon zc-bill-payments" />
          Bill Payments
          <i className="dropdown zippy-cash-icon zc-up" />
        </Nav.Link>
        {pathname.startsWith('/bill-payments') && (
          <Nav className="flex-column" style={{ marginLeft: '20px' }}>
            <Nav.Link as={NavLink} to="/bill-payments/set-up-bill-payments">Set Up Bill Payments</Nav.Link>
            <Nav.Link as={NavLink} to="/bill-payments/review-and-cancel-bill-payments">Review and Cancel Bill Payments</Nav.Link>
            <Nav.Link as={NavLink} to="/bill-payments/add-or-edit-billers">Add or Edit Billers</Nav.Link>
            <Nav.Link as={NavLink} to="/bill-payments/biller-details">Biller Details</Nav.Link>
            <Nav.Link as={NavLink} to="/bill-payments/view-ebills">View eBills</Nav.Link>
          </Nav>
        )}
        <Nav.Link className="nav-link" as={NavLink} to="/transfer-funds">
          <i className="zippy-cash-icon zc-transfer-funds" />
          Transfer Funds
          <i className="dropdown zippy-cash-icon zc-up" />
        </Nav.Link>
        {pathname.startsWith('/transfer-funds') && (
          <Nav className="flex-column" style={{ marginLeft: '20px' }}>
            <Nav.Link as={NavLink} to="/transfer-funds/zippy-to-zippy">Zippy to Zippy</Nav.Link>
            <Nav.Link as={NavLink} to="/transfer-funds/eft">EFT</Nav.Link>
            <Nav.Link as={NavLink} to="/transfer-funds/visa-direct">Visa Direct</Nav.Link>
            <Nav.Link as={NavLink} to="/transfer-funds/review-and-cancel-transfers">Review and Cancel Transfers</Nav.Link>
          </Nav>
        )}
        <Nav.Link className="nav-link" as={NavLink} to="/account-security">
          <i className="zippy-cash-icon zc-account-security" />
          Account Security
        </Nav.Link>
        <hr />
        <Nav.Link className="nav-link" as={NavLink} to="/customer-services">
          <i className="zippy-cash-icon zc-customer-services" />
          Customer Services
        </Nav.Link>
        <Nav.Link className="nav-link" as={NavLink} to="/manage-my-alerts">
          <i className="zippy-cash-icon zc-manage-my-alerts" />
          Manage My Alerts
        </Nav.Link>
        <Nav.Link className="nav-link" as={NavLink} to="/contact-us">
          <i className="zippy-cash-icon zc-contact-us" />
          Contact Us
        </Nav.Link>
        <div className="copyright">© 2021 Zippy Cash LLC</div>
      </Nav>
    </div>
  );
}

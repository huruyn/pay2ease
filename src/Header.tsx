import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { loginRequest } from './authConfig';
import { selectUser, unload } from './features/user/userSlice';
import ZippyCashLogo from './assets/img/general/ZippyCash_Logo.png';

export const HeaderPure = ({
  isAuthenticated,
  userFullName,
  isInProgress,
  handleLogin,
  handleLogout,
}: {
  isAuthenticated: boolean,
  userFullName: string,
  isInProgress: boolean,
  handleLogin: () => void,
  handleLogout: () => void
}) => {
  const { i18n, t } = useTranslation();

  return (
    <nav className={`header-layout navbar navbar-expand-lg navbar-light ${!isAuthenticated && 'container'}`}>
      <div className="left-side-header">
        { !isAuthenticated && (
          <Link to="/" className="navbar-brand">
            <img src={ZippyCashLogo} alt="" />
          </Link>
        )}
      </div>
      <div className="content">
        { isAuthenticated && (
          <div className="search-box">
            <i className="zippy-cash-icon zc-search" />
            <Form.Control
              type="input"
              placeholder="Search..."
              onChange={(evt) => evt.preventDefault()}
            />
            <Form.Select
              onChange={(evt) => evt.preventDefault()}
              value="all"
            >
              <option value="all">All</option>
            </Form.Select>
          </div>
        )}
      </div>
      <div className="right-side-header">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse flex-md-column nav-uppercase" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <NavDropdown title={t('header.language')}>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('en-CA')} className="nav-dropdown-item">
                English (Canada)
              </NavDropdown.Item>
              <NavDropdown.Item style={{ display: 'none' }} onClick={() => i18n.changeLanguage('en-US')} className="nav-dropdown-item">
                English (US)
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage('fr-CA')} className="nav-dropdown-item">
                French (Canada)
              </NavDropdown.Item>
              <NavDropdown.Item style={{ display: 'none' }} onClick={() => i18n.changeLanguage('es-US')} className="nav-dropdown-item">
                Spanish (US)
              </NavDropdown.Item>
            </NavDropdown>
            {(isAuthenticated && (
              <NavDropdown title={userFullName || t('header.login')}>
                <NavDropdown.Item onClick={() => handleLogout()} className="nav-dropdown-item">
                  {t('header.logout')}
                </NavDropdown.Item>
              </NavDropdown>
            )) || (
              !isInProgress && (
                <Button onClick={() => handleLogin()} variant="transparent light">
                  {t('header.login')}
                </Button>
              )
            )}
          </ul>
          {!isAuthenticated && (
            <ul className="home-pages-links navbar-nav">
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">{t('header.about')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/personal" className="nav-link" aria-current="page">{t('header.personal')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/business" className="nav-link" aria-current="page">{t('header.business')}</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, instance } = useMsal();
  const { user } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const isInProgress = inProgress === InteractionStatus.Startup
      || inProgress === InteractionStatus.HandleRedirect;
  const getFullName = () => (user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '');
  const handleLogin = () => instance.loginRedirect(loginRequest);
  const handleLogout = () => {
    dispatch(unload());
    instance.logoutRedirect();
  };

  return (
    <HeaderPure
      userFullName={getFullName()}
      isAuthenticated={isAuthenticated}
      isInProgress={isInProgress}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
};

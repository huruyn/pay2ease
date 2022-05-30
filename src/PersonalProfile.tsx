import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Circle_White_01 from './assets/img/background/Circle_White-01.jpg';
import David_Magnus_White from './assets/img/roundicons/profile/David_Magnus_White.jpg';
import profileframe from './assets/img/roundicons/profile/profileframe.png';

export default function PersonalProfile() {
  const { t } = useTranslation();

  return (
    <main>
      <div
        className="bg-light"
        style={{
          backgroundImage: `url(${Circle_White_01})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="spacing" />
        <div className="container">
          <div className="row align-items-center pt-5">
            <div
              className="col-12 col-md-3 formcurve"
              style={{ backgroundColor: '#FF7300' }}
            >
              <div className="row px-lg-4 text-center text-md-start">
                <div className="col-12 mb-2 position-relative">
                  <img
                    id="profilepicture"
                    src={David_Magnus_White}
                    alt=""
                    className="profilephoto rounded-circle position-absolute top-50 start-50 translate-middle"
                  />
                  <img
                    id="profilepicture"
                    src={profileframe}
                    alt=""
                    className="img-fluid position-absolute top-50 start-50 translate-middle "
                  />
                </div>
                <div className="spacing" />
                <div className="col-12 mb-4">
                  <h5 className="fw-bold text-light text-center text-uppercase ">
                    {t('profile.profile_name')}
                  </h5>
                </div>
                <div className="col-6 col-md-12 mb-3 text-center">
                  <Link
                    to="/"
                    className="text-light text-uppercase text-decoration-none link-item"
                  >
                    {t('profile.contact_info')}
                  </Link>
                </div>
                <div className="col-6 col-md-12 mb-3 text-center">
                  <Link
                    to="/"
                    className="text-light text-uppercase text-decoration-none link-item"
                  >
                    {t('profile.account_info')}
                  </Link>
                </div>
                <div className="col-6 col-md-12 mb-3 text-center">
                  <Link
                    to="/"
                    className="text-light text-uppercase text-decoration-none link-item"
                  >
                    {t('profile.language')}
                  </Link>
                </div>
                <div className="col-6 col-md-12 mb-3 text-center">
                  <Link
                    to="/"
                    className="text-light text-uppercase text-decoration-none link-item"
                  >
                    {t('profile.lorem_ipsum')}
                  </Link>
                </div>
                <div className="spacingsmall" />
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="cardbusiness formcurve border-0 p-4">
                <div className="card-body">
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="fname" className="text-light fw-bold">
                          {t('profile.first_name')}
                        </label>
                        <input
                          type="text"
                          id="fname"
                          className="form-control formcurve"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="lname" className="text-light fw-bold">
                          {t('profile.last_name')}
                        </label>
                        <input
                          type="password"
                          id="lname"
                          className="form-control formcurve"
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label htmlFor="Email" className="text-light fw-bold">
                          {t('profile.email')}
                        </label>
                        <input
                          type="email"
                          id="Email"
                          className="form-control formcurve"
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label htmlFor="Address" className="text-light fw-bold">
                          {t('profile.address')}
                        </label>
                        <input
                          type="email"
                          id="Address"
                          className="form-control formcurve"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="city" className="text-light fw-bold">
                          {t('profile.city')}
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="form-control formcurve"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label
                          htmlFor="province"
                          className="text-light fw-bold"
                        >
                          {t('profile.province')}
                        </label>
                        <input
                          type="text"
                          id="province"
                          className="form-control formcurve"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label
                          htmlFor="postalcode"
                          className="text-light fw-bold"
                        >
                          {t('profile.postal_code')}
                        </label>
                        <input
                          type="text"
                          id="postalcode"
                          className="form-control formcurve"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="submit" className="text-light fw-bold">
                          {' '}
                          <input
                            type="submit"
                            id="submit"
                            className="w-100 py-2 btn btn-dark formcurve text-uppercase"
                            style={{
                              fontWeight: 700,
                              backgroundColor: '#5E7472',
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing" />
      </div>
    </main>
  );
}

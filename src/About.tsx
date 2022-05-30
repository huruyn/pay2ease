import { useTranslation } from 'react-i18next';
import AboutUs_Hero from './assets/img/background/AboutUs_Hero.jpg';
import bluestrip from './assets/img/background/bluestrip.jpg';
import Logo_AboutUs from './assets/img/general/Logo_AboutUs.png';
import ZippyCash_Icons_D from './assets/img/roundicons/aboutus/ZippyCash_Icons_D.png';
import ZippyCash_Icons_E from './assets/img/roundicons/aboutus/ZippyCash_Icons_E.png';
import ZippyCash_Icons_F from './assets/img/roundicons/aboutus/ZippyCash_Icons_F.png';
import ZippyCash_Icons_G from './assets/img/roundicons/aboutus/ZippyCash_Icons_G.png';
import Footer from './footer/Footer';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-12 col-md-5 col-lg-4">
                <br />
                <br />
                <h2 className="redsubtitle">{t('about.who_is')}</h2>
                <img src={Logo_AboutUs} alt="zippy.cash?" className="img-fluid" />
                <br />
                <br />
                <p className="content-home" style={{ fontWeight: 600 }}>
                  {t('about.who_is_description_1')}
                </p>
                <br />
                <p className="content-home">
                  {t('about.who_is_description_2')}
                </p>
                <div />
              </div>
              <div className="col-12 col-md-7 col-lg-8" style={{ backgroundImage: `url(${AboutUs_Hero})`, backgroundSize: 'cover' }}>
                <div />
              </div>
            </div>
            <div className="row">
              <div style={{ backgroundImage: `url(${bluestrip})`, backgroundRepeat: 'repeat-x' }}>
                <div className="row mt-4">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="mb-4 aboutus_icon">
                      <img
                        src={ZippyCash_Icons_D}
                        alt="styled icon of a man holding a star"
                        className="img-fluid centerimage"
                        data-aos="flip-left"
                      />
                    </div>
                    <div>
                      <h4 className="redtitle text-center">{t('about.the_team')}</h4>
                      <p className="content-home">{t('about.the_team_description')}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="mb-4 aboutus_icon">
                      <img
                        src={ZippyCash_Icons_E}
                        alt="styled icon of a man holding a light bulb"
                        className="img-fluid  centerimage"
                        data-aos="flip-left"
                        data-aos-delay="200"
                      />
                    </div>
                    <div>
                      <h4 className="redtitle text-center">{t('about.our_mission')}</h4>
                      <p className="content-home">{t('about.our_mission_description')}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="mb-4 aboutus_icon">
                      <img
                        src={ZippyCash_Icons_F}
                        alt="styled icon of a woman holding a heart"
                        className="img-fluid  centerimage"
                        data-aos="flip-left"
                        data-aos-delay="400"
                      />
                    </div>
                    <div>
                      <h4 className="redtitle text-center">{t('about.our_values')}</h4>
                      <p className="content-home">{t('about.our_values_description')}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="mb-4 aboutus_icon">
                      <img
                        src={ZippyCash_Icons_G}
                        alt="styled icon of a person holding a mechnical gear"
                        className="img-fluid  centerimage"
                        data-aos="flip-left"
                        data-aos-delay="600"
                      />
                    </div>
                    <div>
                      <h4 className="redtitle text-center">{t('about.our_partner')}</h4>
                      <p className="content-home">{t('about.our_partner_description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

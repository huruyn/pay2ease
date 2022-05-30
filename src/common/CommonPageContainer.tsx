import PropTypes from 'prop-types';
import CommonHeader from './CommonHeader';
import Footer from '../footer/Footer';

function CommonPageContainer({
  title,
  children,
}: {
  title: string;
  children: any
}) {
  return (
    <>
      <CommonHeader title={title} />
      <div className="content-wrapper">
        {children}
      </div>
      <Footer />
    </>
  );
}

CommonPageContainer.propTypes = {
  title: PropTypes.string,
};

CommonPageContainer.defaultProps = {
  title: '',
};

export default CommonPageContainer;

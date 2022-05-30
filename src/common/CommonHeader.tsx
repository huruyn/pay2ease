import PropTypes from 'prop-types';

function CommonHeader(
  {
    title,
  }: { title: string; },
) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3>{title}</h3>
    </div>
  );
}

CommonHeader.propTypes = {
  title: PropTypes.string,
};

CommonHeader.defaultProps = {
  title: '',
};

export default CommonHeader;

import PropTypes from 'prop-types';

function PanelHeader({
  title,
  sub_title,
  border_color,
}: {
  title: string;
  sub_title: string;
  border_color: string;
}) {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        borderTop: `3px solid ${border_color}`,
        borderBottom: '2px solid grey',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#F2F3F2',
        paddingLeft: 5,
        marginTop: 10,
      }}
    >
      <span style={{ fontWeight: 500 }}>
        {title}
        {' '}
        |
        {' '}
      </span>
      <a
        href="/"
        className="text-decoration-none"
        style={{ marginLeft: 5, fontSize: 14, color: 'rgb(220, 53, 69)' }}
      >
        {sub_title}
      </a>
    </div>
  );
}

PanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  border_color: PropTypes.string,
  sub_title: PropTypes.string,
};

PanelHeader.defaultProps = {
  border_color: 'green',
  sub_title: '',
};

export default PanelHeader;

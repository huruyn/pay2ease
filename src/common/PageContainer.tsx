import PropTypes from 'prop-types';

function PageContainer({
  className,
  title,
  subTitle,
  backdropImage,
  children,
}: {
  className?: string;
  title?: string;
  subTitle?: string;
  backdropImage?: string;
  children: any;
}) {
  return (
    <>
      <div className={className}>
        <div className="zippy-cash-container-wrap">
          <div className={`backdrop ${backdropImage || ''}`} />
          <div className="zippy-cash-container">
            {title && subTitle
              && (
                <div className="zippy-cash-container-header">
                  <h1 className="title">{title}</h1>
                  <h2 className="catch">{subTitle}</h2>
                </div>
              )}
            <div className="zippy-cash-container-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PageContainer.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  backdropImage: PropTypes.string,
};

PageContainer.defaultProps = {
  className: '',
  title: '',
  subTitle: '',
  backdropImage: '',
};

export default PageContainer;

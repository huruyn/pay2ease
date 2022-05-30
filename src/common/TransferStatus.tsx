import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TransferStatus({
  className,
  title,
  subTitle,
  backIcon,
  children,
}: {
  className?: string;
  title?: string;
  subTitle?: string;
  backIcon?: string;
  children: any;
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className={className}>
        <div className="zippy-cash-container-t">
          <div className="backdrop" />
          <div className="zippy-cash-container">
            {title && subTitle && (
              <div>
                <div className="transaction-back-icon">
                  {backIcon && (
                    <Button onClick={() => navigate(backIcon)}>
                      <i className="zippy-cash-icon zc-back-icon" />
                    </Button>
                  )}
                </div>
                <div className="zippy-cash-container-header">
                  <div className="title">{title}</div>
                  <div className="catch">{subTitle}</div>
                </div>
              </div>
            )}
            <div className="zippy-cash-container-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

TransferStatus.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  backIcon: PropTypes.string,
};

TransferStatus.defaultProps = {
  className: '',
  title: '',
  subTitle: '',
  backIcon: '',
};

export default TransferStatus;

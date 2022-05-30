import PropTypes from 'prop-types';

export interface Crumb {
  label: string;
  link?: string;
}

function Breadcrumbs({ crumbs }: {
  crumbs: Array<Crumb> | undefined;
}) {
  return (
    <div className="breadcrumbs noselect">
      {crumbs?.length && crumbs.map((crumb: Crumb) => (
        !crumb.link
          ? <span key={`${crumb.label}`}>{crumb.label}</span>
          : <a key={`${crumb.label}`} href={crumb.link}>{crumb.label}</a>
      ))}
    </div>
  );
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.any || undefined,
};

Breadcrumbs.defaultProps = {
  crumbs: {},
};

export default Breadcrumbs;

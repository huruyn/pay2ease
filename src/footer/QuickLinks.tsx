export default function QuickLinks() {
  return (
    <div className="quick-links container">
      <div className="row">
        <h3 className="col-sm-12">Quick Links</h3>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <ul>
            <li>
              <a href="/" onClick={(e) => e.preventDefault()} className="text-decoration-none">Home</a>
            </li>
            <li>
              Please Review Our Legal Stuff by visiting our
              {' '}
              <a href="/legal" onClick={(e) => e.preventDefault()} className="text-decoration-none">Privacy Policy | TOU | EULA | CardHolder T&amp;C Pages</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-2">
          8465 W Sahara Ave.
          Las Vegas, NEVADA
          <ul>
            <li>
              <a href="tel:+17026231876">1.702.623.1876</a>
            </li>
            <li>
              <a href="mailto:contact@zippy.cash">contact@zippy.cash</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

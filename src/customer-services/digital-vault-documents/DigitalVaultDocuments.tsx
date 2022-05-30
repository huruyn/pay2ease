export default function DigitalVaultDocuments() {
  return (
    <div className="page-content">
      <h4>DIGITAL VAULT</h4>
      <h5 className="pb-2 pt-3 mt-2" style={{ borderBottom: '1px solid grey' }}>
        All files
      </h5>
      <div className="d-flex flex-column align-items-center">
        <div
          className="mt-4"
          style={{
            width: 60,
            height: 65,
            border: '1px dotted grey',
            textAlign: 'center',
            marginRight: 10,
          }}
        >
          P
        </div>
        <p className="mt-2" style={{ textAlign: 'center', maxWidth: 400 }}>
          You have no documents available for viewing. Your files will display
          when you open a new account and consent to electronic document
          delivery.
        </p>
        <p className="mt-2">
          {'{'}
          Result #5367
          {'}'}
        </p>
      </div>
    </div>
  );
}

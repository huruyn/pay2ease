import { Form } from 'react-bootstrap';

export default function AlertElement({ text }: { text: string }) {
  return (
    <div style={{ margin: '20px 5px' }}>
      <div className="d-flex">
        <Form.Check type="checkbox" label={text} />
        <i />
      </div>
      <hr
        style={{
          height: '2px',
          color: 'C4C4C4',
        }}
      />
    </div>
  );
}

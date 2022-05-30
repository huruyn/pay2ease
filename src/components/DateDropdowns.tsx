import { DateTime } from 'luxon';
import { Col, Form, Row } from 'react-bootstrap';

const range = (start: number, length: number) => Array.from({ length }, (v, key) => start + key);

const years = (): number[] => {
  const currentYear = DateTime.now().year;
  return range(currentYear, 5);
};
const months = (): number[] => range(1, 12);

const days = (): number[] => range(1, 31);

export default function DatePicker() {
  return (
    <Col xs={9}>
      <Row>
        <Col xs="auto">
          <Form.Select>
            {months().map((month: number) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Form.Select>
            {days().map((day: number) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Form.Select>
            {years().map((year: number) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Col>
  );
}

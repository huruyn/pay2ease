import { Form } from 'react-bootstrap';

export default function MonthSelectComponent({
  onChange,
  prefix = 'option',
  currentDate,
}: any) {
  const getDateAry = () => {
    const result: any = [];
    let prevYearValue = '';
    for (let i = 0; i < 12; i += 1) {
      if (currentDate) {
        const calculatedDate = currentDate.minus({ months: i });
        const dateStr = calculatedDate.toFormat('MMMM yyyy');
        const yearValue = calculatedDate.toFormat('yyyy');
        if (prevYearValue !== yearValue) {
          result.push({
            label: yearValue,
            items: [],
          });
          prevYearValue = yearValue;
        }
        const item = {
          value: dateStr,
        };
        result[result.length - 1].items.push(item);
      }
    }
    return result;
  };

  return (
    <Form.Select style={{ maxWidth: 300 }} onChange={onChange} className="month-select-comp">
      {getDateAry().map((item: any) => (
        <optgroup label={`${item.label}`} key={`${prefix}_${item.label}`}>
          {item.items.map((dateValue: any) => (
            <option value={dateValue.value} key={`${prefix}_${dateValue.value}`}>
              {dateValue.value}
            </option>
          ))}
        </optgroup>
      ))}
    </Form.Select>
  );
}

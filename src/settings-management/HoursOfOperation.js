import './HoursOfOperation.css';

const dow = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function HoursOfOperation() {
  const days = dow.map(day => <Day title={day} />);
  return (
    <div className='settings-hours'>
      {days}
    </div>
  );
}

function Day({title}) {
  return (
    <div className='day'>
      <label>{title}</label>
    </div>
  );
}

import { DateTime } from './luxon.js';

const TimeAndDate = () => {
  const now = DateTime.now();
  const dt = now.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
  return dt;
};

export default TimeAndDate;
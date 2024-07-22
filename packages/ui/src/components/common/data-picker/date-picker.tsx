import { DatePicker as ANTDatePicker } from 'antd';
import type { Moment } from 'moment';
// import momentGenerateConfig from 'rc-picker/lib/generate/moment';

const DatePicker = ANTDatePicker.generatePicker<Moment>(undefined);

export default DatePicker;

export const defaultDateTimeFormat = 'YYYY-MM-DD HH:mm';
export const defaultDateFormat = 'YYYY-MM-DD';
export const defaultTimePicker = 'HH:mm'
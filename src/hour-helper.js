const HOUR_WIDTH = 300;
const MINUTES_IN_HOUR = 60;
const WIDTH_OF_ONE_MINUTE = HOUR_WIDTH / MINUTES_IN_HOUR;
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function getScrollPositionForDate(date) {
  return (
    date.getHours() * HOUR_WIDTH +
    (HOUR_WIDTH * date.getMinutes()) / MINUTES_IN_HOUR
  );
}

function calculateScheduleStartPosition(schedule) {
  const startDate = new Date(schedule.start);
  return (
    (startDate.getHours() * MINUTES_IN_HOUR + startDate.getMinutes()) *
      WIDTH_OF_ONE_MINUTE +
    30 * WIDTH_OF_ONE_MINUTE
  );
}

function calculateScheduleWidth(schedule) {
  const startDate = new Date(schedule.start);
  const endDate = new Date(schedule.end);

  let width =
    endDate.getHours() * MINUTES_IN_HOUR +
    endDate.getMinutes() -
    (startDate.getHours() * MINUTES_IN_HOUR + startDate.getMinutes());
  return Math.abs(width * WIDTH_OF_ONE_MINUTE);
}

function formatDateTitle(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  return `${startDate.getDate()} ${
    MONTH_NAMES[startDate.getMonth()]
  }: ${formatTime(startDate)} - ${formatTime(endDate)}`;
}

function formatTime(date) {
  return `${('0' + date.getHours()).slice(-2)}:${(
    '0' + date.getMinutes()
  ).slice(-2)}`;
}

export {
  getScrollPositionForDate,
  calculateScheduleStartPosition,
  calculateScheduleWidth,
  formatDateTitle
};

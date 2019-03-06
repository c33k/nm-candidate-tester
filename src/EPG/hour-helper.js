const HOUR_WIDTH = 300;
const MINUTES_IN_HOUR = 60;
const WIDTH_OF_ONE_MINUTE = HOUR_WIDTH / MINUTES_IN_HOUR;

function getScrollPositionForDate(date) {
  return (
    date.getHours() * HOUR_WIDTH +
    (HOUR_WIDTH * date.getMinutes()) / MINUTES_IN_HOUR
  );
}

function calculateScheduleStartPosition(schedule) {
  const startDate = new Date(schedule.start);
  return (
    (startDate.getHours() * MINUTES_IN_HOUR + startDate.getMinutes()) * WIDTH_OF_ONE_MINUTE + (30*WIDTH_OF_ONE_MINUTE)
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

export {
  getScrollPositionForDate,
  calculateScheduleStartPosition,
  calculateScheduleWidth
};

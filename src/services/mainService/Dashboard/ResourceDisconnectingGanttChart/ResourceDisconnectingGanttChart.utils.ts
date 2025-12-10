import { MainDashboardResourceDisconnectingModel } from 'api/types';
import dayjs from 'api/dayjs';
import _ from 'lodash';
import { round } from 'utils/round';

export function prepareDisconnectionsData(
  data: MainDashboardResourceDisconnectingModel[],
  currentDate: dayjs.Dayjs,
  periodDate: dayjs.Dayjs,
) {
  const disconnectionsWithPeriods = data.map((item) => {
    return {
      ...item,
      ...getDisconnectionPeriodData(item, currentDate, periodDate),
    };
  });

  const grouped = _.groupBy(
    disconnectionsWithPeriods,
    (item) => item.resourceType,
  );

  return grouped;
}

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

/**
 * Возвращает относительные координаты (в %) начала и конца периода отключения
 * относительно отображаемого диапазона (от currentDate до periodDate)
 */
function getDisconnectionPeriodData(
  item: MainDashboardResourceDisconnectingModel,
  currentDate: dayjs.Dayjs,
  periodDate: dayjs.Dayjs,
) {
  const startDate = dayjs(item.startDate);
  const endDate = dayjs(item.endDate);

  // Общая длительность отображаемого периода (например, месяц)
  const totalWidth = periodDate.diff(currentDate);

  if (totalWidth <= 0) {
    return { xStart: 0, xEnd: 0 }; // защита от деления на 0
  }

  // Проценты относительно всего диапазона
  const xStart = round((startDate.diff(currentDate) / totalWidth) * 100, 2);
  const xEnd = round((endDate.diff(currentDate) / totalWidth) * 100, 2);

  // Ограничиваем от 0 до 100, чтобы не выходить за границы шкалы
  return {
    xStart: clamp(xStart, 0, 100),
    xEnd: clamp(xEnd, 0, 100),
  };
}

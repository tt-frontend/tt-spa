import { MainDashboardResourceDisconnectingModel } from 'api/types';
import dayjs from 'dayjs';
import _ from 'lodash';

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

function getDisconnectionPeriodData(
  item: MainDashboardResourceDisconnectingModel,
  currentDate: dayjs.Dayjs,
  periodDate: dayjs.Dayjs,
) {
  const startDate = dayjs(item.startDate);
  const endDate = dayjs(item.endDate);
  const periodWidth = periodDate.diff(startDate);

  const xStart = (startDate.diff(currentDate) / periodWidth) * 100;
  const xEnd = (endDate.diff(currentDate) / periodWidth) * 100;

  return {
    xStart,
    xEnd,
  };
}

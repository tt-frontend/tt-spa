import dayjs from 'api/dayjs';
import {
  AddressOption,
  ArchiveType,
  DatePeriod,
} from './ConsolidatedReportForm.types';
import { filterAddressBySimilarity } from 'services/tasks/addTaskFromDispatcherService/view/AddTaskModal/AddTaskForm/AddTaskForm.utils';
import { PreparedAddress } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.types';

export const getDatePeriod = (
  archiveType: ArchiveType,
  period: DatePeriod,
): { From: string; To: string } | null => {
  if (archiveType === ArchiveType.StartOfMonth) {
    period = [dayjs().startOf('month'), dayjs()];
  }

  if (archiveType === ArchiveType.PreviousMonth) {
    period = [
      dayjs().subtract(1, 'months').startOf('month'),
      dayjs().subtract(1, 'months').endOf('month'),
    ];
  }

  if (!period[0] || !period[1]) return null;

  const From = period[0].startOf('day').format('YYYY-MM-DDTHH:mm:ss');
  const To = period[1].endOf('day').format('YYYY-MM-DDTHH:mm:ss');

  return { From, To };
};

export function autocompleteAddress(
  street: string | null,
  streets: PreparedAddress[],
): AddressOption[] {
  if (!street) {
    return [];
  }

  return filterAddressBySimilarity(street, streets).map((elem) => ({
    value: elem.address,
    id: elem.id,
    key: elem.id,
  }));
}

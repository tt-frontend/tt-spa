import {
  BuildingListResponse,
  HousingStockResponse,
  NonResidentialBuildingResponse,
} from 'api/types';
import { GetConsolidatedReport } from '../../consolidatedReportService.types';
import dayjs from 'api/dayjs';
import { PreparedAddress } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.types';

export type ConsolidatedReportFormProps = {
  formId: string;
  building?:
    | HousingStockResponse
    | NonResidentialBuildingResponse
    | BuildingListResponse;
  handleSubmit: (payload: GetConsolidatedReport) => void;
  preparedForOptionsAddresses: PreparedAddress[];
  existingCities: string[] | null;
  handleChangeCity: (payload: string) => void;
};

export enum ArchiveType {
  StartOfMonth = 'StartOfMonth',
  PreviousMonth = 'PreviousMonth',
  AnyPeriod = 'AnyPeriod',
}

export type DatePeriod = [null | dayjs.Dayjs, null | dayjs.Dayjs];

export type AddressOption = {
  value: string;
  id: string | number;
  key: string;
};

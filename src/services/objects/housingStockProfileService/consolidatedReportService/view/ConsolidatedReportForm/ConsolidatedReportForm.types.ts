import {
  BuildingListResponse,
  HousingStockResponse,
  NonResidentialBuildingResponse,
} from 'api/types';
import {
  GetBuildingPayload,
  GetConsolidatedReport,
} from '../../consolidatedReportService.types';
import dayjs from 'api/dayjs';

export type ConsolidatedReportFormProps = {
  formId: string;
  building?:
    | HousingStockResponse
    | NonResidentialBuildingResponse
    | BuildingListResponse;
  handleSubmit: (payload: GetConsolidatedReport) => void;
  searchedBuilding: BuildingListResponse | null;
  handleSearcheBuilding: (payload: GetBuildingPayload) => void;
  resetBuilding: () => void;
};

export enum ArchiveType {
  StartOfMonth = 'StartOfMonth',
  PreviousMonth = 'PreviousMonth',
  AnyPeriod = 'AnyPeriod',
}

export type DatePeriod = [null | dayjs.Dayjs, null | dayjs.Dayjs];

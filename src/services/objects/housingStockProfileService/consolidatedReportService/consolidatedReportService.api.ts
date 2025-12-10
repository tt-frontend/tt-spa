import queryString from 'query-string';
import { axios } from 'api/axios';
import {
  BuildingListResponsePagedList,
  CalculatorIntoHousingStockResponse,
} from 'api/types';
import {
  GetBuildingPayload,
  GetConsolidatedReport,
} from './consolidatedReportService.types';
import { downloadURI } from 'utils/downloadByURL';

export const getConsolidatedReport = async ({
  Name,
  BuildingId,
  ...params
}: GetConsolidatedReport) => {
  const calculators: CalculatorIntoHousingStockResponse[] = await axios.get(
    `Buildings/${BuildingId}/Calculators`,
  );

  const calculatorsIds = calculators.map((calculator) => calculator.id);

  const res: string = await axios.get('Reports/ConsolidatedReport', {
    params: { ...params, CalculatorsId: calculatorsIds },
    responseType: 'blob',
    paramsSerializer: (params) => {
      return queryString.stringify(params);
    },
  });

  const url = window.URL.createObjectURL(new Blob([res]));

  downloadURI(url, Name);
};

export const getBuilding = (
  payload: GetBuildingPayload,
): Promise<BuildingListResponsePagedList> => {
  return axios.get('Buildings', { params: payload });
};

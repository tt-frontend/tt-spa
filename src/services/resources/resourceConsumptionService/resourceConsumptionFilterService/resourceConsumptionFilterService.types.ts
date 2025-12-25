import { EResourceType } from 'api/types';

export type ConsumptionDataFilter = {
  BuildingIds?: number[];
  AdditionalHousingStockIds?: number[];
  From?: string;
  To?: string;
};

export type FetchHousingMeteringDevicesPayload = {
  Resource: EResourceType;
};

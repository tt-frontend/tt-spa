import { CalculatorIntoHousingStockResponse, EResourceType } from 'api/types';

export type LightCalculatorWithResource = CalculatorIntoHousingStockResponse & {
  resource: EResourceType[];
};

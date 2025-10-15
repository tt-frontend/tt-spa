import { EOrderByRule } from 'api/types';

export type ExistingMoDistrictsQueryParams = {
  District?: string;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  OrderBy?: EOrderByRule;
};

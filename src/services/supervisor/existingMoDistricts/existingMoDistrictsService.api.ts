import { createQuery } from '@farfetched/core';
import { axios } from 'api/axios';
import { ExistingMoDistrictsQueryParams } from './existingMoDistrictsService.types';
import { IExistingMoDistrictPagedList } from 'api/extend.types';

export const existingMoDistrictsQuery = createQuery<
  [ExistingMoDistrictsQueryParams],
  IExistingMoDistrictPagedList
>({
  handler: (params): Promise<IExistingMoDistrictPagedList> =>
    axios.get('Buildings/ExistingMoDistricts', { params }),
});

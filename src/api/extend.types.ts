export interface PagedList<T> {
  /** @format int32 */
  totalItems: number;
  /** @format int32 */
  pageNumber: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  /** @format int32 */
  nextPageNumber: number;
  /** @format int32 */
  previousPageNumber: number;
  items: T[] | null;
}

export interface IExistingMoDistrict {
  name: string;
  type: string;
  subjects: IExistingMoDistrict[];
}

export type IExistingMoDistrictPagedList = PagedList<IExistingMoDistrict>;

export type ManePayload = {
  Date?: string | null;
  City?: string | null;
  District?: string | null;
  BuildingIds?: number[] | null;
  /** @format int32 */
  ManagementFirmId?: number | null;
  Address?: string | null;
};

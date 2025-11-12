import { EResourceType } from 'api/types';

export const resourceNamesLookup: { [key: string]: string } = {
  [EResourceType.ColdWaterSupply]: 'Холодная вода',
  [EResourceType.HotWaterSupply]: 'Горячая вода',
  [EResourceType.Electricity]: 'Электричество',
  [EResourceType.Heat]: 'Тепло',
};

export const resourceColorLookup: { [key in EResourceType]: string } = {
  [EResourceType.HotWaterSupply]: '#ff8c68',
  [EResourceType.ColdWaterSupply]: '#79afff',
  [EResourceType.Electricity]: '#e2b104',
  [EResourceType.Heat]: '#9254de',
};

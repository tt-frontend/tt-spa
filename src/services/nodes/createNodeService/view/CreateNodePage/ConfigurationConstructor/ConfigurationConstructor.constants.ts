import { EPipeNodeConfig } from 'api/types';
import { SvgComponentProps } from './ConfigurationConstructor.types';
import { HeatWithRecharge } from './SvgComponents/HeatWithRecharge';
import { ColdWaterNoDevice } from './SvgComponents/ColdWaterNoDevice';
import { ColdWaterSupply } from './SvgComponents/ColdWaterSupply';
import { HeatNoHousingMeteringDevice } from './SvgComponents/HeatNoHousingMeteringDevice';
import { HeatNoRecharge } from './SvgComponents/HeatNoRecharge';
import { HotWaterNoDevice } from './SvgComponents/HotWaterNoDevice';
import { HotWaterSupplyNoBackflow } from './SvgComponents/HotWaterSupplyNoBackflow';
import { HotWaterSupplyWithBackflow } from './SvgComponents/HotWaterSupplyWithBackflow';

export const svgComponents: Record<
  EPipeNodeConfig,
  React.FC<SvgComponentProps>
> = {
  ColdWaterNoDevice: ColdWaterNoDevice,
  ColdWaterSupply: ColdWaterSupply,
  HeatNoHousingMeteringDevice: HeatNoHousingMeteringDevice,
  HeatNoRecharge: HeatNoRecharge,
  HeatWithRecharge: HeatWithRecharge,
  HotWaterNoDevice: HotWaterNoDevice,
  HotWaterSupplyNoBackflow: HotWaterSupplyNoBackflow,
  HotWaterSupplyWithBackflow: HotWaterSupplyWithBackflow,
};

import { ManagingFirmTaskType } from 'api/types';
import { ReactNode } from 'react';
import {
  CalculatorIcon,
  IndividualDeviceSmallIcon,
  MeasurementSmallIcon,
  NoConnectionIcon,
} from 'ui-kit/icons';
import {
  CalculatorIconSC,
  IndividualDeviceSmallIconSC,
  MeasurementSmallIconSC,
  NoConnectionIconSC,
} from './MalfunctionIcon.styled';

export const MalfunctionIcons: { [key in ManagingFirmTaskType]: ReactNode } = {
  [ManagingFirmTaskType.CalculatorLackOfConnection]: <NoConnectionIcon />,
  [ManagingFirmTaskType.CalculatorMalfunction]: <CalculatorIcon />,
  [ManagingFirmTaskType.CalculatorMalfunctionNonCommercial]: <CalculatorIcon />,
  [ManagingFirmTaskType.CurrentApplication]: <CalculatorIcon />,
  [ManagingFirmTaskType.CurrentApplicationUnassigned]: <CalculatorIcon />,
  [ManagingFirmTaskType.EmergencyApplication]: <CalculatorIcon />,
  [ManagingFirmTaskType.EmergencyApplicationUnassigned]: <CalculatorIcon />,
  [ManagingFirmTaskType.HousingDeviceMalfunction]: <CalculatorIcon />,
  [ManagingFirmTaskType.HousingDeviceMalfunctionNonCommercial]: (
    <CalculatorIcon />
  ),
  [ManagingFirmTaskType.IndividualDeviceCheck]: <IndividualDeviceSmallIcon />,
  [ManagingFirmTaskType.IndividualDeviceCheckNoReadings]: (
    <IndividualDeviceSmallIcon />
  ),
  [ManagingFirmTaskType.IndividualDeviceReadingsCheck]: (
    <IndividualDeviceSmallIcon />
  ),
  [ManagingFirmTaskType.MeasurementErrorCommercial]: <MeasurementSmallIcon />,
  [ManagingFirmTaskType.MeasurementErrorNonCommercial]: (
    <MeasurementSmallIcon />
  ),
  [ManagingFirmTaskType.PipeRupture]: <CalculatorIcon />,
  [ManagingFirmTaskType.ResourceDisconnecting]: <CalculatorIcon />,
  [ManagingFirmTaskType.RiserNoReadings]: <CalculatorIcon />,
  [ManagingFirmTaskType.TemperatureNormativeDeviation]: <CalculatorIcon />,
  [ManagingFirmTaskType.HeatSupplyQualityCheck]: <CalculatorIcon />,
};

export const MalfunctionWhiteIcons: {
  [key in ManagingFirmTaskType]: ReactNode;
} = {
  [ManagingFirmTaskType.CalculatorLackOfConnection]: <NoConnectionIconSC />,
  [ManagingFirmTaskType.CalculatorMalfunction]: <CalculatorIconSC />,
  [ManagingFirmTaskType.CalculatorMalfunctionNonCommercial]: (
    <CalculatorIconSC />
  ),
  [ManagingFirmTaskType.CurrentApplication]: <CalculatorIconSC />,
  [ManagingFirmTaskType.CurrentApplicationUnassigned]: <CalculatorIconSC />,
  [ManagingFirmTaskType.EmergencyApplication]: <CalculatorIconSC />,
  [ManagingFirmTaskType.EmergencyApplicationUnassigned]: <CalculatorIconSC />,
  [ManagingFirmTaskType.HousingDeviceMalfunction]: <CalculatorIconSC />,
  [ManagingFirmTaskType.HousingDeviceMalfunctionNonCommercial]: (
    <CalculatorIconSC />
  ),
  [ManagingFirmTaskType.IndividualDeviceCheck]: <IndividualDeviceSmallIconSC />,
  [ManagingFirmTaskType.IndividualDeviceCheckNoReadings]: (
    <IndividualDeviceSmallIconSC />
  ),
  [ManagingFirmTaskType.IndividualDeviceReadingsCheck]: (
    <IndividualDeviceSmallIconSC />
  ),
  [ManagingFirmTaskType.MeasurementErrorCommercial]: <MeasurementSmallIconSC />,
  [ManagingFirmTaskType.MeasurementErrorNonCommercial]: (
    <MeasurementSmallIconSC />
  ),
  [ManagingFirmTaskType.PipeRupture]: <CalculatorIconSC />,
  [ManagingFirmTaskType.ResourceDisconnecting]: <CalculatorIconSC />,
  [ManagingFirmTaskType.RiserNoReadings]: <CalculatorIconSC />,
  [ManagingFirmTaskType.TemperatureNormativeDeviation]: <CalculatorIconSC />,
  [ManagingFirmTaskType.HeatSupplyQualityCheck]: <CalculatorIconSC />,
};

export const ManageingFirmTaskDescription: {
  [key in ManagingFirmTaskType]: string;
} = {
  [ManagingFirmTaskType.CalculatorLackOfConnection]:
    'Отсутствие подключения к прибору',
  [ManagingFirmTaskType.CalculatorMalfunction]: 'Неполадки с вычислителем',
  [ManagingFirmTaskType.CalculatorMalfunctionNonCommercial]:
    'Неполадки с вычислителем (некоммерческий)',
  [ManagingFirmTaskType.CurrentApplication]: 'Текущая заявка',
  [ManagingFirmTaskType.CurrentApplicationUnassigned]:
    'Текущая заявка (не назначена)',
  [ManagingFirmTaskType.EmergencyApplication]: 'Аварийная заявка',
  [ManagingFirmTaskType.EmergencyApplicationUnassigned]:
    'Аварийная заявка (не назначена)',
  [ManagingFirmTaskType.HousingDeviceMalfunction]: 'Неполадки с ОДПУ',
  [ManagingFirmTaskType.HousingDeviceMalfunctionNonCommercial]:
    'Неполадки с ОДПУ (некоммерческий)',
  [ManagingFirmTaskType.IndividualDeviceCheck]:
    'Проверка индивидуального прибора',
  [ManagingFirmTaskType.IndividualDeviceCheckNoReadings]:
    'Проверка индивидуального прибора (нет показаний)',
  [ManagingFirmTaskType.IndividualDeviceReadingsCheck]:
    'Проверка показаний индивидуального прибора',
  [ManagingFirmTaskType.MeasurementErrorCommercial]:
    'Превышение погрешности измерения',
  [ManagingFirmTaskType.MeasurementErrorNonCommercial]:
    'Превышение погрешности измерения (некоммерческий)',
  [ManagingFirmTaskType.PipeRupture]: 'Прорыв трубы',
  [ManagingFirmTaskType.ResourceDisconnecting]: 'Отключение ресурса',
  [ManagingFirmTaskType.RiserNoReadings]: 'Отсутствуют показания по стояку',
  [ManagingFirmTaskType.TemperatureNormativeDeviation]:
    'Отклонение температуры от нормы',
  [ManagingFirmTaskType.HeatSupplyQualityCheck]:
    'Проверка качества теплоснабжения',
};

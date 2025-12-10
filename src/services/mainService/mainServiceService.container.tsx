import { useUnit } from 'effector-react';
import { mainServiceService } from './mainServiceService.models';
import { Filter } from './Filter';
import { PageHeader } from 'ui-kit/shared/PageHeader';
import { Dashboard } from './Dashboard';
import {
  dashboardChartQuery,
  dashboardOrganizationsQuery,
  existingMoDistrictsQuery,
  fetchHousingMeteringDevicesQuery,
} from './mainServiceService.api';
import { currentOrganizationService } from 'services/currentOrganizationService';
import { useMemo } from 'react';
import { ConsolidatedReportContainer } from 'services/objects/housingStockProfileService/consolidatedReportService';

const {
  inputs,
  outputs,
  gates: { PageGate },
} = mainServiceService;

export const MainServiceContainer = () => {
  const {
    filter,
    setFilter,
    resetFilter,
    data,
    isLoading,
    selectedResource,
    selectedResourceForColor,
    setResource,
    existingMoDistricts,
    organizations,
    chartData,
    isChartLoading,
    treeData,
    selectHouseManagememt,
    selectCity,
    currentManagingFirm,
    housingMeteringDevices,
    isHousingMeteringDevicesLoading,
  } = useUnit({
    filter: outputs.$filter,
    setFilter: inputs.setFilter,
    resetFilter: inputs.resetFilter,
    data: outputs.$mainData,
    isLoading: outputs.$isLoading,
    selectedResource: outputs.$selectedResource,
    selectedResourceForColor: outputs.$selectedResourceForColor,
    setResource: inputs.setResource,
    existingMoDistricts: existingMoDistrictsQuery.$data,
    organizations: dashboardOrganizationsQuery.$data,
    chartData: dashboardChartQuery.$data,
    isChartLoading: dashboardChartQuery.$pending,
    treeData: outputs.$treeData,
    selectHouseManagememt: inputs.selectHouseManagememt,
    selectCity: inputs.selectCity,
    currentManagingFirm:
      currentOrganizationService.outputs.$currentManagingFirm,
    housingMeteringDevices: fetchHousingMeteringDevicesQuery.$data,
    isHousingMeteringDevicesLoading: fetchHousingMeteringDevicesQuery.$pending,
  });

  const isHousingMeteringDevices = useMemo(
    () => Boolean(housingMeteringDevices?.totalItems),
    [housingMeteringDevices],
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <PageHeader title={currentManagingFirm?.name} />
      <PageGate />

      <ConsolidatedReportContainer />

      <Filter
        filter={filter}
        setFilter={setFilter}
        resetFilter={resetFilter}
        existingMoDistricts={existingMoDistricts}
        organizations={organizations}
        treeData={treeData}
        selectHouseManagememt={selectHouseManagememt}
        selectCity={selectCity}
      />

      <Dashboard
        isLoading={isLoading}
        isChartLoading={isChartLoading}
        data={data}
        selectedResource={selectedResource}
        selectedResourceForColor={selectedResourceForColor}
        setResource={setResource}
        chartData={chartData}
        isHousingMeteringDevices={isHousingMeteringDevices}
        isHousingMeteringDevicesLoading={isHousingMeteringDevicesLoading}
      />
    </div>
  );
};

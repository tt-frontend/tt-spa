import { useUnit } from 'effector-react';
import { mainServiceService } from './mainServiceService.models';
import { Filter } from './Filter';
import { PageHeader } from 'ui-kit/shared/PageHeader';
import { Dashboard } from './Dashboard';
import {
  dashboardChartQuery,
  dashboardOrganizationsQuery,
  existingMoDistrictsQuery,
} from './mainServiceService.api';

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
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <PageHeader title="УК «Лесные озёра»" />
      <PageGate />
      <Filter
        filter={filter}
        setFilter={setFilter}
        resetFilter={resetFilter}
        existingMoDistricts={existingMoDistricts}
        organizations={organizations}
      />
      <Dashboard
        isLoading={isLoading}
        isChartLoading={isChartLoading}
        data={data}
        selectedResource={selectedResource}
        selectedResourceForColor={selectedResourceForColor}
        setResource={setResource}
        chartData={chartData}
      />
    </div>
  );
};

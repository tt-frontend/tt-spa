import { useUnit } from 'effector-react';
import { CurrentAnalyticsPage } from './CurrentAnalyticsPage';
import {
  dashboardAverageTimeQuery,
  dashboardMalfunctionsQuery,
  dashboardOrganizationsQuery,
  dashboardPiperuptersQuery,
  dashboardResourceDisconnectionQuery,
  dashboardServiceQualityQuery,
  dashboardSummaryQuery,
} from './currentAnalyticsService.api';
import { currentAnalyticsService } from './currentAnalyticsService.models';
import { getItemArray } from './currentAnalyticsService.utils';
import { addressSearchService } from 'services/addressSearchService/addressSearchService.models';
import { TaskTypesGate } from 'services/tasks/taskTypesService/taskTypesService.model';

const {
  inputs,
  outputs,
  gates: { CurrentAnalyticsGate },
} = currentAnalyticsService;

const {
  gates: { ExistingCitiesGateWithCoordinates },
} = addressSearchService;

export const CurrentAnalyticsContainer = () => {
  const {
    dashboardSummary,
    isLoadingSummary,
    currentDashboardType,
    setCurrentDashboardType,
    dashboardPiperuptersList,
    isLoadingPanels,
    dashboardResourceDisconnection,
    dashboardMalfunctions,
    dashboardAverageTime,
    dashboardServiceQuality,
    dashboardFilters,
    setDashboardFilters,
    resetDashboardFilters,
    organizationsList,
    pageSegment,
    setSegment,
  } = useUnit({
    dashboardSummary: dashboardSummaryQuery.$data,
    isLoadingSummary: dashboardSummaryQuery.$pending,
    currentDashboardType: outputs.$currentDashboardType,
    setCurrentDashboardType: inputs.setCurrentDashboardType,
    dashboardPiperuptersList: dashboardPiperuptersQuery.$data,
    dashboardResourceDisconnection: dashboardResourceDisconnectionQuery.$data,
    dashboardMalfunctions: dashboardMalfunctionsQuery.$data,
    dashboardAverageTime: dashboardAverageTimeQuery.$data,
    dashboardServiceQuality: dashboardServiceQualityQuery.$data,
    isLoadingPanels: outputs.$isLoading,
    dashboardFilters: outputs.$dashboardFilters,
    setDashboardFilters: inputs.setDashboardFilters,
    resetDashboardFilters: inputs.resetDashboardFilters,
    organizationsList: dashboardOrganizationsQuery.$data,
    pageSegment: outputs.$pageSegment,
    setSegment: inputs.setSegment,
  });

  return (
    <>
      <ExistingCitiesGateWithCoordinates />
      <TaskTypesGate />
      <CurrentAnalyticsGate />
      <CurrentAnalyticsPage
        dashboardSummary={dashboardSummary}
        isLoadingSummary={isLoadingSummary}
        currentDashboardType={currentDashboardType}
        setCurrentDashboardType={setCurrentDashboardType}
        dashboardPiperuptersList={getItemArray(dashboardPiperuptersList)}
        dashboardResourceDisconnection={getItemArray(
          dashboardResourceDisconnection,
        )}
        dashboardMalfunctions={getItemArray(dashboardMalfunctions)}
        dashboardAverageTime={getItemArray(dashboardAverageTime)}
        dashboardServiceQuality={getItemArray(dashboardServiceQuality)}
        isLoadingPanels={isLoadingPanels}
        dashboardFilters={dashboardFilters}
        setDashboardFilters={setDashboardFilters}
        resetDashboardFilters={resetDashboardFilters}
        organizationsList={organizationsList}
        pageSegment={pageSegment}
        setSegment={setSegment}
      />
    </>
  );
};

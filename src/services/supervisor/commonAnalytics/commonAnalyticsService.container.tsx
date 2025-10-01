import { useUnit } from 'effector-react';
import { CommonAnalyticsPage } from './CommonAnalyticsPage';
import { commonAnalyticsService } from './commonAnalyticsService.models';
import {
  commonSummaryQuery,
  dashboardOrganizationsQuery,
} from './commonAnalyticsService.api';
import { addressSearchService } from 'services/addressSearchService/addressSearchService.models';
import { existingMoDistrictsService } from '../existingMoDistricts';
import { existingMoDistrictsQuery } from '../existingMoDistricts/existingMoDistrictsService.api';

const { inputs, outputs, gates } = commonAnalyticsService;

const { CommonAnalyticsGate } = gates;

const {
  gates: { ExistingCitiesGate },
} = addressSearchService;

const {
  gates: { ExistingMoDistrictsGate },
} = existingMoDistrictsService;

export const CommonAnalyticsContainer = () => {
  const {
    setDashboardFilters,
    dashboardFilters,
    resetDashboardFilters,
    dashboardSummary,
    currentDashboardType,
    setCurrentDashboardType,
    isLoading,
    isLoadingSummary,
    analyticsData,
    organizations,
    dateRangeType,
    setDateRangeType,
    existingMoDistricts,
  } = useUnit({
    setDashboardFilters: inputs.setDashboardFilters,
    dashboardFilters: outputs.$dashboardFilters,
    resetDashboardFilters: inputs.resetDashboardFilters,
    dashboardSummary: commonSummaryQuery.$data,
    currentDashboardType: outputs.$currentDashboardType,
    setCurrentDashboardType: inputs.setCurrentDashboardType,
    isLoading: outputs.$isLoading,
    isLoadingSummary: commonSummaryQuery.$pending,
    analyticsData: outputs.$analyticsData,
    organizations: dashboardOrganizationsQuery.$data,
    dateRangeType: outputs.$dateRangeType,
    setDateRangeType: inputs.setDateRangeType,
    existingMoDistricts: existingMoDistrictsQuery.$data,
  });

  return (
    <>
      <ExistingCitiesGate />
      <CommonAnalyticsGate />
      <ExistingMoDistrictsGate />
      <CommonAnalyticsPage
        setDashboardFilters={setDashboardFilters}
        dashboardFilters={dashboardFilters}
        resetDashboardFilters={resetDashboardFilters}
        dashboardSummary={dashboardSummary}
        currentDashboardType={currentDashboardType}
        setCurrentDashboardType={setCurrentDashboardType}
        isLoading={isLoading}
        isLoadingSummary={isLoadingSummary}
        analyticsData={analyticsData}
        organizations={organizations}
        dateRangeType={dateRangeType}
        setDateRangeType={setDateRangeType}
        existingMoDistricts={existingMoDistricts}
      />
    </>
  );
};

import { FC, useMemo } from 'react';
import { Wrapper } from './CommonAnalyticsPage.styled';
import { Props } from './CommonAnalyticsPage.types';
import { PageHeader } from 'ui-kit/shared/PageHeader';
import { InfoOptionsPanels } from 'services/supervisor/currentAnalytics/CurrentAnalyticsPage/InfoOptionsPanels';
import { StatisticItem } from './StatisticItem';
import { EmptyStatisticItem } from './EmptyStatisticItem';
import { AnalyticsSearch } from 'services/supervisor/AnalyticsSearch';

export const CommonAnalyticsPage: FC<Props> = ({
  dashboardFilters,
  setDashboardFilters,
  resetDashboardFilters,
  currentDashboardType,
  dashboardSummary,
  setCurrentDashboardType,
  isLoading,
  isLoadingSummary,
  analyticsData,
  organizations,
  dateRangeType,
  setDateRangeType,
  existingMoDistricts,
}) => {
  const isEmpty = useMemo(
    () => !analyticsData || !analyticsData.length || isLoading,
    [analyticsData, isLoading],
  );

  // const [selectValue, setValue] = useState(EDateRange.Week);

  return (
    <Wrapper>
      <PageHeader title="Общая аналитика" contextMenu={{}} />
      <AnalyticsSearch
        isCommon
        dashboardFilters={dashboardFilters}
        setDashboardFilters={setDashboardFilters}
        resetDashboardFilters={resetDashboardFilters}
        selectValue={dateRangeType}
        setValue={setDateRangeType}
        organizationsList={organizations}
        existingMoDistricts={existingMoDistricts}
      />
      <InfoOptionsPanels
        dashboardSummary={dashboardSummary}
        currentDashboardType={currentDashboardType}
        setCurrentDashboardType={setCurrentDashboardType}
        isLoading={isLoadingSummary}
      />
      {isEmpty && <EmptyStatisticItem isLoading={isLoading} />}
      {!isLoading &&
        analyticsData?.map?.((analyticsData) => (
          <StatisticItem
            key={analyticsData.title}
            data={analyticsData}
            selectValue={dateRangeType}
            currentDashboardType={currentDashboardType}
          />
        ))}
    </Wrapper>
  );
};

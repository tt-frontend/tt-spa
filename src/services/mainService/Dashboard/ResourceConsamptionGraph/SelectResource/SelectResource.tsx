import { FC } from 'react';
import { Wrapper } from './SelectResource.styled';
import { Props } from './SelectResource.types';
import { SelectResourcePanel } from 'services/resources/resourceConsumptionService/view/SelectResource/SelectResourcePanel';
import { EResourceType } from 'api/types';

export const SelectResource: FC<Props> = ({
  selectedResource,
  setResource,
  summaryConsumption,
  isChartLoading,
}) => {
  return (
    <Wrapper>
      {Object.keys(summaryConsumption?.consumptions ?? {}).map(
        (resourceType) => {
          const summary = summaryConsumption?.consumptions
            ? (summaryConsumption.consumptions[
                resourceType as keyof typeof summaryConsumption.consumptions
              ] ?? null)
            : null;

          return (
            <SelectResourcePanel
              setResource={setResource}
              resource={resourceType as EResourceType}
              active={selectedResource === resourceType}
              key={resourceType}
              summary={summary}
              isSummaryLoading={isChartLoading}
            />
          );
        },
      )}
    </Wrapper>
  );
};

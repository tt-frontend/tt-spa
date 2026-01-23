import { FC } from 'react';
import {
  GoTo,
  GroupWrapper,
  StatisticWrapper,
  TextWrapper,
  TitleWrapper,
  Wrapper,
} from './TaskResourceConsumption.styled';
import { Props } from './TaskResourceConsumption.types';
import { useNavigate } from 'react-router-dom';
import { StatisticIcon } from 'ui-kit/icons';
import { useUnit } from 'effector-react';
import { resourceConsumptionFilterService } from 'services/resources/resourceConsumptionService/resourceConsumptionFilterService';
import { EResourceType } from 'api/types';

export const TaskResourceConsumption: FC<Props> = ({ buildingId }) => {
  const navigate = useNavigate();

  const { setFilter, handleClearFilter, setResource } = useUnit({
    setFilter: resourceConsumptionFilterService.inputs.setFilter,
    handleClearFilter: resourceConsumptionFilterService.inputs.clearFilter,
    setResource: resourceConsumptionFilterService.inputs.setResource,
  });

  return (
    <Wrapper>
      <TitleWrapper>Статистика</TitleWrapper>

      <StatisticWrapper>
        <GroupWrapper>
          <StatisticIcon />

          <TextWrapper>Анализ потребления ресурсов</TextWrapper>
        </GroupWrapper>
        <GroupWrapper>
          <GoTo
            onClick={() => {
              navigate(`/statistics/resourceConsumption`);
              handleClearFilter();
              setFilter({ BuildingIds: [buildingId] });
              setResource(EResourceType.Heat);
            }}
          >
            Перейти {'>'}
          </GoTo>
        </GroupWrapper>
      </StatisticWrapper>
    </Wrapper>
  );
};

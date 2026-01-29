import React, { FC, useMemo } from 'react';
import { ResourceIconLookup } from 'ui-kit/shared/ResourceIconLookup';
import {
  GroupWrapper,
  GoTo,
  StatisticWrapper,
  TextWrapper,
  TitleWrapper,
  Wrapper,
} from './TaskPipeNodeInfo.styled';
import { TaskPipeNodeInfoProps } from './TaskPipeNodeInfo.types';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'ui-kit/shared/Tooltip';
import { IncorrectConfigurationIcon } from 'ui-kit/icons';
import { useUnit } from 'effector-react';
import { displayNodesStatisticsService } from 'services/nodes/displayNodesStatisticsService';
import dayjs from 'dayjs';
import { EManagingFirmTaskType } from 'api/types';

export const TaskPipeNodeInfo: FC<TaskPipeNodeInfoProps> = ({
  pipeNode,
  task,
}) => {
  const { resource, title, id } = pipeNode;

  const navigate = useNavigate();

  const { setGraphType, setArchiveFilter } = useUnit({
    setGraphType: displayNodesStatisticsService.inputs.setGraphType,
    setArchiveFilter: displayNodesStatisticsService.inputs.setArchiveFilter,
  });

  const from = useMemo(() => {
    return dayjs(task.firstTrigger).subtract(1, 'day').toISOString();
  }, [task]);
  const to = useMemo(() => {
    return dayjs(task.firstTrigger).add(1, 'day').toISOString();
  }, [task]);

  const handleNavigate = () => {
    navigate(`/nodes/${id}/stats`);
    setArchiveFilter({
      ReportType: 'hourly',
      From: from,
      To: to,
    });

    if (task.type === EManagingFirmTaskType.HeatSupplyQualityCheck) {
      setGraphType('Входящая температура, °C');
    }
  };

  const isIncorrectConfig =
    (pipeNode?.validationResult?.errors || []).length !== 0 ||
    (pipeNode?.validationResult?.warnings || []).length !== 0;

  return (
    <Wrapper>
      <TitleWrapper>Статистика</TitleWrapper>

      <StatisticWrapper>
        <GroupWrapper>
          <ResourceIconLookup resource={resource} />
          <TextWrapper>Узел {title}</TextWrapper>

          {isIncorrectConfig && (
            <Tooltip title="Ошибка конфигурации узла">
              <IncorrectConfigurationIcon />
            </Tooltip>
          )}
        </GroupWrapper>
        <GroupWrapper>
          <GoTo onClick={handleNavigate} data-test="task-pipe-node-link">
            Перейти {'>'}
          </GoTo>
        </GroupWrapper>
      </StatisticWrapper>
    </Wrapper>
  );
};

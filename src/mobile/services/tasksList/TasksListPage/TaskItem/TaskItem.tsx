import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { EManagingFirmTaskType } from 'api/types';
import { ResourceIconLookup } from 'ui-kit/shared/ResourceIconLookup';
import { TimeLine } from 'ui-kit/shared/TimeLine';
import { Timer } from 'ui-kit/shared/Timer';
import { getApartmentFromFullAddress } from 'utils/getApartmentFromFullAddress';
import { MapIcon } from 'ui-kit/icons';
import {
  AddressRow,
  Card,
  Divider,
  IdText,
  InfoRow,
  Subtitle,
  Title,
  TopRow,
  Wrapper,
} from './TaskItem.styled';
import { Props } from './TaskItem.types';

export const TaskItem: FC<Props> = ({ task }) => {
  const {
    currentStage,
    name,
    timeline,
    timer,
    id,
    address,
    creationReason,
    targetObject,
    type,
  } = task;

  const taskTitle = useMemo(() => {
    if (creationReason) return creationReason;
    if (currentStage?.name) return currentStage.name;
    return name;
  }, [creationReason, currentStage?.name, name]);

  const taskSubtitle = useMemo(() => {
    if (currentStage?.name && currentStage.name !== name) {
      return name;
    }
    return name;
  }, [currentStage?.name, name]);

  const isEmergency = type === EManagingFirmTaskType.EmergencyApplication;

  const deviceInfo = useMemo(() => {
    if (!targetObject) return null;

    const title = targetObject.title;
    const model = targetObject.model;
    const text = model ? `${title} (${model})` : title;

    return (
      <InfoRow>
        <ResourceIconLookup resource={targetObject.targetObjectInfo} />
        <span>{text}</span>
      </InfoRow>
    );
  }, [targetObject]);

  return (
    <Wrapper data-test="task-item">
      <Link to={`/tasks/profile/${id}`}>
        <Card isEmergency={isEmergency}>
          <TopRow>
            <Subtitle>{taskSubtitle}</Subtitle>
            <IdText>#{id}</IdText>
          </TopRow>
          <Title>{taskTitle}</Title>
          {timeline && <TimeLine timeline={timeline} isShowInfo={false} />}
          <Timer timer={timer} />
          <Divider />
          {deviceInfo}
          <AddressRow>
            <MapIcon />
            <span>{getApartmentFromFullAddress(address, true)}</span>
          </AddressRow>
        </Card>
      </Link>
    </Wrapper>
  );
};

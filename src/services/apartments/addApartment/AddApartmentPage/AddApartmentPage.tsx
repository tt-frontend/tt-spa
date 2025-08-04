import { FC } from 'react';
import {
  Content,
  FormWrapper,
  StepsTitle,
  StepsWrapper,
  Wrapper,
} from './AddApartmentPage.styled';
import { Props } from './AddApartmentPage.types';
import { PageHeader } from 'ui-kit/shared/PageHeader';
import { GoBack } from 'ui-kit/shared/GoBack';
import { getBuildingAddress } from 'utils/getBuildingAddress';
import { Steps } from 'antd';
import { useSteps } from './AddApartmentPage.hooks';
import { MainInfoStage } from './MainInfoStage';
import { AccountNumberStage } from './AccountNumberStage';
import { AdditionalInfoStage } from './AdditionalInfoStage';

const STEPS_AMOUNT = 3;

export const AddApartmentPage: FC<Props> = ({
  buildingId,
  building,
  handleCreateApartment,
  openPreviewModal,
  createApartmentData,
}) => {
  const { step, nextStep, prevStep } = useSteps(STEPS_AMOUNT);

  return (
    <Wrapper>
      <GoBack />
      <PageHeader
        isGhost
        title="Добавление новой квартиры"
        description={getBuildingAddress(building, true)}
      />
      <Content>
        <FormWrapper>
          {step === 0 && (
            <MainInfoStage
              buildingId={buildingId}
              prevStep={prevStep}
              nextStep={nextStep}
              handleCreateApartment={handleCreateApartment}
              createApartmentData={createApartmentData}
            />
          )}
          {step === 1 && (
            <AccountNumberStage
              buildingId={buildingId}
              prevStep={prevStep}
              nextStep={nextStep}
              handleCreateApartment={handleCreateApartment}
              createApartmentData={createApartmentData}
            />
          )}
          {step === 2 && (
            <AdditionalInfoStage
              buildingId={buildingId}
              prevStep={prevStep}
              handleCreateApartment={handleCreateApartment}
              openPreviewModal={openPreviewModal}
              createApartmentData={createApartmentData}
            />
          )}
        </FormWrapper>
        <StepsWrapper>
          <StepsTitle>Этапы создания</StepsTitle>
          <Steps
            direction="vertical"
            current={step}
            items={[
              { title: 'Основная информация' },
              { title: 'Лицевоц счет' },
              { title: 'Дополнительная информация' },
            ]}
          />
        </StepsWrapper>
      </Content>
    </Wrapper>
  );
};

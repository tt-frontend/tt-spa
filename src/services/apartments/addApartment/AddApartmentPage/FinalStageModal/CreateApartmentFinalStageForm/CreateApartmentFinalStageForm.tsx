import { FC } from 'react';
import {
  Field,
  FieldDescrition,
  GridContainer,
  PageTitle,
  Wrapper,
} from './CreateApartmentFinalStageForm.styled';
import { Props } from './CreateApartmentFinalStageForm.types';
import { Form } from 'antd';
import { SpaceLine } from 'ui-kit/SpaceLine';
import dayjs from 'api/dayjs';

export const CreateApartmentFinalStageForm: FC<Props> = ({
  formId,
  createApartmentData,
}) => {
  return (
    <Form id={formId} onSubmitCapture={() => {}}>
      <Wrapper>
        <PageTitle>1. Основная информация </PageTitle>

        <GridContainer>
          <FieldDescrition>Номер квартиры</FieldDescrition>
          <Field>{createApartmentData?.number || '-'}</Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition>Комментарий</FieldDescrition>
          <Field>{createApartmentData?.comment || '-'}</Field>
        </GridContainer>
        <SpaceLine />

        <PageTitle>2. Лицевой счет </PageTitle>
        <GridContainer>
          <FieldDescrition>Основной лицевой счет</FieldDescrition>
          <Field>
            {createApartmentData?.homeownerAccount.personalAccountNumber || '-'}
          </Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition>ФИО</FieldDescrition>
          <Field>{createApartmentData?.homeownerAccount.name || '-'}</Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition>Дата открытия</FieldDescrition>
          <Field>
            {createApartmentData?.homeownerAccount.openAt
              ? dayjs(createApartmentData?.homeownerAccount.openAt).format(
                  'DD.MM.YYYY',
                )
              : '-'}
          </Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition>Платежный код</FieldDescrition>
          <Field>
            {createApartmentData?.homeownerAccount.paymentCode || '-'}
          </Field>
        </GridContainer>
        <SpaceLine />

        <PageTitle>3. Дополнительная информация </PageTitle>
        <GridContainer>
          <FieldDescrition>Этаж</FieldDescrition>
          <Field>{createApartmentData?.floor || '-'}</Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition>Площадь квартиры</FieldDescrition>
          <Field>{createApartmentData?.square || '-'}</Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition>Число жильцов</FieldDescrition>
          <Field>{createApartmentData?.numberOfLiving || '-'}</Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition> Число жильцов по нормативу </FieldDescrition>
          <Field>{createApartmentData?.normativeNumberOfLiving || '-'}</Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition> Количество холодных стояков </FieldDescrition>
          <Field>{createApartmentData?.coldWaterRiserCount || '-'}</Field>
        </GridContainer>
        <SpaceLine />
        <GridContainer>
          <FieldDescrition> Количество горячих стояков </FieldDescrition>
          <Field>{createApartmentData?.hotWaterRiserCount || '-'}</Field>
        </GridContainer>
        <SpaceLine />
      </Wrapper>
    </Form>
  );
};

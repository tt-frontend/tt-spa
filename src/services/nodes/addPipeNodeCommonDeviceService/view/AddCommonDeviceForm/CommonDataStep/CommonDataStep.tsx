import React, { FC, useMemo } from 'react';
import { FormItem } from 'ui-kit/FormItem';
import { Select } from 'ui-kit/Select';
import { ResourceSelect } from 'ui-kit/shared/ResourceSelect';
import {
  LineWrapper,
  MagistralLabel,
  PipeNumber,
  PipeSelectOption,
} from './CommonDataStep.styled';
import { CommonDataStepProps } from './CommonDataStep.types';
import { EHousingMeteringDeviceType, EPipeNodeConfig } from 'api/types';
import {
  HousingMeteringDeviceDictionary,
  validationSchema,
} from './CommonDataStep.constants';
import { useFormik } from 'formik';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { Form } from 'antd';
import { resourceFromConfig } from 'utils/resourceFromConfigLookup';
import { MagistralsDisctionary } from 'dictionaries';

export const CommonDataStep: FC<CommonDataStepProps> = ({
  configuration,
  updateRequestPayload,
  formId,
  requestPayload,
  communicationPipes,
}) => {
  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: {
      housingMeteringDeviceType:
        requestPayload.housingMeteringDeviceType || null,
      pipeId: requestPayload.pipeId || null,
    },
    onSubmit: (values) => {
      if (!values.housingMeteringDeviceType || !values.pipeId) return;

      updateRequestPayload({
        housingMeteringDeviceType: values.housingMeteringDeviceType,
        pipeId: values.pipeId,
      });
    },
    validationSchema,
    enableReinitialize: true,
    validateOnChange: false,
  });

  const deviceTypesOptions = [
    EHousingMeteringDeviceType.FlowMeter,
    EHousingMeteringDeviceType.TemperatureSensor,
  ].filter(
    (elem) =>
      !(
        configuration === EPipeNodeConfig.ColdWaterSupply &&
        elem === EHousingMeteringDeviceType.TemperatureSensor
      ),
  );

  const resource = useMemo(
    () => resourceFromConfig[configuration],
    [configuration],
  );

  return (
    <Form id={formId} onSubmitCapture={handleSubmit}>
      <LineWrapper>
        <FormItem label="Тип ресурса">
          <ResourceSelect resource={resource} disabled />
        </FormItem>
        <FormItem label="Тип прибора">
          <Select
            value={values.housingMeteringDeviceType || undefined}
            onChange={(value) =>
              setFieldValue('housingMeteringDeviceType', value)
            }
            placeholder="Выберите"
          >
            {deviceTypesOptions.map((type) => (
              <Select.Option key={type} value={type}>
                {HousingMeteringDeviceDictionary[type]}
              </Select.Option>
            ))}
          </Select>
          {errors.housingMeteringDeviceType && (
            <ErrorMessage>{errors.housingMeteringDeviceType}</ErrorMessage>
          )}
        </FormItem>
      </LineWrapper>
      <LineWrapper>
        <FormItem label="Труба">
          <Select
            placeholder="Выберите"
            value={values.pipeId ? String(values.pipeId) : undefined}
            onChange={(value) => setFieldValue('pipeId', Number(value))}
            disabled
          >
            {communicationPipes.map((pipe) => (
              <Select.Option key={pipe.id} value={pipe.id}>
                <PipeSelectOption>
                  <PipeNumber>№{pipe.number}</PipeNumber> ({pipe.diameter}мм){' '}
                  <MagistralLabel>магистраль:</MagistralLabel>{' '}
                  {pipe.magistral && MagistralsDisctionary[pipe.magistral]}
                </PipeSelectOption>
              </Select.Option>
            ))}
          </Select>
          <ErrorMessage>{errors.pipeId}</ErrorMessage>
        </FormItem>
      </LineWrapper>
    </Form>
  );
};

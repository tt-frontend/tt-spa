import { Switch } from 'antd';
import React, { FC, useEffect } from 'react';
import { Input } from 'ui-kit/Input';
import { FormItem } from 'ui-kit/FormItem';
import {
  GridContainer,
  IsConnectedText,
  SwitchWrapper,
} from './ConnectionSettingsForm.styled';
import { ConnectionSettingsFormProps } from './ConnectionSettingsForm.types';
import { Form } from 'antd';
import { useFormik } from 'formik';
import { CreateCalculatorRequest } from 'api/types';
import { validationSchema } from './ConnectionSettingsForm.constants';
import { ErrorMessage } from 'ui-kit/ErrorMessage';

export const ConnectionSettingsForm: FC<ConnectionSettingsFormProps> = ({
  formId,
  initialValues,
  updatePayload,
}) => {
  const { values, setFieldValue, submitForm, errors } = useFormik({
    initialValues: {
      isConnected: initialValues.isConnected,
      ipV4: initialValues.connection?.ipV4,
      port: initialValues.connection?.port,
      deviceAddress: initialValues.connection?.deviceAddress,

      providerName: initialValues.netSettings?.providerName,
      modemModel: initialValues.netSettings?.modemModel,
      modemNumber: initialValues.netSettings?.modemNumber,
      simNumber: initialValues.netSettings?.simNumber,
      simImei: initialValues.netSettings?.simImei,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (data) => {
      const payload: Partial<CreateCalculatorRequest> = {
        isConnected: data.isConnected,
        connection: {
          ipV4: data.ipV4,
          port: data.port,
          deviceAddress: data.deviceAddress,
        },
        netSettings: {
          providerName: data.providerName,
          modemModel: data.modemModel,
          modemNumber: data.modemNumber,
          simNumber: data.simNumber,
          simImei: data.simImei,
        },
      };

      updatePayload(payload);
    },
  });

  useEffect(() => {
    if (!values.isConnected) {
      setFieldValue('connection', undefined);
    }
  }, [values, setFieldValue]);

  return (
    <Form id={formId} onSubmitCapture={submitForm}>
      <SwitchWrapper>
        <Switch
          checked={values.isConnected}
          onChange={(isConnected) => setFieldValue('isConnected', isConnected)}
        />
        <IsConnectedText>Опрашивать вычислитель</IsConnectedText>
      </SwitchWrapper>

      <GridContainer>
        <FormItem label="IP адрес вычислителя">
          <Input
            value={values.ipV4 || undefined}
            onChange={(e) => setFieldValue('ipV4', e.target.value)}
            disabled={!values.isConnected}
            placeholder="Введите IP адрес вычислителя"
          />
          <ErrorMessage>{errors.ipV4}</ErrorMessage>
        </FormItem>
        <FormItem label="Порт">
          <Input
            value={values.port || undefined}
            onChange={(e) => setFieldValue('port', Number(e.target.value))}
            disabled={!values.isConnected}
            placeholder="Введите номер порта"
          />
          <ErrorMessage>{errors.port}</ErrorMessage>
        </FormItem>
        <FormItem label="Сетевой адрес вычислителя">
          <Input
            value={values.deviceAddress || undefined}
            onChange={(e) =>
              setFieldValue('deviceAddress', Number(e.target.value))
            }
            disabled={!values.isConnected}
            placeholder="Введите сетевой адрес вычислителя "
          />
          <ErrorMessage>{errors.deviceAddress}</ErrorMessage>
        </FormItem>

        <FormItem label="Провайдер">
          <Input
            placeholder="Укажите провайдера"
            disabled={!values.isConnected}
            value={values.providerName || undefined}
            onChange={(value) => {
              setFieldValue('providerName', value.target.value);
            }}
          />
          <ErrorMessage>{errors.providerName}</ErrorMessage>
        </FormItem>

        <FormItem label="Марка модема">
          <Input
            value={values.modemModel || undefined}
            disabled={!values.isConnected}
            onChange={(value) => {
              setFieldValue('modemModel', value.target.value);
            }}
          />
          <ErrorMessage>{errors.modemModel}</ErrorMessage>
        </FormItem>
        <FormItem label="Номер модема">
          <Input
            value={values.modemNumber || undefined}
            disabled={!values.isConnected}
            onChange={(value) => {
              setFieldValue('modemNumber', value.target.value);
            }}
          />
          <ErrorMessage>{errors.modemNumber}</ErrorMessage>
        </FormItem>
        <FormItem label="IMEI сим-карты">
          <Input
            value={values.simImei || undefined}
            disabled={!values.isConnected}
            onChange={(value) => {
              setFieldValue('simImei', value.target.value);
            }}
          />
          <ErrorMessage>{errors.simImei}</ErrorMessage>
        </FormItem>
        <FormItem label="Номер сим-карты">
          <Input
            value={values.simNumber || undefined}
            disabled={!values.isConnected}
            onChange={(value) => {
              setFieldValue('simNumber', value.target.value);
            }}
          />
          <ErrorMessage>{errors.simNumber}</ErrorMessage>
        </FormItem>
      </GridContainer>
    </Form>
  );
};

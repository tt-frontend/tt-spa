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

export const ConnectionSettingsForm: FC<ConnectionSettingsFormProps> = ({
  formId,
  initialValues,
  updatePayload,
}) => {
  const { values, setFieldValue, submitForm } = useFormik({
    initialValues: {
      isConnected: initialValues.isConnected,
      ipV4: initialValues.connection?.ipV4,
      port: initialValues.connection?.port,
      deviceAddress: initialValues.connection?.deviceAddress,

      providerName: '',
      modemModel: '',
      modemNumber: '',
      simNumber: '',
      simImei: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: updatePayload,
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
            onChange={(e) => setFieldValue('connection.ipV4', e.target.value)}
            disabled={!values.isConnected}
            placeholder="Введите IP адрес вычислителя"
          />
        </FormItem>
        <FormItem label="Порт">
          <Input
            type="number"
            value={values.port || undefined}
            onChange={(e) =>
              setFieldValue('connection.port', Number(e.target.value))
            }
            disabled={!values.isConnected}
            placeholder="Введите номер порта"
          />
        </FormItem>
        <FormItem label="Сетевой адрес вычислителя">
          <Input
            type="number"
            value={values.deviceAddress || undefined}
            onChange={(e) =>
              setFieldValue('connection.deviceAddress', Number(e.target.value))
            }
            disabled={!values.isConnected}
            placeholder="Введите сетевой адрес вычислителя "
          />
        </FormItem>

        <FormItem label="Провайдер">
          <Input
            type="number"
            placeholder="Укажите провайдера"
            value={values.providerName || undefined}
            onChange={(value) => {
              setFieldValue('providerName', value.target.value);
            }}
          />
        </FormItem>

        <FormItem label="Марка модема">
          <Input
            value={values.modemModel || undefined}
            onChange={(value) => {
              setFieldValue('modemModel', value.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Номер модема">
          <Input
            value={values.modemNumber || undefined}
            onChange={(value) => {
              setFieldValue('modemNumber', value.target.value);
            }}
          />
        </FormItem>
        <FormItem label="EMEI сим-карты">
          <Input
            value={values.simImei || undefined}
            onChange={(value) => {
              setFieldValue('simImei', value.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Номер сим-карты">
          <Input
            value={values.simNumber || undefined}
            onChange={(value) => {
              setFieldValue('simNumber', value.target.value);
            }}
          />
        </FormItem>
      </GridContainer>
    </Form>
  );
};

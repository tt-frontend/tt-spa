import React, { FC } from 'react';
import { GridContainer, SwitchText, Wrapper } from './EditConnection.styled';
import { EditConnectionProps } from './EditConnection.types';
import { FormItem } from 'ui-kit/FormItem';
import { Switch } from 'antd';
import { Input } from 'ui-kit/Input';
import { useFormik } from 'formik';
import { MeteringDeviceConnection, UpdateCalculatorRequest } from 'api/types';
import * as yup from 'yup';
import { Footer } from '../EditMainInfo/EditMainInfo.styled';
import { Button } from 'ui-kit/Button';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { EditExistingConnectionErrorModal } from './EditExistingConnectionErrorModal';

export const EditConnection: FC<EditConnectionProps> = ({
  calculator,
  onCancel,
  onSubmit,
  sameConnectionCalculator,
  handleCloseModal,
  isModalOpen,
}) => {
  const connection = calculator?.connection;

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: {
      connection: {
        ipV4: connection?.ipV4 ? connection.ipV4.trim() : null,
        port: String(connection?.port).trim(),
        deviceAddress: String(connection?.deviceAddress).trim(),
      },
      isConnected: calculator?.isConnected || undefined,

      providerName: '',
      modemModel: '',
      modemNumber: '',
      simNumber: '',
      simImei: '',
    },
    validationSchema: yup.object().shape({
      connection: yup.object().shape({
        ipV4: yup.string().required('Это поле обязательно'),
        port: yup.number().required('Это поле обязательно'),
        deviceAddress: yup.number().required('Это поле обязательно'),
      }),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (data) => {
      const { connection, isConnected } = data;

      const convertedData: UpdateCalculatorRequest = {
        isConnected,
        connection: {
          ipV4: connection?.ipV4?.trim(),
          port: Number(connection?.port),
          deviceAddress: Number(connection?.deviceAddress),
        } as MeteringDeviceConnection,
      };

      onSubmit(convertedData);
    },
  });

  const err = errors.connection as unknown as
    | { ipV4?: string; port?: string; deviceAddress?: string }
    | undefined;

  return (
    <>
      <EditExistingConnectionErrorModal
        isModalOpen={isModalOpen}
        sameConnectionCalculator={sameConnectionCalculator}
        handleCloseModal={handleCloseModal}
      />

      <Wrapper>
        <FormItem>
          <Switch
            style={{ width: '48px' }}
            checked={values.isConnected}
            onChange={(value) => {
              setFieldValue('isConnected', value);
            }}
          />
          <SwitchText>Опрашивать вычислитель</SwitchText>
        </FormItem>

        <GridContainer>
          <FormItem label="IP адрес вычислителя">
            <Input
              placeholder="Укажите IP-адрес устройства, например 192.168.0.1"
              type="text"
              value={values.connection?.ipV4 || undefined}
              onChange={(value) => {
                setFieldValue('connection', {
                  ...values.connection,
                  ipV4: value.target.value,
                });
              }}
            />
            <ErrorMessage>{err?.ipV4}</ErrorMessage>
          </FormItem>

          <FormItem label="Порт">
            <Input
              type="number"
              placeholder="Укажите порт устройства (например, 1234)"
              value={values.connection?.port || undefined}
              onChange={(value) => {
                setFieldValue('connection', {
                  ...values.connection,
                  port: value.target.value,
                });
              }}
            />
            <ErrorMessage>{err?.port}</ErrorMessage>
          </FormItem>
        </GridContainer>

        <FormItem label="Адрес прибора">
          <Input
            type="number"
            placeholder="Укажите адреса устройства"
            value={values.connection?.deviceAddress || undefined}
            onChange={(value) => {
              setFieldValue('connection', {
                ...values.connection,
                deviceAddress: value.target.value,
              });
            }}
          />
          <ErrorMessage>{err?.deviceAddress}</ErrorMessage>
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
          <ErrorMessage>{err?.deviceAddress}</ErrorMessage>
        </FormItem>

        <GridContainer>
          <FormItem label="Марка модема">
            <Input
              value={values.modemModel || undefined}
              onChange={(value) => {
                setFieldValue('modemModel', value.target.value);
              }}
            />
            <ErrorMessage>{err?.deviceAddress}</ErrorMessage>
          </FormItem>
          <FormItem label="Номер модема">
            <Input
              value={values.modemNumber || undefined}
              onChange={(value) => {
                setFieldValue('modemNumber', value.target.value);
              }}
            />
            <ErrorMessage>{err?.deviceAddress}</ErrorMessage>
          </FormItem>
          <FormItem label="EMEI сим-карты">
            <Input
              value={values.simImei || undefined}
              onChange={(value) => {
                setFieldValue('simImei', value.target.value);
              }}
            />
            <ErrorMessage>{err?.deviceAddress}</ErrorMessage>
          </FormItem>
          <FormItem label="Номер сим-карты">
            <Input
              value={values.simNumber || undefined}
              onChange={(value) => {
                setFieldValue('simNumber', value.target.value);
              }}
            />
            <ErrorMessage>{err?.deviceAddress}</ErrorMessage>
          </FormItem>
        </GridContainer>

        <Footer>
          <Button type="ghost" onClick={onCancel}>
            Отмена
          </Button>
          <Button onClick={() => handleSubmit()}>Сохранить</Button>
        </Footer>
      </Wrapper>
    </>
  );
};

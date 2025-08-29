import React, { FC, useMemo } from 'react';
import dayjs from 'api/dayjs';
import stc from 'string-to-color';
import { FormModal } from 'ui-kit/Modals/FormModal';
import { SettingsIcon } from 'ui-kit/icons';
import { Input } from 'ui-kit/Input';
import { Button } from 'ui-kit/Button';
import { FormItem } from 'ui-kit/FormItem';
import { Select } from 'ui-kit/Select';
import {
  Badge,
  CredItem,
  CredsWrapper,
  DevUrlInputWrapper,
  FeatureToggle,
  FeatureTogglesWrapper,
} from './DevelopmentSettingsModal.styled';
import { DevelopmentSettingsModalProps } from './DevelopmentSettingsModal.types';
import { urls } from './DevelopmentSettingsModal.constants';
import { baseURL } from 'api';
import { FeatureTogglesTranslates } from 'services/developmentSettings/developmentSettings.constants';
import { FeatureToggles } from 'services/developmentSettings/developmentSettings.types';

export const DevelopmentSettingsModal: FC<DevelopmentSettingsModalProps> = ({
  visible,
  closeDevSettingsModal,
  devUrl,
  setDevUrl,
  featureToggles,
  toggleFeature,
  resetFeatureToggles,
  isAuth,
  credsList,
  resetCreds,
  handleLogin,
}) => {
  const featuresArray = useMemo(
    () => Object.entries(featureToggles),
    [featureToggles],
  );

  return (
    <FormModal
      formId="dev-settings-form"
      form={
        <>
          {!isAuth && (
            <FormItem label="URL's list">
              <Select
                small
                placeholder="Select url"
                value={urls.find((elem) => elem === devUrl)}
                onChange={(value) => setDevUrl(value as string)}
              >
                {urls.map((elem) => (
                  <Select.Option key={elem} value={elem}>
                    {elem}
                  </Select.Option>
                ))}
              </Select>
            </FormItem>
          )}
          <FormItem label="URL">
            <DevUrlInputWrapper>
              <Input
                small
                value={devUrl}
                onChange={(e) => setDevUrl(e.target.value)}
                disabled={isAuth}
              />
              <Button
                size="s"
                icon={<SettingsIcon />}
                onClick={() => setDevUrl(baseURL)}
                disabled={isAuth}
              >
                Reset
              </Button>
            </DevUrlInputWrapper>
          </FormItem>
          {Boolean(credsList.length) && (
            <FormItem label="Credentials">
              <CredsWrapper>
                {credsList.map((elem) => (
                  <CredItem
                    disabled={isAuth}
                    key={elem.email}
                    onClick={() => !isAuth && handleLogin(elem)}
                  >
                    {elem.email}
                  </CredItem>
                ))}
                <FeatureToggle onClick={resetCreds} isActive color="#000000">
                  <SettingsIcon />
                  reset
                </FeatureToggle>
              </CredsWrapper>
            </FormItem>
          )}
          {Boolean(featuresArray.length) && (
            <FormItem label="Feature toggles">
              <FeatureTogglesWrapper>
                {featuresArray.map(([key, isActive]) => {
                  const color = stc(key + 'c');

                  return (
                    <FeatureToggle
                      onClick={() => toggleFeature(key)}
                      color={color}
                      isActive={isActive}
                      key={key}
                    >
                      {FeatureTogglesTranslates[key as keyof FeatureToggles]}
                    </FeatureToggle>
                  );
                })}
                <FeatureToggle
                  onClick={resetFeatureToggles}
                  isActive
                  color="#000000"
                >
                  <SettingsIcon />
                  reset
                </FeatureToggle>
              </FeatureTogglesWrapper>
            </FormItem>
          )}
          <Badge>TT frontend team {dayjs().format('YYYY')} [ver: 2.0.0]</Badge>
        </>
      }
      centered
      title="🛠️ development settings"
      visible={visible}
      onCancel={closeDevSettingsModal}
      customFooter={<></>}
    />
  );
};

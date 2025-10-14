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
  CredentialsTitle,
  CredItem,
  CredsWrapper,
  DevUrlInputWrapper,
  FeatureToggle,
  FeatureTogglesWrapper,
  RemoveCredIconWrapper,
  UserName,
} from './DevelopmentSettingsModal.styled';
import { DevelopmentSettingsModalProps } from './DevelopmentSettingsModal.types';
import { urls } from './DevelopmentSettingsModal.constants';
import { baseURL } from 'api';
import { FeatureTogglesTranslates } from 'services/developmentSettings/developmentSettings.constants';
import {
  ICredItem,
  FeatureToggles,
} from 'services/developmentSettings/developmentSettings.types';
import { sortUserRoles } from 'services/company/companyProfileService/view/CompanyProfile/Tabs/Staff/Staff.utils';
import { Segmented, Tooltip } from 'antd';
import { X } from 'react-bootstrap-icons';
import { generateColorsFromString } from 'utils/generateGradient';

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
  // resetCreds,
  handleLogin,
  removeCred,
}) => {
  const featuresArray = useMemo(
    () => Object.entries(featureToggles),
    [featureToggles],
  );

  const [credView, setCredView] = React.useState<'role' | 'name'>('role');

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
              ></Button>
            </DevUrlInputWrapper>
          </FormItem>
          {Boolean(credsList.length) && (
            <FormItem
              label={
                <CredentialsTitle>
                  <div>Credentials</div>
                  <Segmented
                    className="segmented"
                    size="small"
                    value={credView}
                    onChange={(value) => setCredView(value as 'role' | 'name')}
                    options={[
                      { value: 'role', label: 'role' },
                      { value: 'name', label: 'name' },
                    ]}
                  />
                </CredentialsTitle>
              }
            >
              <CredsWrapper>
                {credsList.map((elem) => (
                  <CredentialBlock
                    credView={credView}
                    key={elem.email}
                    cred={elem}
                    isAuth={isAuth}
                    handleLogin={handleLogin}
                    removeCred={() => removeCred(elem.email)}
                  />
                ))}
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
          <Badge>TT frontend team {dayjs().format('YYYY')} [ver: 2.0.1]</Badge>
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

const CredentialBlock: FC<{
  cred: ICredItem;
  isAuth: boolean;
  handleLogin: (cred: ICredItem) => void;
  credView: 'name' | 'role';
  removeCred: () => void;
}> = ({ cred, isAuth, handleLogin, credView, removeCred }) => {
  const sortedRoles = cred.user && sortUserRoles(cred.user.roles || []);

  const firstNameLetter = cred.user?.firstName?.[0];
  const middleNameLetter = cred.user?.middleName?.[0];

  console.log(removeCred);

  return (
    <CredItem
      disabled={isAuth}
      key={cred.email}
      onClick={() => !isAuth && handleLogin(cred)}
      gradient={generateColorsFromString(cred.email + cred.user?.id)}
    >
      <RemoveCredIconWrapper
        className="removeCredIconWrapper"
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();

          removeCred();
        }}
      >
        <Tooltip mouseEnterDelay={0.5} title="Удалить">
          <X size={16} />
        </Tooltip>
      </RemoveCredIconWrapper>

      {credView === 'name' && cred.user && (
        <UserName>
          {cred.user.lastName} {firstNameLetter && `${firstNameLetter}. `}
          {middleNameLetter && `${middleNameLetter}.`}
        </UserName>
      )}
      {credView === 'role' && <UserName>{sortedRoles?.[0]?.value}</UserName>}

      <div>{cred.email}</div>
    </CredItem>
  );
};

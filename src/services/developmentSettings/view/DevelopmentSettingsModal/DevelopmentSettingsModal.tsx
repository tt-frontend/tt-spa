import React, { FC, useEffect, useMemo, useState } from 'react';
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
  TextAreaSC,
  UserName,
  Wrapper,
} from './DevelopmentSettingsModal.styled';
import { DevelopmentSettingsModalProps } from './DevelopmentSettingsModal.types';
import {
  AccountsArraySchema,
  urls,
} from './DevelopmentSettingsModal.constants';
import { baseURL } from 'api';
import { FeatureTogglesTranslates } from 'services/developmentSettings/developmentSettings.constants';
import {
  ICredItem,
  FeatureToggles,
} from 'services/developmentSettings/developmentSettings.types';
import { sortUserRoles } from 'services/company/companyProfileService/view/CompanyProfile/Tabs/Staff/Staff.utils';
import { message, Segmented, Tooltip } from 'antd';
import {
  Clipboard,
  ClipboardCheck,
  InputCursorText,
  X,
} from 'react-bootstrap-icons';
import { generateColorsFromString } from 'utils/generateGradient';
import { useClipboard } from '@custom-react-hooks/use-clipboard';
import * as yup from 'yup';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import packagejson from '../../../../../package.json';

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
  setCredsList,
}) => {
  const [inputCredsOpen, setInputCredsOpen] = React.useState(false);

  const featuresArray = useMemo(
    () => Object.entries(featureToggles),
    [featureToggles],
  );

  const [credView, setCredView] = React.useState<'role' | 'name'>('role');

  const { copyToClipboard, clipboardContent } = useClipboard({});

  const credsJson = useMemo(() => {
    return JSON.stringify(credsList, null, 2);
  }, [credsList]);

  function copyCreds() {
    try {
      copyToClipboard(credsJson);
    } catch (error) {
      console.error(error);
    }
  }

  const isCopied = clipboardContent === credsJson;

  const [credsText, setCredsText] = React.useState(credsJson);

  useEffect(() => {
    setCredsText(credsJson);
  }, [credsJson]);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!inputCredsOpen) {
      setError(null);
      setCredsText(credsJson);
    }
  }, [inputCredsOpen]);

  async function onSaveCreds() {
    try {
      const creds = JSON.parse(credsText);

      try {
        await AccountsArraySchema.validate(creds, { strict: true });

        setCredsList(creds);
        setInputCredsOpen(false);
        setError(null);

        message.success('Saved!');
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          setError('Validation error: ' + err.path + '  ' + err.message);
        }
      }
    } catch (error) {
      console.error(error);
      message.error('Incorrect json, see error in console');
    }
  }

  return (
    <FormModal
      formId="dev-settings-form"
      form={
        <Wrapper>
          <FormModal
            innerModalProps={{ width: 600 }}
            formId="save-creds-form"
            title="Edit creds"
            visible={inputCredsOpen}
            submitBtnText="Save"
            cancelBtnText="Cancel"
            onCancel={() => setInputCredsOpen(false)}
            onSubmit={onSaveCreds}
            form={
              <>
                <TextAreaSC
                  status={error ? 'error' : ''}
                  style={{ minHeight: 400 }}
                  value={credsText}
                  onChange={(e) => setCredsText(e.target.value)}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </>
            }
          />
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
          <FormItem label="URL" labelCol={{ offset: 12 }}>
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
                  {!isCopied && (
                    <Clipboard
                      onClick={copyCreds}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                  {isCopied && (
                    <ClipboardCheck
                      color="#21c421"
                      onClick={copyCreds}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                  <InputCursorText
                    style={{ cursor: 'pointer' }}
                    onClick={() => setInputCredsOpen(true)}
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
          <Badge>
            TT frontend team {dayjs().format('YYYY')} [ds: 2.2.0] [app:{' '}
            {packagejson.version}]
          </Badge>
        </Wrapper>
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
        <Tooltip mouseEnterDelay={0.5} title="delete">
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

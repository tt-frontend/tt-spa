import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { developmentSettingsService } from './developmentSettings.models';
import { DevelopmentSettingsModal } from './view/DevelopmentSettingsModal';
import { DevelopmentSettingsContainerProps } from './developmentSettings.types';
import { currentOrganizationService } from 'services/currentOrganizationService';
import { loginService } from 'services/authorizations/loginService';

const { inputs, outputs } = developmentSettingsService;

export const DevelopmentSettingsContainer: FC<
  DevelopmentSettingsContainerProps
> = ({ isAuth = false }) => {
  const {
    visible,
    devUrl,
    closeDevSettingsModal,
    setDevUrl,
    featureToggles,
    toggleFeature,
    resetFeatureToggles,
    credsList,
    resetCreds,
    handleLogin,
    removeCred,
  } = useUnit({
    visible: outputs.$isDevSettingsModalOpen,
    devUrl: currentOrganizationService.outputs.$devUrl,
    featureToggles: outputs.$featureToggles,
    closeDevSettingsModal: inputs.closeDevSettingsModal,
    setDevUrl: currentOrganizationService.inputs.setDevUrl,
    toggleFeature: inputs.toggleFeature,
    resetFeatureToggles: inputs.resetFeatureToggles,
    credsList: outputs.$credsList,
    resetCreds: inputs.resetCreds,
    handleLogin: loginService.inputs.handlePostLogin,
    removeCred: inputs.removeCred,
  });

  return (
    <DevelopmentSettingsModal
      visible={visible}
      closeDevSettingsModal={closeDevSettingsModal}
      devUrl={devUrl}
      setDevUrl={setDevUrl}
      featureToggles={featureToggles}
      toggleFeature={toggleFeature}
      resetFeatureToggles={resetFeatureToggles}
      isAuth={isAuth}
      credsList={credsList}
      resetCreds={resetCreds}
      handleLogin={handleLogin}
      removeCred={removeCred}
    />
  );
};

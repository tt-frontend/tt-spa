import { layoutService } from './layoutService.models';

import { currentUserService } from 'services/currentUser/currentUserService';
import { Layout } from './Layout/Layout';
import { currentOrganizationService } from 'services/currentOrganizationService';
import { createRunnerService } from 'services/reportsService/createRunnerService/createRunnerService.models';
import { resourceConsumptionService } from 'services/resources/resourceConsumptionService';
import { useUnit } from 'effector-react';

const { inputs, outputs } = layoutService;

const {
  gates: { CurrentUserGate },
} = currentUserService;
const {
  gates: { CurrentManagingFirmGate },
} = currentOrganizationService;
const {
  gates: { GetLastPollGate },
} = createRunnerService;
const {
  gates: { GetHousingMeteringDevicesGate },
} = resourceConsumptionService;

export const LayoutContainer = () => {
  const { handleOpenSidePanel, handleCloseSidePanel, isSidePanelOpen } =
    useUnit({ ...inputs, isSidePanelOpen: outputs.$isSidePanelOpen });

  return (
    <>
      <CurrentUserGate />
      <CurrentManagingFirmGate />
      <GetLastPollGate />
      <GetHousingMeteringDevicesGate />

      <Layout
        handleOpenSidePanel={handleOpenSidePanel}
        handleCloseSidePanel={handleCloseSidePanel}
        isSidePanelOpen={isSidePanelOpen}
      />
    </>
  );
};

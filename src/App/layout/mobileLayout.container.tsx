import { currentUserService } from 'services/currentUser/currentUserService';
import { currentOrganizationService } from 'services/currentOrganizationService';
import { createRunnerService } from 'services/reportsService/createRunnerService/createRunnerService.models';
import { MobileLayout } from './MobileLayout';

const {
  gates: { CurrentUserGate },
} = currentUserService;
const {
  gates: { CurrentManagingFirmGate },
} = currentOrganizationService;
const {
  gates: { GetLastPollGate },
} = createRunnerService;

export const MobileLayoutContainer = () => {
  return (
    <>
      <CurrentUserGate />
      <CurrentManagingFirmGate />
      <GetLastPollGate />

      <MobileLayout />
    </>
  );
};

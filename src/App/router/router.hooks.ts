import { tokensService } from 'api/tokensService';
import {
  ESecuredIdentityRoleName,
  ESecuredIdentityRoleNameStringDictionaryItem,
  TaskGroupingFilter,
} from 'api/types';
import { useUnit } from 'effector-react';
import { usePermission } from 'hooks/usePermission';
import { useMemo } from 'react';

export function useRouterContext(
  currentUserRoles: ESecuredIdentityRoleNameStringDictionaryItem[],
) {
  const { isAuth } = useUnit({ isAuth: tokensService.outputs.$isAuth });

  const roles = useMemo(() => {
    return (
      currentUserRoles?.reduce((acc, { key }) => {
        if (!key) {
          return acc;
        }
        return [...acc, key];
      }, [] as ESecuredIdentityRoleName[]) || []
    );
  }, [currentUserRoles]);

  const isAdministrator =
    roles.includes(ESecuredIdentityRoleName.Administrator) ||
    roles.includes(
      ESecuredIdentityRoleName.ManagingFirmSpectatingAdministrator,
    );

  const isSeniorOperator = roles.includes(
    ESecuredIdentityRoleName.SeniorOperator,
  );

  const isOperator =
    roles.includes(ESecuredIdentityRoleName.Operator) || isSeniorOperator;

  const isSupervisor = roles.includes(ESecuredIdentityRoleName.Supervisor);

  const isDispatcher = roles.includes(
    ESecuredIdentityRoleName.ManagingFirmDispatcher,
  );
  const isExecutor = roles.includes(
    ESecuredIdentityRoleName.ManagingFirmExecutor,
  );

  const isSpectator = usePermission([
    ESecuredIdentityRoleName.ManagingFirmSpectator,
    ESecuredIdentityRoleName.Supervisor,
  ]);

  const isSpectatingAdministrator = roles.includes(
    ESecuredIdentityRoleName.ManagingFirmSpectatingAdministrator,
  );

  const isRescrictedSpectator = roles.includes(
    ESecuredIdentityRoleName.ManagingFirmSpectatorRestricted,
  );

  const initialTasksPath = isSpectator
    ? `/tasks/list/${TaskGroupingFilter.Observing}`
    : `/tasks/list/${TaskGroupingFilter.Executing}`;

  const redirectRoute = useMemo(() => {
    if (!isAuth) {
      return `/login`;
    }

    if (!roles.length) return '/';

    if (isSupervisor) {
      return '/supervisor/currentAnalytics';
    }

    if (isOperator) {
      return '/meters/apartments';
    }

    return initialTasksPath;
  }, [roles.length, isSupervisor, isOperator, initialTasksPath, isAuth]);

  const isShowNodeArchivePage =
    isAdministrator ||
    isExecutor ||
    isSpectator ||
    isSpectatingAdministrator ||
    isRescrictedSpectator;

  return {
    isShowNodeArchivePage,
    isDispatcher,
    redirectRoute,
    isAuth,
    isAdministrator,
    isExecutor,
    isSeniorOperator,
    isOperator,
    initialTasksPath,
  };
}

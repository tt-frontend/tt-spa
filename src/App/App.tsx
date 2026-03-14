import { FC, useEffect } from 'react';
import { Bootstrap } from './Bootstrap';
import { useNavigate, useRoutes as useRouter } from 'react-router-dom';
import { useUnit } from 'effector-react';
import 'dayjs/locale/ru';
import 'css/index.scss';
import 'css/styles.css';
import { useRoutes as useDesktopRoutes } from './router/router';
import { currentUserService } from 'services/currentUser/currentUserService';
import { useMobileCheck } from 'mobile/mobileService.utils';
import { mobileService } from 'mobile/mobileService.models';
import { useMobileRoutes } from 'mobile/mobile.router';
import { useRouterContext } from './router/router.hooks';

const { outputs } = currentUserService;

export const App: FC = () => {
  useMobileCheck();

  const { roles, isMobile } = useUnit({
    roles: outputs.$currentUserRoles,
    isMobile: mobileService.outputs.$isMobile,
  });

  const routesList = isMobile
    ? useMobileRoutes(roles)
    : useDesktopRoutes(roles);
  const router = useRouter(routesList);
  const navigate = useNavigate();
  const { isAuth, initialTasksPath } = useRouterContext(roles);

  useEffect(() => {
    if (!isMobile) return;

    navigate(isAuth ? initialTasksPath : '/login', { replace: true });
  }, [isMobile, isAuth, initialTasksPath, navigate]);

  return <Bootstrap>{router}</Bootstrap>;
};

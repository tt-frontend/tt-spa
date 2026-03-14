import { ESecuredIdentityRoleNameStringDictionaryItem } from 'api/types';
import {
  LoginContainer,
  Navigate,
  RegistrationContainer,
  TaskProfileContainer,
} from 'App/router/router.imports';
import { useRouterContext } from 'App/router/router.hooks';
import { TasksRouterWrapper } from 'App/router/router.components';
import { MobileLayoutContainer } from 'App/layout/mobileLayout.container';
import { TasksListContainer } from './services/tasksList';

export const useMobileRoutes = (
  currentUserRoles: ESecuredIdentityRoleNameStringDictionaryItem[],
) => {
  const { redirectRoute, initialTasksPath, isAuth } =
    useRouterContext(currentUserRoles);

  if (!isAuth) {
    return [
      {
        path: '/login',
        element: <LoginContainer />,
      },
      {
        path: '/registration*',
        element: <RegistrationContainer />,
      },
      {
        path: '*',
        element: <Navigate replace to={redirectRoute} />,
      },
    ];
  }

  return [
    {
      path: '/',
      element: <MobileLayoutContainer />,
      children: [
        {
          path: '/login',
          element: <Navigate replace to={initialTasksPath} />,
        },
        {
          path: '/tasks',
          element: <Navigate replace to={initialTasksPath} />,
        },
        {
          path: '/tasks',
          element: <TasksRouterWrapper />,
          children: [
            {
              path: '/tasks/profile/:taskId',
              element: <TaskProfileContainer />,
            },
            {
              path: '/tasks/list/:grouptype',
              element: <TasksListContainer />,
            },
          ],
        },
      ],
    },
  ];
};

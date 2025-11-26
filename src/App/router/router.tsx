import { ESecuredIdentityRoleNameStringDictionaryItem } from 'api/types';
import {
  AccessDeniedPage,
  ActsJournalContainer,
  AddApartmentContainer,
  AddChessBoardContainer,
  AddIndividualDeviceContainer,
  AddPersonalNumberContainer,
  ApartmentProfileContainer,
  CalculatorProfileContainer,
  ChangeODPUContainer,
  CommonAnalyticsContainer,
  CompanyProfileContainer,
  CreateDistrictBorderMapContainer,
  CreateNodeContainer,
  CreateObjectContainer,
  CurrentAnalyticsContainer,
  CurrentUserEditServiceContainer,
  DevicesPageContainer,
  DistrictBordersByAddressContainer,
  EditApartmentProfileContainer,
  EditCalculatorContainer,
  EditCompanyContainer,
  EditDistrictBordersContainer,
  EditElectricNodeContainer,
  EditEmployeeContainer,
  EditHousingMeteringDeviceContainer,
  EditIndividualDeviceContainer,
  EditNodeContainer,
  EditObjectContainer,
  EditPersonalNumberContainer,
  EmployeeProfileContainer,
  GroupWorkingRangeContainer,
  HousingMeteringDeviceProfileContainer,
  HousingStockProfileContainer,
  IndividualMeteringDeviceProfileContainer,
  LayoutContainer,
  LoginContainer,
  MainServiceContainer,
  ManageDistrictsMapContainer,
  MetersContainer,
  Navigate,
  NodeArchivePageContainer,
  NodeProfileContainer,
  NonResidentialBuildingProfileContainer,
  ObjectsProfileContainer,
  ReadingReportsArchiveContainer,
  RegistrationContainer,
  ReportsContainer,
  ReportViewContainer,
  ResourceDisablingScheduleContainer,
  ServicesContainer,
  SettingsPageContainer,
  SplitPersonalNumberContainer,
  StandartReportContainer,
  StandartWorkingRangeContainer,
  StatisticsProfileContainer,
  SwitchPersonalNumberContainer,
  TaskProfileContainer,
  TasksProfileContainer,
  UniqueWorkingRangeContainer,
  UserProfileContainer,
  WorkWithIndividualDeviceContainer,
  WorkWithIndividualDeviceType,
  WorkWithReadingsContainer,
} from './router.imports';
import { useRouterContext } from './router.hooks';
import {
  DistrictBordersRouterWrapper,
  TasksRouterWrapper,
} from './router.components';

export const useRoutes = (
  currentUserRoles: ESecuredIdentityRoleNameStringDictionaryItem[],
) => {
  const {
    redirectRoute,
    initialTasksPath,
    isDispatcher,
    isShowNodeArchivePage,
    isAdministrator,
    isAuth,
    isExecutor,
    isSeniorOperator,
    isOperator,
  } = useRouterContext(currentUserRoles);

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
      path: '/registration*',
      element: <RegistrationContainer />,
    },
    {
      path: '*',
      element: <Navigate replace to={redirectRoute} />,
    },
    {
      path: '/',
      element: <LayoutContainer />,
      children: [
        {
          path: '/',
          element: <Navigate replace to={redirectRoute} />,
        },
        {
          path: '/supervisor/currentAnalytics',
          element: <CurrentAnalyticsContainer />,
        },
        {
          path: '/supervisor/commonAnalytics',
          element: <CommonAnalyticsContainer />,
        },
        {
          path: '/supervisor/consumption',
          element: <>Потребление ресурсов</>,
        },
        {
          path: '/actsJournal',
          element: isOperator ? <ActsJournalContainer /> : <AccessDeniedPage />,
        },
        {
          path: '/buildings/create',
          element: isAdministrator ? (
            <CreateObjectContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/buildings/:buildingId/addChessBoard',
          element: <AddChessBoardContainer />,
        },
        {
          path: '/buildings/:houseCategory/:buildingId/edit',
          element: isAdministrator ? (
            <EditObjectContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/buildings/:houseCategory/:buildingId/addNode',
          element:
            isAdministrator || isExecutor ? (
              <CreateNodeContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/buildings/:houseCategory/:buildingId/addApartment',
          element:
            isAdministrator || isSeniorOperator ? (
              <AddApartmentContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/districtBordersSettings',
          element: <DistrictBordersRouterWrapper />,
          children: [
            {
              path: '/districtBordersSettings/createByHousingStocksList',
              element:
                isOperator || isSeniorOperator ? (
                  <DistrictBordersByAddressContainer />
                ) : (
                  <AccessDeniedPage />
                ),
            },
            {
              path: '/districtBordersSettings/editDistrictBorders/:id',
              element:
                isOperator || isSeniorOperator ? (
                  <EditDistrictBordersContainer />
                ) : (
                  <AccessDeniedPage />
                ),
            },
            {
              path: '/districtBordersSettings/createByMap',
              element:
                isAdministrator || isSeniorOperator ? (
                  <CreateDistrictBorderMapContainer />
                ) : (
                  <AccessDeniedPage />
                ),
            },
            {
              path: '/districtBordersSettings/manageDistricts',
              element:
                isAdministrator || isSeniorOperator ? (
                  <ManageDistrictsMapContainer />
                ) : (
                  <AccessDeniedPage />
                ),
            },
          ],
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
              element: <TasksProfileContainer />,
            },
          ],
        },
        {
          path: '/apartments/:apartmentId/edit',
          element:
            isAdministrator || isOperator ? (
              <EditApartmentProfileContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/apartments/:apartmentId/:tabSection?',
          element: <ApartmentProfileContainer />,
        },
        {
          path: '/workWithReadings',
          element: <WorkWithReadingsContainer />,
        },
        {
          path: '/workWithReadings/standart',
          element: <StandartReportContainer />,
        },
        {
          path: '/workWithReadings/archive',
          element: <ReadingReportsArchiveContainer />,
        },
        {
          path: '/buildings/:searchType?',
          element: <ObjectsProfileContainer />,
        },
        {
          path: '/buildings/livingProfile/:buildingId/:section?',
          element: <HousingStockProfileContainer />,
        },
        {
          path: '/buildings/nonResidentialProfile/:buildingId/:section?',
          element: <NonResidentialBuildingProfileContainer />,
        },
        {
          path: '/devices/addNode',
          element:
            isAdministrator || isExecutor ? (
              <CreateNodeContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/devices/:type?',
          element: <DevicesPageContainer />,
        },
        {
          path: '/changeODPU/:oldDeviceId',
          element:
            isAdministrator || isExecutor ? (
              <ChangeODPUContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/electricNode/:deviceId/edit',
          element:
            isAdministrator || isOperator || isExecutor ? (
              <EditElectricNodeContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/companyProfile/editManagingFirmUser/:id',
          element: isAdministrator ? (
            <EditEmployeeContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/companyProfile/:section?',
          element: isAdministrator ? (
            <CompanyProfileContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/editCompany',
          element: isAdministrator ? (
            <EditCompanyContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/userProfile/:id',
          element: isAdministrator ? (
            <EmployeeProfileContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/currentUserProfile/:section?',
          element: <UserProfileContainer />,
        },
        {
          path: '/currentUserEdit/:id',
          element: <CurrentUserEditServiceContainer />,
        },
        {
          path: '/calculators/:deviceId/edit',
          element:
            isAdministrator || isExecutor ? (
              <EditCalculatorContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/calculators/:deviceId/profile/:section?',
          element: <CalculatorProfileContainer />,
        },
        {
          path: '/nodes/:nodeId/edit',
          element:
            isAdministrator || isExecutor ? (
              <EditNodeContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/nodes/:nodeId/:section?',
          element: <NodeProfileContainer />,
        },
        {
          path: '/housingMeteringDevices/:deviceId/edit',
          element:
            isAdministrator || isExecutor || isOperator ? (
              <EditHousingMeteringDeviceContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/housingMeteringDevices/:deviceId/profile/:section?',
          element: <HousingMeteringDeviceProfileContainer />,
        },
        {
          path: '/individualDeviceProfile/:id',
          element:
            isExecutor || isAdministrator || isOperator ? (
              <IndividualMeteringDeviceProfileContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/individualDevices/:deviceId/edit',
          element:
            isAdministrator || isExecutor || isOperator ? (
              <EditIndividualDeviceContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/meters/:section/:id?',
          element: <MetersContainer />,
        },
        {
          path: '/services/:service/:section/:id?',
          element: <ServicesContainer />,
        },
        {
          path: '/nodeArchive/:nodeId',
          element: isShowNodeArchivePage ? (
            <NodeArchivePageContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/settings/:section?',
          element: isOperator ? (
            <SettingsPageContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/adminSettings/:section?',
          element: isAdministrator ? (
            <SettingsPageContainer isAdminSettings />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/adminSettings/operatingRanges/Standart',
          element: isAdministrator ? (
            <StandartWorkingRangeContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/adminSettings/operatingRanges/Group',
          element: isAdministrator ? (
            <GroupWorkingRangeContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/adminSettings/operatingRanges/Unique',
          element: isAdministrator ? (
            <UniqueWorkingRangeContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/statistics/',
          element: <Navigate replace to="/statistics/resourceConsumption" />,
        },
        {
          path: '/statistics/subscribersConsumption',
          element: (
            <Navigate replace to="/statistics/subscribersConsumption/houses" />
          ),
        },
        {
          path: '/statistics/:grouptype/:searchType?',
          element: <StatisticsProfileContainer />,
        },
        {
          path: '/reports',
          element: isSeniorOperator ? (
            <ReportsContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/main',
          element: isAdministrator ? (
            <MainServiceContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/statistics/:grouptype/:searchType?',
          element: <StatisticsProfileContainer />,
        },
        {
          path: '/reports/:reportType',
          element: isSeniorOperator ? (
            <ReportViewContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/apartment/:id/addIndividualDevice',
          element:
            isAdministrator || isOperator ? (
              <AddIndividualDeviceContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/apartment/:id/individualDevice/:deviceId/switch',
          element:
            isAdministrator || isOperator ? (
              <WorkWithIndividualDeviceContainer
                type={WorkWithIndividualDeviceType.switch}
              />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/apartment/:id/individualDevice/:deviceId/check',
          element:
            isAdministrator || isOperator ? (
              <WorkWithIndividualDeviceContainer
                type={WorkWithIndividualDeviceType.check}
              />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/apartment/:id/individualDevice/:deviceId/reopen',
          element: isOperator ? (
            <WorkWithIndividualDeviceContainer
              type={WorkWithIndividualDeviceType.reopen}
            />
          ) : (
            <AccessDeniedPage />
          ),
        },
        {
          path: '/apartment/:id/homeowners/add',
          element:
            isAdministrator || isOperator ? (
              <AddPersonalNumberContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/apartment/:id/homeowners/:homeownerId/split',
          element:
            isAdministrator || isOperator ? (
              <SplitPersonalNumberContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/apartment/:id/homeowners/:homeownerId/edit',
          element:
            isAdministrator || isOperator ? (
              <EditPersonalNumberContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/apartment/:id/homeowners/:homeownerId/switch',
          element:
            isAdministrator || isOperator ? (
              <SwitchPersonalNumberContainer />
            ) : (
              <AccessDeniedPage />
            ),
        },
        {
          path: '/disabledResources',
          element: isDispatcher ? (
            <ResourceDisablingScheduleContainer />
          ) : (
            <AccessDeniedPage />
          ),
        },
        { path: '/access-denied/', element: <AccessDeniedPage /> },
        {
          path: '/services',
          element: <Navigate replace to="/services/seal" />,
        },
        {
          path: '/services/seal',
          element: <Navigate replace to="/services/seal/select" />,
        },
        {
          path: '/meters',
          element: <Navigate replace to="/meters/apartments" />,
        },
      ],
    },
  ];
};

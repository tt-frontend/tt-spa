import { Outlet } from 'react-router-dom';
import {
  districtBordersByAddressService,
  tasksProfileService,
} from './router.imports';

const { TasksIsOpen } = tasksProfileService.gates;
const { DistrictBordersGroupPageGate } = districtBordersByAddressService.gates;

export const TasksRouterWrapper = () => {
  return (
    <>
      <TasksIsOpen />
      <Outlet />
    </>
  );
};

export const DistrictBordersRouterWrapper = () => {
  return (
    <>
      <DistrictBordersGroupPageGate />
      <Outlet />
    </>
  );
};

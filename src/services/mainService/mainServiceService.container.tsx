import { useUnit } from 'effector-react';
import { mainServiceService } from './mainServiceService.models';
import { Filter } from './Filter';

const {
  inputs,
  outputs,
  gates: { PageGate },
} = mainServiceService;

export const MainServiceContainer = () => {
  const { filter, setFilter, resetFilter } = useUnit({
    filter: outputs.$filter,
    setFilter: inputs.setFilter,
    resetFilter: inputs.resetFilter,
  });

  return (
    <>
      <PageGate />
      <Filter filter={filter} setFilter={setFilter} resetFilter={resetFilter} />
    </>
  );
};

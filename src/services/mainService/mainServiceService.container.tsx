import { useUnit } from 'effector-react';
import { mainServiceService } from './mainServiceService.models';
import { Filter } from './Filter';
import { PageHeader } from 'ui-kit/shared/PageHeader';
import { Dashboard } from './Dashboard';

const {
  inputs,
  outputs,
  gates: { PageGate },
} = mainServiceService;

export const MainServiceContainer = () => {
  const { filter, setFilter, resetFilter, data, isLoading } = useUnit({
    filter: outputs.$filter,
    setFilter: inputs.setFilter,
    resetFilter: inputs.resetFilter,
    data: outputs.$mainData,
    isLoading: outputs.$isLoading,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <PageHeader title="УК «Лесные озёра»" />
      <PageGate />
      <Filter filter={filter} setFilter={setFilter} resetFilter={resetFilter} />
      <Dashboard isLoading={isLoading} data={data} />
    </div>
  );
};

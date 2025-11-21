import { FC } from 'react';
import { Wrapper } from './AddEntrancePanel.styled';
import { Props } from './AddEntrancePanel.types';
import { BlueprintPanel } from '../BlueprintPanel';
import { Button } from 'ui-kit/Button';

export const AddEntrancePanel: FC<Props> = () => {
  return (
    <BlueprintPanel
      title="Добавить подъезд"
      footer={
        <>
          <Button type="ghost" size="s">
            Отмена
          </Button>
          <Button wide size="s">
            Добавить
          </Button>
        </>
      }
    >
      <Wrapper></Wrapper>
    </BlueprintPanel>
  );
};

import { FC } from 'react';
import { Wrapper } from './AddEntrancePanel.styled';
import { Props } from './AddEntrancePanel.types';
import { BlueprintPanel } from '../BlueprintPanel';
import { Button } from 'ui-kit/Button';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';

export const AddEntrancePanel: FC<Props> = ({ closeAddEntrancePanel }) => {
  return (
    <BlueprintPanel
      title="Добавить подъезд"
      footer={
        <>
          <Button type="ghost" size="s" onClick={closeAddEntrancePanel}>
            Отмена
          </Button>
          <Button wide size="s">
            Добавить
          </Button>
        </>
      }
    >
      <Wrapper>
        <FormItem label="Номер подъезда">
          <Input type="number" small placeholder="Введите" />
        </FormItem>
        <FormItem label="Количество этажей">
          <Input type="number" small placeholder="Введите" />
        </FormItem>
        <FormItem label="Жилые помещения начинаются с этажа">
          <Input type="number" small placeholder="Введите" />
        </FormItem>
        <FormItem label="Количество квартир на этаже">
          <Input type="number" small placeholder="Введите" />
        </FormItem>
      </Wrapper>
    </BlueprintPanel>
  );
};

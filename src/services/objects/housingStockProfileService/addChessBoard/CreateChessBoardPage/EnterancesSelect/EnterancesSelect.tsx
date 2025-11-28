import { FC, useCallback } from 'react';
import { Entrance, Wrapper } from './EnterancesSelect.styled';
import { Props } from './EnterancesSelect.types';
import { entranceToggleFunction } from './EnterancesSelect.utils';

export const EnterancesSelect: FC<Props> = ({
  entrances,
  handleChange,
  selectedEntrances,
  type = 'multiple',
}) => {
  const onClickEntrance = useCallback(
    (entrance: number | null) => {
      if (entrance === null) return null;

      const toggleFunction = entranceToggleFunction[type];
      const updatedEntrances = toggleFunction(entrance, selectedEntrances);

      handleChange(updatedEntrances);
    },
    [handleChange, selectedEntrances],
  );

  return (
    <Wrapper>
      {entrances.map((entrance) => {
        const isSelected =
          typeof entrance === 'number' && selectedEntrances.includes(entrance);

        return (
          <Entrance
            key={entrance}
            isSelected={isSelected}
            onClick={() => onClickEntrance(entrance)}
          >
            {entrance}
          </Entrance>
        );
      })}
    </Wrapper>
  );
};

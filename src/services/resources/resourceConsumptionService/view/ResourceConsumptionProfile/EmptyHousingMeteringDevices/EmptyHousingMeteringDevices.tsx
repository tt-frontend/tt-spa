import { FC } from 'react';
import { Text, Wrapper } from './EmptyHousingMeteringDevices.styled';

export const EmptyHousingMeteringDevices: FC = () => {
  return (
    <Wrapper>
      <Text>
        У вашей организации не подключен опрос домовых приборов учета.
      </Text>
      <Text>
        Дополните данные и просматривайте полную статистку по ресурсам.
      </Text>
    </Wrapper>
  );
};

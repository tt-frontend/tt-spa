import { FC } from 'react';
import {
  EntranceWrapper,
  FloorIndex,
  FloorWrapper,
  Wrapper,
} from './ChessBoardView.styled';
import { Props } from './ChessBoardView.types';
import { ChessboardItem } from './ChessboardItem';

export const ChessBoardView: FC<Props> = ({ chessboardCreateData }) => {
  return (
    <Wrapper>
      {chessboardCreateData.sections?.map((section) => (
        <EntranceWrapper key={section.sectionNumber}>
          <FloorWrapper>
            <FloorIndex />
            <ChessboardItem wide type="outline">
              {section.sectionNumber} Подъезд
            </ChessboardItem>
          </FloorWrapper>
          {section.floors?.map((floor) => (
            <FloorWrapper key={floor.floorNumber}>
              <ChessboardItem type="empty">{floor.floorNumber}</ChessboardItem>
              {floor.apartmentNumbers?.map((apartment) => (
                <ChessboardItem key={apartment}>{apartment}</ChessboardItem>
              ))}
              {floor.apartmentNumbers?.length === 0 && (
                <ChessboardItem type="flat" wide>
                  + Добавьте нежилое помещение
                </ChessboardItem>
              )}
            </FloorWrapper>
          ))}
        </EntranceWrapper>
      ))}
    </Wrapper>
  );
};

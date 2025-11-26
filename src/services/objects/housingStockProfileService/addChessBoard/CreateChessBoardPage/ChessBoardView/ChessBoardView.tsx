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
          {section.floors?.map((floor) => (
            <FloorWrapper key={floor.floorNumber}>
              <FloorIndex>{floor.floorNumber}</FloorIndex>
              {floor.apartmentNumbers?.map((apartment) => (
                <ChessboardItem key={apartment}>{apartment}</ChessboardItem>
              ))}
            </FloorWrapper>
          ))}
        </EntranceWrapper>
      ))}
    </Wrapper>
  );
};

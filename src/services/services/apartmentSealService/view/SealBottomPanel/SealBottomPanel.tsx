import React, { FC } from 'react';
import { Wrapper } from './SealBottomPanel.styled';
import { SealBottomPanelProps } from './SealBottomPanel.types';
import { Button } from 'ui-kit/Button';
import { useNavigate } from 'react-router-dom';
import { StickyPanel } from 'ui-kit/shared/StickyPanel';

export const SealBottomPanel: FC<SealBottomPanelProps> = ({
  apartment,
  openCreateSealAppointmentModal,
  isAppointmentExist,
  openRemoveAppointmentModal,
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <StickyPanel id="bottomPanel">
        <Button
          type="ghost"
          size="s"
          onClick={() => navigate(`/apartments/${apartment.id}`)}
        >
          Перейти в профиль квартиры
        </Button>
        {!isAppointmentExist && (
          <Button
            onClick={openCreateSealAppointmentModal}
            size="s"
            type={'primary'}
          >
            Записать на опломбировку
          </Button>
        )}
        {isAppointmentExist && (
          <>
            <Button
              onClick={openCreateSealAppointmentModal}
              size="s"
              type={'ghost'}
            >
              Редактировать запись
            </Button>
            <Button
              onClick={openRemoveAppointmentModal}
              size="s"
              type={'danger'}
            >
              Удалить запись
            </Button>
          </>
        )}
      </StickyPanel>
    </Wrapper>
  );
};

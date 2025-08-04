import { FC } from 'react';
import { Wrapper } from './FinalStageModal.styled';
import { Props } from './FinalStageModal.types';
import { FormModal } from 'ui-kit/Modals/FormModal';
import { CreateApartmentFinalStageForm } from './CreateApartmentFinalStageForm';

export const FinalStageModal: FC<Props> = ({
  createApartmentData,
  closePreviewModal,
  isPreviewModalOpen,
  isCreateLoading,
  handlePostCreateApartment,
}) => {
  const formId = 'create-apartment-final-stage-form';

  return (
    <Wrapper>
      <FormModal
        title="Добавление нового объекта"
        visible={isPreviewModalOpen}
        onCancel={closePreviewModal}
        onSubmit={handlePostCreateApartment}
        form={
          <CreateApartmentFinalStageForm
            formId={formId}
            createApartmentData={createApartmentData}
          />
        }
        formId={formId}
        submitBtnText="Создать квартиру"
        loading={isCreateLoading}
      />
    </Wrapper>
  );
};

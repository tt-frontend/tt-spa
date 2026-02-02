import { FC, useEffect, useState } from 'react';
import { AddButton, FormWrapper, Wrapper } from './DivideApartment.styled';
import { Props } from './DivideApartment.types';
import { FormModal } from 'ui-kit/Modals/FormModal';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { Alert } from 'ui-kit/Alert';
import { LinkButton } from 'ui-kit/shared/LinkButton';
import { CloseIcon } from 'ui-kit/icons';

export const DivideApartment: FC<Props> = ({
  divideApartmnentModalState,
  handleCloseDownModal,
  handleSaveDivideApartment,
}) => {
  const oldNumber = divideApartmnentModalState?.apartmentNumber;

  const [newApartments, setNewApartments] = useState<string[]>([
    `${oldNumber}/1`,
    `${oldNumber}/2`,
  ]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!divideApartmnentModalState) setNewApartments([]);
    else setNewApartments([`${oldNumber}/1`, `${oldNumber}/2`]);
  }, [divideApartmnentModalState]);

  const handleInputChange = (
    index: number,
    raw: React.ChangeEvent<HTMLInputElement> | string,
  ) => {
    const value =
      raw instanceof Object && 'target' in raw ? raw.target.value : (raw ?? '');
    setNewApartments((prev) => prev.map((v, i) => (i === index ? value : v)));
    setError(null);
  };

  const handleAdd = () => {
    setNewApartments((prev) => [...prev, `${oldNumber}/${prev.length + 1}`]);
    setError(null);
  };

  const handleRemove = (index: number) => {
    setNewApartments((prev) => prev.filter((_, i) => i !== index));
    setError(null);
  };

  const numberPrefix = (s: string) => {
    // extract leading integer (before slash or non-digit)
    const match = String(s)
      .trim()
      .match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : NaN;
  };

  const validate = (): { ok: boolean; message?: string } => {
    if (!newApartments.length)
      return { ok: false, message: 'Добавьте хотя бы одно помещение' };

    // non-empty
    for (const v of newApartments) {
      if (!String(v).trim())
        return {
          ok: false,
          message: 'Номера помещений не должны быть пустыми',
        };
    }

    // uniqueness
    const set = new Set(newApartments.map((v) => String(v).trim()));
    if (set.size !== newApartments.length)
      return { ok: false, message: 'Номера помещений должны быть уникальными' };

    // disallow previous/next ordinal relative to old number (based on numeric prefix)
    const oldInt = numberPrefix(String(oldNumber ?? ''));
    if (!isNaN(oldInt)) {
      for (const v of newApartments) {
        const pref = numberPrefix(v);
        if (!isNaN(pref) && (pref === oldInt - 1 || pref === oldInt + 1)) {
          return {
            ok: false,
            message:
              'Нельзя присвоить следующий или предыдущий порядковый номер одному из помещений. Оставьте предложенный номер или выберите новый.',
          };
        }
      }
    }

    return { ok: true };
  };

  const handleSubmit = () => {
    const v = validate();
    if (!v.ok) {
      setError(v.message ?? 'Ошибка валидации');
      return;
    }

    // TODO: call API to create new apartments. For now, just log and close.
    // The caller can extend this by providing a handler via props if needed.
    handleSaveDivideApartment({
      newApartmentNumbers: newApartments,
      sectionIndex: divideApartmnentModalState?.sectionIndex ?? 0,
      floorIndex: divideApartmnentModalState?.floorIndex ?? 0,
      apartmentIndex: divideApartmnentModalState?.apartmentIndex ?? 0,
    });
  };

  return (
    <FormModal
      title="Разделить квартиру"
      visible={Boolean(divideApartmnentModalState)}
      formId="divide-apartmnent-chessboard"
      onSubmit={handleSubmit}
      onCancel={() => handleCloseDownModal()}
      form={
        <Wrapper>
          <div>
            Вы разделяете квартиру:{' '}
            <strong>{divideApartmnentModalState?.apartmentNumber}.</strong>
          </div>
          <div>
            Будут созданы новые квартиры, которым будут присвоены новые номера.
          </div>
          <FormWrapper>
            {newApartments.map((number, index) => (
              <FormItem label={`Новый № помещения ${index + 1}`} key={index}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Input
                    placeholder="Введите № Кв."
                    value={number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(index, e)
                    }
                    suffix={
                      index > 1 && (
                        <LinkButton onClick={() => handleRemove(index)}>
                          <CloseIcon />
                        </LinkButton>
                      )
                    }
                  />
                </div>
              </FormItem>
            ))}
            <AddButton>
              <LinkButton onClick={handleAdd}>+ Добавьте помещение</LinkButton>
            </AddButton>
          </FormWrapper>
          {error ? (
            <Alert icon="warning" type="danger">
              {error}
            </Alert>
          ) : null}
          <Alert icon="info">
            Нельзя присвоить следующий или предыдущий порядковый номер одному из
            помещений. Оставьте предложенный номер или выберите новый.
          </Alert>
        </Wrapper>
      }
    />
  );
};

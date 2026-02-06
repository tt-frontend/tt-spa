import * as Yup from 'yup';

export const combineApartmentsValidationSchema = Yup.object({
  selectedApartmentIndexes: Yup.array()
    .of(Yup.number().integer())
    .min(2, 'Выберите минимум две квартиры для объединения')
    .test(
      'adjacent-apartments',
      'Квартиры для объединения должны быть соседними',
      (value) => {
        if (!value || value.length < 2) return false;

        const sorted: number[] = [...value]
          .filter((v): v is number => typeof v === 'number')
          .sort((a, b) => a - b);

        for (let i = 1; i < sorted.length; i++) {
          if (
            typeof sorted[i - 1] === 'number' &&
            sorted[i] !== sorted[i - 1] + 1
          ) {
            return false;
          }
        }

        return true;
      },
    )
    .required('Выберите квартиры для объединения'),

  newApartmentNumber: Yup.string()
    .trim()
    .required('Укажите номер новой квартиры'),
});

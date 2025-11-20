import {
  DataForHousingConsumptionPlotServiceModel,
  DateTimeDoubleDictionaryItem,
} from 'api/types';
import dayjs from 'dayjs';

export function modelToArray(
  model: DataForHousingConsumptionPlotServiceModel | null,
): DateTimeDoubleDictionaryItem[] {
  if (!model?.housingConsumption) return [];
  return Object.entries(model.housingConsumption).map(([key, value]) => ({
    key: String(dayjs(key).date()),
    value: value || undefined,
  }));
}

export function getDynamicMinMax(
  housing: DateTimeDoubleDictionaryItem[] = [],
  housingPrev: DateTimeDoubleDictionaryItem[] = [],
  minDelta = 1,
  factor = 1.1,
): [number, number] {
  // объединяем данные
  const nums = [...housing, ...housingPrev]
    .map((d) => d.value)
    .filter((v): v is number => typeof v === 'number' && !Number.isNaN(v));

  // нет данных
  if (nums.length === 0) {
    return [0, minDelta];
  }

  let minValue = Math.min(...nums);
  let maxValue = Math.max(...nums);

  // если все значения одинаковые
  if (minValue === maxValue) {
    return [minValue, minValue + minDelta];
  }

  // добавляем небольшой отступ
  const range = maxValue - minValue;
  const padding = range * (factor - 1);

  minValue -= padding;
  maxValue += padding;

  // если все данные >= 0 — не уводим минимум в отрицательную область
  if (Math.min(...nums) >= 0 && minValue < 0) {
    minValue = 0;
  }

  // если все данные <= 0 — не уводим максимум в положительную область
  if (Math.max(...nums) <= 0 && maxValue > 0) {
    maxValue = 0;
  }

  // минимальное расстояние
  if (maxValue - minValue < minDelta) {
    maxValue = minValue + minDelta;
  }

  return [minValue, maxValue];
}

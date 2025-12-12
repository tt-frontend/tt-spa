/**
 * Вставляет новый элемент в массив сразу после первого элемента,
 * для которого predicate возвращает true.
 *
 * Если ни один элемент не прошёл predicate, массив возвращается без изменений.
 */
export function insertAfter<T>(
  list: T[],
  newItem: T,
  predicate: (item: T, index: number, array: T[]) => boolean,
): T[] {
  const index = list.findIndex(predicate);

  if (index === -1) {
    return list;
  }

  return [...list.slice(0, index + 1), newItem, ...list.slice(index + 1)];
}

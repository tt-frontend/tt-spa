export function getDeviceWordForm(count: number) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'приборов';
  }

  if (lastDigit === 1) {
    return 'прибор';
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'прибора';
  }

  return 'приборов';
}

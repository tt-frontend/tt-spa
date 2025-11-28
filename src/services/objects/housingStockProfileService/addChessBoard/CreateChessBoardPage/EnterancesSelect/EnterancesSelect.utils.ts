type ChangeEntranceCF = (
  entrance: number,
  selectedEntrances: number[],
) => number[];

export const toggleEntranceSelectionMultiple: ChangeEntranceCF = (
  entrance,
  selectedEntrances,
) => {
  if (selectedEntrances.includes(entrance)) {
    return selectedEntrances.filter((item) => item !== entrance);
  }

  return [...selectedEntrances, entrance];
};

export const toggleEntranceSelectionSingle: ChangeEntranceCF = (
  entrance,
  selectedEntrances,
) => {
  if (selectedEntrances.includes(entrance)) {
    return [];
  }

  return [entrance];
};

export const entranceToggleFunction = {
  multiple: toggleEntranceSelectionMultiple,
  single: toggleEntranceSelectionSingle,
};

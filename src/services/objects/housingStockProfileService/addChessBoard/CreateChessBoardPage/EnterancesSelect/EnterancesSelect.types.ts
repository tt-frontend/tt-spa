export type Props = {
  entrances: (number | null)[];
  selectedEntrances: number[];
  handleChange: (entranceNumbers: number[]) => void;
  type?: 'single' | 'multiple';
};

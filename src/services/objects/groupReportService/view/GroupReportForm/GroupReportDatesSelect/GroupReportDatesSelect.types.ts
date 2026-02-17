export type GroupReportDatesSelectProps = {
  value: DateRange;
  setValue: (range: DateRange) => void;
  isDisabled: boolean;
  isSono?: boolean;
};

type DateRange = {
  From?: string;
  To?: string;
};

import dayjs from 'api/dayjs';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { GroupReportRangeOptions } from './GroupReportDatesSelect.constants';
import {
  DatePickerWrapper,
  RadioGroupSC,
} from './GroupReportDatesSelect.styled';
import { GroupReportDatesSelectProps } from './GroupReportDatesSelect.types';
import { RangePicker } from 'ui-kit/RangePicker';
import { Radio } from 'antd';

export const GroupReportDatesSelect: FC<GroupReportDatesSelectProps> = ({
  value,
  setValue,
  isDisabled,
  isSono,
}) => {
  const [currentRange, setCurrentRange] = useState<GroupReportRangeOptions>(
    GroupReportRangeOptions.ThisMonth,
  );

  useEffect(() => {
    if (isSono) {
      setCurrentRange(GroupReportRangeOptions.LastMonth);
      handleRangeTypeChange(GroupReportRangeOptions.LastMonth);
      return;
    }
  }, [isSono]);

  const handleRangeTypeChange = useCallback(
    (range: GroupReportRangeOptions) => {
      if (range === GroupReportRangeOptions.ThisMonth) {
        return setValue({
          From: dayjs().startOf('month').format(),
          To: dayjs().endOf('day').format(),
        });
      }
      if (range === GroupReportRangeOptions.LastMonth) {
        return setValue({
          From: dayjs().subtract(1, 'months').startOf('month').format(),
          To: isSono
            ? dayjs().subtract(0, 'months').startOf('month').format()
            : dayjs().subtract(1, 'months').endOf('month').format(),
        });
      }
    },
    [setValue],
  );

  return (
    <>
      {!isSono && (
        <>
          <RadioGroupSC
            value={currentRange}
            onChange={(e) => {
              setCurrentRange(e.target.value);
              handleRangeTypeChange(e.target.value);
            }}
            options={[
              {
                value: GroupReportRangeOptions.ThisMonth,
                label: 'С начала месяца',
                disabled: isSono,
              },
              {
                value: GroupReportRangeOptions.LastMonth,
                label: 'За прошлый месяц',
              },
              {
                value: GroupReportRangeOptions.CustomRange,
                label: 'Произвольный период',
                disabled: isDisabled,
              },
            ]}
          />

          <DatePickerWrapper>
            <RangePicker
              small
              disabled={
                currentRange !== GroupReportRangeOptions.CustomRange ||
                isDisabled
              }
              disabledDate={(date) => {
                const currentDay = dayjs().startOf('day');
                const diff = currentDay.diff(date.startOf('day'));
                return diff < 0;
              }}
              allowClear={false}
              format={{ format: 'DD.MM.YYYY', type: 'mask' }}
              value={[dayjs(value.From), dayjs(value.To)]}
              onChange={(range) => {
                if (
                  !range ||
                  currentRange !== GroupReportRangeOptions.CustomRange
                ) {
                  return null;
                }
                const [From, To] = range;
                setValue({ From: From?.format(), To: To?.format() });
              }}
            />
          </DatePickerWrapper>
        </>
      )}

      {isSono && (
        <>
          <RadioGroupSC
            value={currentRange}
            onChange={(value) => {
              const archiveType = value.target.value;
              setCurrentRange(archiveType);
              handleRangeTypeChange(archiveType);
            }}
          >
            <Radio value={GroupReportRangeOptions.LastMonth} checked={true}>
              За прошлый месяц
            </Radio>
            <Radio value={GroupReportRangeOptions.CustomRange}>
              Произвольный период
            </Radio>
          </RadioGroupSC>
          <RangePicker
            small
            picker="month"
            format="MM.YYYY"
            placeholder={['Дата начала', 'Дата окончания']}
            disabled={currentRange !== GroupReportRangeOptions.CustomRange}
            value={[dayjs(value.From), dayjs(value.To)]}
            onChange={(range) => {
              if (!range) {
                setValue({ From: undefined, To: undefined });
                return;
              }

              const from = dayjs(range[0]).startOf('month').format();
              const to = dayjs(range[1]).startOf('month').format();

              setValue({ From: from, To: to });
            }}
          />
        </>
      )}
    </>
  );
};

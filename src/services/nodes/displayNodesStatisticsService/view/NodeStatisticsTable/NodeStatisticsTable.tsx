import dayjs from 'api/dayjs';
import React, { FC, useCallback, useMemo, useState } from 'react';
import {
  NODE_STATISTICS_PAGE_SIZE,
  ReportEndTimeFormat,
  ReportStartTimeFormat,
  ReportTimeType,
} from './NodeStatisticsTable.constant';
import {
  PaginationSC,
  RowWrapper,
  TableWrapper,
  Wrapper,
} from './NodeStatisticsTable.styled';
import { NodeStatisticsTableProps } from './NodeStatisticsTable.types';
import { ToggleWithText } from './ToggleWithText';
import { Table } from 'ui-kit/Table';
import { ArchivesDataGroupValue } from 'api/types';

export const NodeStatisticsTable: FC<NodeStatisticsTableProps> = ({
  archiveData,
  graphType,
  reportType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  const timeConstructor = useCallback(
    (date: string) => {
      const startDateStr = dayjs(date)
        .utc(false)
        .startOf(ReportTimeType[reportType])
        .format(ReportStartTimeFormat[reportType]);

      const endDateStr = dayjs(date)
        .utc(false)
        .endOf(ReportTimeType[reportType])
        .format(ReportEndTimeFormat[reportType]);
      return `${startDateStr} - ${endDateStr}`;
    },
    [reportType],
  );

  const requiredArchiveReadings = archiveData.find(
    (reading) => reading.header === graphType,
  )?.data;

  const sortedArchiveReadings = useMemo(
    () =>
      (requiredArchiveReadings || []).sort((first, second) =>
        dayjs(first.time).diff(dayjs(second.time)),
      ),
    [requiredArchiveReadings],
  );

  if (sortedArchiveReadings.length === 0) {
    return null;
  }

  const start = (page - 1) * NODE_STATISTICS_PAGE_SIZE;
  const pagedReadings = sortedArchiveReadings.slice(
    start,
    start + NODE_STATISTICS_PAGE_SIZE,
  );

  const valueConstructor = (reading: ArchivesDataGroupValue) => {
    const { value, isCorrect } = reading;
    if (value === null || !isCorrect) {
      return 'Нет данных';
    }

    return String(value);
  };

  return (
    <Wrapper>
      <ToggleWithText
        isOpen={isOpen}
        handleOpen={() => setIsOpen(true)}
        handleClose={() => setIsOpen(false)}
        closeText="Скрыть таблицу"
        openText="Открыть таблицу"
      />
      {isOpen && (
        <>
          <TableWrapper>
            <Table
              elements={pagedReadings}
              columns={[
                {
                  label: 'Дата и время',
                  size: '340px',
                  render: (reading) => <>{timeConstructor(reading.time!)}</>,
                },
                {
                  label: graphType,
                  size: '340px',
                  render: (reading) => (
                    <RowWrapper isCorrect={reading.isCorrect}>
                      {valueConstructor(reading)}
                    </RowWrapper>
                  ),
                },
              ]}
            />
          </TableWrapper>
          <PaginationSC
            defaultCurrent={1}
            pageSize={NODE_STATISTICS_PAGE_SIZE}
            current={page}
            onChange={setPage}
            total={sortedArchiveReadings.length}
            showSizeChanger={false}
          />
        </>
      )}
    </Wrapper>
  );
};

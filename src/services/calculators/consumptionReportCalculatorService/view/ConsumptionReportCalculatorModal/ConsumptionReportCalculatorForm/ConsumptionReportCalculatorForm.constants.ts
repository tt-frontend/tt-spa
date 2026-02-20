import { ReportType } from 'api/types';

export const ReportTypeDictionary: {
  [key in ReportType]: string;
} = {
  [ReportType.Daily]: 'Суточный',
  [ReportType.Hourly]: 'Часовой',
  [ReportType.None]: 'Нет',
  [ReportType.Monthly]: 'Месячный',
  [ReportType.Total]: 'Общий',
  [ReportType.Current]: 'Текущий',
  [ReportType.TotalCurrent]: 'Текущая общая',
  [ReportType.Events]: 'Событийный',
  [ReportType.Other]: 'Другой',
  [ReportType.Settings]: 'Настройки',
};

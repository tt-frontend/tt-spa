import { RuleSet } from 'styled-components';

export type Props = {
  children: React.ReactNode;
  css?: RuleSet<object>;
} & React.HTMLAttributes<HTMLDivElement>;

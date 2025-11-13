import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div``;

// 🔹 Анимация вращения одной цифры
const roll = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const DigitWrapper = styled.span`
  display: inline-block;
  overflow: hidden;
  height: 1em;
  line-height: 1em;
  position: relative;
`;

export const Digit = styled.span<{ delay: number; duration: number }>`
  display: inline-block;
  animation: ${roll} ${({ duration }) => duration}s
    cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  animation-delay: ${({ delay }) => delay}s;
  position: relative;
`;

export const CountUpText = styled.div<{ fontSize?: string }>`
  display: inline-flex;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || '48px'};
  color: #272f5a;
  user-select: none;
  font-variant-numeric: tabular-nums;
`;

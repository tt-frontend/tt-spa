import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div``;

// 🔹 Кручение каждой цифры (как будто барабан прокручивается)
const roll = keyframes`
 0% {
    transform: translateY(100%) rotateX(-120deg);
    opacity: 0;
  }
  40% {
    transform: translateY(-10%) rotateX(20deg);
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotateX(0);
    opacity: 1;
  }
`;

export const DigitWrapper = styled.span`
  display: inline-block;
  overflow: hidden;
  height: 1em;
  line-height: 1em;
  perspective: 600px;
  position: relative;
`;

export const Digit = styled.span<{ delay: number; duration: number }>`
  display: inline-block;
  animation: ${roll} ${({ duration }) => duration}s
    cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: ${({ delay }) => delay}s;
  position: relative;
  transform-origin: center;
  will-change: transform, opacity;
`;

export const CountUpText = styled.div<{ fontSize?: string }>`
  display: inline-flex;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || '48px'};
  color: #272f5a;
  user-select: none;
  font-variant-numeric: tabular-nums;
`;

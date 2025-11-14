import { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface CountUpProps {
  value: number;
  duration?: number; // в секундах
  delay?: number;
  fontSize?: string;
}

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

const DigitWrapper = styled.span`
  display: inline-block;
  overflow: hidden;
  height: 1em;
  line-height: 1em;
  position: relative;
`;

const Digit = styled.span<{ delay: number; duration: number }>`
  display: inline-block;
  animation: ${roll} ${({ duration }) => duration}s
    cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
  animation-delay: ${({ delay }) => delay}s;
  position: relative;
`;

const CountUpText = styled.div<{ fontSize?: string }>`
  display: inline-flex;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || '48px'};
  color: #272f5a;
  user-select: none;
  font-variant-numeric: tabular-nums;
`;

export const CountUp: FC<CountUpProps> = ({
  value,
  duration = 1,
  delay = 0,
  fontSize,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const start = displayValue;
    const end = value;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.floor(start + (end - start) * eased);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, duration, delay]);

  const formatted = displayValue.toLocaleString();

  return (
    <CountUpText fontSize={fontSize}>
      {[...formatted].map((char, i) => (
        <DigitWrapper key={i}>
          <Digit delay={i * 0.05} duration={0.4}>
            {char}
          </Digit>
        </DigitWrapper>
      ))}
    </CountUpText>
  );
};

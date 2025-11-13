import { FC, useEffect, useState } from 'react';
import { CountUpText, Digit, DigitWrapper } from './CountUp.styled';
import { Props } from './CountUp.types';

export const CountUp: FC<Props> = ({
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

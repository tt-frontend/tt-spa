import { useState } from 'react';

export function useSteps(n: number) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < n - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return {
    step,
    nextStep,
    prevStep,
  };
}

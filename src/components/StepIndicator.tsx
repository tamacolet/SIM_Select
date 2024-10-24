import React from 'react';
import { Phone, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  label: string;
}

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const steps: Step[] = [
    { icon: Phone, label: '利用状況入力' },
    { icon: Search, label: 'プラン検索' },
  ];

  return (
    <div className="flex w-full">
      {steps.map((step, index) => (
        <div key={index} className="flex-1">
          <div className={`flex items-center ${index !== steps.length - 1 ? 'mb-4' : ''}`}>
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center
              ${currentStep > index ? 'bg-blue-600' : currentStep === index + 1 ? 'bg-blue-500' : 'bg-gray-300'}
              text-white
            `}>
              {React.createElement(step.icon, { size: 20 })}
            </div>
            {index !== steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 ${currentStep > index ? 'bg-blue-600' : 'bg-gray-300'}`} />
            )}
          </div>
          <div className="text-sm text-gray-600">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
import React, { useState } from 'react';
import Header from './components/Header';
import UsageForm from './components/UsageForm';
import PlanList from './components/PlanList';
import ComparisonTable from './components/ComparisonTable';
import StepIndicator from './components/StepIndicator';
import type { UsageData } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [usageData, setUsageData] = useState<UsageData>({
    dataUsage: 0,
    callDuration: 0,
    budget: 0
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">格安SIMプラン比較</h1>
            <p className="text-gray-600 mb-6">
              あなたの使用パターンに最適な格安SIMプランを見つけましょう。
              月々の料金を節約して、快適なモバイルライフを実現します。
            </p>

            <div className="flex justify-between items-center mb-8">
              <StepIndicator currentStep={currentStep} />
            </div>

            {currentStep === 1 && (
              <UsageForm 
                usageData={usageData}
                setUsageData={setUsageData}
                onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <PlanList 
                usageData={usageData}
                onBack={() => setCurrentStep(1)}
              />
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">人気の格安SIMプラン</h2>
            <ComparisonTable />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
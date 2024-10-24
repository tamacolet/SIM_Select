import React from 'react';
import { ChevronLeft, Check } from 'lucide-react';
import { plans } from '../data/carriers';
import type { UsageData } from '../types';

interface PlanListProps {
  usageData: UsageData;
  onBack: () => void;
}

const PlanList = ({ usageData, onBack }: PlanListProps) => {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        戻る
      </button>

      <div className="space-y-4">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{plan.carrier}</h3>
                <p className="text-sm text-gray-600">{plan.name}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">¥{plan.price}</p>
                <p className="text-sm text-gray-600">月額</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-lg font-medium text-gray-900">データ容量: {plan.data}</p>
              <ul className="mt-2 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                詳細を見る
              </button>
              <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                申し込む
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanList;
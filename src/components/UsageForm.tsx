import React from 'react';
import { Smartphone, PhoneCall, CreditCard } from 'lucide-react';
import type { UsageData } from '../types';

interface UsageFormProps {
  usageData: UsageData;
  setUsageData: (data: UsageData) => void;
  onNext: () => void;
}

const UsageForm = ({ usageData, setUsageData, onNext }: UsageFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Smartphone className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium">データ使用量</h3>
        </div>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="50"
            step="0.5"
            value={usageData.dataUsage}
            onChange={(e) => setUsageData({ ...usageData, dataUsage: Number(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0GB</span>
            <span>{usageData.dataUsage}GB</span>
            <span>50GB</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <PhoneCall className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium">通話時間（月間）</h3>
        </div>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={usageData.callDuration}
            onChange={(e) => setUsageData({ ...usageData, callDuration: Number(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0分</span>
            <span>{usageData.callDuration}分</span>
            <span>1000分</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium">予算</h3>
        </div>
        <div className="space-y-4">
          <input
            type="range"
            min="1000"
            max="10000"
            step="500"
            value={usageData.budget}
            onChange={(e) => setUsageData({ ...usageData, budget: Number(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>¥1,000</span>
            <span>¥{usageData.budget.toLocaleString()}</span>
            <span>¥10,000</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          プランを探す
        </button>
      </div>
    </form>
  );
};

export default UsageForm;
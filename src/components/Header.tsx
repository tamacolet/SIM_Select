import React from 'react';
import { Smartphone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Smartphone className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">格安SIM比較</span>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">プラン一覧</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">キャリア比較</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">よくある質問</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
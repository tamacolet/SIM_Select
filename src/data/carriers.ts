import type { Carrier, Plan } from '../types';

export const carriers: Carrier[] = [
  {
    name: 'IIJmio',
    network: 'ドコモ/au/ソフトバンク',
    minPrice: 1628,
    maxData: '20GB',
    features: {
      multiCarrier: true,
      esim: true,
      unlimitedCalls: false
    }
  },
  {
    name: 'OCNモバイル',
    network: 'ドコモ',
    minPrice: 1428,
    maxData: '30GB',
    features: {
      multiCarrier: false,
      esim: false,
      unlimitedCalls: true
    }
  },
  {
    name: 'LINEモバイル',
    network: 'ドコモ/ソフトバンク',
    minPrice: 1828,
    maxData: '15GB',
    features: {
      multiCarrier: true,
      esim: true,
      unlimitedCalls: true
    }
  }
];

export const plans: Plan[] = [
  {
    carrier: 'IIJmio',
    name: 'ギガプラン',
    data: '20GB',
    price: 2728,
    features: ['音声通話付き', '最大20GB', '3キャリア対応']
  },
  {
    carrier: 'OCNモバイル',
    name: 'スタンダードプラン',
    data: '10GB',
    price: 1628,
    features: ['音声通話付き', '最大10GB', 'セキュリティ対策付き']
  },
  {
    carrier: 'LINEモバイル',
    name: 'ベーシックプラン',
    data: '15GB',
    price: 2178,
    features: ['SNSカウントフリー', '最大15GB', 'LINE通話無料']
  }
];
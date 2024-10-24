export interface UsageData {
  dataUsage: number;
  callDuration: number;
  budget: number;
}

export interface Carrier {
  name: string;
  network: string;
  minPrice: number;
  maxData: string;
  features: {
    multiCarrier: boolean;
    esim: boolean;
    unlimitedCalls: boolean;
  };
}

export interface Plan {
  carrier: string;
  name: string;
  data: string;
  price: number;
  features: string[];
}
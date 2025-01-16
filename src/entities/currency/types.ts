export type CurrencyInfo = {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
};

export type Currency = {
  Date: Date;
  PreviousDate: Date;
  Valute: {
    [key: string]: CurrencyInfo;
  };
};

export type DateInfo = {
  Date: string;
  PreviousDate: string;
};

export type CurrenciesStore = {
  currencies: CurrencyInfo[];
  error: ErrorMessage | undefined;
  isLoading: boolean;
};

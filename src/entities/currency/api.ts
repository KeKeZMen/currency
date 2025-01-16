import api from "@shared/api";

import type { Currency } from "./types";

class CurrencyService {
  private apiUrl = `${import.meta.env.VITE_API_URL}`;

  public get() {
    return api<Currency>(`${this.apiUrl}/daily_json.js`);
  }
}

const currencyService = new CurrencyService();
export default currencyService;

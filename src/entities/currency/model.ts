import { ref } from "vue";
import { defineStore } from "pinia";
import { format } from "date-fns";

import currencyService from "./api";
import { type DateInfo, type CurrencyInfo } from "./types";

const useCurrencyStore = defineStore("currencies", () => {
  const currencyDateInfos = ref<DateInfo>();
  const currencies = ref<CurrencyInfo[]>([]);
  const error = ref<ErrorMessage | undefined>();
  const isLoading = ref<boolean>(false);

  const getCurrencies = async () => {
    currencies.value = [];
    error.value = undefined;
    isLoading.value = true;

    const { resData, resError } = await currencyService.get();

    if (!resData || resError) {
      error.value = resError;
    } else {
      currencies.value = Object.values(resData.Valute) as CurrencyInfo[];

      currencyDateInfos.value = {
        Date: format(resData.Date, "dd.MM.yyyy"),
        PreviousDate: format(resData.PreviousDate, "dd.MM.yyyy"),
      };
    }

    isLoading.value = false;
  };

  return {
    currencies,
    currencyDateInfos,
    error,
    isLoading,
    getCurrencies,
  };
});

export default useCurrencyStore;

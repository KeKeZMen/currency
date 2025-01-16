import { ref, watch } from "vue";

import type { CurrencyInfo } from "@entities/currency/types";

export default function useConvert() {
  const firstCurrencyAmount = ref<number>(1);
  const firstSelectedCurrency = ref<CurrencyInfo | undefined>();
  const secondSelectedCurrency = ref<CurrencyInfo | undefined>();

  const resultAmount = ref<number>(0);

  watch(
    [firstCurrencyAmount, firstSelectedCurrency, secondSelectedCurrency],
    () => {
      if (typeof secondSelectedCurrency.value !== "object") return;
      if (typeof firstSelectedCurrency.value !== "object") return;

      if (firstCurrencyAmount.value < 1) return (firstCurrencyAmount.value = 1);

      resultAmount.value =
        (firstSelectedCurrency.value.Value /
          secondSelectedCurrency.value.Value) *
        firstCurrencyAmount.value;
    }
  );

  return {
    firstCurrencyAmount,
    firstSelectedCurrency,
    secondSelectedCurrency,
    resultAmount,
  };
}

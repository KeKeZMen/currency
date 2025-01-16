<template>
  <div class="flex gap-3 flex-col max-w-[300px]">
    <div class="flex flex-col">
      <currency-select
        :currencies="currencyStore.currencies"
        v-model:amount.number="firstCurrencyAmount"
        v-model:selected-currency="firstSelectedCurrency"
      ></currency-select>

      <span class="rotate-90 text-2xl text-center">></span>

      <currency-select
        :currencies="currencyStore.currencies"
        v-model:selected-currency="secondSelectedCurrency"
        :disabled="!firstSelectedCurrency"
      ></currency-select>
    </div>

    <p
      v-if="secondSelectedCurrency && firstSelectedCurrency"
      class="text-center"
    >
      {{ firstCurrencyAmount }}
      {{ firstSelectedCurrency.Name }}
      равно <br />
      <span class="text-2xl text-wrap font-bold">
        {{ resultAmount.toFixed(3) }}
        {{ secondSelectedCurrency.Name }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
  import useCurrencyStore from "@entities/currency/model";
  import CurrencySelect from "@entities/currency/ui/currency-select";
  import useConvert from "./hooks/useConvert";

  const currencyStore = useCurrencyStore();

  const {
    firstCurrencyAmount,
    firstSelectedCurrency,
    secondSelectedCurrency,
    resultAmount,
  } = useConvert();
</script>

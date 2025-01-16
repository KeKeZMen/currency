<template>
  <template v-if="currencyStore.isLoading">
    <p>Loading</p>
  </template>

  <template v-else>
    <div
      v-if="currencyStore.currencies"
      class="flex flex-col gap-6 h-full"
    >
      <app-currency-list></app-currency-list>
      <app-currency-converter
        class="self-center mt-28"
      ></app-currency-converter>
    </div>

    <p v-else-if="currencyStore.error">{{ currencyStore.error.message }}</p>

    <p v-else>Ошибка сервера</p>
  </template>
</template>

<script setup lang="ts">
  import useCurrencyStore from "@entities/currency/model";

  import AppCurrencyList from "./components/app-currency-marquee";
  import AppCurrencyConverter from "./components/app-currency-converter";

  const currencyStore = useCurrencyStore();
  currencyStore.getCurrencies();
</script>

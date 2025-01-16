<template>
  <marquee class="flex">
    <div class="flex gap-[15px]">
      <app-currency-marquee-item
        v-for="currencyData of currencyStore.currencies"
        :key="currencyData.ID"
        :currency-info="currencyData"
      ></app-currency-marquee-item>
    </div>
  </marquee>
</template>

<script setup lang="ts">
  import useCurrencyStore from "@entities/currency/model";
  import AppCurrencyMarqueeItem from "@entities/currency/ui/app-currency-marquee-item";

  const currencyStore = useCurrencyStore();
</script>

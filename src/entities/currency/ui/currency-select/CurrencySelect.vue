<template>
  <div
    :class="[
      'rounded-md w-[300px] flex border border-black',
      disabled && 'opacity-50',
    ]"
  >
    <input
      v-if="amount"
      :value="amount"
      type="number"
      :class="[
        'outline-none w-1/3 pl-4 py-4 border-r border-black rounded-l-md',
        !selectedCurrency && 'opacity-50',
      ]"
      @input="handleInputAmount"
      :disabled="!selectedCurrency"
    />
    <select
      :value="selectedCurrency ? selectedCurrency.ID : 'not-selected'"
      @change="handleChangeSelectedCurrency"
      :disabled="disabled"
      placeholder="Выберите валюту"
      :class="[
        'truncate rounded-r-md px-2 mx-2 outline-none bg-inherit',
        !amount ? 'rounded-md py-4 w-full' : 'w-2/3',
      ]"
    >
      <option value="not-selected">Выберите валюту</option>
      <option
        v-for="currency in currencies"
        :value="currency.ID"
        :key="currency.ID"
      >
        {{ currency.Name }}
      </option>
    </select>
  </div>
  <!-- <div class="bg-black rounded-md p-6">
    <input
      v-if="amountModel"
      type="number"
      :disabled="!currencyModel"
      v-model.number="amountModel"
    />
    <select
      v-model="currencyModel"
      :disabled="disabled"
    >
      <option
        v-for="currency in currencies"
        :value="currency"
        :key="currency.ID"
      >
        {{ currency.Name }}
      </option>
    </select>
  </div> -->
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  import type { CurrencyInfo } from "@entities/currency/types";

  const props = defineProps<{
    currencies: CurrencyInfo[];
    disabled?: boolean;
    amount?: number;
    selectedCurrency?: CurrencyInfo;
  }>();

  const emit = defineEmits(["update:amount", "update:selectedCurrency"]);

  const handleInputAmount = (e: Event) => {
    const element = e.target as HTMLInputElement;

    emit("update:amount", element.value);
  };

  const handleChangeSelectedCurrency = (e: Event) => {
    const { value } = e.target as HTMLSelectElement;

    const selectedCurrency = props.currencies.find(
      (currency) => currency.ID === value
    );

    emit("update:selectedCurrency", selectedCurrency);
  };

  // defineProps<{
  //   currencies: CurrencyInfo[];
  //   disabled?: boolean;
  // }>();

  // const currencyModel = defineModel<CurrencyInfo | undefined>(
  //   "selectedCurrency"
  // );
  // const amountModel = defineModel<number | undefined>("amount");
</script>

<template>
  <div class="flex gap-3">
    <p>{{ currencyInfo.Name }}</p>
    <p
      :class="{
        'text-red-500': currencyInfo.Previous > currencyInfo.Value,
        'text-green-500': currencyInfo.Previous < currencyInfo.Value,
      }"
    >
      {{ currencyInfo.Value }}₽
      {{ currencyInfo.Previous > currencyInfo.Value ? "▼" : "▲" }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { CurrencyInfo } from "../../types";

  defineProps<{ currencyInfo: CurrencyInfo }>();
</script>

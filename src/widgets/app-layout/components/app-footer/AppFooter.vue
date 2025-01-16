<template>
  <footer class="py-6 bg-slate-700 text-white">
    <div class="container mx-auto">
      <div class="flex justify-center items-center flex-col gap-6">
        <p
          v-if="currencyStore.currencyDateInfos"
          class="text-center"
        >
          Курсы валют актуальны на момент
          {{ currencyStore.currencyDateInfos.Date }}
          относительно
          {{ currencyStore.currencyDateInfos.PreviousDate }}
        </p>

        <ul class="flex flex-col items-center gap-6 md:flex-row">
          <li>
            <a href="https://www.cbr-xml-daily.ru/">Курсы валют, API</a>
          </li>
          <li>
            <a href="https://www.cbr-xml-daily.ru/">API для курсов ЦБ РФ</a>
          </li>
          <li>
            <a href="https://www.cbr-xml-daily.ru/">Виджет курсов валют</a>
          </li>
          <li>
            <a href="https://www.cbr-xml-daily.ru/"
              >Курсы ЦБ РФ в XML и JSON, API</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import useCurrencyStore from "@entities/currency/model";

  const currencyStore = useCurrencyStore();
</script>

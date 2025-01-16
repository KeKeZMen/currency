<template>
  <label>
    <input v-bind:="{ ...$attrs }" />
    <p v-if="labelText">{{ labelText }}</p>
  </label>
</template>

<script setup lang="ts">
  import { defineOptions } from "vue";

  defineOptions({
    inheritAttrs: false,
  });

  defineProps<{
    labelText?: string;
  }>();
</script>

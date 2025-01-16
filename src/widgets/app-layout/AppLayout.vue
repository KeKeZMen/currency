<template>
  <app-header></app-header>
  <main>
    <div class="container mx-auto min-h-[calc(100dvh-120px-104px)] py-6">
      <slot name="main"></slot>
    </div>
  </main>
  <app-footer></app-footer>
</template>

<script setup lang="ts">
  import AppHeader from "./components/app-header";
  import AppFooter from "./components/app-footer";
</script>

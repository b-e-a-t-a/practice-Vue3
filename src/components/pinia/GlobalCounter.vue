<template>
  <div>
    <h1>{{ counterStore.count }}</h1>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore();
</script>
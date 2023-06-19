<template>
  <div class="container">
    <div v-if="error" class="error">
      <p>Smoething went wrong. See below error details:</p>
      <p>{{error}}</p>
    </div>
    <Suspense v-else>
      <template #default>
        <SootherNamesList />
      </template>
      <template #fallback>
        <BaseLoader />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref, onErrorCaptured } from "vue";
import SootherNamesList from '@/components/apis/SootherNamesList.vue';
import BaseLoader from "@/components/BaseLoader.vue";

const error = ref(null);

onErrorCaptured(e => {
  error.value = e;
  return true;
});

</script>

<style lang="sass" scoped>
.container
  display: flex
  justify-content: center
  align-items: center
  background-color: #000
  color: #fcd711
  margin: 20px auto
  padding: 20px
.error
  color: #cd3727
  text-align: center
</style>
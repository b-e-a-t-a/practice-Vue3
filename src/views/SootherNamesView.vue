<template>
  <div class="container">
    <div v-if="error" class="error">
      <p>Smoething went wrong. See below error details:</p>
      <p>{{error}}</p>
    </div>
    <Suspense v-else>
      <template #default>
        <SootherNamesList></SootherNamesList>
      </template>
      <template #fallback>
        <ApiLoader />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import SootherNamesList from '../components/apis/SootherNamesList.vue';
import ApiLoader from "../components/apis/ApiLoader.vue";

export default {
  name: 'SootherNamesView',
  components: { SootherNamesList, ApiLoader },
  setup() {
    const error = ref(null);

    onErrorCaptured(e => {
      error.value = e;
      return true;
    });

    return { error };
  }

}
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
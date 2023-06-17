<template>
  <section class="wrapper">
    <div v-if="error" class="error">
      <p>Smoething went wrong. See below error details:</p>
      <p>{{error}}</p>
    </div>
    <Suspense v-else>
      <template #default>
        <SootherItemDetails :id="id"/>
      </template>
      <template #fallback>
        <BaseLoader />
      </template>
    </Suspense>
  </section>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import BaseLoader from "@/components/BaseLoader.vue";
import SootherItemDetails from "@/components/apis/SootherItemDetails.vue";


export default {
  name: "SootherItemView",
  components: {
    BaseLoader,
    SootherItemDetails
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup() {
    const error = ref(null);

    onErrorCaptured((e) => {
      error.value = e;
    });

    return { error };
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  max-width: 1024px
  margin: 20px auto
  padding: 20px
  position: relative
  // min-height: 100vh
  background-color: #000
  color: #fcd711
.error
  color: #cd3727
  text-align: center
</style>
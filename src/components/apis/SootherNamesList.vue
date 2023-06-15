
<template>
  <section v-if="names">
    <h1>Soother names list:</h1>
    <SootherNameItem v-for="(name, index) in names" :key="index" :soother-name="name" />
  </section>
</template>

<script>
import { ref } from "vue";
import SootherNameItem  from "./SootherNameItem.vue";
export default {
  name: "SootherNamesList",
  components: {
    SootherNameItem
  },
  async setup() {
    const names = ref(null);
    const response = await fetch("https://pokeapi.co/api/v2/berry/");
    const parsedResponse = await response.json();

    names.value = [...parsedResponse.results];

    return { names };
  }
};
</script>
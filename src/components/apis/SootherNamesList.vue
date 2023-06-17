
<template>
  <section v-if="names">
    <h1>Soother names list:</h1>
    <div class="list">
      <router-link
        v-for="(name, index) in names"
        :key="index"
        :to="{name: 'itemView', params: {id: index + 1 }}"
        class="list__item"
      >
        <SootherNameItem :soother-name="name"/>
      </router-link>
    </div>
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

<style lang="sass" scoped>
h1
  text-transform: uppercase
  margin-bottom: 30px
.list
  display: grid
  grid-gap: 25px
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
  justify-items: center
  align-items: center
  &__item
    text-decoration: none
    width: 100%
</style>
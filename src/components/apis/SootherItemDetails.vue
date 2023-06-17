<template>
  <section v-if="item">
    <h2>Basic information:</h2>
    <p><strong>Name:</strong> {{ item.name }}</p>
    <p><strong>Growth time:</strong> {{ item.growth_time }}</p>
    <p><strong>Size:</strong> {{ item.size }}</p>
    <p><strong>Firmness:</strong> {{ item.firmness.name }}</p>
    <p><strong>Natural gift type::</strong> {{ item.natural_gift_type.name }}</p>
    <p><strong>Natural gift power:</strong> {{ item.natural_gift_power }}</p>
  </section>
  <section v-else>
    <h2 class="error">OOOOPS!</h2>
    <p>For some reason the resource you are looking for does not exist or is unavailable.
      Please try something else.</p>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SootherItemDetails",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    const item = ref(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/berry/${props.id}`);

      if (response.status !== 200) {
        throw new Error("Response status is different than 200")
      }

      const parsedResponse = await response.json();

      item.value = parsedResponse;

    } catch (error) {
      console.log(error);
    }
    return { item }
  },
}
</script>

<style lang="sass" scoped>
.error
  color: #cd3727
  text-align: center
</style>
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
    const response = await fetch(`https://pokeapi.co/api/v2/berry/${props.id}`);
    const parsedResponse = await response.json();

    item.value = parsedResponse;

    return { item }
  },
}
</script>

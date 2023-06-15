<template>
  <div class="nursery-item">
    <p>Lp.: {{ index + 1 }}</p>
    <p>Name: {{ nursery.name }}</p>
    <p>Address: {{ nursery.address }}</p>
    <p>Postal code: {{ nursery.postalCode }}</p>
    <p>Phone number: {{ nursery.phone }}</p>
    <p>Places: {{ nursery.numberOfPlaces || 'brak info' }}</p>
    <p>Groups: {{ nursery.numberOfGroups || 'brak info' }}</p>
    <div v-if="nursery.numberOfPlaces">
      Capacity:
      <progress max="35" :value="capacity"></progress>
      approx per group {{ capacity.toFixed() }}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'NurseryItem',
  props: {
    nursery: {
      type: Object,
      deafult: () => ({})
    },
    index: {
      type: [Number, String],
      required: true
    }
  },
  setup(props) {
    const capacity = computed(() => props.nursery.numberOfPlaces / props.nursery.numberOfGroups );

    return { capacity }
  }
}
</script>

<style lang="sass" scoped>
.nursery
  &-item
    border: 1px solid grey
    padding: 8px
</style>
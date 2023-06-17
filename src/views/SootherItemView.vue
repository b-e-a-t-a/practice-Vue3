<template>
  <section class="wrapper">
    <Suspense>
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
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  max-width: 1024px
  margin: 20px auto
  padding: 20px
  position: relative
  min-height: 50vh
  min-width: 40vw
  background-color: #000
  color: #fcd711
</style>
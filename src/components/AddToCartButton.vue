<template>
  <button class="btn btn-warning" @click="addItem" :style="btnAdd">
    <slot name="icon">+</slot>
    Add to cart
    <slot name="text">item</slot>
  </button>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: "AddToCartButton",
  // emits: {'add-item-to-cart': (quantity) => typeof quantity === 'number'},
  // emits: {'add-item-to-cart': ({name, quantity}) => typeof quantity === 'number' && typeof name === 'string'}, //czytelny zapis
  emits: {
    'add-item-to-cart': ({name, quantity}) => {
      if (typeof quantity === 'number' && typeof name === 'string') {
        return true;
      } else {
        console.warn("incorrect payload");
        return false;
      }
    }
  },

  // setup (props, context) {
  //   console.log(context)
  // }
  setup(props, {emit}) {
    // object do nadpisania styli kiedy np. dane skądś przychodzą dynamicznie
    const styles = reactive({
      btnAdd: {
        backgroundColor: '#17a2b8',
        color: '#fff',
        border: 'none',
        lineHeight: '2'
      }
    })

    function addItem() {
      // emit('add-item-to-cart', 3)
      emit('add-item-to-cart', {category: 'baby', name: 'soother', quantity: 3})
    }
    return { ...toRefs(styles), addItem };
  }
};
</script>
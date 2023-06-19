<template>
  <div class="container">
    <div class="product-card">
      <p>Products: {{ products }}</p>
      <img src="https://static.gemini.pl/assets/produkty/0083311/canpol-smoczek-silikonowy-uspokajajacy-toys-6-18-miesiaca-1-sztuka-15925049731.jpg" class="product-card__img">
      <p class="product-card__text">Soother Car for You</p>
      <p class="product-card__text">120.00 PLN</p>
      <p v-if="products > 3" class="product-card__availability" :class="{'hight': products > 3}"> Many in stock </p>
      <p v-else-if="products > 0 && products <= 3" class="product-card__availability">Hurry up, only few in stock!</p>
      <p v-else class="product-card__availability">Sorry, out of stock</p>
      <button
        class="btn-buy"
        :disabled="!products"
        :class="{ 'btn-buy--warning': products > 0 && products <= 3 }"
        @click="buyProduct"
      >
        Buy now
      </button>
    </div>
    <AddToCartButton
      :disabled="!products"
      @add-item-to-cart="increaseNumberOfItems"
    >
      <template #text>
        <span>soother</span>
      </template>
    </AddToCartButton>
    <BaseNotification
      :message="notificationText"
      :isVisible="isNotificationVisible"
      @hide-notification="hideNotification"
    />
  </div>
</template>

<script setup>
import AddToCartButton from '../components/AddToCartButton.vue';
import BaseNotification from '../components/BaseNotification.vue';
import { ref, computed } from 'vue';

const products = ref(5);

const numberOfItems = ref(0);
let itemName = ref('');
const notificationText = computed(() => `Number of ${itemName.value} items in cart: ${numberOfItems.value}`)
const isNotificationVisible = ref(false);

function buyProduct() {
  products.value--;
}

// function increaseNumberOfItems(quantity) {
//   numberOfItems.value += quantity
//   isNotificationVisible.value = true
// }

function increaseNumberOfItems({name, quantity}) {
  itemName.value = name
  numberOfItems.value += quantity
  isNotificationVisible.value = true
}

 const hideNotification = () => {
  isNotificationVisible.value = false
}
</script>

<style lang="sass">
.container
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: center
  .product-card
    margin-bottom: 8px
    padding: 10px 20px
    border: 1px solid rgb(23, 162, 184)
    border-radius: 10px
    &__img
      display: block
      width: 150px
    .hight
      color: green
  .btn-buy
    color: #fff
    background-color: #369b6d
    border: none
    padding: 5px 15px
    font-size: 16px
    line-height: 2
    vertical-align: middle
    cursor: pointer
    border-radius: .375rem
    transition: background-color 0.1 ease-in
    &--warning
      background-color: #ffc107
      color: #000
    &:hover
      opacity: .8
    &:disabled
      cursor: default
      background-color: #bd2130
</style>
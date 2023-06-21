<script setup> // simplify usage with SFC, no setup() nor return needed
import { ref, reactive, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import GlobalCounter from '@/components/pinia/GlobalCounter.vue'

const counterStore = useCounterStore();
const { increaseCount, decreaseCount } = counterStore; // destructure actions
const { count: counterCount, doubleCount, oddOrEven } = storeToRefs(counterStore); // destructure state and getters

const count = ref(100);
function incrementRef() {
  return count.value++;
}

const state = reactive({ count: 50 })
function incrementReactive() {
  return state.count++;
}

let { countDes } = state
function incrementReactiveDestructure() {
  return countDes++;
}

const quantity = ref(0);
const price = ref(100);
const totalPrice = ref(0);
const tax = ref(0);

function makeOrder() {
  quantity.value++;
  totalPrice.value = quantity.value * price.value;
  tax.value = totalPrice.value * 0.23;
}

const orderState = reactive({
  quantity: 0,
  price : 100,
  totalPrice: computed(() => orderState.quantity * orderState.price),
  tax: computed(() => orderState.totalPrice * 0.23)
})

function makeOrderReactive() {
  orderState.quantity++;
}

const shares = ref(15);
const sharePrice = ref(20);
const sharesValue = computed(() => shares.value * sharePrice.value);
function changeNumberOfShares(number) {
  if (shares.value + number >=0 ) {
    shares.value += number
  }
}

function getPrice(min, max) {
  const priceDiff = Math.floor(Math.random() * (max - min) + min) //losujemy liczbę z zakresu max,min
  if (sharePrice.value + priceDiff >=0) {
    sharePrice.value += priceDiff
  }
}
// do obserwacji czy liczba akcji rośnie i wtedy będziemy zwiększać ich cenę, jeśli liczba akcji spada to ich cena będzie maleć
watch(shares, (actualShares, prevShares) => {
  actualShares > prevShares ? getPrice(1, 5) : getPrice(-5, -1)
})
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Global counter</template>
    <GlobalCounter />
    <div class="btns">
      <button @click="increaseCount">+</button>
      <button @click="decreaseCount">-</button>
    </div>
    <hr/>
    <h5>This counter is: <strong>{{ oddOrEven }}</strong></h5>
    <hr/>
    <div class="doubled">
      <h5>Number doubled:</h5>
      <p>{{ doubleCount }}</p>
    </div>
    <hr/>
    <div>
      <h5>Edit counter:</h5>
      <input type="number" v-model="counterCount"/>
    </div>
    <hr />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Ref - setup</template>

    <button class="btn btn-warning btn-md" @click="incrementRef">Increment</button>
    <p>Counter is: {{ count }}</p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Reactive and computed</template>

    <button class="btn btn-warning btn-md" @click="incrementReactive">Increment</button>
    <p>Counter is: {{ state.count }}</p>

    <br />

    <button class="btn btn-danger btn-md" @click="incrementReactiveDestructure">Increment</button>
    <p>Counter Destructure is: {{ countDes }}</p>

    <br />
    <div>
      <h2>Price: {{ price }} PLN</h2>
      <button class="btn btn-info" @click="makeOrder">Make order</button>
      <p>quantity {{ quantity }}</p>
      <p>total price: {{ totalPrice }}</p>
      <p>tax: {{ tax }}</p>
    </div>

    <br />
    <div>
      <h2>Price: {{ orderState.price }} PLN</h2>
      <button class="btn btn-info" @click="makeOrderReactive">Make order</button>
      <p>quantity {{ orderState.quantity }}</p>
      <p>total price: {{ orderState.totalPrice }}</p>
      <p>tax: {{ orderState.tax }}</p>
    </div>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Shares</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.


    <div>
      <p>You have
        <strong>{{ shares }}</strong> shares and their value is
        <strong>{{ sharesValue }} PLN</strong>, share price is
        <strong>{{ sharePrice }}</strong> PLN.
      </p>
      <button class="btn btn-success mx-1" @click="changeNumberOfShares(1)">Buy 1 share</button>
      <button class="btn btn-success mx-1" @click="changeNumberOfShares(5)">Buy 5 shares</button>
      <button class="btn btn-warning mx-1" @click="changeNumberOfShares(-1)">Sell 1 share</button>
      <button class="btn btn-warning mx-1" @click="changeNumberOfShares(-5)">Sell 5 shares</button>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a>.
  </WelcomeItem>

</template>

<style lang="sass" scoped>
.btns
  button
    margin-right: 10px

</style>

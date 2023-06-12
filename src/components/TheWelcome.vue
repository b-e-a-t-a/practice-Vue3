<script setup> // simplify usage with SFC, no setup() nor return needed
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { ref, reactive, computed } from 'vue'

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
</script>

<template>
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
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
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

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support</template>

  </WelcomeItem>
</template>

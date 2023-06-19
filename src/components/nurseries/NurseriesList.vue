<template>
  <div class="nurseries-list">
    <NurseryItem
      v-for="(nursery, index) in nurseries"
      :key="index"
      :nursery="nursery"
      :index="index"
    >
    </NurseryItem>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import NurseryItem from './NurseryItem.vue';

const nurseries = ref([
  {
    name: 'Opiekun nr 4',
    number: null,
    address: 'ul. S. Bryły 3 lok. 33',
    postalCode: '02-685 Warszawa',
    phone: '22 277 52 13',
    numberOfPlaces: null,
    numberOfGroups: null
  },
  {
    name: 'Żłobek nr 4',
    number: 4,
    address: 'ul. Wiktorska 94/96',
    postalCode: '02-582 Warszawa',
    phone: '502 267 840',
    numberOfPlaces: 152,
    numberOfGroups: 7
  },
  {
    name: 'Opiekun nr 5',
    number: null,
    address: 'ul. Egejska 6 lok. 22',
    postalCode: '02-764 Warszawa',
    phone: '22 277 52 13',
    numberOfPlaces: null,
    numberOfGroups: null
  },
  {
    name: 'Żłobek nr 5',
    number: 5,
    address: 'ul. A. E. Odyńca 59',
    postalCode: '02-644 Warszawa',
    phone: '723 248 018',
    numberOfPlaces: 86,
    numberOfGroups: 4
  },
  {
    name: 'Żłobek nr 6',
    number: 6,
    address: 'ul. św. Bonifacego 72',
    postalCode: '02-936 Warszawa',
    phone: '797 990 854',
    numberOfPlaces: 145,
    numberOfGroups: 7
  },
  {
    name: 'Żłobek nr 7',
    number: 7,
    address: 'ul. Kmicica 3',
    postalCode: '02-728 Warszawa',
    phone: '723 248 019',
    numberOfPlaces: 95,
    numberOfGroups: 5
  },
  {
    name: 'Opiekun nr 13',
    number: null,
    address: 'ul. Sardyńska 4/16',
    postalCode: '02-761 Warszawa',
    phone: '22 277 52 13',
    numberOfPlaces: null,
    numberOfGroups: null
  },
  {
    name: 'Żłobek nr 21',
    number: 21,
    address: 'ul. J. Dąbrowskiego 96',
    postalCode: '02-598 Warszawa',
    phone: '723 248 057',
    numberOfPlaces: 94,
    numberOfGroups: 4
  },
  {
    name: 'Żłobek nr 51',
    number: 51,
    address: 'ul. św. Bonifacego 81',
    postalCode: '02-945 Warszawa',
    phone: '502 267 591',
    numberOfPlaces: 78,
    numberOfGroups: 4
  },
  {
    name: 'Żłobek nr 65',
    number: 65,
    address: 'ul. Spartańska 2',
    postalCode: '02-637 Warszawa',
    phone: '723 242 279',
    numberOfPlaces: 150,
    numberOfGroups: 5
  },
  {
    name: 'Opiekun nr 4',
    number: null,
    address: 'ul. Cybernetyki 7A',
    postalCode: '02-677 Warszawa',
    phone: '22 230-21-28',
    numberOfPlaces: 45,
    numberOfGroups: 2
  },
  {
    name: 'Żłobek nr 71',
    number: 71,
    address: 'ul. Astronautów 5a',
    postalCode: '02-154 Warszawa',
    phone: '885 524 242',
    numberOfPlaces: 150,
    numberOfGroups: 6
  }
]);

const nurseriesWithStats = computed(() => nurseries.value.filter( ({ numberOfPlaces }) => numberOfPlaces));

console.log('des', nurseriesWithStats);
</script>

<style lang="sass" scoped>
.nurseries
  &-list
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
    grid-gap: 25px
    margin: 20px auto
</style>
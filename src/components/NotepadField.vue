<template>
  <div class="bg-secondary-subtle shadow p-4">
    <h2 class="mb-4">Add some notes</h2>
    <textarea
      class="form-control mb-2"
      rows="3" placeholder="...Your notes here"
      v-model="notes"
    ></textarea>
    <div class="d-flex flex-row mb-3 justify-content-end align-items-center">
      <button class="btn btn-outline-warning btn-lg" @click="clearEntry('')">Clear</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useLocalStorage} from "../composables/useLocalStorage";

let notes = ref("");
const {clearEntry} = useLocalStorage("note", notes);

</script>
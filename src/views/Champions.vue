<template>
  <h1>champions</h1>
  <div class="champions">
    <div v-for="champion in champions" :key="champion.key" class="champion">
      <div v-for="(prop, id) in champion" :key="id">
        {{ prop }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
const store = useStore();
onMounted(async () => {
  await store.dispatch("fetchChampions");
});
const champions = computed(() => store.state.champions);
</script>

<style>
.champions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
</style>
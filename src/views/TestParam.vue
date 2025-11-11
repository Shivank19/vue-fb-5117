<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const paramId = ref(route.params.id);
</script>

<template>
  <div>
    <h1>Parameter Detail</h1>
    <p>Parameter ID: {{ paramId }}</p>
  </div>
</template>
<script setup>
// import { computed } from 'vue'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { firebaseApp } from '@/firebase_config'
import { getFirestore } from 'firebase/firestore'
// import { useRouter, useRoute } from 'vue-router'

const db = getFirestore(firebaseApp)

const cards = useCollection(collection(db, 'flash_cards'))
</script>

<template>
  <div class="cards-wrapper">
    <div v-for="card in cards" :key="card.id" class="card">
      <div class="inner">
        <div class="front">{{ card.front }}</div>
        <div class="back">{{ card.back }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-wrapper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 200px;
  height: 120px;
  perspective: 1000px;
  cursor: pointer;
}

.inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover .inner {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  color: #41b883;
  font-weight: bold;
}

.back {
  transform: rotateY(180deg);
  background: #e5e5e5;
}
</style>

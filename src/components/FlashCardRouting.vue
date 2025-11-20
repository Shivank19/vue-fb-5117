<script setup>
import { computed, watch } from 'vue'
import { useCollection, useDocument } from 'vuefire'
import { collection, doc } from 'firebase/firestore'
import { firebaseApp } from '@/firebase_config'
import { getFirestore } from 'firebase/firestore'
import { useRouter, useRoute } from 'vue-router'
const db = getFirestore(firebaseApp)

const router = useRouter()
const route = useRoute()

// load the whole collection
const cards = useCollection(collection(db, 'flash_cards'))

// load one card based on URL
const cardRef = computed(() => doc(db, 'flash_cards', route.params.id))

const card = useDocument(cardRef)

watch(card, (data) => {
  if (data == null) {
    router.replace({ name: '404' })
  }
})
</script>

<template>
  <div v-if="card">
    <h1>Flash Card: {{ route.params.id }}</h1>

    <p>Front: {{ card.front }}</p>
    <p>Back: {{ card.back }}</p>
  </div>
  <aside>
    <h3>Other Cards</h3>
    <ul>
      <li v-for="c in cards" :key="c.id">
        <RouterLink :to="{ params: { name: 'card_with_id', id: c.id } }">{{ c.id }}</RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
button {
  height: 100px;
  width: auto;
}
.page-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.card-details {
  flex: 2;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
}

.card-details h1 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #333;
}

.card-details p {
  font-size: 1.1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e6e6e6;
}

.sidebar {
  flex: 1;
  padding: 1rem 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px #e5e7eb;
  height: fit-content;
}

.sidebar h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #444;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 0.6rem;
}

.sidebar a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.sidebar a:hover {
  color: #1e40af;
}
</style>

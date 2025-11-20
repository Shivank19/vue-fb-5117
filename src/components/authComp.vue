<script setup>
import { ref, onMounted } from 'vue'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { firebaseApp } from '@/firebase_config'

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

// reactive user
const user = ref(null)

// listen to auth state changes
onMounted(() => {
  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
    console.log('Auth state changed:', firebaseUser)
  })
})

async function login() {
  try {
    await signInWithPopup(auth, provider)
  } catch (e) {
    console.error('Login error:', e)
  }
}

async function logout() {
  try {
    await signOut(auth)
  } catch (e) {
    console.error('Logout error:', e)
  }
}
</script>

<template>
  <div class="auth-bar">
    <span v-if="user"> 👤 {{ user.displayName || user.email }} </span>

    <button v-if="!user" @click="login">Log In</button>
    <button v-else @click="logout">Log Out</button>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'

interface NavLink {
  to: string
  text: string
}

const links: Ref<NavLink[]> = ref([
  { to: 'home', text: 'Home' },
  { to: 'about', text: 'About Us' },
])
</script>

<template>
  <header>
    <nav>
      <ul class="flex flex-row flex-nowrap gap-3 p-4">
        <RouterLink v-for="{ to, text } in links" :to="{ name: to }" #="{ isActive }">
          <li :class="['bg-lime-200 px-2 py-1 rounded-lg text-lime-800', { 'bg-lime-400 text-lime-950': isActive }]">
            {{ text }}
          </li>
        </RouterLink>
      </ul>
    </nav>
  </header>
  <main class="p-4">
    <RouterView />
  </main>
</template>

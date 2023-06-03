<script setup lang="ts">
import { FunctionalComponent, Ref, ref } from 'vue'
import { HomeIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'

interface NavLink {
  href: string
  text: string
  icon: FunctionalComponent
}

const links: Ref<NavLink[]> = ref([
  { href: 'home', text: 'Home', icon: HomeIcon },
  { href: 'about', text: 'About Us', icon: QuestionMarkCircleIcon },
])
</script>

<template>
  <header>
    <nav>
      <ul class="flex flex-row flex-nowrap gap-3 p-4">
        <RouterLink v-for="{ href, text, icon } in links" :to="{ name: href }" #="{ isActive }">
          <li
            :class="[
              'inline-flex items-center gap-2 rounded-lg px-2 py-1 ',
              isActive ? 'bg-lime-300 text-lime-900' : 'bg-lime-100 text-lime-700',
            ]"
          >
            <component class="h-4" :is="icon" />
            <span class="align-middle">{{ text }}</span>
          </li>
        </RouterLink>
      </ul>
    </nav>
  </header>
  <main class="p-4">
    <RouterView />
  </main>
</template>

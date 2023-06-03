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
  <header class="flex-initial">
    <nav>
      <ul class="flex flex-row flex-nowrap gap-3 p-4">
        <RouterLink v-for="{ href, text, icon } in links" :to="{ name: href }" #="{ isActive }">
          <li
            :class="[
              'inline-flex items-center gap-2 rounded-lg px-2 py-1 ',
              isActive ? 'bg-sky-300 text-sky-900' : 'bg-sky-100 text-sky-700',
            ]"
          >
            <component class="h-4" :is="icon" />
            <span class="align-middle">{{ text }}</span>
          </li>
        </RouterLink>
      </ul>
    </nav>
  </header>
  <main class="flex-grow">
    <RouterView />
  </main>
</template>

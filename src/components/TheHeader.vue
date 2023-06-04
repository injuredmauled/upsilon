<script setup lang="ts">
import { FunctionalComponent, Ref, ref } from 'vue'
import { HomeIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/solid'

interface NavLink {
  link: string
  text: string
  icon: FunctionalComponent
}

const links: Ref<NavLink[]> = ref([
  { link: 'home', text: 'Home', icon: HomeIcon },
  { link: 'about', text: 'About Us', icon: QuestionMarkCircleIcon },
])
</script>

<template>
  <div class="bg-sky-100 p-3">
    <nav class="flex-onwrap flex flex-row">
      <ul class="flex flex-row flex-nowrap gap-3">
        <RouterLink custom v-for="{ link, text, icon } in links" :to="{ name: link }" #="{ isActive, href, navigate }">
          <a
            :href="href"
            @click="navigate"
            :class="[
              'inline-flex items-center gap-2 rounded-lg px-2 py-1 ',
              isActive ? 'bg-sky-300 text-sky-900' : 'bg-sky-100 text-sky-700',
            ]"
          >
            <component class="h-4" :is="icon" />
            <span class="align-middle">{{ text }}</span>
          </a>
        </RouterLink>
      </ul>
    </nav>
  </div>
</template>

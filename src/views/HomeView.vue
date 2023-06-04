<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <MainLayout>
    <template #header>
      <TheHeader />
    </template>
    <template #footer>
      <TheFooter />
    </template>

    This is the home page!
  </MainLayout>
</template>

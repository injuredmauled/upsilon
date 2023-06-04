<template>
  <div id="main-layout" class="flex min-h-screen w-screen flex-col flex-nowrap">
    <header v-if="$slots.header" class="w-100 relative">
      <slot name="header" />
    </header>

    <main class="w-100 relative flex-grow">
      <slot />
    </main>

    <footer v-if="$slots.footer" class="w-100 relative">
      <slot name="footer" />
    </footer>
  </div>
</template>

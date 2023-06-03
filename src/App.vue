<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

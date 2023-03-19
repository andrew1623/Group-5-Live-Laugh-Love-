<script setup lang="ts">
import NavBar from './templates/NavBar.vue';
  // Every view component has this template
  //   <script/> this is where any js or ts goes
  //   <template /> this is where the html is created and {{ variable }} is used to pass things from the script
  //   <style /> this is where you can add additional styles or create tailwindcss "stylegroups"
</script>

<template>
  <NavBar />
  <main class="bg-blue-700  h-screen pt-5">

    <router-view />
  </main>
</template>

<style scoped></style>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
  // Every vue component has this template
  //   fileName: "./ComponentName.vue"
  //   <script/> this is where any js or ts goes
  //   <template /> this is where the html is created and {{ variable }} is used to pass things from the script
  //   <style /> this is where you can add additional styles or create tailwindcss "stylegroups"
</script>

<template>
  <div class="h-screen">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>

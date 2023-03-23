<script setup lang="ts">
import { onUpdated } from 'vue';
import { StoryPage } from '../models/types'
const props = defineProps<{ page: StoryPage }>();

onUpdated(() => {
    /*
        This is where the special effects (screen flash, sound effects, etc) will be added.
        This function is called when the StoryPanel component is mounted with each StoryPage
        TODO: add special effects
    */
    console.log('StoryPanel updated');
})
</script>

<template>
    <div :key="page.id" class="w-1/2 mx-auto bg-secondary">
        <!-- Story Title -->
        <h2 class="text-2xl">{{ page.title }}</h2>
        <!-- Story Text -->
        <p> {{ page.text }} </p>
    </div>

    <!-- choices go in the slot - as seen in view/Game.vue -->
    <slot />
</template>
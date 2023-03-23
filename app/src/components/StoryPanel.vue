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
    <div :key="page.id" class="card w-1/2 bg-base-100 text-secondary-content mx-auto">
        <div class="card-body">
            <!-- Story Title -->
            <h2 class="card-title">{{ page.title }}</h2>
            <!-- Story Text -->
            <p> {{ page.text }} </p>
            <!-- choices go in the slot - as seen in view/Game.vue -->
            <slot />
        </div>
    </div>
</template>
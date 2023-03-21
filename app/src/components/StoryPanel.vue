<script setup lang="ts">
import { Story, StoryPage } from '../models/types'
const props = defineProps<{ page: StoryPage }>();
</script>

<template>
    <div :key="page.id" class="w-1/2 mx-auto my-2">
        <!-- Story Title -->
        <h2 class="text-2xl">{{ page.title }}</h2>
        <!-- Story Text -->
        <p> {{ page.text }} </p>
    </div>

    <!-- choices go in the slot - as seen in view/Game.vue -->
    <slot />
</template>
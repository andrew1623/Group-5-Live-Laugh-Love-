<script lang="ts">
import { StoryPage } from '../models/types'

export default {
    props: {
        page: {
            type: Object as () => StoryPage,
            required: true
        }
    }
}
</script>

<template>
    <div :key="page.id">
        <!-- Story Title -->
        <h2 class="text-2xl mx-0 my-2">{{ page.title }}</h2>

        <!-- Story Text -->
        <p>
            {{ page.text }}
        </p>
    </div>

    <!-- choices go in the slot -->
    <slot />
</template>
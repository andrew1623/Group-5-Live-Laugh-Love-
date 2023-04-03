<script setup lang="ts">
import { ref, onMounted } from 'vue';

const draftStory = ref({
    title: '',
    description: '',
    story: [],
    character: {
        name: '',
        stats: [],
        inventory: [],
    },
    created: new Date()
});

</script>
<template>
    <div class="form-control mx-auto bg-secondary">
        <input type="text" name="title" placeholder="Title">
        <!--<input type="text" name="description" placeholder="Description">-->
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { StoryPage, StoryChoice } from '../models/types'
import StoryPanel from '../components/StoryPanel.vue'

const charStatsOpen = ref(false);
const choice = ref({} as StoryChoice);


function toggleCharStats() {
    charStatsOpen.value = !charStatsOpen.value;
}

function setChoice(selection: StoryChoice) {
    choice.value = selection;
    console.log(selection);
}

onMounted(() => {
    console.log('Game mounted');
});

const testPage: StoryPage = {
    id: 1,
    title: 'Test Page',
    text: 'This is a test page',
    choices: [
        {
            id: 1,
            text: 'Choice 1',
            result: ''
        },
        {
            id: 2,
            text: 'Choice 2',
            result: ''
        },
        {
            id: 3,
            text: 'Choice 3',
            result: ''
        },
        {
            id: 4,
            text: 'Choice 4',
            result: ''
        }
    ]
}


</script>

<template>
    <div class="container mx-auto rounded bg-blue-400 p-5 shadow">

        <div v-if="!charStatsOpen">
            <StoryPanel :page="testPage" />

            <!-- Choices -->
            <ul class="text-m font-medium  ">
                <li v-for="choice in testPage.choices" class="w-full border border-black-200 rounded p-2">
                    <div class="flex items-center pl-3">
                        <button @click="setChoice(choice)" :choice="choice">{{ choice.text }}</button>
                    </div>
                </li>
            </ul>
        </div>

        <div v-else>
            <!-- Character Stats -->
            <!-- Inventory -->
        </div>

        <div class="flex justify-between">
            <button class="btn" @click="toggleCharStats">
                {{ !charStatsOpen ? "Character" : "Exit" }}
            </button>
            <button class="btn">Save</button>
        </div>
    </div>
</template>

<style scoped>
.btn {
    @apply mx-2 my-2 bg-amber-500 rounded-full w-60
}

.btn:hover {
    @apply bg-amber-700
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { StoryPage, StoryChoice, Effect } from '../models/types'
import StoryPanel from '../components/StoryPanel.vue'
import CharacterPanel from '../components/CharacterPanel.vue'
const testCharecter = {
    name: 'Test Character',
    stats: [
        {
            name: 'health',
            value: 100
        },
        {
            name: 'strength',
            value: 10
        },
        {
            name: 'defense',
            value: 10
        },
        {
            name: 'speed',
            value: 10
        }
    ],
    inventory: [
        {
            name: 'Test Item',
            description: 'This is a test item',
            quantity: 1,
            effect: {
                stat: 'health',
                value: 10
            }
        },
        {
            name: 'Test Item ',
            description: 'This is a test item',
            quantity: 2,
            effect: {
                stat: 'health',
                value: 10
            }
        }
    ]
}
const testPage: StoryPage = {
    id: 1,
    title: 'Test Page',
    text: 'This is a test page',
    choices: [
        {
            id: 1,
            text: 'lose  2 strength',
            result: { stat: "strength", value: -2 }
        },
        {
            id: 2,
            text: 'lose 10 health',
            result: { stat: "health", value: -10 }
        },
        {
            id: 3,
            text: 'restore 10 health',
            result: { stat: "health", value: 10 }
        },
        {
            id: 4,
            text: 'gain 2 speed',
            result: { stat: "speed", value: 2 }
        }
    ]
}
const charStatsOpen = ref(false);
const choice = ref({} as StoryChoice);


function toggleCharStats() {
    charStatsOpen.value = !charStatsOpen.value;
}

function setChoice(selection: StoryChoice) {
    choice.value = selection;
    doEffect(selection.result);
    // console.log(selection);
}

function doEffect(effect: Effect) {
    testCharecter[effect.stat] += effect.value;
    console.log(effect);
}
onMounted(() => {
    console.log('Game mounted');
});


</script>

<template>
    <div class="container mx-auto rounded bg-blue-400 p-5 shadow">

        <div v-if="!charStatsOpen">
            <StoryPanel :page="testPage">

                <!-- Choices -->
                <ul class="text-m font-medium  ">
                    <li v-for="choice in testPage.choices" class="w-full border border-black-200 rounded p-2">
                        <div class="flex items-center pl-3">
                            <button @click="setChoice(choice)" :choice="choice">{{ choice.text }}</button>
                        </div>
                    </li>
                </ul>

            </StoryPanel>
        </div>

        <div v-else>

            <CharacterPanel :character="testCharecter" />
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
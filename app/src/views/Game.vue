<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { StoryPage, StoryChoice, Effect, Character } from '../models/types'
import StoryPanel from '../components/StoryPanel.vue'
import CharacterPanel from '../components/CharacterPanel.vue'

const testCharecter: Character = {
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
            effect: [{ stat: 'health', value: 10 }]
        },
        {
            name: 'Test Item ',
            description: 'This is a test item',
            quantity: 2,
            effect: [{ stat: 'health', value: 10 }]
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
            result: [{ stat: "strength", value: -2 }]
        },
        {
            id: 2,
            text: 'lose 10 health',
            result: [{ stat: "health", value: -10 }]
        },
        {
            id: 3,
            text: 'restore 10 health',
            result: [{ stat: "health", value: 10 }]
        },
        {
            id: 4,
            text: 'gain 2 speed',
            result: [{ stat: "speed", value: 2 }]
        }
    ]
}

const charStatsOpen = ref(false);
const choice = ref({} as StoryChoice);
const character = ref(testCharecter);


function toggleCharStats() {
    charStatsOpen.value = !charStatsOpen.value;
}

function setSelectedChoice(choiceIndex: number) {
    const selectedChoice: StoryChoice = testPage.choices[choiceIndex];
    choice.value = selectedChoice;
}

function submitChoice() {
    doEffects(choice.value.result);
}

function doEffects(effects: Effect[]) {
    effects.forEach(effect => {
        const statIndex = character.value.stats.findIndex(stat => stat.name === effect.stat);
        character.value.stats[statIndex].value += effect.value;
        console.log(effect);
    });
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
                <ul class="text-m font-medium w-1/2 mx-auto">
                    <li v-for="({ text }, index) in testPage.choices" class="w-auto border border-black-200 rounded p-2">
                        <div class="flex items-center pl-3">
                            <button :key="index" @click="setSelectedChoice(index)">{{ text }}</button>
                        </div>
                    </li>
                </ul>

            </StoryPanel>
        </div>

        <div v-else>
            <!-- Character Stats / Inventory -->
            <CharacterPanel :character="character" />
        </div>

        <div class="flex justify-between w-1/2 mx-auto">
            <button class="btn" @click="toggleCharStats">
                {{ !charStatsOpen ? "Character" : "Close" }}
            </button>
            <button class="btn" @click="submitChoice">Submit</button>
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
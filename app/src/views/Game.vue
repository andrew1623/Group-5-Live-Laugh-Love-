<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { StoryChoice, Effect } from '../models/types'
import { testPage, testCharecter } from '../models/testData'
import StoryPanel from '../components/StoryPanel.vue'
import CharacterPanel from '../components/CharacterPanel.vue'

// Game State
const charStatsOpen = ref(false);
const choice = ref({} as StoryChoice);
const character = ref(testCharecter);

// Methods
// Open and close the character stats panel
function toggleCharStats() {
    charStatsOpen.value = !charStatsOpen.value;
}

// Set the selected choice in (Game State)
function setSelectedChoice(choiceIndex: number) {
    const selectedChoice: StoryChoice = testPage.choices[choiceIndex];
    choice.value = selectedChoice;
}

// Method to submit the selected choice
// TODO: add a goto next page method
function submitChoice() {
    doEffects(choice.value.result);
}

// Apply the effects of the selected choice
function doEffects(effects: Effect[]) {
    effects.forEach(effect => {
        // statIndex is the index of the stat in the character stats array
        const statIndex = character.value.stats.findIndex(stat => stat.name === effect.stat);
        // this line adds the effect value to the stat value
        character.value.stats[statIndex].value += effect.value;
        // console.log(effect);
    });
}

// Lifecycle Hooks
onMounted(() => {
    console.log('Game mounted');
});
</script>

<template>
    <div class="container mx-auto rounded bg-blue-400 p-5 shadow">

        <!-- Story Panel-->
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

        <!-- Character Stats / Inventory Panel -->
        <div v-else>
            <CharacterPanel :character="character" />
        </div>

        <!-- Bottom Bar  (for buttons)-->
        <div class="flex justify-between w-1/2 mx-auto">
            <button class="btn" @click="toggleCharStats">
                {{ !charStatsOpen ? "Character" : "Close" }}
            </button>
            <button class="btn" @click="submitChoice">Submit Choice</button>
        </div>
    </div>
</template>

<style scoped>
.bottomBar {
    @apply my-5;
}

.btn {
    @apply bg-amber-500 rounded-full w-60
}

.btn:hover {
    @apply bg-amber-700
}
</style>
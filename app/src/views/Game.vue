<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Story, StoryChoice, Effect } from '../models/types'
import { testStory, testCharecter } from '../models/testData'
import StoryPanel from '../components/StoryPanel.vue'
import CharacterPanel from '../components/CharacterPanel.vue'

// Game State
const activeStory = ref(testStory);
const currentPage = ref(testStory.story[0]);
const choice = ref({} as StoryChoice);
const charStatsOpen = ref(false);

// Methods
// Open and close the character stats panel
function toggleCharStats() {
    charStatsOpen.value = !charStatsOpen.value;
}
// Set the selected choice in (Game State)
function setSelectedChoice(choiceIndex: number) {
    choice.value = currentPage.value.choices[choiceIndex];
}
function gotoNextPage(storyPageId: number) {
    const index: number = activeStory.value.story.findIndex(page => page.id === storyPageId);
    currentPage.value = activeStory.value.story[index];
}
// Method to submit the selected choice
function submitChoice() {
    doEffects(choice.value.result);
    gotoNextPage(choice.value.nextPage);
}
// Apply the effects of the selected choice
function doEffects(effects: Effect[]) {
    const { character } = activeStory.value;
    // Loop through the effects of the selected choice
    effects.forEach(effect => {
        // the first if statement checks if the effect is health
        if (effect.stat === 'health') {
            // a ternary operator is used to check if the effect value will cause the health to go over the max health
            (character.health.current + effect.value) >= character.health.max
                ? character.health.current = character.health.max
                : character.health.current += effect.value;
        }
        // After the health effect is checked, the rest of the effects are applied to the stats
        const statIndex = character.stats.findIndex(stat => stat.name === effect.stat); // statIndex is the index of the stat in the character stats array
        character.stats[statIndex].value += effect.value; // this line adds the effect value to the stat value
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
            <StoryPanel :page="currentPage">
                <!-- Choices -->
                <ul class="text-m font-medium w-1/2 mx-auto">
                    <li v-for="({ text }, index) in currentPage.choices" class="w-auto border border-black-200 rounded p-2">
                        <div class="flex items-center pl-3">
                            <button :key="index" @click="setSelectedChoice(index)">
                                {{ text }}
                            </button>
                        </div>
                    </li>
                </ul>
            </StoryPanel>
        </div>

        <!-- Character Stats / Inventory Panel -->
        <div v-else>
            <CharacterPanel :character="activeStory.character" />
        </div>

        <!-- Bottom Bar  (for buttons)-->
        <div class="flex justify-between w-1/2 mx-auto">
            <button class="btn" @click="toggleCharStats">
                {{ !charStatsOpen ? "Character" : "Close" }}
            </button>
            <button class="btn" @click="submitChoice">
                Submit Choice
            </button>
        </div>
    </div>
</template>

<style scoped>
/* this is here as an example  of applying tailwind classes to in one word */
.btn {
    @apply bg-amber-500 rounded-full w-60
}

.btn:hover {
    @apply bg-amber-700
}
</style>
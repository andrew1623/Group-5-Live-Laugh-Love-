<template>
    <!-- Story Panel-->
    <StoryPanel v-if="!charStatsOpen" :page="currentPage">
        <!-- Choices -->
        <ul class="text-m  w-1/2 mx-auto">
            <li v-for="({ text }, index) in currentPage.choices">
                <div class="flex items-center pl-3">
                    <button class="btn btn-info" :key="index" @click="setSelectedChoice(index)" >
                        {{ text }}
                    </button>
                </div>
            </li>
        </ul>
    </StoryPanel>

    <!-- Character Stats / Inventory Panel -->
    <CharacterPanel v-else :character="activeStory.character" />

    <!-- Bottom Bar  (for buttons)-->
    <div class="flex justify-between w-1/2 mx-auto">
        <button class="btn" @click="toggleCharStats">
            {{ !charStatsOpen ? "Character" : "Close" }}
        </button>
        <button class="btn btn-primary" @click="submitChoice">
            Submit Choice
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { StoryChoice, Effect } from '../models/types'
import testStory from '../models/testData'
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

// Method to go to the next page in the story
function gotoNextPage(storyPageId: number) {
    const index: number = activeStory.value.story.findIndex(page => page.id === storyPageId);
    currentPage.value = activeStory.value.story[index];
}

// Method to submit the selected choice
function submitChoice() {
    doEffects(choice.value.result);
    activeStory.value.choiceHistory.push(choice.value);
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
        } else {
            // After the health effect is checked, the rest of the effects are applied to the stats
            const statIndex = character.stats.findIndex(stat => stat.name === effect.stat); // statIndex is the index of the stat in the character stats array
            character.stats[statIndex].value += effect.value; // this line adds the effect value to the stat value
        }
    });
}

// Lifecycle Hooks
onMounted(() => {
    console.log('Game mounted');
});
</script>




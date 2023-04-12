import { ref } from "vue";
import { defineStore } from "pinia";
import { useCollection } from "vuefire";
import {Story, StoryPage, StoryChoice, Effect } from "../models/types";
import testStory from "../models/testData"

export const useGameStore = defineStore('game', () => {
    // Game State
    const activeStory = ref(testStory);
    const currentPage = ref(testStory.story[0]);
    const choice = ref({} as StoryChoice);
    const charStatsOpen = ref(false);

    // Methods
    // Method to start a new game
    function initNewGame(game: Story) {
        // Set the state for the new game
        activeStory.value = game;
        currentPage.value = game.story[0];
        choice.value = {} as StoryChoice;
        charStatsOpen.value = false;
    }

    // Set the selected choice in (Game State)
    function setSelectedChoice(choiceIndex: number) {
        // resets the currently highlighted choice
        choice.value.isActive = false;
        // sets the new selected choice
        choice.value = currentPage.value.choices[choiceIndex];
        // highlights the selected choice
        choice.value.isActive = true;
    }

    // Method to see if a specific choice has a condition
    function conditionCheck() { 
    if(choice.value.condition != undefined) {
        if(choice.value.condition) { // Condition exist for this choice and is true.
            return true;
        } else { // Condition exists for this choice and is false. 
            return false;
        }
    } else { // Condition doesn't exist for this choice.
        return true;
        }
    }
    
    // Method to submit the selected choice
    function submitChoice() {
    // Choice HAS a condition and the condition is true OR Choice has NO condition.
        if(conditionCheck()){
            // apply the effects of the selected choice
            doEffects(choice.value.result);
            // add the choice to the choice history
            activeStory.value.choiceHistory.push(choice.value);
            // go to the next page
            goToNextPage(choice.value.nextPage);
            // reset the selected choice
            choice.value = {} as StoryChoice;
    } else if (!choice.value.text.endsWith('\(Failed\)')) { // Choice HAS a condition and the condition is false
            choice.value.text = choice.value.text +'\(Failed\)';
            
        }
    }

    // Method to go to the next page in the story
    function goToNextPage(storyPageId: number) {
        const index: number = activeStory.value.story.findIndex((page: StoryPage) => page.id === storyPageId);
        currentPage.value = activeStory.value.story[index];
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

    // Open and close the character stats panel
    function toggleCharStats() {
        charStatsOpen.value = !charStatsOpen.value;
    }

    // Return the state and method to make them available to the app
    // Public Methods = exported here
    // Private/Internal Methods = not exported here
    return {
        initNewGame,
        activeStory,
        currentPage,
        choice,
        charStatsOpen,
        toggleCharStats,
        setSelectedChoice,
        submitChoice,
     }
})
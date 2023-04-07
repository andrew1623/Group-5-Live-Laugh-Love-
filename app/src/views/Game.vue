<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useGameStore } from '../stores/gameStore';
import StoryPanel from '../components/StoryPanel.vue'
import CharacterPanel from '../components/CharacterPanel.vue'

const store = useGameStore();
const { toggleCharStats, setSelectedChoice, submitChoice } = store;

// Lifecycle Hooks
onMounted(() => {
    console.log('Game mounted');
});
</script>

<template>
    <div>
        <!-- Story Panel-->
        <StoryPanel v-if="!store.charStatsOpen" :page="store.currentPage">
            <!-- Choices -->
            <ul class="flex flex-col justify-center text-m w-1/2 ">
                <li v-for="({ text, isActive }, index) in store.currentPage.choices" class="px-auto py-1">
                    <button :class="{ 'btn-success': isActive }" class="w-full btn"
                        @click="setSelectedChoice(index)">
                        {{ text }}
                    </button>
                </li>
            </ul>
        </StoryPanel>

        <!-- Character Stats / Inventory Panel -->
        <CharacterPanel v-else :character="store.activeStory.character" />

        <!-- Bottom Bar  (for buttons)-->
        <div class="flex justify-between w-1/2 mx-auto">
            <button class="btn" @click="store.toggleCharStats()">
                {{ !store.charStatsOpen ? "Character" : "Close" }}
            </button>
            <button class="btn btn-primary" @click="submitChoice">
                Submit Choice
            </button>
        </div>
    </div>
</template>


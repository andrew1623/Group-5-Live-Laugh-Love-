import { ref } from "vue";
import { defineStore } from "pinia";
import { useCollection } from "vuefire";
import {Story, StoryPage, StoryChoice, Effect, StoryDraft, User, Stats} from "../models/types";
import templateStory from "../models/templateData"
import emptyStory from "../models/templateData"

export const useDraftStore = defineStore('draft', () => {
    //Draft State
    const draft = ref(emptyStory); //CHANGE: reference Firebase
    //const user = ref(); //CHANGE: reference registration/Firebase

    // Methods
    // Saves a new draft story
    function initNewDraft(preBuilt: boolean) {
        //CHANGE: Add check for existing draft to switch from (makeActiveDraft())
        //HERE
        if(preBuilt)
            draft.value = templateStory;
        else{
            const tempDraft = emptyStory;
            var title = (<HTMLInputElement>document.getElementById("tname")).value;
            var description = (<HTMLInputElement>document.getElementById("dname")).value;
            tempDraft.title = title;
            tempDraft.description = description;
            draft.value = tempDraft;
        }
    }

    // Selects a drafted story to make active
    //NEEDS: Button for switching between existing drafts.
    function makeActiveDraft(focusedDraft: StoryDraft) {
        draft.value = focusedDraft;
    }

    // Publishes a story/make it playable (Public-Private)
    function publishDraft(draft: StoryDraft) {
        //user.storyDrafts.add(draft);
    }

    // Adds a page to the draft story
    function addPage(page: StoryPage) {
        draft.value.story.push(page);
    }

    // Removes a page to the draft story
    function removePage(page: StoryPage) {
        var index = draft.value.story.indexOf(page);
        if (index != -1)
            draft.value.story.splice(index,1);
        else
            console.error("removePage: Page not found");
    }

    // Edits the character name in the draft story
    function changeCharacterName(newName: string) {
        draft.value.character.name = newName;
    }

    // Adds character stats in the draft story
    function addCharacterStats(newStats: Stats) {
        draft.value.character.stats.push(newStats);
    }

    // Removes character stats in the draft story
    function removeCharacterStats(targetStats: Stats) {
        var index = draft.value.character.stats.indexOf(targetStats);
        if (index != -1)
            draft.value.character.stats.splice(index,1);
        else
            console.error("removeCharacterStats: Stats not found");
    }

    // Edits the character inventory in the draft story
    function editCharacterInventory() {
    }

    // Return the state and method to make them available to the app
    // Public Methods = exported here
    // Private/Internal Methods = not exported here
    return {
        initNewDraft,
        makeActiveDraft,
        publishDraft,
        addPage,
        removePage,
        changeCharacterName,
        addCharacterStats,
        removeCharacterStats,
        editCharacterInventory
     }
})

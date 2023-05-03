<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useDraftStore } from "../stores/editorStore";
import emptyStory from "../models/templateData"

const store = useDraftStore();

</script>
<template>
    <div class="form-control mx-auto bg-secondary">
        <label for="tname">Title:</label>
        <label for="dname">Description:</label>
        <input type="text" id= "tname" name="title" placeholder="Title">
        <input type="text" id= "dname" name="description" placeholder="Description">
        <button class="btn btn-primary" @click=";store.initNewDraft(false)">
                Create an Empty Adventure
        </button>
        <button class="btn btn-primary" @click=";store.initNewDraft(true)">
                Create a Pre-built Adventure
        </button>
    </div>
</template>

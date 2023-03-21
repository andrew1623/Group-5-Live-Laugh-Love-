<script setup lang="ts">
import { Character } from '../models/types';
const props = defineProps<{ character: Character }>();

const capitilizeLetters = (statName: string) => {
    return statName.charAt(0).toUpperCase() + statName.substring(1);
}
</script>

<template>
    <section class="flex justify-around mx-5">
        <!--Stats-->
        <ul>
            <li v-for="({ name, value }, index  in character.stats" class="font-semibold">
                <span class="font-bold">{{ capitilizeLetters(name) }}: </span>
                {{ name == "health" ? value + "/" + character.stats[0].value : value }}
            </li>
        </ul>

        <!--Inventory-->
        <div>
            <h3>Inventory</h3>
            <ul>
                <li v-for=" item in character.inventory" :key="item.name">
                    {{ item.name }} x{{ item.quantity }}
                    <!-- TODO: Add button to use/equip item -->
                </li>
            </ul>

        </div>
    </section>
</template>
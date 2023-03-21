<script setup lang="ts">
import { Character } from '../models/types';
const props = defineProps<{ character: Character }>();
</script>

<template>
    <section class="flex justify-around mx-5">
        <!--Stats-->
        <ul>
            <li v-for="stat in character.stats" class="font-semibold">
                <span class="font-bold">{{ stat.name.charAt(0).toUpperCase() + stat.name.substring(1) }}: </span>
                {{ stat.name == "health" ? stat.value + "/100" : stat.value }}
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
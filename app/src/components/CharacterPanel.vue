<script setup lang="ts">
import { Character } from '../models/types';
const props = defineProps<{ character: Character }>();
const capitilizeLetters = (statName: string) => statName.charAt(0).toUpperCase() + statName.substring(1);
</script>

<template>
    <section class="flex justify-around mx-5">
        <ul>
            <!--Health-->
            <li class="semi-bold">
                <span class="font-bold"> Health: </span>
                {{ character.health.current }} / {{ character.health.max }}
            </li>

            <!-- Stats -->
            <li v-for="{ name, value } in character.stats" class="font-semibold">
                <span class="font-bold"> {{ capitilizeLetters(name) }}: </span>
                {{ value }}
            </li>
        </ul>
        <!-- Inventory -->
        <div>
            <h3>Inventory</h3>
            <ul>
                <li v-for=" item in character.inventory" :key="item.name">
                    {{ item.name }} x{{ item.quantity }}
                    <!-- TODO: Add button to use/equip item -->
                </li>
            </ul>
            <!-- TODO: Add equipment section-->

        </div>
    </section>
</template>
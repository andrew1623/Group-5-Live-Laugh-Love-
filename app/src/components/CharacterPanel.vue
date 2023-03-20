<script lang="ts">
import { Character } from '../models/types';
export default {
    props: {
        character: {
            type: Object as () => Character,
            required: true
        }
    }
}
</script>

<template>
    <section class="flex justify-around mx-5">
        <ul>
            <li v-for="stat in character.stats" class="font-semibold">
                <span class="font-bold">{{ stat.name.charAt(0).toUpperCase() + stat.name.substring(1) }}: </span>
                {{ stat.value }}
            </li>
        </ul>
        <div>
            <h3>Inventory</h3>
            <ul>
                <li v-for=" item in character.inventory" :key="item.name">
                    {{ item.name }} x{{ item.quantity }}
                </li>
            </ul>
        </div>
    </section>
</template>
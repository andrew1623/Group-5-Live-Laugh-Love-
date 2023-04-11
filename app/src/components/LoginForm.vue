<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useRegistrationStore } from '../stores/registrationStore';
const store = useRegistrationStore();
const { login, email, password } = store;

</script>

<template>
    <div class="mx-auto bg-base-100 text-primary">
        <div class="form-control">
            <label class="input-group" for="email">
                <span class="label-text"> Email </span>
                <input type="email" placeholder="user@email.com" v-model="email" />
            </label>
        </div>

        <div class="form-control">
            <label class="input-group" for="password">
                <span class="label-text"> Password </span>
                <input type="password" placeholder="password" v-model="password" />
            </label>
        </div>

        <button class="btn btn-primary" type="submit" @click="login"> Log In </button>
    </div>
</template>
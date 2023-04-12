<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useRegistrationStore } from '../stores/registrationStore';
const store = useRegistrationStore();
onUnmounted(() => {
    console.log('RegistrationForm unmounted')
    store.reset();
    console.log('Store has been reset')
});
</script>

<template>
    <div class="mx-auto bg-base-100 text-primary">

        <div class="form-control">
            <label class="input-group" for="email">
                <span class="label-text"> Email </span>
                <input type="email" placeholder="User@email.com" v-model="store.email" />
            </label>
        </div>

        <div class="form-control">
            <label class="input-group" for="name">
                <span class="label-text"> User Name </span>
                <input type="email" placeholder="A cool name" v-model="store.name" />
            </label>
        </div>

        <div class="form-control">
            <label class="input-group" for="password">
                <span class="label-text"> Password </span>
                <input type="password" placeholder="Password" v-model="store.password" />
            </label>
        </div>

        <div class="form-control">
            <label class="input-group" for="confirmPassword">
                <span class="label-text"> Confirm Password </span>
                <input type="password" placeholder="Type your password again" v-model="store.confirmPassword" />
            </label>
        </div>

        <button class="btn btn-primary" type="submit" @click="store.register"> Create Account </button>

    </div>
</template>


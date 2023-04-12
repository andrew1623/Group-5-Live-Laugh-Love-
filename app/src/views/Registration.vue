<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue';
import RegistrationForm from '../components/RegistrationForm.vue';
import { useRegistrationStore } from '../stores/registrationStore';

const store = useRegistrationStore();
</script>

<template>
    <div class="mx-auto container">
        <h2 class="mx-auto text-2xl">
            {{ store.creatingAccount ? "Register" : "Log In" }}
        </h2>
        <div v-if="store.hasError">
            <p class="text-warning">{{ store.err }}</p>
        </div>
        <div v-if="store.creatingAccount">
            <RegistrationForm />
        </div>
        <div v-else>
            <LoginForm />
        </div>
        <button class="btn btn-ghost" @click="store.toggleCreatingAccount">
            {{ store.creatingAccount ? "Already have an account? Log In" : "Don't have an account? Register" }}
        </button>
    </div>
</template>
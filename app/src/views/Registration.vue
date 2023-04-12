<script setup lang="ts">
import { onMounted } from 'vue';
import { getAuth } from '@firebase/auth';
import LoginForm from '../components/LoginForm.vue';
import RegistrationForm from '../components/RegistrationForm.vue';
import { useRegistrationStore } from '../stores/registrationStore';

const store = useRegistrationStore();
const isLoggedIn = (getAuth().currentUser != null);


</script>

<template>
    <div class="mx-auto flex justify-center container w-3/4">
        <div v-if="isLoggedIn">
            <h2 class="mx-auto text-2xl">
                You are already logged in.
            </h2>
        </div>
        <div v-else>
            <h2 class="text-2xl">
                {{ store.creatingAccount ? "Register" : "Log In" }}
            </h2>
            <div v-if="store.hasError">
                <p class="text-warning bg-secondary text-xl">{{ store.err }}</p>
            </div>

            <div v-if="store.creatingAccount">
                <RegistrationForm />
            </div>
            <div v-else>
                <LoginForm />
            </div>
            <button class="btn btn-ghost py-4" @click="store.toggleCreatingAccount">
                {{ store.creatingAccount ? "Already have an account? Log In" : "Don't have an account? Register" }}
            </button>
        </div>
    </div>
</template>
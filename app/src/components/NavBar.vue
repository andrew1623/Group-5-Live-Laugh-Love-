<script setup lang="ts">
import { getAuth, signOut } from '@firebase/auth';

const auth = getAuth();

function signOutUser() {
    signOut(auth)
        .then(() => {
            console.log('Signed Out');
        })
        .catch((error) => {
            console.log(error);
        });
}
</script>

<template>
    <div class="py-2">
        <div class="container flex justify-between items-center mx-auto">
            <router-link to="/" class="text-3xl  font-bold">
                Text Based Adventure
            </router-link>
            <div class="flex justify-start gap-2 w-1/4">
                <button class="btn">
                    Text-To-Speech
                </button>
                <button class="btn">
                    Font Size
                </button>
                <button class="btn">
                    Epileptic Effects
                </button>
            </div>
            <nav class="flex justify-end gap-2 w-1/4">
                <span class="btn">
                    <router-link to="/"> Home </router-link>
                </span>
                <span class="btn">
                    <router-link to="game"> New Game </router-link>
                </span>
                <span class="btn">
                    <router-link to="editor">Create Game</router-link>
                </span>
                <button class="btn btn-warning" @click="signOutUser">Log Out</button>
                <button class="btn">
                    <router-link to="SignIn">Log In</router-link>
                </button>
            </nav>
        </div>
    </div>
</template>
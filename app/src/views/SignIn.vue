<template>
    <div class="card mx-auto w-1/2 bg-secondary text-primary">
        <h2 class="card-title mx-auto text-2xl">
            {{
                !creatingAccount
                ? "Log In"
                : "Create Account"
            }}
        </h2>
        <div class="card-body">
            <div class="form-control">
                <label class="input-group" for="email">
                    <span class="label-text">Email</span>
                    <input type="email" placeholder="user@email.com" v-model="email" />
                </label>
            </div>
            <div class="form-control">
                <label class="input-group" for="password">
                    <span class="label-text">Password</span>
                    <input type="password" placeholder="password" v-model="password" />
                </label>
            </div>
            <button type="submit" @click="register">Log In</button>
            <div v-if="error != ''" class=" bg-warning">{{ error }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "../router";
const email = ref("");
const password = ref("");
const creatingAccount = ref(false);
const error = ref("");
const auth = getAuth();
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            // Signed in 
            const user = data.user;
            console.log("New user created: ", auth.currentUser);
            router.push("/game");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error: ", errorMessage);
            console.log("Error code: ", errorCode);
        });
};
</script>
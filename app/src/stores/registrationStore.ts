// This is the store for the registration page
// It handles the registration of new users and logging in of existing users 
import { ref, computed } from "vue";
import { defineStore } from "pinia"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import router from "../router";

export const useRegistrationStore = defineStore('registration', () => {
    // State
    const email = ref('');
    const name = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const creatingAccount = ref(false);
    const hasError = ref(false);
    const err = ref({
        code: '',
        message: ''
    });

    const reset = () => {
        email.value = '';
        name.value = '';
        password.value = '';
        confirmPassword.value = '';
        creatingAccount.value = false;
        hasError.value = false;
        err.value = {
            code: '',
            message: ''
        }
    }
    // Computed
    const passwordIsConfirmed = computed(() => password.value === confirmPassword.value);

    // Firebase Auth instance
    const auth = getAuth();

    // Methods
    // Method to log in a user
    const login = () => { 
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((data) => {
                // Signed in 
                const user = data.user;
                console.log("User logged in: ", auth.currentUser);
                router.push("/game");
            })
            .catch((error) => {
                const { code, message } = error
                err.value = {code, message};
                console.log("ERR_CODE : ", err.value.code);
                console.log("ERR_MSG : ",err.value.message);    
            });
        }
    
    // Method to track whether a user is logging in or registering
    const toggleCreatingAccount = () => {
        creatingAccount.value = !creatingAccount.value;
    }

    // Method to register a new user
    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                // The user has been created and signed in 
                const userFromData = data.user;
                const userFromAuth = auth.currentUser;
                console.log("Data.User: ", userFromData);
                console.log("Auth.currentUser: ", userFromAuth);
                router.push("/game");
            })
            .catch((error) => {
                hasError.value = true;
                err.value = {code: error.code, message: error.message};
             
                console.log("Error: ", err.value.code);
                console.log("Error code: ", err.value.message);
            })
    }

    // Method to sign out the user
    const signOut = () => {
        auth.signOut()
        .then(() => {console.log("User signed out")})
        .catch((error) => {console.log("Error: ", error)})
    }

    return {
        email,
        name,
        password,
        confirmPassword,
        passwordIsConfirmed,
        creatingAccount,
        login,
        register,
        signOut,
        toggleCreatingAccount,
        hasError,
        err,
        reset
    }

});
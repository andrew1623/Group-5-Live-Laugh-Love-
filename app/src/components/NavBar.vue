<template>
    <div class="flex justify-between items-center  bg-blue-500 shadow border border-blue-700 p-2 m-0">

        <router-link to="/" class="text-3xl  font-bold ">
            Text Based Adventure
        </router-link>

        <nav>
            <button class="btn btn-blue">
                <router-link class='text-black' to="/">
                    Home
                </router-link>
            </button>
            <button class="btn btn-blue">
                <router-link class="text-black" to="game">
                    New Game
                </router-link>
            </button>
        </nav>

    </div>
</template>

<style>
.btn {
    @apply font-bold py-2 px-4 rounded m-1;
}

.btn-blue {
    @apply bg-teal-500 text-white;
}

.btn-blue:hover {
    @apply bg-teal-700;
}
</style>

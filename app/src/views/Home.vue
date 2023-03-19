<template>
    <section class="container p-10 mx-auto my-5 bg-gray-300 shadow border rounded">
        <p class="text-xl">
            Welcome to (app title), where we aim to design the simplest way of creating and sharing accessible story games.
            Try out our sample game, or get started on writing your own.
        </p>
        <p class="font-bold mx-auto text-center text-xl">A good story is meant to be shared!</p>
        <div class="flex flex-col">
            <button class="mx-auto my-4 text-lg bg-green-500 rounded-full py-2 px-4 shadow-lg border hover:bg-green-700">
                <router-link to="Game">
                    Start Game
                </router-link>
            </button>
        </div>
    </section>
</template>
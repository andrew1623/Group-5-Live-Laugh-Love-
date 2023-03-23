<template>
    <section class="container p-10 mx-auto my-5 bg-stone-500 shadow border rounded">
        <p class="text-xl text-black text-center w-3/4 mx-auto pb-2">
            Welcome to our game creator, where we aim to design the simplest way of creating and sharing accessible story
            games. Try out our sample game, or get started on writing your own.
        </p>
        <div class="flex flex-col bg-accent w-1/3 mx-auto my-3 rounded-md">
            <p class="text-slate-800  mx-auto text-center text-xl pt-2">
                <strong>A good story is meant to be shared!</strong>
            </p>
            <div class="btn-group btn-group-vertical  w-3/4 mx-auto my-3">
                <button class="btn border-green-600 border-">
                    <router-link to="game"> Start Game </router-link>
                </button>
                <button class="btn  border-green-600">
                    <router-link to="editor"> Create Game </router-link>
                </button>
            </div>
        </div>
        <div class="flex justify-center mx-auto rounded bg-cyan-400 border-b border-black shadow py-1 w-40">
            <p class="text-black">Made with
                <img class="inline-block" src="../assets/vue.svg" alt="vue" />
            </p>
        </div>
    </section>
</template>
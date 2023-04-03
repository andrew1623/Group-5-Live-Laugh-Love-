<template>
    <section class="card bg-base-200 py-5 mx-auto w-3/4">
        <div class="card-body w-3/4 mx-auto">
            <h2 class="text-xl text-center  mx-auto pb-1">
                <!-- TODO: this could be writtin better -->
                Welcome to our app, where we aim to design the simplest way of creating and sharing accessible
                story
                games. Try out our sample game, or get started on writing your own.
            </h2>
            <div class="btn-group btn-group-vertical  w-3/4 mx-auto my-3">
                <button class="btn btn-info border-green-600 border-">
                    <router-link to="game"> Start Game </router-link>
                </button>
                <br/>
                <button class="btn btn-primary border-green-600">
                    <router-link to="editor"> Create Game </router-link>
                </button>
            </div>
        </div>
        <div class="flex  justify-center mx-auto rounded bg-cyan-600  text-center border-black shadow py-1 w-40">
            <p class="text-black">Made with
                <img class="inline-block" src="../assets/vue.svg" alt="vue" />
            </p>
        </div>
    </section>
</template>
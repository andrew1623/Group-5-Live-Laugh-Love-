<template>
    <section class="card bg-base-200 py-5 mx-auto w-3/4">
        <div class="card-body w-3/4 mx-auto">
            <h2 class="text-xl text-center  mx-auto pb-1">
                <!-- TODO: this could be writtin better -->
                Welcome to our app, where we aim to design the simplest way of creating and sharing accessible
                story games. Try out our sample game, or get started on writing your own.
            </h2>
            <RouterLink to="registration" class="btn">Log In</RouterLink>
        </div>
        <div class="flex  justify-center mx-auto rounded bg-cyan-600  text-center border-black shadow py-1 w-40">
            <p class="text-black">Made with
                <img class="inline-block" src="../assets/vue.svg" alt="vue" />
            </p>
        </div>
    </section>
</template>
<template>
    <article
        class="
            twl-flex
            twl-flex-col
            twl-items-center
            twl-justify-center
            twl-height-full
            twl-min-h-screen">

        <h1 
            class="
                twl-text-3xl
                twl-mb-5">
            
            Simple 
            <span class="twl-text-webpack-color">Webpack 5</span>
            & 
            <span class="twl-text-vue-color">Vue</span> Config, happy coding!
        </h1>

        <router-view />
    </article>
</template>

<script>
export default {
    data() {
        return {
        };
    }
};
</script>

<style>

</style>

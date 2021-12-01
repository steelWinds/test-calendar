<template>
    <article class="home">
        <section
            class="
                twl-w-full
                twl-max-w-xl
                twl-justify-center
                twl-items-center
                twl-grid
                twl-grid-cols-2
                twl-grid-rows-1">
            
            <img
                class="home__image"
                src="../assets/img/vue-logo.png"
                alt="Logo of Vue">

            <img 
                class="home__image"
                src="../assets/img/webpack-logo.svg" 
                alt="Logo of Webpack">
        </section>
        
        <a 
            class="
                twl-text-vue-color
                twl-text-xl"
            href="https://github.com/steelWinds">
           
            My Github
        </a>
    </article>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="postcss">
.home {
    @apply 
        twl-flex
        twl-flex-col
        twl-items-center;

    &__image {
        display: block;

        width: 300px;
        height: 100%;

        object-fit: cover
    }
}
</style>

<template>
    <main 
        class="
            main
            twl-w-full
            twl-flex
            twl-justify-center">

        <router-view />
    </main>
</template>

<script>
export default {
    data() {
        return {
        };
    }
};
</script>

<style lang="postcss">
.main {
    background-color: var(--color-light-gray);
}
</style>

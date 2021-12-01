<template>
    <article class="employe">
        <section 
            class="
                employe__img
                twl-mr-3">
            
            <slot name="image" />
        </section>
        
        <section class="employe__content">
            <slot name="content">
                <p>
                    I'm employe
                </p>
            </slot>
        </section>
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

<style lang="postcss">
.employe {
    @apply 
        twl-flex
        twl-flex-row
        twl-flex-nowrap
        twl-items-center;

    overflow-wrap: break-word;

    &__img {
        @apply
            twl-flex-shrink-0;

        width: 32px;
        height: 32px;

        border-radius: 100%;

        overflow: hidden;

        & img {
            display: block;

            width: 100%;
            height: 100%;

            object-fit: cover;  
        }
    }
}
</style>

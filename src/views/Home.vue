<template>
    <article class="home">
        <h1 
            class="
                home__title
                twl-mt-14
                twl-mb-9">
            
            планирование
        </h1>

        <section class="home__content">
            <Calendar 
                :data="currentData"
            />

            <aside class="home__employe-info">
                <SelectEmploye
                    v-model:optionModel="currentData" 
                />
            </aside>
        </section>
    </article>
</template>

<script>
import { computed } from 'vue';

import Calendar from '../components/Calendar.vue';
import SelectEmploye from '../components/Employe/SelectEmploye.vue';

export default {
    components: {
        Calendar,
        SelectEmploye
    },

    provide() {
        return {
            currentData: computed({
                get: () => {
                    return this.currentData;
                },
                set: (value) => {
                    this.currentData = value;
                }
            })
        };
    },

    data() {
        return {
            currentData: [],
        };
    }
};
</script>

<style lang="postcss">
.home {
    @apply 
        twl-flex
        twl-flex-col
        twl-items-start
        twl-p-3
        twl-w-full
        twl-max-w-screen-xl !important;

    &__title {
        @apply 
            twl-text-6xl;

        font-family: Roboto Condensed;
        font-weight: bold;
        text-transform: capitalize;
    }

    &__content {
        @apply 
            twl-w-full
            twl-grid
            twl-gap-8;

        grid-template: repeat(1, 1fr) / 1fr 400px; 

        @media (max-width: 1520px) {
            grid-template-columns: 1fr;
        }
    }

    &__employe-info {
        @apply
            twl-order-first
            2xl:twl-order-2;
    }
}
</style>

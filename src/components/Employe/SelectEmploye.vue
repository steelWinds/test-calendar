<template>
    <article 
        class="select-employe"
        v-bind="$attrs">
        
        <h3 
            class="
                select-employe__title
                twl-mb-5">
            
            Сотрудник
        </h3>

        <CustomSelect 
            :data="data"
        />
    </article>

    <article class="select-employe twl-mt-3">
        <section class="select-employe__info-counter">
            <p 
                class="
                    twl-text-2xl">

                {{ tripCount }}
            </p>

            <p>
                поездок
            </p>
        </section>
        <section class="select-employe__info-counter">
            <p 
                class="
                    twl-text-2xl">
                
                {{ tripDays }}
            </p>
            <p>командировки</p>
        </section>
    </article>
</template>

<script>
import { computed } from 'vue';

import CustomSelect from '../CustomSelect.vue';

import employes from '../../store/employes.js';

export default {
    components: {
        CustomSelect,
    },

    provide() {
        return {
            tripDays: computed({
                get: () => {
                    return this.tripDays;
                },
                set: (value) => {
                    this.tripDays = value;
                }
            }),
            tripCount: computed({
                get: () => {
                    return this.tripCount;
                },
                set: (value) => {
                    this.tripCount = value;
                }
            })
        };
    },

    data() {
        return {
            tripCount: 0,
            tripDays: 0,
            data: employes
        };
    }
};
</script>

<style lang="postcss">
.select-employe {
    @apply  
        twl-flex
        twl-flex-col
        twl-justify-start
        twl-items-start
        twl-w-full;

    border-radius: 6px;
    padding: 26px 30px;
    
    background-color: white;
    font-family: var(--font-main);

    &__info-counter {
        @apply 
            twl-flex
            twl-flex-row
            twl-justify-between
            twl-w-full
            twl-p-3
            twl-relative;

        &:last-child {
            padding-bottom: 0;
        }

        &:not(:last-child) {
            &:after {
                @apply
                    twl-absolute
                    twl-w-full;
                
                bottom: 0;
                left: 0;

                content: '';

                height: 2px;

                background-color: var(--color-gray);
            }
        }
    }

    &__title {
        @apply
            twl-text-2xl;

        font-weight: bold;
        font-family: var(--main-font);
    }
}
</style>

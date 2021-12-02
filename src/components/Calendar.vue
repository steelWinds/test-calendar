<template>
    <article class="custom-calendar">                
        <v-calendar 
            ref="calendar"
            class="custom-calendar__grid"
            locale="ru"
            :masks="masks"
            :attributes="data"
            is-expanded>

            <template
                #header="{monthLabel, year}">
                
                <article 
                    class="
                        custom-calendar__header
                        twl-mb-10">

                    <h2 class="custom-calendar__title">
                        {{ monthLabel }}
                        {{ year }}
                    </h2>
                </article>
            </template>

            <template
                #header-left-button>
                    
                <button class="custom-calendar__arrow">
                    <img 
                        class="vc-arrow__img"
                        src="../assets/img/vector-arrow.svg" 
                        alt="Arrow icon">
                </button>
            </template>

            <template
                #header-right-button>
                    
                <button class="custom-calendar__arrow">
                    <img 
                        class="vc-arrow__img"
                        src="../assets/img/vector-arrow.svg" 
                        alt="Arrow icon"
                        style="transform: rotate(180deg)">
                </button>
            </template>
        
            <template
                #day-content="{day, attributes}">

                <span
                    class="vc-day__day-count">
                    
                    {{ day.day }}
                </span>

                <p
                    v-for="attr in attributes"
                    :key="attr.key"
                    class="vc-day__event"
                    :class="attr.customData.class">
                    
                    {{ attr.customData.title }}
                </p>
            </template>
        </v-calendar>
    </article>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    
    data() {
        return {
            masks: {
                weekdays: 'WWWW'
            },
        };
    },
};
</script>

<style lang="postcss">
.custom-calendar {
    @apply 
        twl-w-full
        twl-order-2
        twl-p-10
        lg:twl-order-1;

    border-radius: 8px;

    background-color: white;

    &__header {
        @apply 
            twl-flex
            twl-flex-row
            twl-justify-between
            twl-relative;

        &:after {
            @apply 
                twl-absolute
                twl-w-full;

            bottom: -70%;
            left: 0;

            content: '';

            height: 2px;

            background-color: var(--color-gray);
        }
    }

    &__title {
        @apply
            twl-text-3xl;

        text-transform: capitalize;
        color: black;
        font-family: var(--main-font);
        font-weight: bold;
    }

    &__grid {
        border-radius: 0 !important;
        border: 0 !important;

        font-family: Roboto Condensed;

        & .vc-arrow {
            @apply 
                twl-flex
                twl-justify-center
                twl-items-center;

            width: 35px;
            height: 35px;
            border-radius: 100%;

            background-color: var(--color-gray);

            transition: all .15s ease-in-out;

            &:hover {
                background-color: var(--color-blue);

                .vc-arrow__img {
                    filter: invert(1);
                }
            }
        }
    }

    & .vc-arrows-container {
        @apply 
            twl-flex
            twl-flex-row
            twl-justify-center
            twl-items-center
            twl-gap-5;

        right: 0;

        width: auto;
        padding: 0;
    }

    & .vc-weeks {
        grid-template-columns: repeat(7, minmax(110px, 1fr));
    }

    & .vc-day {
        @apply 
            twl-w-full
            twl-flex
            twl-flex-col
            twl-items-end
            twl-justify-between
            twl-p-2;

        border: .1rem solid var(--color-gray);
        min-height: 100px;

        overflow-wrap: break-word !important;
        hyphens: auto;

        &__day-count {
            @apply 
                twl-self-end;
        }

        &__event {
            @apply 
                twl-w-full
                twl-text-xs;

            max-width: max-content;
            padding: 1px 12px;
            border-radius: 4px;
            
            font-family: var(--main-font);
            font-weight: normal;
            color: white;
        }
    }

    & .vc-weekday {
        @apply 
            twl-text-base;

        text-align: start;
        text-transform: capitalize;
        color: black;
        font-weight: bold;
    }
}
</style>

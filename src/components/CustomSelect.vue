<template>
    <article 
        class="custom-select">
        
        <section
            class="custom-select__content">

            <template
                v-for="employe of data"
                :key="employe.id">

                <Employe
                    v-if="currentComponentId === employe.id">

                    <template #image>
                        <img 
                            :src="employe.image" 
                            alt="Employe Icon">
                    </template>

                    <template #content>
                        {{ employe.fullname }}
                    </template>    
                </Employe>
            </template>
        </section>

        <transition name="hide">
            <section 
                v-if="menuVisible"
                class="custom-select__menu">
                
                <Employe
                    v-for="employe of data"
                    :key="employe.id"
                    class="custom-select__menu-item"
                    @click="setComponentId(employe.id, employe.data)">

                    <template #image>
                        <img 
                            :src="employe.image" 
                            alt="Employe Icon">
                    </template>

                    <template #content>
                        {{ employe.fullname }}
                    </template>    
                </Employe>
            </section>
        </transition>

        <button
            class="custom-select__btn"
            @click="switchMenuVisible()">
            
            <img 
                src="../assets/img/vector-rect.svg" 
                alt="Rectangle Icon">
        </button>
    </article>
</template>

<script>
import Employe from './Employe/Employe.vue';

export default {
    components: {
        Employe
    },

    inject: [
        'currentData',
        'tripDays',
        'tripCount'
    ],

    props: {
        data: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            menuVisible: false,
            currentComponentId: 1,
        };
    },

    methods: {
        switchMenuVisible() {
            this.menuVisible = !this.menuVisible;
        },

        updateTripInfo(data) {
            this.tripDays = data.filter((item) => {
                return item.customData.type === 'work';
            }).length;

            this.tripCount = Array.from(
                new Set(
                    data.map((i) => {
                        return i.customData.title;
                    }))
            ).length;
        },

        setComponentId(id, data) {
            this.currentComponentId = id;

            this.switchMenuVisible();

            this.currentData = data;
            this.updateTripInfo(data);
        } 
    }
};
</script>

<style lang="postcss">
.custom-select {
    @apply 
        twl-w-full
        twl-flex
        twl-flex-row
        twl-p-3
        twl-items-stretch
        twl-relative;

    border: .15rem solid var(--color-gray);
    border-radius: 4px;
    padding-right: 60px;

    &__menu {
        @apply 
            twl-flex
            twl-flex-col
            twl-absolute
            twl-w-full
            twl-pb-5;
        
        left: 0;
        top: calc(100% + 1rem);

        padding-top: 0;
        min-height: 200px;
        max-height: 250px;
        
        background-color: white;

        z-index: 1000;
        overflow-y: auto;
    }

    &__menu-item {
        @apply
            twl-p-3;

        cursor: pointer;

        &:hover {
            background-color: var(--color-light-gray);
        }
    }

    &__btn {
        @apply 
            twl-flex
            twl-justify-center
            twl-items-center
            twl-absolute
            twl-h-full;

        top: 0;
        right: 0;

        width: 50px;

        border-left: .15rem solid var(--color-gray);
    }
}
</style>

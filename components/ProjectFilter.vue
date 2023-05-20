<script setup lang="ts">
    const props = defineProps({
        selectedFilter:  {
            type: String
        }
    })
    const filters = ['all', 'vue', 'knockout', 'gsap', 'scrollmagic', 'highcharts', 'amcharts', 'i18n', 'firebase', 'annual-report', 'calculator', 'ebook', 'quiz', 'report']

    const allActive = computed(() => {
        return props.selectedFilter === '' ? true : false
    })

    const emits = defineEmits(['setFilter']);

    function handleClick(filter: string) {
        if (filter == 'all') {
            emits('setFilter', '')
            return
        }
        emits('setFilter', filter)
    }

</script>

<template>
    <div class="filter-flex">
        <button v-for="filter in filters" :class="[allActive && filter == 'all' ? 'active' : filter == selectedFilter ? 'active' : '']" @click="handleClick(filter)">
            {{ filter }}
        </button>
    </div>
</template>

<style lang="scss">
.filter-flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    grid-column: 1 / span 6;
    gap: 8px 10px;
    margin-top: 40px;
    margin-bottom: 40px;
    @media (min-width: 768px) {
        grid-column: 2 / span 10;
    }
    @media (min-width: 992px) {
        grid-column: 3 / span 8;
    }
}
button {
    color: $cWhite;
    background: none;
    border: 1px solid $cOrange;
    border-radius: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 12px;
    padding-right: 12px;
    font-family: $fMono;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    &.active {
        background: $cOrange;
    }
}
</style>
<script setup>
    const props = defineProps({ blok: Object })
    
    const heroClasses = computed(() => {
        return props.blok.layout === 'constrained' ? 'container mx-auto' : ''
    })
</script>

<template>
    <div
        v-editable="blok"
        :class="heroClasses"
    >
        <div>
            <h1>{{ blok.headline }}</h1>
            <h2>{{ blok.subheadline }}</h2>
        </div>
    </div>
</template>

<style>
    h1 {
        color: black;
        font-size: 40px;
    }
</style>
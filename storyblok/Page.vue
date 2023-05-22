<script setup lang="ts">
    defineProps({
        blok: {
            type: Object,
            default: () => ({})
        },
    })
    
</script>

<template>
    <div v-editable="blok">
        <StoryblokComponent 
            v-for="innerBlok in blok.body"
            :key="innerBlok._uid" 
            :blok="innerBlok" 
        />
    </div>
</template>

<script setup lang="ts">
    const story = await useStoryblok('about', { version: process.env.NODE_ENV === 'production' ? 'published' : 'draft' })
</script>

<template>
    <div class="m-about">
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<style lang="scss">

</style>
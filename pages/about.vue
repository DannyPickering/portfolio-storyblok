<script setup>
    const story = await useStoryblok('about', { version: 'draft' })
</script>

<template>
    <div class="m-about">
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<style lang="scss">

</style>
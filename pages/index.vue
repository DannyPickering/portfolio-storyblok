<script setup>
    const story = await useStoryblok('home', { version: 'draft' })
</script>

<template>
    <div class="m-home">
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<style lang="scss">
    .m-home {
        padding-bottom: 0;
    }
</style>
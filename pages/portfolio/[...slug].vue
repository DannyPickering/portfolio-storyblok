<script setup lang="ts">
    const { slug } = useRoute().params

    const { fetchProjectBySlug } = useProjects()

    const story = await fetchProjectBySlug(slug[0])
</script>

<template>
    <div>
        <pre>{{ story }}</pre>
    </div>
</template>
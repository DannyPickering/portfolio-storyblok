<script setup>
    const { slug } = useRoute().params

    const { fetchProjectBySlug } = useProjects()

    const story = await fetchProjectBySlug(slug)
</script>

<template>
    <div>
        <pre>{{ story }}</pre>
    </div>
</template>
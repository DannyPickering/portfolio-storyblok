<script setup>
    defineProps({ blok: Object })

    const projects = ref(null)
    const storyblokApi = useStoryblokApi()
    const { data } = await storyblokApi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'portfolio',
        is_startpage: false
    })

    projects.value = data.stories

</script>

<template>
    <div>
        <h2>{{ blok.headline }}</h2>

        <ProjectCard
            v-for="project in projects"
            :project="project"
            :slug="project.full_slug"
            :key="project.uuid">
            {{ project }}
        </ProjectCard>
    </div>
</template>
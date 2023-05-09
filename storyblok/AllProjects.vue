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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus perferendis voluptate earum saepe provident fuga repellat numquam quisquam molestias mollitia, commodi quo ipsa, tempora nulla cumque dicta modi sunt.</p>
    </div>
</template>
<script setup>
    const storyblokApi = useStoryblokApi()
    const { slug } = useRoute().params
    const { projects, fetchProjectsByTag } = useProjects()
    const tag = ref(null)
    
    await fetchProjectsByTag(slug)

    const { data: tagData } = await storyblokApi.get(`cdn/tags`, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'portfolio'
    })

    tag.value = tagData.tags.slice().find(t => t.name.includes(slug))

    const pluralizationComputed = computed(() => {
        return tag.value.taggings_count > 1 ? 'Projects' : 'Project'
    })
</script>

<template>
    <div class="container">
        <h1>Projects</h1>
        
        <h2>{{ tag.taggings_count }} {{ pluralizationComputed }} tagged {{ tag.name }} </h2>
        <ProjectGrid>
            <ProjectCard 
                v-for="project in projects"
                :project="project"
                :slug="project.full_slug"
                :key="project.uuid"
            />
        </ProjectGrid>

        <NuxtLink class="view-all" to="/portfolio">View all projects</NuxtLink>
    </div>
</template>

<style lang="scss">
    .view-all {
        font-family: $fRaj;
        font-size: 14px;
        line-height: 1.4;
        color: $cWhite;
        text-decoration: none;
        text-transform: uppercase;
        margin-top: 60px;
        display: inline-flex;
    }
</style>
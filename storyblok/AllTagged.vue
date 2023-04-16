<script setup>
    defineProps({ blok: Object })

    const { slug } = useRoute().params
    const projects = ref(null)
    const tag = ref(null)
    const storyblokApi = useStoryblokApi()

    const { data } = await storyblokApi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'portfolio',
        is_startpage: false,
        with_tag: slug,
        // filter_query: {
        //     component: {
        //         in: 'project'
        //     }
        // }
        
    })
    
    const { data: tagData } = await storyblokApi.get(`cdn/tags`, {
        version: 'draft',
        starts_with: 'portfolio'
        // filter_query: {
        //     name: {
        //         is: slug[0]
        //     }
        // }
    })

    projects.value = data.stories
    tag.value = tagData.tags.slice().find(t => t.name.includes(slug))
    console.log(tag.value);

    const pluralizationComputed = computed(() => {
        return tag.value.taggings_count > 1 ? 'Projects' : 'Project'
    })
</script>

<template>
    <div>
        <h2>{{ tag.taggings_count }} {{ pluralizationComputed }} tagged {{ tag.name }} </h2>

        <ProjectCard
            v-for="project in projects"
            :project="project"
            :slug="project.full_slug"
            :key="project.uuid">
            {{ project }}
        </ProjectCard>
    </div>
</template>
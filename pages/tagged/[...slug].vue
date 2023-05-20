<script setup lang="ts">
    import gsap from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    gsap.registerPlugin(ScrollTrigger)

    interface Tag {
        name: string,
        taggings_count: number
    }
    
    const filter = ref()
    const { slug } = useRoute().params
    const { projects, fetchProjects, fetchProjectsByTag } = useProjects(filter)
    const { tags, fetchTagData } = useTagData()

    const tag = ref<Tag | null>(null)
    await fetchTagData()

    await fetchProjectsByTag(slug[0])
    watch(filter, async () => {
        await fetchProjects(100)
        ScrollTrigger.refresh()
    })


    const foundTag = tags.value.find((t: Tag) => t.name === slug[0])
    tag.value = foundTag ?? null

    const pluralizationComputed = computed(() => {
        return tag.value?.taggings_count ?? 0 > 1 ? 'Projects' : 'Project'
    })
</script>

<template>
    <div class="container">
        <h1>Projects</h1>
        
        <h2 v-if="tag">{{ tag.taggings_count }} {{ pluralizationComputed }} tagged {{ tag.name }} </h2>
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
<script setup lang="ts">
    import gsap from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger)

    const filter = ref('')

    const { projects, fetchProjects } = useProjects(filter)
    await fetchProjects(100)

    watch(filter, async () => {
        await fetchProjects(100)
        ScrollTrigger.refresh()
    })

    function updateFilter(payload: string) {
        filter.value = payload
    }
</script>

<template>
    <div class="m-portfolio container-grid">
        <h1>Projects</h1>

        <ProjectFilter :selectedFilter="filter" @setFilter="updateFilter"/>
        <ProjectGrid>
            <ProjectCard 
                v-for="project in projects"
                :project="project"
                :slug="project.full_slug"
                :key="project.uuid"
            />
        </ProjectGrid>
    </div>
</template>

<style lang="scss">
    .m-portfolio {
        h1 {
            grid-column: 1 / span 6;
            @media (min-width: 776px) {
                grid-column: 1 / span 12;
            }
        }

        &__projects {
            grid-column: 1 / span 6;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 60px 20px;
            @media (min-width: 560px) {
                grid-column: 1 / span 12;
                grid-template-columns: repeat(2, 1fr);
            }
            @media (min-width: 992px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

    }
</style>
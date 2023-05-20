<script setup>
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

    function updateFilter(payload) {
        filter.value = payload
    }

    // onMounted(() => {
    //     nextTick(() => {
    //         const cards = gsap.utils.toArray('.m-project-card')
    //         cards.forEach((card) => {
    //             console.log(card);
    //             gsap.set(card, {opacity: 0, y: '20%'})
    //             gsap.fromTo(
    //                 card,
    //                 { opacity: 0, y: '20%'},
    //                 {
    //                     opacity: 1,
    //                     y: 0,
    //                     x: 0,
    //                     duration: 1.2,
    //                     scrollTrigger: {
    //                         trigger: card,
    //                         start: 'top 110%',
    //                         end: 'bottom center',
    //                         toggleActions: 'play none none reverse'
    //                     }
    //                 }
    //             )
    //         })
    //     })
    // })
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
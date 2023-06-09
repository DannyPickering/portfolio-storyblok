<script setup lang="ts">
    import gsap from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    defineProps({
        project: Object,
        slug: String
    })

    const card = ref<HTMLLIElement | null>(null)

    onMounted(() => {
        // console.log('mounted');
        gsap.registerPlugin(ScrollTrigger)

        // console.log('anim');
        gsap.set(card.value, {opacity: 0, y: '20%'})
        gsap.fromTo(
            card.value,
            { opacity: 0, y: '20%'},
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: card.value,
                    start: 'top 110%',
                    end: 'bottom center',
                    toggleActions: 'play none none reverse'
                }
            }
        )
    })
</script>

<template>
    <li
        v-if="project"
        ref="card"
        v-editable="project"
        class="m-project-card">
        <div class="m-project-card__thumbnail">
            <img 
                :src="project.content.thumbnail.filename + '/m/'" 
                alt=""
            />
        </div>
        <div class="m-project-card__footer">
            <div>
                <h2>{{ project.content.title }}</h2>
                <div class="m-project-card__tags">
                    <div
                        v-for="tag in project.tag_list">
                        <CycleText :word="tag" :linkTo="`${'/tagged/' + tag}`" :bgScale="true"  bgColor="#F95C32" bgHover="#fff" txtHover="#000" txtColor="#fff"/>
                    </div>
                </div>
            </div>
            
            <a class="m-project-card__live" :href="project.content.live_link.url" :target="project.content.live_link.target">View project</a>
        </div>
    </li>
</template>

<style lang="scss">
    .m-project-card {
        max-width: 500px;
        display: grid;
        grid-template-rows: auto 1fr;
        &:hover {
            .m-project-card__thumbnail img {
                filter: grayscale(0);
                transition: all 0.5s ease-out;
            }
        }
        &__thumbnail {
            position: relative;
            transition: all 0.3s ease-out;
            img {
                width: 100%;
                margin-bottom: 10px;
                aspect-ratio: 16 / 9;
                filter: grayscale(1);
                transition: all 0.5s ease-out;
            }
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                pointer-events: none;
            }
        }
        &__footer {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
        }
        &__tags {
            display: flex;
            flex-flow: row wrap;
            gap: 10px;
            margin-bottom: 24px;
        }

        &__live {
            font-family: $fOpenSans;
            font-weight: 400;
            font-size: 14px;
            color: $cWhite;
            text-decoration: none;
            transition: all 0.3s ease-in;
            &:hover {
                color: $cOrange;
                transition: all 0.3s ease-in;
            }
        }
    }
</style>
<script setup>
    defineProps({
        project: Object,
        slug: String
    })
</script>

<template>
    <li
        v-editable="project"
        class="m-project-card">
        <div class="m-project-card__thumbnail">
            <img 
                :src="project.content.thumbnail.filename" 
                alt=""
            />
        </div>
        <div>
            <h2>{{ project.content.title }}</h2>
            <div class="m-project-card__tags">
                <div
                    v-for="tag in project.tag_list">
                    <CycleText :word="tag" :linkTo="`${'/tagged/' + tag}`" :bgScale="true"  bgColor="#F95C32" bgHover="#fff" txtHover="#000" txtColor="#fff"/>
                </div>
            </div>
            
            <a class="m-project-card__live" :href="project.content.live_link.url" :target="project.content.live_link.target">View project</a>
        </div>
    </li>
</template>

<style lang="scss">
    .m-project-card {
        max-width: 500px;
        &__thumbnail {
            position: relative;
            img {
                width: 100%;
                margin-bottom: 10px;
            }
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: $cOrange;
                mix-blend-mode: multiply;
            }
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
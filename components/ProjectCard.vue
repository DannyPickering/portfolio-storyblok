<script setup>
    defineProps({
        project: Object,
        slug: String
    })
</script>

<template>
    <NuxtLink
        :to="'/' + slug"
        v-editable="project">
        <img 
            :src="project.content.thumbnail.filename" 
            alt=""
        />
        <div>
            <h3>{{ project.content.title }}</h3>
            <div
                v-for="tag in project.tag_list">
                {{ tag }}
            </div>
        </div>
    </NuxtLink>
</template>
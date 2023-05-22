<script setup lang="ts">
    const props = defineProps({
        blok: Object,
        default: () => ({})
    })

    const resolvedRichText = computed(() =>
        props.blok ? renderRichText(props.blok.content) : ''
    )
</script>

<template>
    <div v-editable="blok">
        <div>
            <h1>{{ blok?.title }}</h1>
            <h2>{{ blok?.desc }}</h2>
        </div>

        <div v-html="resolvedRichText"></div>
    </div>

</template>
<script setup>
    const props = defineProps({
        blok: Object
    })

    const resolvedRichText = computed(() =>
        renderRichText(props.blok.content)
    )
</script>

<template>
    <div v-editable="blok">
        <div>
            <h1>{{ blok.title }}</h1>
            <h2>{{ blok.desc }}</h2>
        </div>

        <div v-html="resolvedRichText"></div>
    </div>

</template>
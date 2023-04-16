<script setup>
    defineProps({ blok: Object })
</script>

<template>
    <div v-editable="blok">
        <h3>
            {{ blok.name }}
        </h3>
    </div>
</template>
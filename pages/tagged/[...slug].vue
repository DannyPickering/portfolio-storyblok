<script setup>
    const { slug } = useRoute().params
</script>

<template>
    <div class="container">
        <h1>Projects</h1>
        <AllTagged />
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
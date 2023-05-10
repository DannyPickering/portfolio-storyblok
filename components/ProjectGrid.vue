<template>
    <ul class="m-project-grid">
        <slot />
    </ul>
</template>

<style lang="scss">
    .m-project-grid {
        grid-column: 1 / span 6;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px 20px;
        @media (min-width: 560px) {
            grid-column: 1 / span 12;
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
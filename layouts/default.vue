<template>
    <div class="layout-wrapper">
        <Header />
        <main>
            <slot />
        </main>
    </div>
</template>

<style lang="scss">
    .layout-wrapper {
        background: #030B0D;
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 100vh;
    }
    main {
        > div {
            padding-top: 90px;
            padding-bottom: 90px;
        }
    }
</style>
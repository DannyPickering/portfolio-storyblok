<script setup lang="ts">
    import Lenis from '@studio-freight/lenis'

    onMounted(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })

        function raf(time: DOMHighResTimeStamp) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })
</script>

<template>
    <div>
        <Header />

        <main>
            <slot />
        </main>
    </div>
</template>

<style lang="scss">
    html.lenis {
        height: auto;
    }

    .lenis.lenis-smooth {
        scroll-behavior: auto;
    }

    .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
    }

    .lenis.lenis-stopped {
        overflow: hidden;
    }

    .lenis.lenis-scrolling iframe {
        pointer-events: none;
    } 
    .layout-wrapper {
        background: #030B0D;
        display: grid;
        grid-template-rows: auto 1fr;
    }
    main {
        > div {
            padding-top: 90px;
            padding-bottom: 90px;
        }
    }
</style>
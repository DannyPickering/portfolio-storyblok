<script setup lang="ts">
    const props = defineProps({ 
        blok: {
            type: Object,
            default: () => ({})
        } 
    })

    const resolvedRichText = computed(() =>
        renderRichText(props.blok.content)
    )

    const ctaText = computed(() => {
        return "'" + props.blok.ctaLabel + "'"
    })
</script>

<template>
    <div
        class="m-hh"
        v-editable="blok"
    >
        <div class="container-grid">
            <h1>{{ blok.headline }}</h1>
            <div class="m-hh__intro-content">
                <div class="m-hh__intro-text" v-html="resolvedRichText"></div>
                <NuxtLink class="cta" :to="blok.ctaLink.cached_url">
                    <div class="cta__text">
                        <div class="cta__text-inner">
                            {{ blok.ctaLabel }}
                        </div>
                        <div class="cta__text-bar cta__text-bar--left"></div>
                        <div class="cta__text-bar cta__text-bar--right"></div>
                    </div>
                    <div class="cta__border cta__border--left">
                        <svg width="4" height="38" viewBox="0 0 4 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 0H0V6.64792C0 6.87335 0.0895533 7.08955 0.248959 7.24896L1.75104 8.75104C1.91045 8.91045 2 9.12665 2 9.35208V28.6479C2 28.8734 1.91045 29.0896 1.75104 29.249L0.248959 30.751C0.089553 30.9104 0 31.1266 0 31.3521V38H4V0Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                    <div class="cta__border cta__border--right">
                        <svg width="4" height="38" viewBox="0 0 4 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 0H0V6.64792C0 6.87335 0.0895533 7.08955 0.248959 7.24896L1.75104 8.75104C1.91045 8.91045 2 9.12665 2 9.35208V28.6479C2 28.8734 1.91045 29.0896 1.75104 29.249L0.248959 30.751C0.089553 30.9104 0 31.1266 0 31.3521V38H4V0Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    h1 {
        font-family: $fRaj;
        font-size: 48px;
        line-height: 1;
        text-transform: uppercase;
        color: $cWhite;
        grid-column: 1 / span 6;
        margin-bottom: 20px;
        @media (min-width: 768px) {
            grid-column: 1 / span 9;
            font-size: 96px;
        }
        @media (min-width: 992px) {
            grid-column: 1 / span 7;
        }
    }

    .m-hh {
        color: $cWhite;
        padding-top: 20vh;
        // background-image: url('../assets/images/trees-bg.png');
        background-size: cover;
        width: 100vw;
        min-height: 100vh;
        margin-top: -90px;
        @media (min-width: 768px) {
            padding-top: 120px;
        }
        &__intro-content {
            grid-column: 1 / span 6;
        }
        &__intro-text {
            color: inherit;
            > p {
                color: inherit;
                font-family: $fOpenSans;
            }
        }
    }

    .cta {
        margin-top: 20px;
        position: relative;
        color: $cWhite;
        display: inline-flex;
        width: auto;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 30px;
        padding-right: 30px;
        text-decoration: none;
        font-family: $fRaj;
        font-size: 12px;
        line-height: 13px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        border-top: 0.5px solid rgba(255, 255, 255, 0.5);
        border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease-out;
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease-out;
        }
        &__text {
            position: relative;
            &:before {
                content: v-bind(ctaText);
                position: absolute;
                width: 100%;
                top: 100%;
                left: 0;
                opacity: 0;
            }
        }
        &__border {
            position: absolute;
            &--right {
                top: 0;
                right: 0;
                width: 4px;
                height: 100%;
            }
            &--left {
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                transform: rotate(180deg);
            }
        }
    }
</style>
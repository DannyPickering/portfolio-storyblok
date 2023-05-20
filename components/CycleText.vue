<script setup lang="ts">

    import { gsap } from 'gsap'

    const props = defineProps({
        word: {
            type: String,
            required: true
        },
        linkTo: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            required: false,
            default: '#fff'
        },
        bgHover: {
            type: String,
            required: false,
            default: '#fff'
        },
        bgScale: {
            type: Boolean,
            required: false,
            default: false
        },
        txtHover: {
            type: String,
            required: false,
            default: '#000'
        },
        txtColor: {
            type: String,
            required: false,
            default: '#fff'
        }
    })

    const originalWord = ref(props.word)
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'   

    let interval: ReturnType<typeof setInterval>

    const wordRef = ref()
    const wordHover = ref()
    
    let tlHoverIn =  gsap.timeline({ paused: true })
    let tlHoverOut = gsap.timeline({ paused: true })

    onMounted(() => {

        if(props.bgScale === true) {
            gsap.set(wordHover.value, { scaleX: 1})
        }

        tlHoverIn.to(wordHover.value, {
            scaleX: 1,
            transformOrigin: '0% 0%',
            background: props.bgHover,
            autoAlpha: 1,
            ease: 'cubic-bezier(0.7, 0.17, 0.15, 0.89)',
            duration: 0.4
        })
        .to(wordRef.value, {
            color: props.txtHover,
            ease: 'cubic-bezier(0.7, 0.17, 0.15, 0.89)',
            duration: 0.3
        }, '-= 0.3')
        
        tlHoverOut
        .to(wordRef.value, {
            color: props.txtColor,
            ease: 'cubic-bezier(0.7, 0.17, 0.15, 0.89)',
            duration: 0.3
        })
        .to(wordHover.value, {
            background: props.bgColor,
            scaleX: keepBgScaled.value,
            transformOrigin: '100% 0%',
            autoAlpha: 1,
            ease: 'cubic-bezier(0.7, 0.17, 0.15, 0.89)',
            duration: 0.4
        }, '-= 0.3')

        watch(() => props.word, (newValue) => {
            originalWord.value = newValue;
            animateLetters();
        })

    })
    
    const keepBgScaled = computed(() => {
        return props.bgScale ? 1 : 0;
    })
    
    const animateLetters = () => {
        gsap.set(wordHover.value, { transformOrigin: '0% 0%' })
        tlHoverIn.play(0)
        let iteration = 0
        clearInterval(interval)

        interval = setInterval(() => {
            if (!wordRef.value) return
            
            const txt = wordRef.value.innerText
            wordRef.value.innerText = txt
                .split('')
                .map((letter: string, index: number) => {
                    
                    // Slowly return letters back to their original letter
                    if (index < iteration) {
                        return originalWord.value[index]
                    }

                    return letters[Math.floor(Math.random() * letters.length)]
                })
                .join('')

            if(iteration >= originalWord.value.length) {
                clearInterval(interval)
            }

            // Cycle each letter 3x before returning back to original
            iteration += 1 / 3
        }, 30)
    }

    function animateOut() {
        gsap.set(wordHover.value, { transformOrigin: '100% 0%' })
        tlHoverOut.play(0)
    }

</script>

<template>
    <NuxtLink class="cycle-link" :to="linkTo" @mouseover="animateLetters" @mouseleave="animateOut">
        <div class="word" >
            <span ref="wordRef">{{ word }}</span>
            <div class="hover" ref="wordHover"></div>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
    .cycle-link {
        display: inline-block;
        font-family: $fMono;
        font-size: 12px;
        text-transform: uppercase;
        color: v-bind(txtColor);
        text-decoration: none;
    }
    .word {
        position: relative;
        overflow: hidden;
        pointer-events: none;
        padding: 2px 4px;
        span {
            z-index: 2;
            position: relative;
            pointer-events: none;
        }
        > .hover {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: v-bind(bgColor);
            transform: scaleX(0);
            pointer-events: none;
            z-index: 1;
        }
    }
</style>
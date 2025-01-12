<template>
    <div class="flex gap-2 w-fit">
        <LogoIcon :svg-size="svgSize" :animated="false"></LogoIcon>
        <div class="flex flex-col items-start justify-end">
            <span class="title text-4xl">BOSS</span>
            <span v-if="width > 640 || width < 640 && footer" class="subtitle font-display text-xs">Business Operations Services and Solutions</span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    footer: Boolean
})

const { height, width } = useWindowSize()

const svgSize = ref(width.value < 640 ? '35px' : '70px')

watch(width, (cur)=>{
    if (cur < 640){
        svgSize.value = '35px'
    }
    else {
        svgSize.value = '70px'
    }
})
</script>

<style scoped lang="sass">
span
    &.title
        height: fit-content
        font-family: 'Grillmaster'
        color: var(--color-sand-800)
        margin-right: 8px

    &.subtitle
        height: fit-content
        color: var(--color-sand-800)
        letter-spacing: 0px
        word-spacing: -2px
        margin: 4px 8px 0 0

@media (prefers-color-scheme:dark)
    span
        &.title, &.subtitle
            color: var(--color-sand-300)
</style>
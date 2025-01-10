<template>
    <div class="flex gap-2 w-fit">
        <LogoIcon :svg-size="svgSize" :animated="false"></LogoIcon>
        <div class="flex flex-col items-start justify-end">
            <span class="title">BOSS</span>
            <span v-if="width > 640 || width < 640 && footer" class="subtitle">Business Operations Services and Solutions</span>
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
        font-size: 36px
        line-height: 36px
        color: var(--color-sand-800)
        margin-right: 8px

    &.subtitle
        height: fit-content
        font-size: 14px
        line-height: 14px
        color: var(--color-sand-800)
        margin: 4px 8px 0 0

@media (prefers-color-scheme:dark)
    span
        &.title, &.subtitle
            color: var(--color-sand-300)
</style>
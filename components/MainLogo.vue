<template>
    <div class="flex gap-2 w-fit">
        <LogoIcon :svg-size="'70px'" :animated="false"></LogoIcon>
        <div class="flex flex-col items-start justify-end">
            <span>BOSS</span>
            <span>Business Operations Services and Solutions</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    svgSize: String,
    animated: Boolean
})
</script>

<style scoped lang="sass">
span
    &:first-of-type
        height: fit-content
        font-family: 'Grillmaster'
        font-size: 36px
        line-height: 36px
        color: var(--color-sand-800)
        margin-right: 8px

    &:last-of-type
        height: fit-content
        font-size: 14px
        line-height: 14px
        color: var(--color-sand-800)
        margin: 4px 8px 0 0

@media (prefers-color-scheme:dark)
    span
        &:first-of-type, &:last-of-type
            color: var(--color-sand-300)
</style>
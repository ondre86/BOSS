<template>
    <svg viewBox="0 0 1728 1414" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 0L1728 1413.57H0L0 0Z" :fill="svgFill"/>
    </svg>
</template>

<script setup lang="ts">
const dark = useDark()
const svgFill = ref(dark.value ? '#334155' : '#1e293b')

watch(dark, (cur)=>{
    if (cur){
        svgFill.value = '#334155'
    }
    else {
        svgFill.value = '#1e293b'
    }
})
</script>

<style scoped lang="sass">
svg
    width: 100%
    height: 175%
</style>
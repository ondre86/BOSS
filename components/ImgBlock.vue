<template>
    <NuxtLink :to="link" class="w-full flex flex-col gap-3 text-center p-2 rounded-lg transition-all duration-300 bg-transparent outline-transparent hover:bg-gray-50 hover:outline hover:outline-gray-200 dark:hover:outline-slate-700 dark:hover:bg-slate-800">
        <NuxtImg placeholder :src="img" :class="imgClass" class="rounded-md"></NuxtImg>
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    img: String,
    link: String,
    imgClass: String
})
</script>

<style scoped lang="sass">

</style>
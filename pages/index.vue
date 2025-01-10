<template>
    <main class="flex flex-col w-full items-center mt-24 sm:mt-36">
        <HomeHero></HomeHero>
        <HomeBusinessBuilder></HomeBusinessBuilder>
        <HomeDocuments></HomeDocuments>
        <HomePackShip></HomePackShip>
        <HomeOtherServices></HomeOtherServices>
    </main>
</template>

<script setup lang="ts">
useHead({
    title: '',
    meta: [
        {
            name: 'description',
            content: 'BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance.'
        },
        {
            name: 'og:description',
            content: 'BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance.'
        },
        {
            name: 'og:title',
            content: 'BOSS - Business Operations Services & Solutions'
        },
        {
            name: 'og:image',
            content: '/og-img.jpg' // MISSING
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        }
    ],
    titleTemplate: '%siteName',
    templateParams: {
        seperator: '·',
        siteName: 'BOSS - Business Operations Services & Solutions'
    }
})
</script>

<style scoped lang="sass">
</style>
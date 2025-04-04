<template>
    <main class="flex flex-col w-full items-center mt-24 mb-12 sm:mt-36">
        <section class="w-full flex flex-col px-8 justify-between gap-8 my-3 sm:my-7 max-w-6xl lg:grid lg:grid-cols-2 lg:flex-row lg:gap-24 lg:px-12">
            <div class="flex flex-col gap-8 mb-8 relative lg:mb-0">
                <div class="flex flex-col gap-1">
                    <h1 class="text-6xl text-sand-800 dark:text-sand-300 lg:text-8xl -ml-1">About</h1>
                </div>
                <p class="max-w-prose">
                    <abbr title="Business Operations Solutions and Services">BOSS</abbr> (Business Operations Solutions and Services) is dedicated to serving New Orleans East with a wide range of essential services designed to make your life and business operations easier. <br><br>
                    Founded in 2024, we specialize in printing and shipping, document services, notary services, tax preparation, and administrative services delivered with precision, care, and a focus on customer satisfaction. <br><br>
                    BOSS is led by Talana Anderson, a notary public and business operations expert, who has 15+ years of experience helping individuals and businesses navigate their administrative, financial, and legal needs. <br><br>
                    With a deep understanding of the community and its needs, BOSS was specifically designed to provide affordable and accessible services that empower local residents and entrepreneurs to achieve their goals with confidence.
                </p>
                <div class="flex flex-col gap-4">
                    <h2 class="text-xl text-sand-800 dark:text-sand-300">Mission</h2>
                    <p>To provide convenient, reliable and professional business solutions that simplify the lives of customers and help them achieve their goals.</p>
                </div>
                <div class="flex flex-col gap-4">
                    <h2 class="text-xl text-sand-800 dark:text-sand-300">Vision</h2>
                    <p>To become the leading provider of business services in community and be known for exceptional customer service, innovation, and a commitment to excellence.</p>
                </div>
            </div>
            <div class="flex flex-col gap-4 text-center relative">
                <NuxtImg src="/rect.png" alt="Talanda Anderson" class="rounded-md"></NuxtImg>
                <span class="italic">Talana Anderson, founder, BOSS</span>
                <LogoIcon 
                    :svg-size="'450px'"
                    class="absolute -z-10 opacity-5 -bottom-36 hidden lg:block"
                    style="left: 50%; transform: translate(-50%);"
                >
                </LogoIcon>
            </div>
        </section>
        <section class="w-full px-8 flex flex-col justify-center mt-24 mb-12 gap-6 max-w-6xl">
            <h2 class="text-4xl font-display text-sand-800 dark:text-sand-300">Our Location</h2>
            <p>
                Our brick and mortar location is coming soon to New Orleans East – located at 5790 Crowder Blvd. Suite E, New Orleans, 70127. <br>
                Please check back later to view photos. 
            </p>
            <!-- <div class="flex flex-wrap gap-4">
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
            </div> -->
        </section>
    </main>
</template>

<script setup lang="ts">
useHead({
    title: 'About',
    meta: [
        {
            name: 'description',
            content: 'BOSS is a full-service business center located in New Orleans East, founded in 2024. We provide a number of administration, document, and shipping services.'
        },
        {
            name: 'og:description',
            content: 'BOSS is a full-service business center located in New Orleans East, founded in 2024. We provide a number of administration, document, and shipping services.'
        },
        {
            name: 'og:title',
            content: 'About · BOSS'
        },
        {
            name: 'og:image',
            content: '/og-img.jpg'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        }
    ],
    titleTemplate: '%s %seperator %siteName',
    templateParams: {
        seperator: '·',
        siteName: 'BOSS'
    }
})
</script>

<style scoped lang="sass">
h2
    font-family: "Grillmaster"
img
    width: 100%
    min-height: 400px
    max-height: 500px
</style>
<template>
    <main class="flex flex-col w-full items-center mt-24 mb-12 sm:mt-36">
        <section
            class="w-full flex flex-col px-8 justify-between gap-8 my-3 sm:my-7 max-w-6xl lg:flex-row lg:gap-24 lg:px-12"
        >
            <div class="flex flex-col gap-8 mb-8 relative lg:mb-0">
                <div class="flex flex-col gap-1">
                    <h1 class="text-6xl text-sand-800 dark:text-sand-300 -ml-1">
                        About
                    </h1>
                </div>
                <p class="max-w-prose">
                    <abbr title="Business Operations Solutions and Services"
                        >BOSS</abbr
                    >
                    (Business Operations Solutions and Services) is dedicated to
                    serving New Orleans East with a wide range of essential
                    services designed to make your life and business operations
                    easier. <br /><br />
                    Founded in 2024, we specialize in printing and shipping,
                    document services, notary services, and administrative
                    services delivered with precision, care, and a focus on
                    customer satisfaction. <br /><br />
                    BOSS is led by Talana Anderson, a notary public and business
                    operations expert, who has 15+ years of experience helping
                    individuals and businesses navigate their administrative,
                    financial, and legal needs. <br /><br />
                    With a deep understanding of the community and its needs,
                    BOSS was specifically designed to provide affordable and
                    accessible services that empower local residents and
                    entrepreneurs to achieve their goals with confidence.
                </p>
                <div class="flex flex-col gap-4">
                    <h2 class="text-xl text-sand-800 dark:text-sand-300">
                        Mission
                    </h2>
                    <p class="max-w-prose">
                        To provide convenient, reliable and professional
                        business solutions that simplify the lives of customers
                        and help them achieve their goals.
                    </p>
                </div>
                <div class="flex flex-col gap-4">
                    <h2 class="text-xl text-sand-800 dark:text-sand-300">
                        Vision
                    </h2>
                    <p class="max-w-prose">
                        To become the leading provider of business services in
                        community and be known for exceptional customer service,
                        innovation, and a commitment to excellence.
                    </p>
                </div>
            </div>
            <!-- <div class="flex flex-col gap-4 text-center relative">
                <NuxtImg
                    src="/rect.png"
                    alt="Talanda Anderson"
                    class="rounded-md"
                ></NuxtImg>
                <span class="italic">Talana Anderson, founder, BOSS</span>
                <LogoIcon
                    :svg-size="'450px'"
                    class="absolute -z-10 opacity-5 -bottom-36 hidden lg:block"
                    style="left: 50%; transform: translate(-50%)"
                >
                </LogoIcon>
            </div> -->
        </section>
        <section
            class="w-full px-8 flex flex-col justify-center mt-24 mb-12 gap-6 max-w-6xl"
        >
            <h2 class="text-4xl font-display text-sand-800 dark:text-sand-300">
                Our Location
            </h2>
            <p class="max-w-prose">
                Our brick and mortar location is coming soon to New Orleans East
                – located at
                <NuxtLink
                    class="underline underline-offset-2 transition-all duration-300 w-fit hover:underline-offset-4 text-sand-800 hover:text-sand-500 dark:text-sand-300 dark:hover:text-sand-500"
                    target="_blank"
                    to="https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127/@30.0281244,-89.9967336,17z/data=!3m1!4b1!4m6!3m5!1s0x889e027bb876935b:0x97ca628b597ff069!8m2!3d30.0281244!4d-89.9941587!16s%2Fg%2F11scv0fd7b?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
                >
                    5790 Crowder Blvd. Suite E, New Orleans, LA, 70127
                </NuxtLink>
                <br /><br />
                Check back later for photos of our facility.
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
    title: "About",
    meta: [
        {
            name: "description",
            content:
                "BOSS is a full-service business center located in New Orleans East, founded in 2024. We provide a number of administration, document, and shipping services."
        },
        {
            name: "og:description",
            content:
                "BOSS is a full-service business center located in New Orleans East, founded in 2024. We provide a number of administration, document, and shipping services."
        },
        {
            name: "og:title",
            content: "About · BOSS"
        },
        {
            name: "og:image",
            content: "/og-img.jpg"
        },
        {
            name: "twitter:card",
            content: "summary_large_image"
        }
    ],
    titleTemplate: "%s %seperator %siteName",
    templateParams: {
        seperator: "·",
        siteName: "BOSS"
    },
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "AboutPage",
                        "@id": "https://boss504.com/about",
                        url: "https://boss504.com/about",
                        name: "About BOSS",
                        description:
                            "Learn about BOSS, a community-centered business founded in 2024 in New Orleans East by a licensed notary and business administration expert.",
                        isPartOf: {
                            "@id": "https://boss504.com"
                        }
                    },
                    {
                        "@type": "Organization",
                        "@id": "https://boss504.com#org",
                        name: "BOSS",
                        url: "https://boss504.com",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://boss504.com/og-img.jpg"
                        },
                        founder: {
                            "@type": "Person",
                            name: "Talana Anderson"
                        },
                        foundingDate: "2024",
                        foundingLocation: {
                            "@type": "Place",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "New Orleans",
                                addressRegion: "LA",
                                addressCountry: "US"
                            }
                        },
                        email: "talana@boss504.com",
                        sameAs: [
                            "https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127"
                        ]
                    }
                ]
            })
        }
    ]
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

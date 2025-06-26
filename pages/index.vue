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
    title: "",
    meta: [
        {
            name: "description",
            content:
                "BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance."
        },
        {
            name: "og:description",
            content:
                "BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance."
        },
        {
            name: "og:title",
            content: "BOSS - Business Operations Services & Solutions"
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
    titleTemplate: "%siteName",
    templateParams: {
        seperator: "·",
        siteName: "BOSS · Business Operations Services & Solutions"
    },
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "LocalBusiness",
                        "@id": "https://boss504.com/#business",
                        name: "BOSS",
                        image: "https://boss504.com/og-img.jpg",
                        url: "https://boss504.com",
                        telephone: "+1-504-407-1140",
                        email: "talana@boss504.com",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "5790 Crowder Blvd. Suite E",
                            addressLocality: "New Orleans",
                            addressRegion: "LA",
                            postalCode: "70127",
                            addressCountry: "US"
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: 30.0281244,
                            longitude: -89.9941587
                        },
                        sameAs: [
                            "https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127"
                        ]
                    },
                    {
                        "@type": "WebSite",
                        "@id": "https://boss504.com/#website",
                        url: "https://boss504.com",
                        name: "BOSS",
                        publisher: {
                            "@id": "https://boss504.com/#business"
                        }
                    },
                    {
                        "@type": "WebPage",
                        "@id": "https://boss504.com/#webpage",
                        url: "https://boss504.com",
                        name: "BOSS - Business Support Services in New Orleans East",
                        description:
                            "BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance.",
                        isPartOf: {
                            "@id": "https://boss504.com/#website"
                        },
                        breadcrumb: {
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://boss504.com"
                                }
                            ]
                        }
                    }
                ]
            })
        }
    ]
})
</script>

<style scoped lang="sass"></style>

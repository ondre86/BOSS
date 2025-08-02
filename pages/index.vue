<template>
    <main class="flex flex-col w-full items-center mt-24 sm:mt-36">
        <HomeHero></HomeHero>
        <Marquee
            :title="'Want to build your own business?'"
            :desc-text="`Building your own business can be empowering, but there
                        are necessary you need to take to stay compliant and
                        above board. Our “Small Business Package” takes care of
                        all of those pesky administrative tasks so you can focus
                        on the success of your new business.`"
            :subtitle="`Our Small Business Package includes:`"
            :list-elements="[
                'Secretary of State filing ',
                'BOIR filing',
                'IRS EIN filing',
                'City Occupational License',
                'Gmail Workspace Setup',
                'Total Administrative Organization',
                'Credential Centralization'
            ]"
            :button-text="`Help Build My Business`"
            :img-src="'/img/desk-md.webp'"
            :alt-text="`desk with person typing on laptop, two notebooks, another laptop, a candle, and an eaten muffin`"
        ></Marquee>
        <HomeDocuments></HomeDocuments>
        <Marquee
            :title="'Quality Packing Supplies Available'"
            :desc-text="`We make packing and shipping simple, secure, and
                    worry-free. Just bring your items.`"
            :subtitle="`We keep supplies in store such as:`"
            :list-elements="[
                'Corrugated Cardboard Boxes',
                'Bubble Wrap',
                'Packing Tape',
                'Packing Peanuts',
                'Mailing Envelopes',
                'Shipping Label Printer'
            ]"
            :img-src="'/img/packing-supplies-md.webp'"
            :alt-text="`corrugated cardboard shipping boxes lined in rows to easily ship items from BOSS Business Center in New Orleans East`"
        ></Marquee>
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
                "BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, and business administration assistance."
        },
        {
            name: "og:description",
            content:
                "BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, and business administration assistance."
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
            innerHTML: JSON.stringify({
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
                            "BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, and business administration assistance.",
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

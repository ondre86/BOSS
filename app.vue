<template>
    <UApp>
        <AppNav />
        <NuxtPage />
        <AppFooter />
    </UApp>
    <NuxtRouteAnnouncer />
</template>

<script>
useHead({
    script: [
        {
            src: "https://cloud.umami.is/script.js",
            async: true,
            "data-website-id": "9da7f1d1-c56c-4382-85ed-a4ca4d472dcd"
        },
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
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
            })
        }
    ]
})
</script>

<style lang="sass">
:root
	font-family: DM Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	font-weight: 400
	--scrollbar-width: 16px

html
	overflow-x: hidden

body
	padding-right: 0 !important


body.scroll-lock
	padding-right: var(--scrollbar-width)


main
	h1
		font-family: 'Grillmaster'

abbr
	text-decoration: none

.fade-move,
.fade-enter-active,
.fade-leave-active
	transition: all .25s ease

.fade-enter-from,
.fade-leave-to
	opacity: 0 !important
</style>

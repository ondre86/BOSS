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

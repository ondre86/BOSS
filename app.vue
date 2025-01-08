<template>
	<UApp>
		<AppNav />
		<NuxtPage />
		<AppFooter />
	</UApp>
	<NuxtRouteAnnouncer />
</template>

<style lang="sass">
:root
	font-family: DM Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	font-weight: 400

main
	h1
		font-family: 'Grillmaster'
		font-size: 5rem
		line-height: 5rem
		color: var(--color-sand-800)

main
	color: var(--color-sand-950)

@media (prefers-color-scheme:dark)
	main
		color: white

.fade-move,
.fade-enter-active,
.fade-leave-active 
	transition: all .25s ease

.fade-enter-from,
.fade-leave-to 
	opacity: 0 !important
</style>

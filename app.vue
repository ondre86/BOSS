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

.fade-move,
.fade-enter-active,
.fade-leave-active 
	transition: all .25s ease

.fade-enter-from,
.fade-leave-to 
	opacity: 0 !important
</style>

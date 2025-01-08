<template>
	<div>
		<UApp>
			<AppNav />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
			<AppFooter />
		</UApp>
		<NuxtRouteAnnouncer />
	</div>
</template>

<style lang="sass">
:root
	font-family: DM Sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	font-weight: 400
</style>

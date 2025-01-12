<template>
    <main class="flex items-center justify-center my-8 px-8">
        <div class="flex flex-col gap-12 items-center">
            <LogoIcon :svg-size="'150px'" :animated="true" />
            <div class="flex flex-col gap-8 text-center">
                <div class="flex flex-col gap-4">
                    <h1 class="text-4xl">Coming Soon...</h1>
                    <h2 class="text-2xl">
                      <NuxtLink to="https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127/@30.0281244,-89.9967336,17z/data=!3m1!4b1!4m6!3m5!1s0x889e027bb876935b:0x97ca628b597ff069!8m2!3d30.0281244!4d-89.9941587!16s%2Fg%2F11scv0fd7b?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">5790 Crowder Blvd. Suite E, New Orleans, LA</NuxtLink>
                    </h2>
                </div>
                <p class="max-w-prose">
                    BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance. <br><br>
                    We also specialize in new business paperwork filing, streamlining the process to help entrepreneurs launch their ventures with confidence. <br><br>
                    Whether you need day-to-day operational support or assistance with critical tasks, we are your one-stop solution for efficiency and convenience.</p>
            </div>
        </div>
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
h1, h2
    font-family: "Grillmaster"
</style>
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxt/image',
		'nuxt-security',
		'@nuxt/fonts',
		'@vueuse/nuxt',
		'@nuxtjs/seo',
		'@hypernym/nuxt-gsap',
		'@nuxt/ui'
	],
	typescript: {
		typeCheck: true
	},
	ssr: true,
	css: [
		'~/assets/css/main.css'
	],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: `@use "@/assets/global.sass" as g`,
					api: 'modern-compiler'
				}
			}
		}
	},
	app: {
		pageTransition: { 
			name: 'fade', 
			mode: 'out-in' 
		},
		head: {
			htmlAttrs: {
				lang: 'en'
			}
		}
	},
	gsap: {
		extraPlugins: {
			scrollTrigger: true,
			text: true
		}
	},
})
<template>
    <footer
        class="flex flex-col border-t p-8 gap-8 items-center md:justify-between"
    >
        <div class="w-full max-w-7xl flex flex-col">
            <div
                class="w-full flex flex-col gap-8 md:flex-row md:justify-between"
            >
                <NuxtLink href="/">
                    <MainLogo :footer="true" />
                </NuxtLink>
                <div class="flex flex-col gap-4">
                    <NuxtLink
                        class="underline underline-offset-2 transition-all duration-300 w-fit hover:underline-offset-4 text-sand-800 hover:text-sand-500 dark:text-sand-300 dark:hover:text-sand-500"
                        target="_blank"
                        to="https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127/@30.0281244,-89.9967336,17z/data=!3m1!4b1!4m6!3m5!1s0x889e027bb876935b:0x97ca628b597ff069!8m2!3d30.0281244!4d-89.9941587!16s%2Fg%2F11scv0fd7b?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D"
                    >
                        5790 Crowder Blvd. Suite E<br />
                        New Orleans, LA, 70127
                    </NuxtLink>
                    <NuxtLink
                        class="underline underline-offset-2 transition-all duration-300 w-fit hover:underline-offset-4 text-sand-800 hover:text-sand-500 dark:text-sand-300 dark:hover:text-sand-500"
                        to="tel:504-407-1140"
                    >
                        (504) 407-1140
                    </NuxtLink>
                    <NuxtLink
                        class="underline underline-offset-2 transition-all duration-300 w-fit hover:underline-offset-4 text-sand-800 hover:text-sand-500 dark:text-sand-300 dark:hover:text-sand-500"
                        to="mailto:talana@boss504.com"
                    >
                        talana@boss504.com
                    </NuxtLink>
                </div>
            </div>
            <nav
                class="mt-8"
                aria-label="Footer Navigation"
            >
                <ul class="flex w-fit flex-col gap-4">
                    <li
                        class="text-xl underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 font-semibold text-sand-800 dark:text-sand-300 hover:text-sand-500 w-fit"
                    >
                        <NuxtLink to="/about"> About </NuxtLink>
                    </li>
                    <li
                        class="flex flex-col text-xl font-semibold text-sand-300 w-fit"
                    >
                        <ul class="flex flex-wrap gap-4">
                            <li
                                class="underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 text-sand-800 dark:text-sand-300 hover:text-sand-500"
                            >
                                <NuxtLink to="/services/notary">
                                    Notary
                                </NuxtLink>
                            </li>
                            <li
                                class="underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 text-sand-800 dark:text-sand-300 hover:text-sand-500"
                            >
                                <NuxtLink to="/services/tax-prep">
                                    Tax Prep
                                </NuxtLink>
                            </li>
                            <li
                                class="underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 text-sand-800 dark:text-sand-300 hover:text-sand-500"
                            >
                                <NuxtLink
                                    to="/services/administrative-services"
                                >
                                    Admin Services
                                </NuxtLink>
                            </li>
                            <li
                                class="underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 text-sand-800 dark:text-sand-300 hover:text-sand-500"
                            >
                                <NuxtLink to="/services/print-copy">
                                    Print & Copy
                                </NuxtLink>
                            </li>
                            <li
                                class="underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 text-sand-800 dark:text-sand-300 hover:text-sand-500"
                            >
                                <NuxtLink to="/services/documents">
                                    Documents
                                </NuxtLink>
                            </li>
                            <li
                                class="underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 text-sand-800 dark:text-sand-300 hover:text-sand-500"
                            >
                                <NuxtLink to="/services/pack-ship">
                                    Pack & Ship
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li
                        class="text-xl underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 font-semibold text-sand-800 dark:text-sand-300 hover:text-sand-500 w-fit"
                    >
                        <NuxtLink to="/about"> Contact </NuxtLink>
                    </li>
                </ul>
            </nav>
            <span class="mt-8 text-sm text-sand-800 dark:text-sand-300"
                >© 2025 BOSS</span
            >
            <span class="mt-2 text-sm text-sand-800 dark:text-sand-300"
                >Website developed by
                <NuxtLink
                    class="underline underline-offset-2 transition-all duration-300 hover:underline-offset-8 font-semibold hover:text-sand-500"
                    to="https://ondre.org"
                    target="_blank"
                    >ondre.org</NuxtLink
                ></span
            >
        </div>
    </footer>
</template>

<script setup lang="ts">
const { height, width } = useWindowSize()

const svgSize = ref("70px")

watch(width, (cur) => {
    if (cur < 500) {
        svgSize.value = "35px"
    } else {
        svgSize.value = "70px"
    }
})
</script>

<style scoped lang="sass">
footer
    border-color: var(--color-gray-200)

@media (prefers-color-scheme:dark)
    footer
        border-color: var(--color-slate-800)
</style>

<template>
    <header class="flex border-b py-4 px-8 justify-center w-full fixed top-0 left-0 z-50 bg-white dark:bg-slate-900">
        <nav class="flex w-full items-center justify-between max-w-7xl">
            <NuxtLink to="/">
                <MainLogo :footer="false" />
            </NuxtLink>
            <ul class="gap-4 hidden md:flex">
                <li>
                    <UButton to="/about" color="primary" variant="outline" size="lg">About</UButton>
                </li>
                <li>
                    <UDropdownMenu :items="items">
                        <UButton color="primary" variant="outline" size="lg" trailing-icon="i-solar-alt-arrow-down-linear" class="cursor-pointer">Services</UButton>
                    </UDropdownMenu>
                </li>
                <li>
                    <UButton to="/contact" size="lg">Contact Us</UButton>
                </li>
            </ul>
            <USlideover
                title="Navigation"
                :close="{
                    label: 'Close',
                    color: 'error',
                }"
                close-icon="i-solar-close-square-linear"
                v-model:open="open"
                :ui="{ title: 'text-xl'}"
            >
                <UButton class="md:hidden" icon="i-solar-hamburger-menu-linear"></UButton>
                
                <template #body>
                    <UNavigationMenu 
                        orientation="vertical" 
                        :items="mobileItems" 
                        class="text-xl" 
                        :ui="{ link: 'text-xl' }"
                    />
                </template>
                <template #footer>
                    <div class="flex flex-col gap-4 w-full">
                        <UButton block to="/contact" @click="open = false">Contact Us</UButton>
                        <UButton block variant="outline" target="_blank" to="https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127/@30.0281244,-89.9967336,17z/data=!3m1!4b1!4m6!3m5!1s0x889e027bb876935b:0x97ca628b597ff069!8m2!3d30.0281244!4d-89.9941587!16s%2Fg%2F11scv0fd7b?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D">Get Directions</UButton>
                    </div>
                </template>
            </USlideover>
        </nav>
    </header>
</template>

<script setup lang="ts">
const open = ref(false)

const items = ref(
    [
    {
            label: 'Admin Services',
            icon: 'i-solar-buildings-3-line-duotone',
            to: '/services/administrative-services',
            color: 'primary' as const
        },
        {
            type: 'separator' as const,
        },
        {
            label: 'Notary',
            icon: 'i-solar-document-add-linear',
            to: '/services/notary',
            color: 'primary' as const
        },
        {
            type: 'separator' as const,
        },
        {
            label: 'Tax Prep',
            icon: 'i-solar-chat-round-money-linear',
            to: '/services/tax-prep',
            color: 'primary' as const
        },
        {
            type: 'separator' as const,
        },
        {
            label: 'Print & Copy',
            icon: 'i-solar-printer-linear',
            to: '/services/print-copy',
            color: 'primary' as const
        },
        {
            type: 'separator' as const,
        },
        {
            label: 'Document Services',
            icon: 'i-solar-object-scan-linear',
            to: '/services/documents',
            color: 'primary' as const
        },
        {
            type: 'separator' as const,
        },
        {
            label: 'Pack & Ship',
            icon: 'i-solar-mailbox-linear',
            to: '/services/pack-ship',
            color: 'primary' as const
        }
    ],
)
const mobileItems = ref(
    [
        {
            label: 'Home',
            icon: 'i-solar-home-linear',
            to: '/',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
        {
            label: 'About',
            icon: 'i-solar-question-square-linear',
            to: '/about',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
        {
            label: 'Notary',
            icon: 'i-solar-document-add-linear',
            to: '/services/notary',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
        {
            label: 'Tax Prep',
            icon: 'i-solar-chat-round-money-linear',
            to: '/services/tax-prep',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
        {
            label: 'Admin Services',
            icon: 'i-solar-buildings-3-line-duotone',
            to: '/services/administrative-services',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
        {
            label: 'Print & Copy',
            icon: 'i-solar-printer-linear',
            to: '/services/print-copy',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
        {
            label: 'Document Services',
            icon: 'i-solar-object-scan-linear',
            to: '/services/documents',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
        {
            label: 'Pack & Ship',
            icon: 'i-solar-mailbox-linear',
            to: '/services/pack-ship',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
        {
            label: 'Contact',
            icon: 'i-solar-chat-dots-linear',
            to: '/contact',
            color: 'primary' as const,
            onSelect: ()=>{open.value = false}
        },
    ],
)


</script>

<style scoped lang="sass">
header
    border-color: var(--color-gray-200)


@media (prefers-color-scheme:dark)
    header
        border-color: var(--color-slate-800)
</style>
<template>
    <header class="flex border-b py-4 px-8 justify-between">
        <nav class="flex w-full items-center justify-between">
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
                    <UButton to="/contact" color="info" size="lg">Contact Us</UButton>
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
                    <UButton block to="/contact" @click="open = false">Contact Us</UButton>
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
            label: 'Admin Services',
            icon: 'i-solar-buildings-3-line-duotone',
            to: '/services/administrative-services',
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
            label: 'Fax & Scan',
            icon: 'i-solar-object-scan-linear',
            to: '/services/fax-scan',
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
            label: 'Fax & Scan',
            icon: 'i-solar-object-scan-linear',
            to: '/services/fax-scan',
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
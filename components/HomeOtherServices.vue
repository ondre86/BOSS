<template>
    <section class="w-full flex flex-col px-8 relative justify-center lg:items-center py-16 mt-6 bg-gray-50 dark:bg-slate-800">
        <div class="flex flex-col gap-24 sm:flex-row sm:flex-wrap sm:justify-center md:text-center xl:gap-6 xl:grid xl:grid-cols-3">
            <div class="flex flex-col gap-8 md:items-center">
                <div class="flex flex-col gap-2">
                    <h2 class="text-4xl font-bold">Notary</h2>
                    <span>
                        Get documents notarized with ease. <br>
                        $20 for the first page, and $10 for each thereafter.
                    </span>
                </div>
                <NuxtLink to="/services/notary">
                    <NuxtImg src="/rect.png" class="rounded-md w-full xl:max-w-96"></NuxtImg>
                </NuxtLink>
                <UButton class="w-fit" size="xl" to="/services/notary">Notary Services</UButton>
            </div>
            <div class="flex flex-col gap-8 md:items-center">
                <div class="flex flex-col gap-2">
                    <h2 class="text-4xl font-bold">Administrative Services</h2>
                    <span>
                        Organize your business and upgrade your efficiency. <br>
                        File your incorporation paperwork in a few easy steps.
                    </span>
                </div>
                <NuxtLink to="/services/administrative-services">
                    <NuxtImg src="/rect.png" class="rounded-md w-full xl:max-w-96"></NuxtImg>
                </NuxtLink>
                <UButton class="w-fit" size="xl" to="/services/administrative-services">Admin Services</UButton>
            </div>
            <div class="flex flex-col gap-8 md:items-center">
                <div class="flex flex-col gap-2">
                    <h2 class="text-4xl font-bold">Tax Prep</h2>
                    <span>
                        Process your simple tax returns quickly.<br>
                        Get advice and referrals for your questions.
                    </span>
                </div>
                <NuxtLink to="/services/tax-prep">
                    <NuxtImg src="/rect.png" class="rounded-md w-full xl:max-w-96"></NuxtImg>
                </NuxtLink>
                <UButton class="w-fit" size="xl" to="/services/tax-prep">Tax Services</UButton>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">

</style>
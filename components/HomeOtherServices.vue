<template>
    <section
        class="w-full flex flex-col px-8 relative justify-center lg:items-center py-16 mt-6 bg-gray-50 dark:bg-slate-800"
    >
        <div
            class="flex flex-col gap-24 md:flex-row md:flex-wrap md:justify-center md:text-center xl:gap-6 xl:grid xl:grid-cols-2"
        >
            <div class="flex flex-col gap-8 md:items-center">
                <div class="flex flex-col gap-2">
                    <h2 class="text-4xl font-bold">Notary</h2>
                    <span>
                        Get documents notarized with ease. <br />
                        $20 for the first page, and $10 for each thereafter.
                    </span>
                </div>
                <NuxtLink to="/notary-public-new-orleans">
                    <NuxtImg
                        src="/img/notary-sm.webp"
                        alt="person stamping a document on a desk"
                        class="rounded-md w-full md:w-96 md:h-56"
                    ></NuxtImg>
                </NuxtLink>
                <UButton
                    class="w-full justify-center sm:w-fit"
                    size="xl"
                    to="/notary-public-new-orleans"
                    >View Notary Services</UButton
                >
            </div>
            <div class="flex flex-col gap-8 md:items-center">
                <div class="flex flex-col gap-2">
                    <h2 class="text-4xl font-bold">Administrative Services</h2>
                    <span>
                        Organize your business and upgrade your efficiency.
                        <br />
                        File your incorporation paperwork in a few easy steps.
                    </span>
                </div>
                <NuxtLink to="/administrative-services-new-orleans">
                    <NuxtImg
                        src="/img/admin-sm.webp"
                        alt="files room with lots of files on shelves"
                        class="rounded-md w-full md:w-96 md:h-56"
                    ></NuxtImg>
                </NuxtLink>
                <UButton
                    class="w-full justify-center sm:w-fit"
                    size="xl"
                    to="/administrative-services-new-orleans"
                    >View Administrative Services</UButton
                >
            </div>
            <!-- <div class="flex flex-col gap-8 md:items-center">
                <div class="flex flex-col gap-2">
                    <h2 class="text-4xl font-bold">Tax Prep</h2>
                    <span>
                        Process your simple tax returns quickly.<br />
                        Get advice and referrals for your questions.
                    </span>
                </div>
                <NuxtLink to="/tax-prep-new-orleans">
                    <NuxtImg
                        src="/img/tax-sm.webp"
                        alt="desk with calculator, pens, papers, and binders"
                        class="rounded-md w-full md:w-96 md:h-56"
                    ></NuxtImg>
                </NuxtLink>
                <UButton
                    class="w-full justify-center sm:w-fit"
                    size="xl"
                    to="/tax-prep-new-orleans"
                    >View Tax Services</UButton
                >
            </div> -->
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass"></style>

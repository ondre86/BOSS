<template>
    <section class="w-full flex flex-col px-8 relative justify-center lg:items-center text-white py-24 my-12 h-fit bg-slate-800">
        <div class=" max-w-6xl z-10 flex gap-8 flex-col-reverse lg:grid lg:gap-12 lg:grid-cols-2">
            <div class="max-w-6xl flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                    <h2 class="text-3xl font-bold">Want to build your own business?</h2>
                    <p class="max-w-prose">
                        Building your own business can be empowering, but there are necessary you need to take to stay compliant and above board.
                        Our “Small Business Package” takes care of all of those pesky administrative tasks so you can focus on the success of your new business.
                    </p>
                </div>
                <div class="flex flex-col gap-2">
                    <h3 class="text-2xl font-semibold">Our "Small Business Package" includes:</h3>
                    <ul class="list-disc list-inside">
                        <li>Secretary of State filing</li>
                        <li>BOIR filing</li>
                        <li>IRS EIN filing</li>
                        <li>City Occupational License</li>
                        <li>Gmail Workspace Setup</li>
                        <li>Total Administrative Organization</li>
                        <li>Credential Centralization</li>
                    </ul>
                </div>
                <UButton 
                    size="xl" 
                    class="w-fit transition-all duration-200 dark:bg-white dark:text-black hover:bg-slate-600 focus:bg-slate-600 hover:text-white focus:text-white"
                    color="neutral" 
                    variant="outline" 
                    to="/contact"
                    :ui="{ base: 'focus:outline-visible' }"
                >
                    Help Build My Business
                </UButton>
            </div>
            <div>
                <NuxtImg src="/img/desk-md.webp" class="w-full max-h-96 object-cover rounded-lg" :alt="'desk with person typing on laptop, two notebooks, another laptop, a candle, and an eaten muffin'"></NuxtImg>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">

</style>
<template>
    <section class="w-full flex flex-col px-8 justify-between gap-8 my-3 sm:my-7 max-w-6xl lg:flex-row lg:gap-24 lg:px-12">
        <div class="flex flex-col gap-4 mb-8 lg:mb-0">
            <div class="flex flex-col gap-1">
                <h1 class="text-6xl text-sand-800 dark:text-sand-300 lg:text-8xl">BOSS</h1>
                <span>Business Operations Solutions and Services</span>
            </div>
            <p class="max-w-prose mt-4">
                BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance. <br><br>
            </p>
            <div class="flex gap-4">
                <UButton 
                    to="/contact" 
                    class="w-fit" 
                    size="xl"
                >
                Contact Us
                </UButton>
                <UButton 
                    to="https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127/@30.0281244,-89.9967336,17z/data=!3m1!4b1!4m6!3m5!1s0x889e027bb876935b:0x97ca628b597ff069!8m2!3d30.0281244!4d-89.9941587!16s%2Fg%2F11scv0fd7b?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D" 
                    variant="outline" 
                    class="w-fit" 
                    size="xl"
                >
                    Get Directions
                </UButton>
            </div>
            
        </div>
            <TwoByTwoImgBlock></TwoByTwoImgBlock>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">

</style>
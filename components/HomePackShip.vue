<template>
    <section class="w-full flex flex-col px-8 relative justify-center lg:items-center py-8 my-6">
        <div class="flex flex-col gap-6 md:items-center">
            <div class="flex flex-col gap-4 md:items-center">
                <h2 class="text-4xl font-bold">Packing & Shipping</h2>
                <span>We make packing and shipping simple, secure, and efficient.</span>
            </div>
            <div class="flex gap-12 md:gap-4 flex-col md:flex-row md:justify-center">
                <ImgBlock class="md:max-w-96 text-start md:text-center" img="/rect.png" link="/services/pack-ship">
                    <span class="font-semibold text-xl">Packing Supplies</span>
                    Our store is fully stocked with high-quality packing supplies, including boxes, bubble wrap, and tape, to ensure your items are protected during transit.
                </ImgBlock>
                <ImgBlock class="md:max-w-96 text-start md:text-center" img="/rect.png" link="https://www.fedex.com/en-us/shipping/fedex-authorized-ship-center.html">
                    <span class="font-semibold text-xl">Authorized FedEx Shipper</span>
                    As an authorized FedEx shipper, we provide reliable shipping solutions for packages of all sizes, whether domestic or international.
                </ImgBlock>
            </div>
            <p class="max-w-3xl mt-6">
                Coming soon, we’ll also offer secure shipping lockers, allowing you to conveniently drop off or pick up packages on your schedule. From packing to delivery, we’re your trusted partner for hassle-free shipping services.
            </p>
            <div class="flex gap-6 mt-8">
                <UButton size="xl" to="/services/print-copy" class="text-center">Packing & Shipping Services</UButton>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">

</style>
<template>
    <section
        class="w-full flex flex-col px-8 relative justify-center lg:items-center py-8 my-6"
    >
        <div class="flex flex-col gap-6 md:items-center">
            <div class="flex flex-col gap-4 md:items-center">
                <h2 class="text-4xl font-bold">Packing & Shipping</h2>
                <span
                    >We make packing and shipping simple, secure, and
                    efficient.</span
                >
            </div>
            <div
                class="flex gap-12 md:gap-4 flex-col lg:flex-row lg:justify-center"
            >
                <ImgBlock
                    class="md:max-w-96 text-start md:text-center"
                    img="/img/packing-supplies-md.webp"
                    imgClass="sm:min-h-64"
                    :altText="'rows of cardboard boxes with their tops open'"
                    link="/packing-shipping-new-orleans"
                >
                    <span class="font-semibold text-xl">Packing Supplies</span>
                    Our store is fully stocked with high-quality packing
                    supplies, including boxes, bubble wrap, and tape, to ensure
                    your items are protected during transit.
                </ImgBlock>
                <ImgBlock
                    class="md:max-w-96 text-start md:text-center"
                    img="/img/fedex-lg.webp"
                    imgClass="sm:min-h-64"
                    :altText="'FedEx logo on a textured purple background'"
                    link="https://www.fedex.com/en-us/shipping/fedex-authorized-ship-center.html"
                    :newTab="true"
                >
                    <span class="font-semibold text-xl"
                        >Authorized FedEx Shipper</span
                    >
                    As an authorized FedEx shipper, we provide reliable shipping
                    solutions for packages of all sizes, whether domestic or
                    international.
                </ImgBlock>
                <ImgBlock
                    class="md:max-w-96 text-start md:text-center"
                    img="/img/ups.webp"
                    imgClass="sm:min-h-64"
                    :altText="'UPS Authorized Shipper'"
                    link="https://www.ups.com/us/en/home"
                    :newTab="true"
                >
                    <span class="font-semibold text-xl"
                        >UPS Authorized Shipping Outlet</span
                    >
                    We are an authorized UPS shipper, able to access their vast
                    supply chain to ensure safe travels for all your packages.
                </ImgBlock>
            </div>
            <p class="max-w-3xl mt-6">
                From packing, shipping, to delivery, we’re your trusted partner
                for hassle-free logisitics services.
            </p>
            <div class="flex gap-6 mt-8">
                <UButton
                    size="xl"
                    to="/packing-shipping-new-orleans"
                    class="text-center"
                    >View Packing & Shipping Services</UButton
                >
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass"></style>

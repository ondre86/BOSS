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
                class="flex gap-12 md:gap-4 flex-col md:flex-row md:justify-center"
            >
                <ImgBlock
                    class="md:max-w-96 text-start md:text-center"
                    img="/img/packing-supplies-md.webp"
                    :altText="'rows of cardboard boxes with their tops open'"
                    link="/services/pack-ship"
                >
                    <span class="font-semibold text-xl">Packing Supplies</span>
                    Our store is fully stocked with high-quality packing
                    supplies, including boxes, bubble wrap, and tape, to ensure
                    your items are protected during transit.
                </ImgBlock>
                <ImgBlock
                    class="md:max-w-96 text-start md:text-center"
                    img="/img/fedex-lg.webp"
                    :altText="'FedEx logo on a textured purple background'"
                    link="https://www.fedex.com/en-us/shipping/fedex-authorized-ship-center.html"
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
                    img="/img/rsa.webp"
                    :altText="'FedEx logo on a textured purple background'"
                    link="https://www.rscentral.org/Programs/RS-Programs/PackageHub-Business-Centers"
                >
                    <span class="font-semibold text-xl"
                        >Official RSA PackageHub Business Center</span
                    >
                    We are part of a verified national network of pack & ship
                    business centers, giving us access to unparalleled logistics
                    support.
                </ImgBlock>
            </div>
            <p class="max-w-3xl mt-6">
                From packing, shipping, to delivery, we’re your trusted partner
                for hassle-free logisitics services.
            </p>
            <div class="flex gap-6 mt-8">
                <UButton
                    size="xl"
                    to="/services/pack-ship"
                    class="text-center"
                    >View Packing & Shipping Services</UButton
                >
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass"></style>

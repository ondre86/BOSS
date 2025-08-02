<template>
    <section
        class="w-full flex flex-col px-8 relative justify-center lg:items-center py-8 my-6"
    >
        <div class="flex flex-col gap-6 md:items-center">
            <div class="flex flex-col gap-4 md:items-center">
                <h2 class="text-4xl font-bold">
                    A Trusted Authorized Shipping Center
                </h2>
                <span
                    >We partner with the top shippers in the country, including
                    USPS, to deliver you an excellent experience.
                </span>
            </div>
            <div
                class="flex gap-12 md:gap-4 flex-col lg:flex-row lg:justify-center"
            >
                <ImgBlock
                    class="md:max-w-96 text-start md:text-center"
                    img="/img/dhl.webp"
                    imgClass="sm:min-h-64 object-fill"
                    :altText="'BOSS Business Center is a DHL Authorized Shippier in New Orleans East located at 5790 Crowder Blvd Suite E 70127 LA, NEW ORLEANS'"
                    link="https://locator.dhl.com/results?servicePointID=MSY613&clientAppCode=gspl"
                    :newTab="true"
                >
                    <span class="font-semibold text-xl"
                        >DHL Authorized Shipping Center</span
                    >
                    DHL specializes in international shipping, and as a DHL
                    authorized shipping center, we can help you get your
                    packages across the globe with ease.
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

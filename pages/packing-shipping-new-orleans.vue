<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-24 sm:mt-36">
        <section
            class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl"
        >
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sand-800 dark:text-sand-300 -ml-1"
                >
                    Packing and Shipping Center in New Orleans East
                </h1>
            </div>
            <div
                class="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:gap-16"
            >
                <div class="flex flex-col gap-10 mb-8 relative lg:mb-0">
                    <div class="flex flex-col gap-4">
                        <h2
                            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300"
                        >
                            Professional Packing and Shipping Made Easy
                        </h2>
                        <p class="max-w-prose">
                            We provide convenient and reliable packing and
                            shipping services to meet all your needs.
                            <br /><br />
                            Our store is fully stocked with a wide range of
                            packing supplies, including boxes, bubble wrap, and
                            tape, so your items are securely packed for transit.
                            <br /><br />
                            If you’re shipping documents, gifts, fragile items,
                            or anything in-between, we make the process
                            stress-free and efficient. <br /><br />
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg
                        src="/img/boxes-sm.webp"
                        alt="constructed cardboard boxes with a roll of packing tape"
                        class="rounded-md max-h-56 md:max-h-96 object-cover"
                    ></NuxtImg>
                </div>
            </div>
        </section>
        <section
            class="w-full px-8 flex flex-col justify-center mb-12 gap-6 max-w-6xl"
        >
            <h2
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300"
            >
                Verified Shpping Partners
            </h2>
            <div class="flex flex-col gap-2 sm:flex-row">
                <ImgBlock
                    class="md:max-w-96 text-start md:text-center"
                    img="/img/fedex-lg.webp"
                    :altText="'FedEx logo on a textured purple background'"
                    link="https://www.fedex.com/en-us/shipping/fedex-authorized-ship-center.html"
                    :newTab="true"
                >
                    <span class="font-semibold text-xl"
                        >Authorized FedEx Shipper</span
                    >
                    <span
                        >Read More
                        <UIcon name="i-solar-arrow-right-up-linear"></UIcon
                    ></span>
                </ImgBlock>
                <ImgBlock
                    class="md:max-w-96 text-start md:text-center"
                    img="/img/rsa.webp"
                    imgClass="sm:min-h-64"
                    :altText="'Retail Shipping Associates Logo'"
                    link="https://www.rscentral.org/Programs/RS-Programs/PackageHub-Business-Centers"
                    :newTab="true"
                >
                    <span class="font-semibold text-xl"
                        >Official RSA PackageHub Business Center</span
                    >
                    <span
                        >Read More
                        <UIcon name="i-solar-arrow-right-up-linear"></UIcon
                    ></span>
                </ImgBlock>
            </div>
        </section>
        <section
            class="w-full px-8 flex flex-col justify-center mb-12 gap-6 max-w-6xl"
        >
            <h2
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300"
            >
                Frequently Asked Questions
            </h2>
            <div class="flex flex-col gap-4 w-full max-w-prose">
                <UAccordion
                    :items="items"
                    type="multiple"
                    class="text-3xl"
                    :ui="{
                        trigger: 'text-xl sm:text-2xl gap-3',
                        body: 'text-base'
                    }"
                >
                </UAccordion>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
useHead({
    title: "Packing & Shipping",
    meta: [
        {
            name: "description",
            content:
                "Get packing supplies and ship items easily with our dedicated logistics services. As an Authorized FedEx Shipper, you can rest assured that your packages will be handled with care."
        },
        {
            name: "og:description",
            content:
                "Get packing supplies and ship items easily with our dedicated logistics services. As an Authorized FedEx Shipper, you can rest assured that your packages will be handled with care."
        },
        {
            name: "og:title",
            content: "Packing & Shipping · BOSS"
        },
        {
            name: "og:image",
            content: "/og-img.jpg"
        },
        {
            name: "twitter:card",
            content: "summary_large_image"
        }
    ],
    titleTemplate: "%s %seperator %siteName",
    templateParams: {
        seperator: "·",
        siteName: "BOSS"
    },
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https://boss504.com/packing-shipping-new-orleans",
                        url: "https://boss504.com/packing-shipping-new-orleans",
                        name: "Packing & Shipping",
                        description:
                            "Get packing supplies and ship items easily with our dedicated logistics services. As an Authorized FedEx Shipper, your packages will be handled with care.",
                        isPartOf: {
                            "@id": "https://boss504.com"
                        }
                    },
                    {
                        "@type": "Service",
                        serviceType: "Packing and Shipping Services",
                        provider: {
                            "@type": "LocalBusiness",
                            "@id": "https://boss504.com#business"
                        },
                        areaServed: {
                            "@type": "Place",
                            name: "New Orleans East"
                        },
                        availableChannel: {
                            "@type": "ServiceChannel",
                            serviceLocation: {
                                "@type": "Place",
                                address: {
                                    "@type": "PostalAddress",
                                    streetAddress: "5790 Crowder Blvd. Suite E",
                                    addressLocality: "New Orleans",
                                    addressRegion: "LA",
                                    postalCode: "70127",
                                    addressCountry: "US"
                                }
                            }
                        },
                        description:
                            "Reliable packing and shipping services including boxes, bubble wrap, document mailing, fragile packaging, oversized shipping, and FedEx drop-off.",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Packing & Shipping Services Catalog",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Packing Supplies"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Item Packing Service"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Oversized or Fragile Shipping"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "FedEx Drop-off & Shipping"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Shipping Lockers (Coming Soon)"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What shipping carriers do you work with?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We currently work with USPS and FedEx, as an authorized FedEx Shipper. We will also work with other logistics companies, such as UPS and DHL, in the future. If you need help selecting the right shipping option, our team is happy to assist."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide packing materials and supplies?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we offer a wide variety of packing supplies, including boxes, bubble wrap, packing peanuts, and tape. Whether you need to pack fragile items or standard goods, we have everything to ensure your package is secure."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can you pack my items for me?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Absolutely! Our team can professionally pack your items to ensure they’re protected during transit. Just bring your items in, and we’ll handle the rest."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can you ship oversized or fragile items?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we specialize in shipping items of all shapes and sizes, including oversized and fragile items. We’ll help you choose the right packing materials and shipping method to ensure safe delivery."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How can I track my shipment?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Once your shipment is processed, we’ll provide you with a tracking number so you can monitor its progress online."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What are shipping lockers, and how will they work?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Our upcoming shipping lockers will provide a secure, self-service option for dropping off and picking up packages. You’ll receive a unique access code to access your locker, making shipping and receiving more convenient for your schedule."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "When will the shipping lockers be available?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We’re excited to introduce shipping lockers soon! Stay tuned for updates, or contact us to learn more about their launch."
                                }
                            }
                        ]
                    }
                ]
            })
        }
    ]
})
const items = ref([
    {
        label: `What shipping carriers do you work with?`,
        icon: "i-solar-question-circle-outline",
        content: `We currently work with USPS and FedEx, as an authorized FedEx Shipper. We will also work with other logistics companies, such as UPS and DHL, in the future. If you need help selecting the right shipping option, our team is happy to assist.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Do you provide packing materials and supplies?`,
        icon: "i-solar-question-circle-outline",
        content: `Yes, we offer a wide variety of packing supplies, including boxes, bubble wrap, packing peanuts, and tape. Whether you need to pack fragile items or standard goods, we have everything to ensure your package is secure.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Can you pack my items for me?`,
        icon: "i-solar-question-circle-outline",
        content: `Absolutely! Our team can professionally pack your items to ensure they’re protected during transit. Just bring your items in, and we’ll handle the rest.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Can you ship oversized or fragile items?`,
        icon: "i-solar-question-circle-outline",
        content: `Yes, we specialize in shipping items of all shapes and sizes, including oversized and fragile items. We’ll help you choose the right packing materials and shipping method to ensure safe delivery.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `How can I track my shipment?`,
        icon: "i-solar-question-circle-outline",
        content: `Once your shipment is processed, we’ll provide you with a tracking number so you can monitor its progress online.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `What are shipping lockers, and how will they work?`,
        icon: "i-solar-question-circle-outline",
        content: `Our upcoming shipping lockers will provide a secure, self-service option for dropping off and picking up packages. You’ll receive a unique access code to access your locker, making shipping and receiving more convenient for your schedule.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `When will the shipping lockers be available?`,
        icon: "i-solar-question-circle-outline",
        content: `We’re excited to introduce shipping lockers soon! Stay tuned for updates, or contact us to learn more about their launch.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    }
])
</script>

<style scoped lang="sass"></style>

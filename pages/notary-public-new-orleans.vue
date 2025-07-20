<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-24 sm:mt-36">
        <section
            class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl"
        >
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sand-800 dark:text-sand-300 -ml-1"
                >
                    Notary Public in New Orleans East
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
                            Convenient and Professional Notary Services
                        </h2>
                        <p class="max-w-prose">
                            We offer reliable and professional notary services
                            to meet all your document authentication needs.
                            <br /><br />
                            Our certified notaries are available to verify
                            signatures, administer oaths, and witness the
                            signing of important documents, ensuring they are
                            legally binding and compliant. <br /><br />
                            Whether you need assistance with affidavits,
                            contracts, real estate documents, or power of
                            attorney forms, we provide fast and accurate
                            notarization in a secure and convenient setting.
                            Trust us to handle your notarial needs with the
                            utmost attention to detail and confidentiality.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg
                        src="/img/notary-md.webp"
                        alt="person stamping a document on a desk"
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
    title: "Notary Services",
    meta: [
        {
            name: "description",
            content:
                "BOSS offers affordable notary services for business and individuals in New Orleans East. Get affidavits, contracts, real estate documents, power of attorney forms, and more notarized quickly and easily."
        },
        {
            name: "og:description",
            content:
                "BOSS offers affordable notary services for business and individuals in New Orleans East. Get affidavits, contracts, real estate documents, power of attorney forms, and more notarized quickly and easily."
        },
        {
            name: "og:title",
            content: "Notary Services · BOSS"
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
                        "@id": "https://boss504.com/notary-public-new-orleans",
                        url: "https://boss504.com/notary-public-new-orleans",
                        name: "Notary Services",
                        description:
                            "BOSS offers affordable notary services for individuals and businesses in New Orleans East, including affidavits, contracts, real estate documents, and power of attorney forms.",
                        isPartOf: {
                            "@id": "https://boss504.com"
                        }
                    },
                    {
                        "@type": "Service",
                        serviceType: "Notary Services",
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
                            "Certified notary services for affidavits, contracts, real estate paperwork, power of attorney forms, and more. In-store and mobile options available.",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Notary Services Catalog",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Affidavit Notarization"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Power of Attorney Notarization"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Real Estate Document Notarization"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Contract Notarization"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Mobile Notary Service"
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
                                name: "What types of documents can you notarize?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We can notarize a wide range of documents, including affidavits, power of attorney forms, real estate documents, contracts, legal agreements, and more. If you're unsure whether your document requires notarization, feel free to ask, and we’ll guide you."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do I need to bring identification for notary services?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, a valid, government-issued photo ID is required for all notary services. This ensures we can verify your identity and comply with legal requirements. Acceptable forms of ID include driver’s licenses, passports, and state-issued ID cards."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can you notarize documents for someone who is not present?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, all signers must be physically present at the time of notarization. This is necessary for the notary to witness the signing and verify the identity of all parties involved."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide mobile notary services?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we provide mobile notary services in addition to our in-store notary services. Please call, email, or use our contact form to learn more and schedule a mobile notarization."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How much do you charge for notary services?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "In-store notary services are $20 for the first page, and $10 for each subsequent page. Mobile notary prices may vary due to distance traveled and type of documents. Businesses may be eligible for special volume pricing. Contact us for more details regarding pricing."
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
        label: "What types of documents can you notarize?",
        icon: "i-solar-question-circle-outline",
        content: `We can notarize a wide range of documents, including affidavits, power of attorney forms, real estate documents, contracts, legal agreements, and more. If you're unsure whether your document requires notarization, feel free to ask, and we’ll guide you.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: "Do I need to bring identification for notary services?",
        icon: "i-solar-question-circle-outline",
        content: `Yes, a valid, government-issued photo ID is required for all notary services. This ensures we can verify your identity and comply with legal requirements. Acceptable forms of ID include driver’s licenses, passports, and state-issued ID cards.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: "Can you notarize documents for someone who is not present?",
        icon: "i-solar-question-circle-outline",
        content:
            "No, all signers must be physically present at the time of notarization. This is necessary for the notary to witness the signing and verify the identity of all parties involved.",
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: "Do you provide mobile notary services?",
        icon: "i-solar-question-circle-outline",
        content: `Yes, we provide mobile notary services in addition to our in-store notary services. Please call, email, or use our contact form to learn more and schedule a mobile notarization.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: "How much do you charge for notary services?",
        icon: "i-solar-question-circle-outline",
        content:
            "In-store notary services are $20 for the first page, and $10 for each subsequent page. Mobile notary prices may vary due to distance traveled and type of documents. Businesses may be eligible for special volume pricing. Contact us for more details regarding pricing.",
        trailingIcon: "i-solar-alt-arrow-down-linear"
    }
])
</script>

<style scoped lang="sass"></style>

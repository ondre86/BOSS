<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-40 sm:mt-48">
        <section class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl">
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sand-800 dark:text-sand-300 -ml-1">
                    Print and Copy Shop in New Orleans East
                </h1>
            </div>
            <div class="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:gap-16">
                <div class="flex flex-col gap-10 mb-8 relative lg:mb-0">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300">
                            High Quality Printing and Copying Services
                        </h2>
                        <p class="max-w-prose">
                            Our printing and copying services deliver high-quality results tailored to your needs.
                            <br /><br />
                            Whether you’re printing sharp, professional documents, vibrant marketing materials, or detailed presentations,
                            we ensure your projects look their best. We offer a range of options, including black-and-white or full-color
                            printing, various paper sizes and finishes, and customizable layouts.
                            <br /><br />
                            For your copying needs, we provide fast and reliable duplication services, whether it’s a single page or a large
                            batch of documents. <br /><br />
                            Our advanced equipment guarantees crisp, clear copies every time. We’re here to handle all your printing and
                            copying needs with precision and efficiency. <br /><br />
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg
                        src="/img/print-sm.webp"
                        alt="printer"
                        class="rounded-md max-h-56 md:max-h-96 object-cover"
                    ></NuxtImg>
                </div>
            </div>
        </section>
        <section class="w-full px-8 flex flex-col justify-center mb-12 gap-6 max-w-6xl">
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300">
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
    title: "Print & Copy",
    meta: [
        {
            name: "description",
            content:
                "BOSS offers affordable printing and copying services directly tailored to your needs. Get documents printed and scanned in black and white or color, in sizes such as A4, letter, legal, and more."
        },
        {
            name: "og:description",
            content:
                "BOSS offers affordable printing and copying services directly tailored to your needs. Get documents printed and scanned in black and white or color, in sizes such as A4, letter, legal, and more."
        },
        {
            name: "og:title",
            content: "Document Services · BOSS"
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
                        "@id": "https://boss504.com/printing-copying-new-orleans",
                        url: "https://boss504.com/printing-copying-new-orleans",
                        name: "Print & Copy",
                        description:
                            "BOSS offers affordable printing and copying services tailored to your needs, including black-and-white and full-color printing, various paper sizes, and fast, reliable copying.",
                        isPartOf: {
                            "@id": "https://boss504.com"
                        }
                    },
                    {
                        "@type": "Service",
                        serviceType: "Printing and Copying Services",
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
                            "High-quality document printing and copying including black & white, color, various paper sizes, and fast duplication for single or bulk jobs.",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Print and Copy Services Catalog",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Black and White Printing"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Full Color Printing"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Document Copying"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Various Paper Sizes and Finishes"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Bulk Printing Discounts"
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
                                name: "What types of documents can you print or copy?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We can handle a wide variety of documents, including business presentations, flyers, posters, brochures, resumes, invitations, and more. If you have a specific project, let us know, and we’ll ensure it’s printed or copied to your specifications."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you offer color printing and copying?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we provide both black-and-white and full-color printing and copying options. You can choose the best option based on your project needs and budget."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can I bring my own paper or materials for printing?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we can print or copy on your provided materials, as long as they are compatible with our equipment. Contact us to confirm your materials meet the necessary requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What file formats do you accept for printing?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We accept popular file formats, including PDF, DOCX, PNG, and JPEG. If your file is in a different format, let us know, and we’ll work with you to ensure it can be printed successfully."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you offer bulk printing or copying discounts?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we can provide discounts for large-volume printing and copying orders. Contact us with your project details, and we’ll give you a customized quote."
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
        label: `What types of documents can you print or copy?`,
        icon: "i-solar-question-circle-outline",
        content: `We can handle a wide variety of documents, including business presentations, flyers, posters, brochures, resumes, invitations, and more. If you have a specific project, let us know, and we’ll ensure it’s printed or copied to your specifications.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Do you offer color printing and copying?`,
        icon: "i-solar-question-circle-outline",
        content: `Yes, we provide both black-and-white and full-color printing and copying options. You can choose the best option based on your project needs and budget.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Can I bring my own paper or materials for printing?`,
        icon: "i-solar-question-circle-outline",
        content: `Yes, we can print or copy on your provided materials, as long as they are compatible with our equipment. Contact us to confirm your materials meet the necessary requirements.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `What file formats do you accept for printing?`,
        icon: "i-solar-question-circle-outline",
        content: `We accept popular file formats, including PDF, DOCX, PNG, and JPEG. If your file is in a different format, let us know, and we’ll work with you to ensure it can be printed successfully.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Do you offer bulk printing or copying discounts?`,
        icon: "i-solar-question-circle-outline",
        content: `Yes, we can provide discounts for large-volume printing and copying orders. Contact us with your project details, and we’ll give you a customized quote.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    }
])
</script>

<style scoped lang="sass"></style>

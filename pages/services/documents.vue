<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-24 sm:mt-36">
        <section
            class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl"
        >
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sand-800 dark:text-sand-300 -ml-1"
                >
                    Document Services in New Orleans East
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
                            Keep Your Records Organized and Updated
                        </h2>
                        <p class="max-w-prose">
                            Our document services are designed to simplify your
                            day-to-day tasks and ensure your files are handled
                            with care and precision. <br /><br />
                            We offer faxing services to send and receive
                            documents securely, along with scanning solutions to
                            convert paper files into high-quality digital
                            formats. <br /><br />
                            Need to update or adjust your documents? Our
                            reformatting services can organize, resize, or edit
                            your files to meet specific requirements.
                            <br /><br />
                            Additionally, we provide email services, helping you
                            send digital files directly from our location, and
                            assist with file organization and conversion,
                            ensuring your documents are in the right format for
                            any purpose. <br /><br />
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg
                        src="/img/document-md.webp"
                        alt="several flat sheets of paper overlapped"
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
    title: "Document Services",
    meta: [
        {
            name: "description",
            content:
                "BOSS offers document services that are designed to simplify your day-to-day tasks and ensure your files are handled with care and precision. Get documents faxed, scanned, reformatted, and emailed with ease and efficiency."
        },
        {
            name: "og:description",
            content:
                "BOSS offers document services that are designed to simplify your day-to-day tasks and ensure your files are handled with care and precision. Get documents faxed, scanned, reformatted, and emailed with ease and efficiency."
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
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https://boss504.com/services/document-services",
                        url: "https://boss504.com/services/document-services",
                        name: "Document Services",
                        description:
                            "BOSS provides reliable document services including faxing, scanning, emailing, reformatting, and file conversions for individuals and businesses in New Orleans East.",
                        isPartOf: {
                            "@id": "https://boss504.com"
                        }
                    },
                    {
                        "@type": "Service",
                        serviceType: "Document Services",
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
                            "Document-related services including sending and receiving faxes, scanning documents to digital formats, emailing files, reformatting documents, and file organization.",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Document Services Catalog",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Faxing Services"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Scanning Services"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Document Reformatting"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Emailing Services"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "File Organization & Conversion"
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
                                name: "Can you help me fax documents to an international number?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, our faxing services support both domestic and international numbers. Just provide the recipient’s fax number and any required country codes, and we’ll handle the rest."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What file formats can you provide for scanned documents?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We can scan documents into popular formats such as PDF, JPEG, or PNG. If you have specific requirements, let us know, and we’ll do our best to accommodate your needs."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What is included in document reformatting services?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Our document reformatting services include resizing, reorganizing content, adjusting layouts, converting file types, and editing for clarity or compliance with specific guidelines. This ensures your documents meet your exact specifications."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can you email documents for me after scanning them?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. Once your documents are scanned, we can assist in sending them via email directly from our location. Just provide the recipient’s email address, and we’ll ensure the files are sent securely."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Are your services secure for handling sensitive documents?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we prioritize the security and confidentiality of all documents we handle. Our processes are designed to ensure your sensitive information is protected throughout every service we provide. Your documents are deleted from our systems after processing is completed."
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
        label: "Can you help me fax documents to an international number?",
        icon: "i-solar-question-circle-outline",
        content: `Yes, our faxing services support both domestic and international numbers. Just provide the recipient’s fax number and any required country codes, and we’ll handle the rest.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: "What file formats can you provide for scanned documents?",
        icon: "i-solar-question-circle-outline",
        content: `We can scan documents into popular formats such as PDF, JPEG, or PNG. If you have specific requirements, let us know, and we’ll do our best to accommodate your needs.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `What is included in document reformatting services?`,
        icon: "i-solar-question-circle-outline",
        content: `Our document reformatting services include resizing, reorganizing content, adjusting layouts, converting file types, and editing for clarity or compliance with specific guidelines. This ensures your documents meet your exact specifications.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Can you email documents for me after scanning them?`,
        icon: "i-solar-question-circle-outline",
        content: `Yes. Once your documents are scanned, we can assist in sending them via email directly from our location. Just provide the recipient’s email address, and we’ll ensure the files are sent securely.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Are your services secure for handling sensitive documents?`,
        icon: "i-solar-question-circle-outline",
        content: `Yes, we prioritize the security and confidentiality of all documents we handle. Our processes are designed to ensure your sensitive information is protected throughout every service we provide. Your documents are deleted from our systems after processing is completed.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    }
])
</script>

<style scoped lang="sass"></style>

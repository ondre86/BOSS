<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-24 sm:mt-36">
        <section
            class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl"
        >
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sand-800 dark:text-sand-300 -ml-1"
                >
                    Business Administrative Services in New Orleans East
                </h1>
            </div>
            <div
                class="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:gap-16"
            >
                <div class="flex flex-col gap-10 relative lg:mb-0">
                    <div class="flex flex-col gap-4">
                        <h2
                            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300"
                        >
                            Grow Your Business the Smart Way
                        </h2>
                        <p class="max-w-prose">
                            Our team specializes in total administrative
                            organization, helping you streamline processes,
                            centralize credentials, and create efficient systems
                            for managing your business documents. <br /><br />
                            With proficiency in a wide range of administrative
                            tasks, we’re your go-to partner for staying on top
                            of the details that drive success. <br /><br />
                            Our services are ideal for new business owners and
                            existing enterprises looking to save time and
                            improve efficiency. Whether you’re launching a
                            startup, expanding your operations, or simply need
                            help staying on top of administrative tasks, our
                            expertise ensures that everything is done correctly
                            and on time.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg
                        src="/img/admin-sm.webp"
                        alt="files room with lots of files on shelves"
                        class="rounded-md max-h-56 md:max-h-96 object-cover"
                    ></NuxtImg>
                </div>
            </div>
        </section>
        <HomeBusinessBuilder></HomeBusinessBuilder>
        <section
            class="w-full px-8 flex flex-col justify-center mb-12 gap-6 max-w-6xl"
        >
            <h2
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-sand-800 dark:text-sand-300"
            >
                Need A Website?
            </h2>
            <p>
                We work with our partners to provide you with all of the
                administrative services you need. <br />
                <NuxtLink
                    target="_blank"
                    to="https://ondre.org"
                    class="text-sand-800 dark:text-sand-300 hover:text-sand-500 underline underline-offset-2 transition-all duration-300 hover:underline-offset-4"
                    >ondre.org</NuxtLink
                >
                offers web development services tailored for startup businesses.
            </p>
            <UButton
                target="_blank"
                to="https://ondre.org"
                size="xl"
                class="w-fit"
                >Visit ondre.org</UButton
            >
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
    title: "Administrative Services",
    meta: [
        {
            name: "description",
            content:
                "BOSS specializes in total administrative organization, helping you streamline processes, centralize credentials, and create efficient systems for managing your business documents."
        },
        {
            name: "og:description",
            content:
                "BOSS specializes in total administrative organization, helping you streamline processes, centralize credentials, and create efficient systems for managing your business documents."
        },
        {
            name: "og:title",
            content: "Administrative Services · BOSS"
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
                        "@id": "https://boss504.com/services/administrative-services",
                        url: "https://boss504.com/services/administrative-services",
                        name: "Administrative Services",
                        description:
                            "BOSS offers complete administrative support for businesses in New Orleans East including EIN filing, Secretary of State registration, credential centralization, and more.",
                        isPartOf: {
                            "@id": "https://boss504.com"
                        }
                    },
                    {
                        "@type": "Service",
                        serviceType: "Administrative Services",
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
                            "Administrative services for startups and small businesses including business filings, EIN registration, Gmail Workspace setup, and credential organization.",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Administrative Services Catalog",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Secretary of State Filing"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "IRS EIN Filing"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "BOIR Filing"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Occupational License Application"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Gmail Workspace Setup"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Credential Centralization"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is included in the Secretary of State filing service?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We handle all aspects of your Secretary of State filing, including preparing and submitting your business registration documents, verifying compliance with state requirements, and tracking the status of your application until approval. Whether you're forming an LLC, corporation, or another entity, we ensure the process is seamless and accurate."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How does the IRS EIN filing service work?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Our IRS EIN filing service assists you in obtaining your Employer Identification Number (EIN), which is essential for opening business bank accounts, filing taxes, and hiring employees. We’ll gather the necessary information, complete the application, and submit it directly to the IRS, ensuring you receive your EIN promptly."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How can your Administrative Services benefit my business?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Our Administrative Services involve streamlining and organizing all your administrative processes, including document storage, filing systems, and workflows. This service helps improve efficiency, reduce errors, and save time, so you can focus on growing your business rather than managing tedious details."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What is Credential Centralization, and why is it important?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Credential Centralization involves consolidating all your business accounts, logins, licenses, and certifications into one secure and accessible system. This service eliminates the hassle of managing scattered credentials and ensures that your critical information is always up to date and easy to locate."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Can you assist with other administrative tasks outside of the listed services?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes! We are proficient in a variety of administrative tasks and can customize our services to meet your unique needs. Whether you require help with data entry, compliance tracking, or specialized business paperwork, we’re here to provide expert support tailored to your goals. We also work with other businesses to provide referrals for other services, such as website development."
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
        label: "What is included in the Secretary of State filing service?",
        icon: "i-solar-question-circle-outline",
        content: `We handle all aspects of your Secretary of State filing, including preparing and submitting your business registration documents, verifying compliance with state requirements, and tracking the status of your application until approval. Whether you're forming an LLC, corporation, or another entity, we ensure the process is seamless and accurate.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: "How does the IRS EIN filing service work?",
        icon: "i-solar-question-circle-outline",
        content: `Our IRS EIN filing service assists you in obtaining your Employer Identification Number (EIN), which is essential for opening business bank accounts, filing taxes, and hiring employees. We’ll gather the necessary information, complete the application, and submit it directly to the IRS, ensuring you receive your EIN promptly.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `How can your Administrative Services benefit my business?`,
        icon: "i-solar-question-circle-outline",
        content: `Our Administrative Services involve streamlining and organizing all your administrative processes, including document storage, filing systems, and workflows. This service helps improve efficiency, reduce errors, and save time, so you can focus on growing your business rather than managing tedious details.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `What is Credential Centralization, and why is it important?`,
        icon: "i-solar-question-circle-outline",
        content: `Credential Centralization involves consolidating all your business accounts, logins, licenses, and certifications into one secure and accessible system. This service eliminates the hassle of managing scattered credentials and ensures that your critical information is always up to date and easy to locate.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `Can you assist with other administrative tasks outside of the listed services?`,
        icon: "i-solar-question-circle-outline",
        content: `Yes! We are proficient in a variety of administrative tasks and can customize our services to meet your unique needs. Whether you require help with data entry, compliance tracking, or specialized business paperwork, we’re here to provide expert support tailored to your goals. We also work with other businesses to provide referrals for other services, such as website development.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    }
])
</script>

<style scoped lang="sass"></style>

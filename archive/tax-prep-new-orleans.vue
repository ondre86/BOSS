<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-24 sm:mt-36">
        <section
            class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl"
        >
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sand-800 dark:text-sand-300 -ml-1"
                >
                    Tax Prep Services in New Orleans East
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
                            Maximize Your Tax Returns and Avoid Headaches
                        </h2>
                        <p class="max-w-prose">
                            We offer comprehensive tax preparation services
                            designed to simplify the often complex process of
                            filing your taxes. <br /><br />
                            Our experienced professionals stay up-to-date with
                            the latest tax laws and regulations, ensuring your
                            returns are accurate and compliant. <br /><br />
                            Whether you’re an individual, small business, or
                            self-employed, we handle everything from gathering
                            necessary documents to preparing your tax forms,
                            maximizing your deductions, and minimizing your
                            liabilities. <br /><br />
                            We provide personalized support, including income
                            tax filing, state and federal returns, business tax
                            filings, and quarterly estimated taxes. Our goal is
                            to make tax season as stress-free as possible while
                            ensuring you receive the most accurate and
                            beneficial outcome. <br /><br />
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg
                        src="/img/tax-sm.webp"
                        alt="desk with calculator, pens, papers, and binders"
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
    title: "Tax Preparation",
    meta: [
        {
            name: "description",
            content:
                "BOSS offers tax preparation services for individuals and businesses. We can help maximize your deductions and minimize your liabilities to get you the best tax return possible."
        },
        {
            name: "og:description",
            content:
                "BOSS offers tax preparation services for individuals and businesses. We can help maximize your deductions and minimize your liabilities to get you the best tax return possible."
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
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https://boss504.com/tax-prep-new-orleans",
                        url: "https://boss504.com/tax-prep-new-orleans",
                        name: "Tax Preparation",
                        description:
                            "BOSS offers tax preparation services for individuals and businesses. We can help maximize your deductions and minimize your liabilities to get you the best tax return possible.",
                        isPartOf: {
                            "@id": "https://boss504.com"
                        }
                    },
                    {
                        "@type": "Service",
                        serviceType: "Tax Preparation",
                        provider: {
                            "@type": "LocalBusiness",
                            "@id": "https://boss504.com#business"
                        },
                        areaServed: {
                            "@type": "Place",
                            name: "New Orleans East"
                        },
                        description:
                            "Comprehensive tax preparation services for individuals, small businesses, and self-employed clients including income tax filing, business tax filings, and quarterly estimated taxes."
                    },
                    {
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What types of tax returns do you prepare?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We prepare federal, state, and local tax returns for individuals, small businesses, self-employed individuals, and independent contractors. Whether you need help with personal tax filings or business tax filings, we’ve got you covered."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How can I organize my tax documents for preparation?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We recommend gathering all relevant documents, including W-2s, 1099s, receipts, bank statements, and deduction records. We’re happy to guide you through the process and ensure nothing is overlooked."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What if I have overdue or unfiled tax returns?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No problem! We can help you navigate overdue returns and get them filed correctly. Our team will work with you to address past-due taxes and create a plan to get everything up-to-date."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How do you ensure my tax return is accurate?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We meticulously review all your financial information, cross-check it against tax laws, and use advanced software to ensure your return is accurate and compliant. You’ll receive a thorough review before submitting your final return."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What happens if my tax situation is too complex for your service?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "In cases where tax returns involve multiple income streams, international taxes, business audits, or specialized deductions, we may refer you to a more seasoned tax expert who specializes in those areas. This ensures you receive the most in-depth and accurate guidance for your situation."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How will I know if my tax situation requires a referral?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Our team will assess your tax return thoroughly. If we determine your situation is outside the scope of our expertise, we’ll promptly inform you and provide recommendations for specialized tax professionals who can assist you."
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
        label: `What types of tax returns do you prepare?`,
        icon: "i-solar-question-circle-outline",
        content: `We prepare federal, state, and local tax returns for individuals, small businesses, self-employed individuals, and independent contractors. Whether you need help with personal tax filings or business tax filings, we’ve got you covered.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `How can I organize my tax documents for preparation?`,
        icon: "i-solar-question-circle-outline",
        content: `We recommend gathering all relevant documents, including W-2s, 1099s, receipts, bank statements, and deduction records. We’re happy to guide you through the process and ensure nothing is overlooked.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `What if I have overdue or unfiled tax returns?`,
        icon: "i-solar-question-circle-outline",
        content: `No problem! We can help you navigate overdue returns and get them filed correctly. Our team will work with you to address past-due taxes and create a plan to get everything up-to-date.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `How do you ensure my tax return is accurate?`,
        icon: "i-solar-question-circle-outline",
        content: `We meticulously review all your financial information, cross-check it against tax laws, and use advanced software to ensure your return is accurate and compliant. You’ll receive a thorough review before submitting your final return.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `What happens if my tax situation is too complex for your service?`,
        icon: "i-solar-question-circle-outline",
        content: `In cases where tax returns involve multiple income streams, international taxes, business audits, or specialized deductions, we may refer you to a more seasoned tax expert who specializes in those areas. This ensures you receive the most in-depth and accurate guidance for your situation.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    },
    {
        label: `How will I know if my tax situation requires a referral?`,
        icon: "i-solar-question-circle-outline",
        content: `Our team will assess your tax return thoroughly. If we determine your situation is outside the scope of our expertise, we’ll promptly inform you and provide recommendations for specialized tax professionals who can assist you.`,
        trailingIcon: "i-solar-alt-arrow-down-linear"
    }
])
</script>

<style scoped lang="sass"></style>

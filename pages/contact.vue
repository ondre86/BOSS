<template>
    <main
        class="flex flex-col w-full items-center mb-12 gap-12 mt-24 sm:mt-36 overflow-hidden relative"
    >
        <LogoIcon
            :svg-size="'900px'"
            class="absolute -z-10 opacity-5 top-24 right-1.5 invisible lg:visible"
        >
        </LogoIcon>
        <section class="w-full max-w-6xl flex flex-col gap-6 px-8 relative">
            <div class="flex flex-col gap-1">
                <h1
                    class="text-6xl text-sand-800 dark:text-sand-300 lg:text-6xl"
                >
                    Contact
                </h1>
            </div>
            <div>
                <UButton
                    variant="link"
                    to="mailto:talana@boss504.com"
                    class="text-xl underline underline-offset-2 transition-all duration-300 hover:underline-offset-8"
                >
                    talana@boss504.com
                </UButton>
                <UButton
                    variant="link"
                    to="tel:505-812-1390"
                    class="text-xl underline underline-offset-2 transition-all duration-300 hover:underline-offset-8"
                >
                    (504) 407-1140
                </UButton>
            </div>
        </section>
        <section class="w-full max-w-6xl flex flex-col px-8 gap-2">
            <h2 class="text-2xl text-sand-800 dark:text-sand-300">
                Send Us an Email
            </h2>
            <UForm
                :state="state"
                @submit="onSubmit"
                :validate="validate"
                ref="form"
                class="w-full md:max-w-96 flex flex-col gap-6 p-6 rounded-md bg-gray-100 dark:bg-slate-800"
            >
                <div
                    class="cf-turnstile absolute"
                    :data-sitekey="config.public.turnstileSiteKey"
                ></div>
                <UFormField
                    label="Name"
                    name="name"
                    required
                    size="xl"
                >
                    <UInput
                        placeholder="John Smith"
                        v-model="state.name"
                        class="w-full"
                    />
                </UFormField>
                <UFormField
                    label="Email"
                    name="email"
                    required
                    size="xl"
                >
                    <UInput
                        placeholder="john.smith@gmail.com"
                        v-model="state.email"
                        class="w-full"
                    />
                </UFormField>
                <UFormField
                    label="Phone Number"
                    name="phone"
                    size="xl"
                >
                    <UInput
                        placeholder="5041239090"
                        v-model="state.phone"
                        class="w-full"
                    />
                </UFormField>
                <UFormField
                    label="Service in Question"
                    name="service"
                    required
                    size="xl"
                    color="primary"
                >
                    <USelect
                        :items="services"
                        v-model="selectValue"
                        selected-icon="i-solar-check-circle-linear"
                        trailing-icon="i-solar-alt-arrow-down-linear"
                        class="w-full"
                    ></USelect>
                </UFormField>
                <UFormField
                    label="Message"
                    name="message"
                    required
                    size="xl"
                >
                    <UTextarea
                        v-model="state.message"
                        class="w-full"
                    />
                </UFormField>
                <UButton
                    type="submit"
                    ref="submitBtn"
                    block
                    loading-auto
                    loading-icon="i-solar-refresh-line-duotone"
                    :color="
                        formSuccess == true || formSuccess == null
                            ? 'primary'
                            : 'error'
                    "
                    :label="
                        formSuccess == true || formSuccess == null
                            ? 'Submit'
                            : 'Error'
                    "
                >
                </UButton>
            </UForm>
        </section>
    </main>
</template>

<script setup>
import validator from "validator"
import DOMPurify from "dompurify"

useHead({
    title: "Contact",
    meta: [
        {
            name: "description",
            content:
                "Contact us to learn more about our specialized document, adminstrative, packing, shipping, and notary services. BOSS is located in New Orleans East at 5790 Crowder Blvd, Suite E."
        },
        {
            name: "og:description",
            content:
                "Contact us to learn more about our specialized document, adminstrative, packing, shipping, and notary services. BOSS is located in New Orleans East at 5790 Crowder Blvd, Suite E."
        },
        {
            name: "og:title",
            content: "Contact · BOSS"
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
                        "@type": "ContactPage",
                        "@id": "https://boss504.com/about",
                        url: "https://boss504.com/about",
                        name: "Contact BOSS",
                        description:
                            "Reach out to BOSS for printing, packing & shipping, notary, and administrative services in New Orleans East.",
                        isPartOf: {
                            "@id": "https://boss504.com"
                        },
                        breadcrumb: {
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://boss504.com/"
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Contact",
                                    item: "https://boss504.com/contact"
                                }
                            ]
                        }
                    },
                    {
                        "@type": "LocalBusiness",
                        "@id": "https://boss504.com#business",
                        name: "BOSS",
                        url: "https://boss504.com",
                        image: "https://boss504.com/og-img.jpg",
                        email: "talana@boss504.com",
                        telephone: "+1-504-407-1140",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "5790 Crowder Blvd. Suite E",
                            addressLocality: "New Orleans",
                            addressRegion: "LA",
                            postalCode: "70127",
                            addressCountry: "US"
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: 30.0281244,
                            longitude: -89.9941587
                        },
                        sameAs: [
                            "https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127"
                        ]
                    }
                ]
            })
        }
    ]
})
const config = useRuntimeConfig()

const form = ref()
const formSuccess = ref(null)

const state = reactive({
    name: "",
    email: "",
    phone: "",
    message: ""
})
const services = ref([
    "Small Business Package",
    "Administrative Services",
    "Print & Copy",
    "Document Services",
    "Notary",
    "Pack & Ship",
    "Other"
])
const selectValue = ref("Small Business Package")

const validate = () => {
    const errors = []
    if (!state.name) errors.push({ name: "name", message: "Required" })
    if (!state.email) errors.push({ name: "email", message: "Required" })
    if (!validator.isEmail(state.email))
        errors.push({ name: "email", message: "Invalid Email" })
    if (
        !validator.isMobilePhone(state.phone, ["en-US"]) &&
        !validator.isEmpty(state.phone)
    )
        errors.push({ name: "phone", message: "Invalid Phone Number" })
    if (!state.message) errors.push({ name: "message", message: "Required" })
    return errors
}

const toast = useToast()
async function onSubmit() {
    state.name = DOMPurify.sanitize(state.name)
    state.email = DOMPurify.sanitize(state.email)
    state.phone = DOMPurify.sanitize(state.phone)
    state.message = DOMPurify.sanitize(state.message)

    await $fetch("/api/form", {
        method: "POST",
        body: {
            turnstile: document.querySelectorAll(
                "input[name=cf-turnstile-response]"
            )[0]
                ? document.querySelectorAll(
                      "input[name=cf-turnstile-response]"
                  )[0].value
                : null,
            jsonForm: {
                name: state.name,
                email: state.email,
                phone: state.phone,
                service: document.querySelectorAll("select")[0]
                    ? document.querySelectorAll("select")[0].value
                    : "Administrative Services",
                message: state.message
            }
        },
        async onResponse({ response }) {
            formSuccess.value = response._data.success

            if (formSuccess.value == true) {
                toast.add({
                    title: "Success!",
                    description: "The form was submitted successfully.",
                    color: "primary",
                    closeIcon: "i-solar-close-circle-linear"
                })

                state.name = ""
                state.email = ""
                state.phone = ""
                state.message = ""
            } else if (formSuccess.value == false) {
                toast.add({
                    title: "Error",
                    description: `Please reload and try again later.`,
                    color: "error",
                    closeIcon: "i-solar-close-circle-linear"
                })
            }
        }
    })
}

onMounted(() => {
    useHead({
        script: [
            {
                src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
                async: true,
                defer: true,
                type: "text/javascript"
            }
        ]
    })
})
</script>

<style scoped lang="sass"></style>

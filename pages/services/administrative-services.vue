<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-24 sm:mt-36">
        <section class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl lg:px-12">
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-sand-800 dark:text-sand-300 -ml-1">Administrative Services</h1>
            </div>
            <div class="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:gap-16">
                <div class="flex flex-col gap-10 relative lg:mb-0">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300">Overview:</h2>
                        <p class="max-w-prose">
                            Our team specializes in total administrative organization, helping you streamline processes, centralize credentials, and create efficient systems for managing your business documents. <br><br> 
                            With proficiency in a wide range of administrative tasks, we’re your go-to partner for staying on top of the details that drive success.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg src="/img/admin-sm.webp" class="rounded-md max-h-96 object-cover"></NuxtImg>
                </div>
            </div>
        </section>
        <HomeBusinessBuilder></HomeBusinessBuilder>
        <section class="w-full px-8 flex flex-col justify-center mb-12 gap-6 max-w-6xl">
            <h2 class="text-2xl font-semibold text-sand-800 dark:text-sand-300">Need A Website?</h2>
            <p>
                We work with our partners to provide you with all of the administrative services you need. <br>
                <NuxtLink target="_blank" to="https://ondre.org" class="underline">ondre.org</NuxtLink> offers web development services tailored for startup businesses.
            </p>
            <UButton target="_blank" to="https://ondre.org" size="xl" class="w-fit">Visit ondre.org</UButton>
        </section>
        <section class="w-full px-8 flex flex-col justify-center mb-12 gap-6 max-w-6xl">
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300">Frequently Asked Questions:</h2>
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
const items = ref([
  {
    label: 'What is included in the Secretary of State filing service?',
    icon: 'i-solar-question-circle-outline',
    content: `We handle all aspects of your Secretary of State filing, including preparing and submitting your business registration documents, verifying compliance with state requirements, and tracking the status of your application until approval. Whether you're forming an LLC, corporation, or another entity, we ensure the process is seamless and accurate.`
  },
  {
    label: 'How does the IRS EIN filing service work?',
    icon: 'i-solar-question-circle-outline',
    content: `Our IRS EIN filing service assists you in obtaining your Employer Identification Number (EIN), which is essential for opening business bank accounts, filing taxes, and hiring employees. We’ll gather the necessary information, complete the application, and submit it directly to the IRS, ensuring you receive your EIN promptly.`
  },
  {
    label: `How can your Administrative Services benefit my business?`,
    icon: 'i-solar-question-circle-outline',
    content: `Our Administrative Services involve streamlining and organizing all your administrative processes, including document storage, filing systems, and workflows. This service helps improve efficiency, reduce errors, and save time, so you can focus on growing your business rather than managing tedious details.`
  },
  {
    label: `What is Credential Centralization, and why is it important?`,
    icon: 'i-solar-question-circle-outline',
    content: `Credential Centralization involves consolidating all your business accounts, logins, licenses, and certifications into one secure and accessible system. This service eliminates the hassle of managing scattered credentials and ensures that your critical information is always up to date and easy to locate.`
  },
  {
    label: `Can you assist with other administrative tasks outside of the listed services?`,
    icon: 'i-solar-question-circle-outline',
    content: `Yes! We are proficient in a variety of administrative tasks and can customize our services to meet your unique needs. Whether you require help with data entry, compliance tracking, or specialized business paperwork, we’re here to provide expert support tailored to your goals. We also work with other businesses to provide referrals for other services, such as website development.`
  },
])
</script>

<style scoped lang="sass">
</style>
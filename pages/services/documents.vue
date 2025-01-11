<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-24 sm:mt-36">
        <section class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl lg:px-12">
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-sand-800 dark:text-sand-300 -ml-1">Document Services</h1>
            </div>
            <div class="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:gap-16">
                <div class="flex flex-col gap-10 mb-8 relative lg:mb-0">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300">Overview:</h2>
                        <p class="max-w-prose">
                            Our document services are designed to simplify your day-to-day tasks and ensure your files are handled with care and precision.  <br><br>
                            We offer faxing services to send and receive documents securely, along with scanning solutions to convert paper files into high-quality digital formats.  <br><br>
                            Need to update or adjust your documents? Our reformatting services can organize, resize, or edit your files to meet specific requirements. <br><br>
                            Additionally, we provide email services, helping you send digital files directly from our location, and assist with file organization and conversion, ensuring your documents are in the right format for any purpose.  <br><br>
                        </p>
                    </div>

                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg src="/img/document-md.webp" class="rounded-md max-h-96 object-cover"></NuxtImg>
                </div>
            </div>
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
    label: 'Can you help me fax documents to an international number?',
    icon: 'i-solar-question-circle-outline',
    content: `Yes, our faxing services support both domestic and international numbers. Just provide the recipient’s fax number and any required country codes, and we’ll handle the rest.`
  },
  {
    label: 'What file formats can you provide for scanned documents?',
    icon: 'i-solar-question-circle-outline',
    content: `We can scan documents into popular formats such as PDF, JPEG, or PNG. If you have specific requirements, let us know, and we’ll do our best to accommodate your needs.`
  },
  {
    label: `What is included in document reformatting services?`,
    icon: 'i-solar-question-circle-outline',
    content: `Our document reformatting services include resizing, reorganizing content, adjusting layouts, converting file types, and editing for clarity or compliance with specific guidelines. This ensures your documents meet your exact specifications.`
  },
  {
    label: `Can you email documents for me after scanning them?`,
    icon: 'i-solar-question-circle-outline',
    content: `Yes. Once your documents are scanned, we can assist in sending them via email directly from our location. Just provide the recipient’s email address, and we’ll ensure the files are sent securely.`
  },
  {
    label: `Are your services secure for handling sensitive documents?`,
    icon: 'i-solar-question-circle-outline',
    content: `Yes, we prioritize the security and confidentiality of all documents we handle. Our processes are designed to ensure your sensitive information is protected throughout every service we provide. Your documents are deleted from our systems after processing is completed.`
  },
])
</script>

<style scoped lang="sass">
</style>
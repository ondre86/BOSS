<template>
    <main class="flex flex-col gap-12 w-full items-center mb-12 mt-24 sm:mt-36">
        <section class="w-full flex flex-col px-8 justify-between gap-12 my-3 sm:my-7 max-w-6xl lg:px-12">
            <div class="flex flex-col gap-4 sm:gap-8">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-sand-800 dark:text-sand-300 -ml-1">Printing and Copying</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis et quaerat neque, at perferendis tenetur, quam praesentium, debitis voluptate facilis alias dolor veritatis unde tempora?
                </p>
            </div>
            <div class="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:gap-16">
                <div class="flex flex-col gap-10 mb-8 relative lg:mb-0">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300">Overview:</h2>
                        <p class="max-w-prose">
                            BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance. <br><br>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam qui incidunt soluta ipsa quia esse expedita, vel neque accusamus! Mollitia sed vitae assumenda unde eius. <br><br>
                        </p>
                        <ul class="list-disc list-inside">
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                    <div class="flex gap-4">
                        <UButton
                            to="/contact"
                            class="w-fit"
                            size="xl"
                        >
                        Get in Touch
                        </UButton>
                    </div>
                </div>
                <div class="flex flex-col gap-4 text-center relative">
                    <NuxtImg src="/img/print-sm.webp" class="rounded-md max-h-96 object-cover"></NuxtImg>
                </div>
            </div>
        </section>
        <section class="px-8 flex flex-col justify-center mb-12 gap-6 max-w-6xl">
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-sand-800 dark:text-sand-300">Features:</h2>
            <div class="grid grid-cols-2 md:flex md:flex-wrap md:gap-4 md:justify-start">
                <ImgBlock class="md:max-w-56" img="/rect.png"><span class="font-semibold text-base">Lorem</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png"><span class="font-semibold text-base">Lorem</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png"><span class="font-semibold text-base">Lorem</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png"><span class="font-semibold text-base">Lorem</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png"><span class="font-semibold text-base">Lorem</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png"><span class="font-semibold text-base">Lorem</span></ImgBlock>
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
    label: 'Lorem Impus',
    icon: 'i-solar-question-circle-outline',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Lorem Impus',
    icon: 'i-solar-question-circle-outline',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
  {
    label: 'Lorem Impus',
    icon: 'i-solar-question-circle-outline',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  },
  {
    label: 'Lorem Impus',
    icon: 'i-solar-question-circle-outline',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  },
  {
    label: 'Lorem Impus',
    icon: 'i-solar-question-circle-outline',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  },
])
</script>

<style scoped lang="sass">
</style>
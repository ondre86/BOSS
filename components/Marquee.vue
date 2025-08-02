<template>
    <section
        class="w-full flex flex-col px-8 relative justify-center lg:items-center text-white py-24 my-12 h-fit bg-slate-800"
    >
        <div
            class="max-w-6xl z-10 flex gap-8 flex-col-reverse lg:grid lg:gap-12 lg:grid-cols-2"
        >
            <div class="max-w-6xl flex flex-col gap-8">
                <div class="flex flex-col gap-3">
                    <h2 class="text-3xl font-bold">{{ title }}</h2>
                    <p class="max-w-prose">
                        {{ descText }}
                    </p>
                </div>
                <div class="flex flex-col gap-2">
                    <h3 class="text-2xl font-semibold">
                        {{ subtitle }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li
                            v-for="(listItem, index) in listElements"
                            :key="index"
                        >
                            {{ listItem }}
                        </li>
                    </ul>
                </div>
                <UButton
                    v-if="buttonText"
                    size="xl"
                    class="w-fit transition-all duration-200 dark:bg-white dark:text-black hover:bg-slate-600 focus:bg-slate-600 hover:text-white focus:text-white"
                    color="neutral"
                    variant="outline"
                    to="/contact"
                    :ui="{ base: 'focus:outline-visible' }"
                >
                    {{ buttonText }}
                </UButton>
            </div>
            <div>
                <NuxtImg
                    :src="imgSrc"
                    class="w-full max-h-96 object-cover rounded-lg"
                    :alt="altText"
                ></NuxtImg>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    descText: String,
    subtitle: String,
    listElements: Array,
    buttonText: String,
    imgSrc: String,
    altText: String
})
</script>

<style scoped lang="sass"></style>

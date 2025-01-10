<template>
    <main class="flex flex-col w-full items-center mt-24 mb-12 sm:mt-36">
        <section class="w-full flex flex-col px-8 justify-between gap-8 my-3 sm:my-7 max-w-6xl lg:grid lg:grid-cols-2 lg:flex-row lg:gap-24 lg:px-12">
            <div class="flex flex-col gap-8 mb-8 relative lg:mb-0">
                <div class="flex flex-col gap-1">
                    <h1 class="text-6xl text-sand-800 dark:text-sand-300 lg:text-8xl -ml-1">About</h1>
                </div>
                <p class="max-w-prose">
                    BOSS provides comprehensive business support services, including professional printing and shipping, copy, fax, and scan solutions, certified notary services, expert tax preparation, and administrative assistance. <br><br>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam qui incidunt soluta ipsa quia esse expedita, vel neque accusamus! Mollitia sed vitae assumenda unde eius. <br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam deleniti illum, natus, voluptatem quas itaque nemo magni aperiam incidunt eaque esse culpa ipsa! Modi commodi labore quasi voluptatem! Molestias voluptate est corrupti doloremque adipisci cupiditate aut praesentium veritatis aliquid! <br><br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem unde id esse dignissimos consequuntur iusto cum, modi accusantium sapiente, natus, adipisci atque. Suscipit error voluptas aut beatae similique sapiente tenetur, sed corrupti dolores! Eos, voluptatem. <br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quos temporibus! Autem harum inventore at.
                </p>
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
                <NuxtImg src="/rect.png" class="rounded-md"></NuxtImg>
                <span class="italic">Talana Anderson, founder, BOSS</span>
                <LogoIcon 
                    :svg-size="'450px'"
                    class="absolute -z-10 opacity-5 -bottom-36 invisible lg:visible"
                    style="left: 50%; transform: translate(-50%);"
                >
                </LogoIcon>
            </div>
        </section>
        <section class="px-8 flex flex-col justify-center mt-24 mb-12 gap-6 max-w-6xl">
            <h2 class="text-4xl font-display text-sand-800 dark:text-sand-300">Gallery</h2>
            <div class="flex flex-wrap gap-4">
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
                <NuxtImg src="/rect.png" class="w-full sm:max-w-72 rounded-md"></NuxtImg>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
h2
    font-family: "Grillmaster"
img
    width: 100%
    min-height: 400px
    max-height: 500px
</style>
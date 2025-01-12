<template>
    <footer class="flex flex-col border-t py-4 px-8 gap-8 md:justify-between md:flex-row">
        <nav>
            <a href="#">
                <MainLogo />
            </a>
        </nav>
        <div>
            <NuxtLink to="https://www.google.com/maps/place/5790+Crowder+Blvd+Ste+E,+New+Orleans,+LA+70127/@30.0281244,-89.9967336,17z/data=!3m1!4b1!4m6!3m5!1s0x889e027bb876935b:0x97ca628b597ff069!8m2!3d30.0281244!4d-89.9941587!16s%2Fg%2F11scv0fd7b?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                5790 Crowder Blvd. Suite E<br>
                New Orleans, LA, 70807
            </NuxtLink>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
footer
    border-color: var(--color-gray-200)

@media (prefers-color-scheme:dark)
    footer
        border-color: var(--color-slate-800)
</style>
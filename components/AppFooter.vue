<template>
    <footer class="flex flex-col border-t py-4 px-8 gap-8 md:justify-between md:flex-row">
        <nav>
            <a href="#">
                <MainLogo />
            </a>
        </nav>
        <div>
            <a href="">
                5790 Crowder Blvd. Suite E<br>
                New Orleans, LA, 70807
            </a>
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
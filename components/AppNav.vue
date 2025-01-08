<template>
    <header class="flex border-b py-4 px-8 justify-between">
        <nav>
            <a href="#">
                <MainLogo />
            </a>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
header
    border-color: var(--color-gray-200)

@media (prefers-color-scheme:dark)
    header
        border-color: var(--color-slate-800)
</style>
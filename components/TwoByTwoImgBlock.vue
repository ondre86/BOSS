<template>
    <div class="grid grid-cols-2 gap-8 max-w-md lg:text-center">
        <span class="text-xl font-normal col-span-2">We're your one-stop shop for:</span>
        <ImgBlock to="/services/notary" :img="'/img/notary-sm.webp'" :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'" :altText="'stamp with ink pad on a table'">Notary</ImgBlock>
        <ImgBlock to="/services/administrative-services" :img="'/img/admin-sm.webp'" :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'" :altText="'files room with lots of files on shelves'">Administrative Services</ImgBlock>
        <ImgBlock to="/services/tax-prep" :img="'/img/tax-sm.webp'" :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'" :altText="'desk with calculator, pens, papers, and binders'">Tax Prep</ImgBlock>
        <ImgBlock to="/services/print-copy" :img="'/img/print-sm.webp'" :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'" :altText="'printer'">Print & Copy</ImgBlock>
        <ImgBlock to="/services/documents" :img="'/img/document-md.webp'" :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'" :altText="'several flat sheets of paper overlapped'">Document Services</ImgBlock>
        <ImgBlock to="/services/pack-ship" :img="'/img/boxes-sm.webp'" :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'" :altText="'constructed cardboard boxes with a roll of packing tape'">Pack & Ship</ImgBlock>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">

</style>
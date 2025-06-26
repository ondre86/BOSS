<template>
    <div class="grid grid-cols-2 gap-8 max-w-md lg:text-center">
        <span class="text-xl font-normal col-span-2"
            >We're your one-stop shop for:</span
        >
        <ImgBlock
            to="/notary-public-new-orleans"
            :img="'/img/notary-sm.webp'"
            :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'"
            :altText="'stamp with ink pad on a table'"
            ><h2>Notary Public</h2></ImgBlock
        >
        <ImgBlock
            to="/administrative-services-new-orleans"
            :img="'/img/admin-sm.webp'"
            :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'"
            :altText="'files room with lots of files on shelves'"
            ><h2>Administrative Services</h2></ImgBlock
        >
        <ImgBlock
            to="/tax-prep-new-orleans"
            :img="'/img/tax-sm.webp'"
            :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'"
            :altText="'desk with calculator, pens, papers, and binders'"
            ><h2>Tax Prep</h2></ImgBlock
        >
        <ImgBlock
            to="/printing-copying-new-orleans"
            :img="'/img/print-sm.webp'"
            :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'"
            :altText="'printer'"
            ><h2>Print & Copy</h2></ImgBlock
        >
        <ImgBlock
            to="/document-preparation-new-orleans"
            :img="'/img/document-md.webp'"
            :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'"
            :altText="'several flat sheets of paper overlapped'"
            ><h2>Document Preparation Services</h2></ImgBlock
        >
        <ImgBlock
            to="/packing-shipping-new-orleans"
            :img="'/img/boxes-sm.webp'"
            :imgClass="'max-h-36 aspect-[16/11] sepia-10 object-cover'"
            :altText="'constructed cardboard boxes with a roll of packing tape'"
            ><h2>Pack & Ship</h2></ImgBlock
        >
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass"></style>

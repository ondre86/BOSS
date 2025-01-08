<template>
    <section class="w-full flex flex-col px-8 relative justify-center lg:items-center py-8 my-6">
        <div class="flex flex-col gap-6 md:items-center">
            <div class="flex flex-col gap-4 md:items-center">
                <h2 class="text-4xl font-bold">Full Service Business Center</h2>
                <span>Our comprehensive document services are designed to meet all your personal and professional needs.</span>
            </div>
            <div class="grid grid-cols-2 md:flex md:flex-wrap md:gap-4 md:justify-center">
                <ImgBlock class="md:max-w-56" img="/rect.png" link="/services/print-copy"><span class="font-semibold text-xl">Print</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png" link="/services/print-copy"><span class="font-semibold text-xl">Copy</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png" link="/services/documents"><span class="font-semibold text-xl">Fax</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png" link="/services/documents"><span class="font-semibold text-xl">Scan</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png" link="/services/documents"><span class="font-semibold text-xl">Reformatting</span></ImgBlock>
                <ImgBlock class="md:max-w-56" img="/rect.png" link="/services/documents"><span class="font-semibold text-xl">Email</span></ImgBlock>
            </div>
            <p class="max-w-3xl mt-6">
                We offer high-quality printing for documents, presentations, and marketing materials, as well as professional copying for large or small projects. <br><br>
                Take advantage of our secure faxing services or our digital scanning solutions to convert paper documents into easily shareable digital formats. Additionally, we provide document reformatting services, ensuring your files are properly organized, resized, or adjusted for any specific requirements. <br><br>
                Whether it's a simple copy job or detailed document preparation, we're here to handle it with care and precision.
            </p>
            <div class="flex gap-6 mt-8">
                <UButton size="xl" to="/services/print-copy" class="text-center">Print & Copy Services</UButton>
                <UButton size="xl" to="/services/documents" class="text-center">Other Document Services</UButton>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">

</style>
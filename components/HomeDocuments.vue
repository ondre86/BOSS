<template>
    <section
        class="w-full flex flex-col px-8 relative justify-center lg:items-center py-8 my-6"
    >
        <div class="flex flex-col gap-6 md:items-center">
            <div class="flex flex-col gap-4 md:items-center">
                <h2 class="text-4xl font-bold">Full Service Business Center</h2>
                <span
                    >Our comprehensive document services are designed to meet
                    all your personal and professional needs.</span
                >
            </div>
            <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:mt-2">
                <ImgBlock
                    class="md:max-w-56"
                    :imgClass="'h-36 object-cover'"
                    img="/img/print-sm.webp"
                    :altText="'printer'"
                    link="/services/print-copy"
                    ><h4 class="font-semibold text-xl">Printing</h4></ImgBlock
                >
                <ImgBlock
                    class="md:max-w-56"
                    :imgClass="'h-36 object-cover'"
                    img="/img/copy-sm.webp"
                    :altText="'a few sheets of carbon copy paper with different colors'"
                    link="/services/print-copy"
                    ><h4 class="font-semibold text-xl">Copying</h4></ImgBlock
                >
                <ImgBlock
                    class="md:max-w-56"
                    :imgClass="'h-36 object-cover'"
                    img="/img/fax-sm.webp"
                    :altText="'small fax machine with a sheet protruding'"
                    link="/services/documents"
                    ><h4 class="font-semibold text-xl">Faxing</h4></ImgBlock
                >
                <ImgBlock
                    class="md:max-w-56"
                    :imgClass="'h-36 object-cover'"
                    img="/img/scan-sm.webp"
                    :altText="'cartoon image of a large printer with sheets of paper flying out of it wildly'"
                    link="/services/documents"
                    ><h4 class="font-semibold text-xl">Scanning</h4></ImgBlock
                >
                <ImgBlock
                    class="md:max-w-56"
                    :imgClass="'h-36 object-cover'"
                    img="/img/format-sm.webp"
                    :altText="'several representations of a file as a sheet of paper different file format tags on them'"
                    link="/services/documents"
                    ><h4 class="font-semibold text-xl">
                        Reformatting
                    </h4></ImgBlock
                >
                <ImgBlock
                    class="md:max-w-56"
                    :imgClass="'h-36 object-cover'"
                    img="/img/email-md.webp"
                    :altText="'a macbook viewing the gmail web client'"
                    link="/services/documents"
                    ><h4 class="font-semibold text-xl">Emailing</h4></ImgBlock
                >
            </div>
            <p class="max-w-3xl mt-6">
                We offer high-quality printing for documents, presentations, and
                marketing materials, as well as professional copying for large
                or small projects. <br /><br />
                Take advantage of our secure faxing services or our digital
                scanning solutions to convert paper documents into easily
                shareable digital formats. Additionally, we provide document
                reformatting services, ensuring your files are properly
                organized, resized, or adjusted for any specific requirements.
                <br /><br />
                Whether it's a simple copy job or detailed document preparation,
                we're here to handle it with care and precision.
            </p>
            <div class="flex gap-6 mt-8">
                <UButton
                    size="xl"
                    to="/services/print-copy"
                    class="text-center"
                    >View Print & Copy Services</UButton
                >
                <UButton
                    size="xl"
                    to="/services/documents"
                    class="text-center"
                    >View Document Services</UButton
                >
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass"></style>

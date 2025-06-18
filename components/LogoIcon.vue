<template>
    <div
        class="w-fit h-fit"
        ref="logoWrap"
    >
        <svg
            viewBox="0 0 587 587"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>
                Logo for BOSS, a Business and Shipping Center that offers
                comprehensive business support services, including professional
                printing and shipping, copy, fax, and scan solutions, certified
                notary services, expert tax preparation, and administrative
                assistance.
            </title>
            <path
                data-animate="path-3"
                d="M293.539 280.993L314.018 260.508L293.529 240.024L273.049 260.509L293.539 280.993Z"
                fill="url(#paint3_linear_2_24)"
                stroke="url(#paint4_linear_2_24)"
                stroke-width="26.3415"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                data-animate="path-2"
                d="M293.507 417.663L450.67 260.513L293.513 103.344L136.363 260.507L293.507 417.663ZM382.326 260.507L293.507 349.319L204.694 260.507L293.513 171.681L382.326 260.507Z"
                fill="url(#paint1_linear_2_24)"
                stroke="url(#paint2_linear_2_24)"
                stroke-width="26.3415"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                data-animate="path-1"
                d="M518.989 260.499L293.49 35L68 260.49L293.499 485.989L518.989 260.499Z"
                stroke="url(#paint0_linear_2_24)"
                stroke-width="26.3415"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                data-animate="path-4"
                d="M293.507 485.988L100.232 292.733L68.0317 324.92L293.507 550.415L519.007 324.92L486.794 292.707L293.507 485.988Z"
                fill="url(#paint5_linear_2_24)"
                stroke="url(#paint6_linear_2_24)"
                stroke-width="26.3415"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_2_24"
                    x1="293.49"
                    y1="35"
                    x2="518.989"
                    y2="260.499"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#945F50" />
                    <stop
                        offset="0.5"
                        stop-color="#FCC5B3"
                    />
                    <stop
                        offset="1"
                        stop-color="#945F50"
                    />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_2_24"
                    x1="136.363"
                    y1="103.344"
                    x2="450.67"
                    y2="103.344"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#945F50" />
                    <stop
                        offset="0.5"
                        stop-color="#FCC5B3"
                    />
                    <stop
                        offset="1"
                        stop-color="#945F50"
                    />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_2_24"
                    x1="136.363"
                    y1="103.344"
                    x2="450.67"
                    y2="103.344"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#945F50" />
                    <stop
                        offset="0.5"
                        stop-color="#FCC5B3"
                    />
                    <stop
                        offset="1"
                        stop-color="#945F50"
                    />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_2_24"
                    x1="314.018"
                    y1="260.508"
                    x2="293.539"
                    y2="280.993"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#945F50" />
                    <stop
                        offset="0.5"
                        stop-color="#FCC5B3"
                    />
                    <stop
                        offset="1"
                        stop-color="#945F50"
                    />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_2_24"
                    x1="314.018"
                    y1="260.508"
                    x2="293.539"
                    y2="280.993"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#945F50" />
                    <stop
                        offset="0.5"
                        stop-color="#FCC5B3"
                    />
                    <stop
                        offset="1"
                        stop-color="#945F50"
                    />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_2_24"
                    x1="68.0317"
                    y1="292.707"
                    x2="519.007"
                    y2="292.707"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#945F50" />
                    <stop
                        offset="0.5"
                        stop-color="#FCC5B3"
                    />
                    <stop
                        offset="1"
                        stop-color="#945F50"
                    />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_2_24"
                    x1="68.0317"
                    y1="292.707"
                    x2="519.007"
                    y2="292.707"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#945F50" />
                    <stop
                        offset="0.5"
                        stop-color="#FCC5B3"
                    />
                    <stop
                        offset="1"
                        stop-color="#945F50"
                    />
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    svgSize: String,
    animated: {
        type: Boolean,
        default: false
    }
})
const { $gsap } = useNuxtApp()

const logoWrap = ref()

onMounted(() => {
    const paths = logoWrap.value.querySelectorAll("path")

    if (props.animated) {
        const tl = $gsap.timeline({
            delay: 0.5,
            repeat: -1,
            repeatDelay: 0.25
        })
        tl.from(paths, {
            opacity: 0,
            stagger: 0.5
        })
        tl.to(paths, {
            opacity: 0,
            stagger: 0.5
        })
    }
})
</script>

<style lang="sass" scoped>
svg
    width: v-bind(svgSize)
    height: v-bind(svgSize)
</style>

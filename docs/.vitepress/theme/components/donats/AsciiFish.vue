<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
    name: String,
    amount: Number,
})

const x = ref(Math.random() * window.innerWidth)
const y = ref(Math.random() * (window.innerHeight * 0.8) + 60)

const direction = ref(Math.random() > 0.5 ? 1 : -1)

const speed = 0.4 + props.amount / 300

/* ===========================
   ASCII РЫБЫ
=========================== */

const smallFish = `
|\\   \\\\\\\\__     o
| \\_/    o \\    o
> _   (( <_  oo
| / \\__+___/
|/     |/
`

const mediumFish = `
                                  ____
                               /\\|    ~~\\
                             /’  |   ,-. \`\\
                            |       | X |  |
                           _|________\`-‘   |X
                         /’          ~~~~~~~~~,
                       /’             ,_____,/_
                    ,/’        ___,’~~         ;
~~~~~~~~|~~~~~~~|—          /  X,~~~~~~~~~~~~,
        |       |            |  XX’____________’
        |       |           /’ XXX|            ;
        |       |        –x|  XXX,~~~~~~~~~~~~,
        |       |          X|     ‘____________’
        |   o   |—~~~~\\__XX\\             |XX
        |       |          XXX\`\\          /XXXX
~~~~~~~~’~~~~~~~’               \`\\xXXXXx/’ \\XXX
                                 /XXXXXX\\
                               /XXXXXXXXXX\\
                             /XXXXXX/^\\XDCAU\\
`

const bigFish = `
 ,-~~~       ~~~-,
(                 )
 \\_-, , , , , ,-_/
    / / | | \\ \\
    | | | | | |
    | | | | | |
   / / /   \\ \\ \\
   | | |   | | |
`

/* ===========================
   ВЫБОР РАЗМЕРА
=========================== */

const fishArt = computed(() => {
    if (props.amount < 10) return smallFish
    if (props.amount < 50) return mediumFish
    return bigFish
})

function animate() {
    x.value += speed * direction.value

    if (x.value > window.innerWidth + 400) direction.value = -1
    if (x.value < -400) direction.value = 1

    requestAnimationFrame(animate)
}

onMounted(() => {
    animate()
})
</script>

<template>
    <div
        class="fish"
        :style="{
            transform: `translate(${x}px, ${y}px)`,
            textAlign: 'center',
        }"
    >
        <div class="fish-name">{{ name }}</div>

        <pre
            :style="{
                transform: direction === -1 ? 'scaleX(-1)' : 'scaleX(1)',
            }"
            >{{ fishArt }}
    </pre
        >
    </div>
</template>

<style scoped>
.fish {
    position: absolute;
    font-family: monospace;
    white-space: pre;
    pointer-events: none;
    color: #8be9fd;
}

.fish-name {
    font-size: 12px;
    color: #ffffff;
    margin-bottom: 4px;
}
</style>

<script setup>
import donors from './donors.json'
import AsciiFish from './AsciiFish.vue'
import { ref, onMounted } from 'vue'

const bubbles = ref([])

function spawnBubble() {
    bubbles.value.push({
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
    })
}

function animateBubbles() {
    bubbles.value.forEach((b) => {
        b.y -= 1
    })

    bubbles.value = bubbles.value.filter((b) => b.y > -20)

    requestAnimationFrame(animateBubbles)
}

onMounted(() => {
    setInterval(spawnBubble, 700)
    animateBubbles()
})
</script>

<template>
    <div class="ocean">
        <!-- поверхность воды -->
        <pre class="surface"></pre>

        <!-- рыбы -->
        <AsciiFish
            v-for="d in donors"
            :key="d.name"
            :name="d.name"
            :amount="d.amount"
        />

        <!-- пузырьки -->
        <div
            v-for="b in bubbles"
            :key="b.id"
            class="bubble"
            :style="{ transform: `translate(${b.x}px, ${b.y}px)` }"
        >
            o
        </div>

        <!-- дно -->
        <pre class="bottom">
      _.-._
   _.-'       '-._
  /   ~  ~   ~    \
 /___________________\


    </pre
        >
    </div>
</template>

<style scoped>
.ocean {
    position: fixed;
    inset: 0;
    background: #001f2f;
    overflow: hidden;
    font-family: monospace;
    color: #6ee7ff;
}

.surface {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    color: #38bdf8;
}

.bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
}

.bubble {
    position: absolute;
    color: #b3ecff;
    font-size: 12px;
}
</style>

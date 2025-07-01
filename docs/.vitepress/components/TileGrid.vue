<script setup>
defineProps(['tiles'])
</script>

<template>
    <div class="tile-grid">
        <div
            v-for="tile in tiles"
            :key="tile.link"
            class="tile"
            :style="
                tile.borderGradient
                    ? { '--border-gradient': tile.borderGradient }
                    : {}
            "
        >
            <a
                :href="tile.link"
                class="tile-content"
                :target="tile.target || null"
                :rel="tile.target === '_blank' ? 'noopener' : null"
            >
                <div
                    :class="['card-left', tile.cardClass]"
                    :style="tile.gradient ? { background: tile.gradient } : {}"
                >
                    <div
                        class="tile-icon"
                        v-if="tile.icon"
                        v-html="tile.icon"
                        :style="{
                            color: tile.color || 'inherit',
                            filter: tile.iconFilter || 'none',
                        }"
                    />
                </div>
                <div class="tile-text">
                    <div class="tile-title">{{ tile.title }}</div>
                    <div class="tile-description">
                        {{ tile.description }}
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.card-left {
    height: 80px;
    width: 80px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    border: 0px solid var(--vp-c-bg-soft);
}

.tile-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-top: 2rem;
}

.tile {
    position: relative;
    display: flex;
    background-color: var(--vp-c-bg-soft);
    border: 0px solid var(--vp-c-border);
    border-radius: 12px;
    box-shadow: var(--vp-shadow-1);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.tile::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 12px;
    background: var(--border-gradient);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}

.tile:hover {
    transform: translateY(-4px);
    box-shadow: var(--vp-shadow-2);
}

.tile-content {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--vp-c-text-1);
    gap: 1rem;
    width: 100%;
}

.tile-icon {
    font-size: 2rem;
    flex-shrink: 0;
    width: 2.7rem;
    height: 2.7rem;
}

.tile-icon :deep(svg) {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

.tile-icon :deep(path) {
    fill: currentColor !important;
}

.tile-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.tile-text {
    display: flex;
    flex-direction: column;
}

.tile-title {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.tile-description {
    font-size: 0.95rem;
    color: var(--vp-c-text-2);
}
</style>

<script setup>
defineProps(['tiles'])
</script>

<template>
    <div class="tile-grid">
        <div v-for="tile in tiles" :key="tile.link" class="tile">
            <a
                :href="tile.link"
                class="tile-content"
                :target="tile.target || null"
                :rel="tile.target === '_blank' ? 'noopener' : null"
            >
                <!--                <div class="tile-icon">-->
                <!--                    <template-->
                <!--                        v-if="-->
                <!--                            tile.icon &&-->
                <!--                            (tile.icon.includes('/') ||-->
                <!--                                tile.icon.endsWith('.png') ||-->
                <!--                                tile.icon.endsWith('.jpg') ||-->
                <!--                                tile.icon.endsWith('.svg'))-->
                <!--                        "-->
                <!--                    >-->
                <!--                        <img :src="tile.icon" alt="" />-->
                <!--                    </template>-->
                <!--                </div>-->
                <div
                    class="tile-icon"
                    v-if="tile.icon"
                    v-html="tile.icon"
                    :style="{ color: tile.color || 'inherit' }"
                />
                <div class="tile-text">
                    <div class="tile-title">{{ tile.title }}</div>
                    <div class="tile-description">{{ tile.description }}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.tile-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    margin-top: 2rem;
}

.tile {
    display: flex;
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-border);
    border-radius: 12px;
    box-shadow: var(--vp-shadow-1);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.tile:hover {
    transform: translateY(-4px);
    box-shadow: var(--vp-shadow-2);
}

.tile-content {
    display: flex;
    align-items: center;
    padding: 1.2rem;
    text-decoration: none;
    color: var(--vp-c-text-1);
    gap: 1rem;
    width: 100%;
}

.tile-icon {
    font-size: 2rem;
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
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

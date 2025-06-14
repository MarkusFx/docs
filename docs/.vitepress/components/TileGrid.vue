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
                <div class="tile-icon">
                    <template
                        v-if="
                            tile.icon &&
                            (tile.icon.includes('/') ||
                                tile.icon.endsWith('.png') ||
                                tile.icon.endsWith('.jpg') ||
                                tile.icon.endsWith('.svg'))
                        "
                    >
                        <img :src="tile.icon" alt="" />
                    </template>
                    <template v-else>
                        {{ tile.icon }}
                    </template>
                </div>
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
    display: flex; /* горизонтальное расположение */
    align-items: center; /* вертикальное выравнивание по центру */
    padding: 1.2rem;
    text-decoration: none;
    color: var(--vp-c-text-1);
    gap: 1rem; /* расстояние между иконкой и текстом */
}

.tile-icon {
    font-size: 2rem;
    flex-shrink: 0; /* не сжимать иконку */
    filter: brightness(0%) saturate(100%) invert(27%) sepia(85%) saturate(7470%)
        hue-rotate(180deg) brightness(97%) contrast(107%);
    width: 2.5rem; /* размер иконки */
    height: 2.5rem;
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

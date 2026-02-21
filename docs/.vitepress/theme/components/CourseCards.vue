<script setup lang="ts">
// Импорт иконок
import angularIcon from '/logos/angularjs-logo.svg?raw'
import cSharpIcon from '/logos/cSharp-logo.svg?raw'
import dartIcon from '/logos/dart-logo.svg?raw'
import pythonIcon from '/logos/python-logo.svg?raw'
import expressIcon from '/logos/express-logo.svg?raw'
import javaIcon from '/logos/java-logo.svg?raw'
import kotlinIcon from '/logos/kotlin-logo.svg?raw'
import mongoIcon from '/logos/mongodb-logo.svg?raw'
import nginxIcon from '/logos/nginx-logo.svg?raw'
import nuxtIcon from '/logos/nuxtjs-logo.svg?raw'
import osIcon from '/logos/os-logo.svg?raw'
import reactIcon from '/logos/react-logo.svg?raw'
import unityIcon from '/logos/unity-logo.svg?raw'
import webrtcIcon from '/logos/webrtc-logo.svg?raw'

// Маппинг иконок по ключам
const iconMap: Record<string, string> = {
    angular: angularIcon,
    csharp: cSharpIcon,
    dart: dartIcon,
    python: pythonIcon,
    express: expressIcon,
    java: javaIcon,
    kotlin: kotlinIcon,
    mongo: mongoIcon,
    nginx: nginxIcon,
    nuxt: nuxtIcon,
    os: osIcon,
    react: reactIcon,
    unity: unityIcon,
    webrtc: webrtcIcon,
}

export interface Course {
    title: string
    author: string
    duration: string
    comment?: string
}

export interface Category {
    name: string
    iconKey: string
    courses: Course[]
}

defineProps<{
    categories: Category[]
}>()

const getIcon = (key: string) => iconMap[key] || ''

// Цвет и фильтр иконки — как в Tile-компоненте
const iconColor = 'var(--vp-c-text-1)'
const iconFilter = 'none' // Добавлено, чтобы не было ошибки в шаблоне
</script>

<template>
    <div class="course-cards">
        <div
            v-for="category in categories"
            :key="category.name"
            class="course-card"
        >
            <!-- Заголовок категории -->
            <div class="course-card-header">
                <span
                    class="course-card-icon"
                    v-html="getIcon(category.iconKey)"
                    :style="{
                        color: iconColor,
                        filter: iconFilter,
                    }"
                />
                <h3 class="course-card-title">{{ category.name }}</h3>
            </div>

            <!-- Список курсов -->
            <div class="course-card-body">
                <div
                    v-for="(course, index) in category.courses"
                    :key="index"
                    class="course-item"
                >
                    <!-- Верхняя строка: название + автор слева, время справа -->
                    <div class="course-header-row">
                        <div class="course-info">
                            <div class="course-title">{{ course.title }}</div>
                            <div class="course-author">{{ course.author }}</div>
                        </div>
                        <span class="course-duration">
                            <svg
                                class="duration-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                            {{ course.duration }}
                        </span>
                    </div>

                    <!-- Комментарий снизу, на всю ширину -->
                    <div v-if="course.comment" class="course-comment-wrapper">
                        <span class="course-comment"
                            >[{{ course.comment }}]</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.course-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

/* Карточка — минималистичная */
.course-card {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    padding: 1rem;
    transition: border-color 0.2s ease;
}

.course-card:hover {
    border-color: var(--vp-c-brand);
}

/* Заголовок категории */
.course-card-header {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid var(--vp-c-divider);
}

.course-card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
}

.course-card-icon :deep(svg) {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

.course-card-icon :deep(path) {
    fill: currentColor !important;
}

.course-card-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
    margin: 0;
}

/* Тело карточки */
.course-card-body {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
}

/* Элемент курса */
.course-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0.625rem;
    border-radius: 6px;
}

.course-item:hover {
    background: var(--vp-c-bg-mute);
}

/* Верхняя строка: инфо слева, время справа */
.course-header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
}

.course-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0; /* Для корректного обрезания текста */
}

.course-title {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--vp-c-text-1);
    line-height: 1.4;
    word-wrap: break-word;
}

.course-author {
    font-size: 0.75rem;
    color: var(--vp-c-text-3);
}

/* Время курса — аккуратный бейдж */
.course-duration {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--vp-c-text-2);
    padding: 0.1875rem 0.5rem;
    border-radius: 5px;
    border: 1px solid var(--vp-c-divider);
    flex-shrink: 0; /* Чтобы время не сжималось */
    white-space: nowrap;
}

.duration-icon {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
    opacity: 0.7;
}

/* Обёртка комментария — на всю ширину */
.course-comment-wrapper {
    width: 100%;
    margin-top: 0.125rem;
}

/* Комментарий — блекло-серый */
.course-comment {
    display: block;
    font-size: 0.7rem;
    color: var(--vp-c-text-3);
    font-style: italic;
    opacity: 0.7;
    line-height: 1.3;
}

/* Адаптив */
@media (max-width: 640px) {
    .course-cards {
        grid-template-columns: 1fr;
    }

    .course-header-row {
        //flex-direction: column;
        align-items: flex-start;
    }

    .course-duration {
        margin-top: 0.25rem;
    }
}
</style>

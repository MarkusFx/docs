<script setup>
import { ref } from 'vue'

const faqs = ref([
    {
        type: 'info',
        question: 'Как долго будет доступен сайт?',
        answer: 'Хостинг оплачен до октября 2026 года.',
    },
    {
        type: 'info',
        question: 'Можно ли заказать/купить курс или перевод?',
        answer: 'Нет, мы не занимаемся продажами.',
        note: 'Но что-то попросить никто не запрещал.',
    },
    {
        type: 'info',
        question: 'Как ускорить выход новых переводов?',
        answer: 'Поддержать "проект" можно через донат.',
        note: 'Проект существует благодаря вашей поддержке. Энтузиазм - штука не вечная, а кушать хочется.',
    },
    {
        type: 'info',
        question: 'Для чего проводятся стримы?',
        answer: 'Для поддержки выхода новых переводов.',
    },
    {
        type: 'info',
        question: 'На какие темы может выйти перевод?',
        answer: 'Смотри разделы "Дорожная карта" и "Возможные переводы курсов".',
        note: 'Но иногда темы предлагают.',
    },
    {
        type: 'info',
        question: 'Где доступны новые переводы?',
        answer: 'Новые переводы доступны только на сайте. На VK и RuTube публикуется только начало (превью).',
        note: null,
    },
    {
        type: 'info',
        question: 'Что будет со старыми переводами (видео на ВК, RuTube)?',
        answer: 'Постепенно всё (или почти всё) "переедет" на сайт.',
    },
    {
        type: 'warning',
        question: '"Вы используете нейронку для перевода! Это возмутительно!"',
        answer: 'Возмутительно, что кто-то вообще возмущается контентом, который дают ему просто так. Но да, используется нейронка.',
        note: 'А вы как хотели? Профессиональный перевод и озвучку? "За что купил, за то и продаю."',
    },
    {
        type: 'warning',
        question: '"Мне неудобно смотреть. Можно как-то иначе?"',
        answer: 'Да. Можно. Сделайте что-то своё - смотрите там.',
        note: 'Или предложите разумное решение...',
    },
    {
        type: 'danger',
        question:
            '"Мне не нравится перевод... Мне не нравится подход... Мне не нравится что-то ещё..."',
        answer: 'Уйди. Просто, уйди.',
        note: 'Ну или отправляйся в бан...',
    },
])

const getTypeStyles = (type) => {
    const map = {
        info: {
            label: 'INFO',
            color: 'var(--vp-c-brand, #646cff)',
            bg: 'transparent',
        },
        warning: {
            label: 'WARNING',
            color: '#f59e0b',
            bg: 'transparent',
        },
        danger: {
            label: 'IMPORTANT',
            color: '#ef4444',
            bg: 'transparent',
        },
    }
    return map[type] || map['info']
}
</script>

<template>
    <div class="faq-grid">
        <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-card"
            :style="{
                '--type-color': getTypeStyles(faq.type).color,
                '--type-label': getTypeStyles(faq.type).label,
            }"
        >
            <div class="faq-card-body">
                <h3 class="faq-question">{{ faq.question }}</h3>
                <p class="faq-answer">{{ faq.answer }}</p>
            </div>

            <div v-if="faq.note" class="faq-card-note">
                {{ faq.note }}
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Сетка */
.faq-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 1.5rem;
}

/* Карточка */
.faq-card {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.faq-card:hover {
    border-color: var(--type-color);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

/* Заголовок карточки с лейблом типа */
.faq-card-header {
    display: flex;
    align-items: center;
}

.faq-type-label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--type-color);
    padding: 0.25rem 0;
    border-bottom: 2px solid var(--type-color);
    line-height: 1;
}

/* Тело карточки */
.faq-card-body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

/* Вопрос */
.faq-question {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: var(--vp-c-text-1);
    margin: 0;
}

/* Ответ */
.faq-answer {
    font-size: 0.925rem;
    line-height: 1.65;
    color: var(--vp-c-text-2);
    margin: 0;
}

/* Заметка */
.faq-card-note {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--vp-c-text-3);
    font-style: italic;
    padding-top: 0.75rem;
    border-top: 1px solid var(--vp-c-divider-light);
}

/* Адаптивность */
@media (max-width: 768px) {
    .faq-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
        padding: 0 1rem;
        margin: 2rem auto;
    }

    .faq-card {
        padding: 1.25rem;
    }

    .faq-question {
        font-size: 0.975rem;
    }

    .faq-answer {
        font-size: 0.9rem;
    }
}
</style>

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
        answer: 'Темы размещены на Дорожной карте.',
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
        answer: 'Возмутительно, что кто-то вообще возмущается контентом, который дают ему просто так. Но да, используется нейронка. А вы как хотели? Профессиональный перевод и озвучку?',
        note: '"За что купил, за то и продаю"',
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

const getTypeClass = (type) => {
    const map = {
        info: 'faq-card-info',
        warning: 'faq-card-warning',
        danger: 'faq-card-danger',
    }
    return map[type] || 'faq-card-info'
}
</script>

<template>
    <div class="faq-grid">
        <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-card"
            :class="getTypeClass(faq.type)"
        >
            <div class="faq-question">
                {{ faq.question }}
            </div>
            <div class="faq-answer">
                {{ faq.answer }}
            </div>
            <div v-if="faq.note" class="faq-note">
                {{ faq.note }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 1300px;
    margin: 2.5rem auto;
    padding: 0 1.5rem;
}

/* Базовый стиль карточки */
.faq-card {
    background: var(--vp-c-bg-soft);
    border-radius: 16px;
    padding: 1.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
}

.faq-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    transition: width 0.3s ease;
}

.faq-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.faq-card:hover::before {
    width: 6px;
}

/* Вопрос */
.faq-question {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.45;
    color: var(--vp-c-text-1);
    letter-spacing: -0.01em;
}

/* Ответ */
.faq-answer {
    font-size: 0.975rem;
    line-height: 1.7;
    color: var(--vp-c-text-2);
}

/* Заметка (курсив) */
.faq-note {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--vp-c-text-3);
    font-style: italic;
    padding-top: 0.875rem;
    margin-top: 0.25rem;
    border-top: 1px solid var(--vp-c-divider);
}

/* --- Типы карточек --- */

/* INFO - Синий акцент */
.faq-card-info::before {
    background: linear-gradient(
        180deg,
        var(--vp-c-brand),
        var(--vp-c-brand-light)
    );
}
.faq-card-info:hover {
    border-color: rgba(102, 126, 234, 0.2);
}

/* WARNING - Оранжевый акцент */
.faq-card-warning::before {
    background: linear-gradient(180deg, #f59e0b, #fbbf24);
}
.faq-card-warning {
    background: linear-gradient(
        135deg,
        var(--vp-c-bg-soft),
        rgba(245, 158, 11, 0.03)
    );
}
.faq-card-warning:hover {
    border-color: rgba(245, 158, 11, 0.25);
}

/* DANGER - Красный акцент */
.faq-card-danger::before {
    background: linear-gradient(180deg, #dc2626, #ef4444);
}
.faq-card-danger {
    background: linear-gradient(
        135deg,
        var(--vp-c-bg-soft),
        rgba(220, 38, 38, 0.03)
    );
}
.faq-card-danger:hover {
    border-color: rgba(220, 38, 38, 0.25);
}

/* Адаптивность */
@media (max-width: 768px) {
    .faq-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem;
        gap: 1.25rem;
    }

    .faq-card {
        padding: 1.25rem 1.5rem;
    }

    .faq-question {
        font-size: 1.05rem;
    }
}
</style>

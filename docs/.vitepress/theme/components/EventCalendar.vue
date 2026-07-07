<script setup>
import { ref, computed, onMounted } from 'vue'

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]
const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const events = ref([])
const isLoading = ref(false)
const saveStatus = ref('')

onMounted(async () => {
    await loadEvents()
})

async function loadEvents() {
    isLoading.value = true
    try {
        const response = await fetch('/api/events')
        if (!response.ok) throw new Error('Ошибка загрузки')
        events.value = await response.json()
    } catch (error) {
        console.error(error)
        events.value = []
        saveStatus.value = 'error'
    } finally {
        isLoading.value = false
    }
}

async function saveEvents() {
    saveStatus.value = 'saving'
    try {
        const response = await fetch('/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(events.value),
        })
        if (!response.ok) throw new Error('Ошибка сохранения')
        saveStatus.value = 'success'
        setTimeout(() => (saveStatus.value = ''), 3000)
    } catch (error) {
        console.error(error)
        saveStatus.value = 'error'
        alert('Не удалось сохранить: ' + error.message)
    }
}

const years = computed(() => {
    const uniqueYears = [
        ...new Set(events.value.map((e) => new Date(e.date).getFullYear())),
    ]
    return uniqueYears.sort()
})

const selectedYear = ref(
    years.value.length
        ? years.value[years.value.length - 1]
        : new Date().getFullYear(),
)

const yearEvents = computed(() =>
    events.value.filter(
        (e) => new Date(e.date).getFullYear() === selectedYear.value,
    ),
)

function getEventTime(event) {
    if (event.time) return event.time
    if (event.timeBegin && event.timeEnd)
        return event.timeBegin + '–' + event.timeEnd
    if (event.timeBegin) return event.timeBegin
    return ''
}

function getSortTime(event) {
    return event.time || event.timeBegin || '00:00'
}

// --- MODAL & CRUD ---

const modalOpen = ref(false)
const modalEvents = ref([])
const modalDate = ref('')
const isEditing = ref(false)
const currentEditEvent = ref(null)

const form = ref({
    date: '',
    time: '',
    timeBegin: '',
    timeEnd: '',
    title: '',
    type: 'neutral',
})

function openDay(day, month) {
    const dateStr =
        selectedYear.value +
        '-' +
        String(month + 1).padStart(2, '0') +
        '-' +
        String(day).padStart(2, '0')
    const eventsDay = yearEvents.value
        .filter((e) => e.date === dateStr)
        .sort((a, b) => getSortTime(a).localeCompare(getSortTime(b)))
    modalEvents.value = eventsDay
    modalDate.value = dateStr
    modalOpen.value = true
    isEditing.value = false
}

function closeModal() {
    modalOpen.value = false
    isEditing.value = false
}

function startCreateEvent() {
    currentEditEvent.value = null
    form.value = {
        date: modalDate.value,
        time: '',
        timeBegin: '',
        timeEnd: '',
        title: '',
        type: 'neutral',
    }
    isEditing.value = true
}

function startEditEvent(event) {
    currentEditEvent.value = event
    form.value = { ...event }
    isEditing.value = true
}

async function saveEvent() {
    if (!form.value.title) return alert('Введите название события')
    if (!form.value.time && !form.value.timeBegin)
        form.value.timeBegin = '00:00'

    if (currentEditEvent.value) {
        const index = events.value.findIndex(
            (e) =>
                e.date === currentEditEvent.value.date &&
                e.title === currentEditEvent.value.title &&
                getEventTime(e) === getEventTime(currentEditEvent.value),
        )
        if (index !== -1) events.value[index] = { ...form.value }
    } else {
        events.value.push({ ...form.value })
    }

    openDay(
        new Date(modalDate.value).getDate(),
        new Date(modalDate.value).getMonth(),
    )
    isEditing.value = false
    await saveEvents()
}

async function deleteEvent(event) {
    if (!confirm('Удалить это событие?')) return
    events.value = events.value.filter(
        (e) =>
            !(
                e.date === event.date &&
                e.title === event.title &&
                getEventTime(e) === getEventTime(event)
            ),
    )
    openDay(
        new Date(modalDate.value).getDate(),
        new Date(modalDate.value).getMonth(),
    )
    await saveEvents()
}

function openNewEventModal() {
    modalDate.value = selectedYear.value + '-01-01'
    startCreateEvent()
    modalOpen.value = true
}

function getDays(month) {
    return new Date(selectedYear.value, month + 1, 0).getDate()
}

function getFirstDayOffset(month) {
    let day = new Date(selectedYear.value, month, 1).getDay()
    if (day === 0) day = 7
    return day - 1
}

function getEvents(day, month) {
    const date =
        selectedYear.value +
        '-' +
        String(month + 1).padStart(2, '0') +
        '-' +
        String(day).padStart(2, '0')
    return yearEvents.value
        .filter((e) => e.date === date)
        .sort((a, b) => getSortTime(a).localeCompare(getSortTime(b)))
}

function dayType(day, month) {
    const ev = getEvents(day, month)
    if (!ev.length) return ''
    if (ev.some((e) => e.type === 'negative')) return 'day-negative'
    if (ev.some((e) => e.type === 'positive')) return 'day-positive'
    return 'day-neutral'
}
</script>

<template>
    <div class="calendar-wrapper">
        <!-- Статус -->
        <div v-if="saveStatus" class="save-status" :class="saveStatus">
            <span v-if="saveStatus === 'saving'">💾 Сохранение...</span>
            <span v-if="saveStatus === 'success'"
                >✅ Сохранено в events.json</span
            >
            <span v-if="saveStatus === 'error'">❌ Ошибка сохранения</span>
        </div>

        <div v-if="isLoading" class="loading">Загрузка...</div>

        <!-- Управление -->
        <div class="controls-row">
            <div class="year-selector">
                <button
                    v-for="y in years"
                    :key="y"
                    @click="selectedYear = y"
                    :class="{ active: y === selectedYear }"
                >
                    {{ y }}
                </button>
                <button v-if="years.length === 0" class="active">
                    Нет данных
                </button>
            </div>
            <div class="action-buttons">
                <button class="btn-add-global" @click="openNewEventModal">
                    + Добавить событие
                </button>
                <button class="btn-refresh" @click="loadEvents">
                    🔄 Обновить
                </button>
            </div>
        </div>

        <!-- Календарь -->
        <div class="calendar">
            <div v-for="(month, m) in months" :key="month" class="month">
                <div class="month-title">{{ month }}</div>
                <div class="weekdays">
                    <div v-for="d in weekdays" :key="d" class="weekday">
                        {{ d }}
                    </div>
                </div>
                <div class="days">
                    <div
                        v-for="n in getFirstDayOffset(m)"
                        :key="'empty' + n"
                        class="empty"
                    ></div>
                    <div
                        v-for="day in getDays(m)"
                        :key="day"
                        class="day"
                        :class="dayType(day, m)"
                        @click="openDay(day, m)"
                    >
                        <span class="day-number">{{ day }}</span>

                        <!-- ТОЧКИ: максимум 4 -->
                        <div v-if="getEvents(day, m).length" class="dots">
                            <span
                                v-for="event in getEvents(day, m).slice(0, 4)"
                                :key="event.title + getEventTime(event)"
                                class="dot"
                                :class="'dot-' + event.type"
                            />
                        </div>

                        <!-- Превью при наведении -->
                        <div v-if="getEvents(day, m).length" class="preview">
                            <div
                                v-for="event in getEvents(day, m).slice(0, 3)"
                                :key="event.title"
                                class="preview-event"
                                :class="'preview-' + event.type"
                            >
                                <span class="preview-time">{{
                                    getEventTime(event)
                                }}</span>
                                <span class="preview-title">{{
                                    event.title
                                }}</span>
                            </div>
                            <div
                                v-if="getEvents(day, m).length > 3"
                                class="preview-more"
                            >
                                + ещё {{ getEvents(day, m).length - 3 }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Модальное окно -->
        <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal" @click.stop>
                <!-- Просмотр списка -->
                <div v-if="!isEditing">
                    <div class="modal-header">
                        <span class="modal-header-title"
                            >События: {{ modalDate }}</span
                        >
                        <button
                            class="icon-btn"
                            @click="startCreateEvent"
                            title="Добавить"
                        >
                            +
                        </button>
                    </div>
                    <div class="modal-events" v-if="modalEvents.length">
                        <div
                            v-for="event in modalEvents"
                            :key="event.title + getEventTime(event)"
                            class="modal-event-row"
                        >
                            <div
                                class="modal-event-content"
                                :class="'event-' + event.type"
                                @click="startEditEvent(event)"
                            >
                                <span class="event-time">{{
                                    getEventTime(event)
                                }}</span>
                                <span class="event-title">{{
                                    event.title
                                }}</span>
                            </div>
                            <div class="modal-actions">
                                <button
                                    class="action-btn edit"
                                    @click="startEditEvent(event)"
                                >
                                    ✎
                                </button>
                                <button
                                    class="action-btn delete"
                                    @click="deleteEvent(event)"
                                >
                                    🗑
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-else class="no-events">
                        На этот день событий нет.
                    </div>
                    <button class="modal-close" @click="closeModal">
                        Закрыть
                    </button>
                </div>

                <!-- Форма редактирования -->
                <div v-else class="editor-form">
                    <div class="modal-header">
                        <span class="modal-header-title">{{
                            currentEditEvent ? 'Редактировать' : 'Новое событие'
                        }}</span>
                        <button
                            class="icon-btn icon-btn-close"
                            @click="isEditing = false"
                        >
                            ✕
                        </button>
                    </div>
                    <div class="form-group">
                        <label>Дата</label>
                        <input type="date" v-model="form.date" required />
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Время</label>
                            <input
                                type="time"
                                v-model="form.time"
                                placeholder="10:00"
                            />
                        </div>
                        <div class="form-group">
                            <label>Начало</label>
                            <input type="time" v-model="form.timeBegin" />
                        </div>
                        <div class="form-group">
                            <label>Конец</label>
                            <input type="time" v-model="form.timeEnd" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Название</label>
                        <input
                            type="text"
                            v-model="form.title"
                            placeholder="Например: Совещание"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label>Тип события</label>
                        <select v-model="form.type">
                            <option value="neutral">Нейтральное</option>
                            <option value="positive">
                                Позитивное (Зелёное)
                            </option>
                            <option value="negative">
                                Негативное (Красное)
                            </option>
                        </select>
                    </div>
                    <div class="form-actions">
                        <button class="btn-save" @click="saveEvent">
                            Сохранить
                        </button>
                        <button class="btn-cancel" @click="isEditing = false">
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* === ОБЩИЕ СТИЛИ === */
.calendar-wrapper {
    margin-top: 24px;
    font-family: var(--vp-font-family-base);
    color: var(--vp-c-text-1);
    overflow: visible;
}

.save-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 13px;
    font-weight: 500;
    animation: slideDown 0.2s ease;
}
.save-status.saving {
    background: var(--vp-c-yellow-soft);
    color: var(--vp-c-yellow-1);
    border: 1px solid var(--vp-c-yellow-2);
}
.save-status.success {
    background: var(--vp-c-green-soft);
    color: var(--vp-c-green-1);
    border: 1px solid var(--vp-c-green-2);
}
.save-status.error {
    background: var(--vp-c-red-soft);
    color: var(--vp-c-red-1);
    border: 1px solid var(--vp-c-red-2);
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-8px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.loading {
    text-align: center;
    padding: 32px;
    color: var(--vp-c-text-2);
    font-size: 14px;
}

/* === ПАНЕЛЬ УПРАВЛЕНИЯ === */
.controls-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 12px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--vp-c-divider);
}

.year-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.action-buttons {
    display: flex;
    gap: 8px;
}

.year-selector button,
.btn-add-global,
.btn-refresh {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 14px;
    border-radius: 8px;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
    line-height: 1.4;
}

.year-selector button:hover,
.btn-add-global:hover,
.btn-refresh:hover {
    border-color: var(--vp-c-brand);
    color: var(--vp-c-brand);
    background: var(--vp-c-brand-soft);
}

.year-selector button:active,
.btn-add-global:active,
.btn-refresh:active {
    transform: translateY(1px);
}

.year-selector button.active {
    background: var(--vp-c-brand);
    color: var(--vp-c-white);
    border-color: var(--vp-c-brand);
}
.year-selector button.active:hover {
    background: var(--vp-c-brand-dark);
    border-color: var(--vp-c-brand-dark);
}

.btn-add-global {
    background: var(--vp-c-brand);
    border-color: var(--vp-c-brand);
    color: var(--vp-c-white);
    font-weight: 600;
}
.btn-add-global:hover {
    background: var(--vp-c-brand-dark);
    border-color: var(--vp-c-brand-dark);
    color: var(--vp-c-white);
}

.btn-refresh {
    background: var(--vp-c-bg-soft);
    border-color: var(--vp-c-divider);
}
.btn-refresh:hover {
    background: var(--vp-c-default-soft);
    border-color: var(--vp-c-default);
    color: var(--vp-c-default);
}

/* === КАЛЕНДАРЬ === */
.calendar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    overflow: visible;
}

.month {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    padding: 16px;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
    overflow: visible;
}
.month:hover {
    border-color: var(--vp-c-brand);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.month-title {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 12px;
    text-align: center;
    color: var(--vp-c-text-1);
    padding-bottom: 8px;
    border-bottom: 1px solid var(--vp-c-divider);
}

.weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 8px;
}
.weekday {
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--vp-c-text-3);
    padding: 4px 0;
}

.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    overflow: visible;
}
.empty {
    height: 36px;
}

.day {
    height: 36px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 0.15s ease;
    background: transparent;
    border: 1px solid transparent;
    isolation: isolate;
}

.day:hover {
    background: var(--vp-c-bg-soft);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.day:active {
    transform: scale(0.98);
}

.day-number {
    font-size: 13px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    transition: color 0.15s ease;
}

.day:hover .day-number {
    color: var(--vp-c-brand);
}

.day-positive {
    border-color: var(--vp-c-green-2);
    background: var(--vp-c-green-soft);
}
.day-negative {
    border-color: var(--vp-c-red-2);
    background: var(--vp-c-red-soft);
}
.day-neutral {
    border-color: var(--vp-c-divider);
}
.day-positive:hover,
.day-negative:hover {
    filter: brightness(0.95);
}

/* === ТОЧКИ СОБЫТИЙ (МАКС 4) === */
.dots {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 3px;
    z-index: 2;
    justify-content: center;
    align-items: center;
}

.dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    flex-shrink: 0;
    transition: transform 0.15s ease;
}

.day:hover .dot {
    transform: scale(1.2);
}

.dot-positive {
    background: var(--vp-c-green-1);
}
.dot-negative {
    background: var(--vp-c-red-1);
}
.dot-neutral {
    background: var(--vp-c-text-3);
}

/* === ПРЕВЬЮ ПРИ НАВЕДЕНИИ === */
.preview {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translate3d(-50%, 8px, 0);
    background: var(--vp-c-bg-elv);
    color: var(--vp-c-text-1);
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    z-index: 100;
    min-width: 200px;
    max-width: 240px;
    box-shadow: var(--vp-shadow-3);
    border: 1px solid var(--vp-c-divider);

    will-change: auto;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

.day:hover .preview {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
    pointer-events: auto;
}

.preview::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: var(--vp-c-bg-elv);
}

.preview-event {
    display: flex;
    gap: 8px;
    margin: 3px 0;
    align-items: center;
    padding: 2px 0;
}
.preview-time {
    font-weight: 600;
    min-width: 48px;
    color: var(--vp-c-text-2);
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
}
.preview-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.preview-positive .preview-time {
    color: var(--vp-c-green-1);
}
.preview-negative .preview-time {
    color: var(--vp-c-red-1);
}

.preview-more {
    margin-top: 6px;
    padding-top: 6px;
    border-top: 1px dashed var(--vp-c-divider);
    opacity: 0.7;
    font-size: 11px;
    color: var(--vp-c-text-3);
}

/* === МОДАЛЬНОЕ ОКНО === */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--vp-c-bg-backdrop);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    animation: fadeIn 0.2s ease;
    padding: 16px;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.modal {
    background: var(--vp-c-bg-elv);
    padding: 20px;
    border-radius: 16px;
    width: 100%;
    max-width: 440px;
    max-height: 85vh;
    overflow: auto;
    box-shadow: var(--vp-shadow-4);
    border: 1px solid var(--vp-c-divider);
    animation: slideUp 0.25s ease;
}
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--vp-c-divider);
}
.modal-header-title {
    font-weight: 600;
    font-size: 16px;
    color: var(--vp-c-text-1);
}

.icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: var(--vp-c-brand);
    color: var(--vp-c-white);
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
}
.icon-btn:hover {
    background: var(--vp-c-brand-dark);
    transform: scale(1.05);
}
.icon-btn:active {
    transform: scale(0.95);
}

.icon-btn-close {
    background: transparent;
    color: var(--vp-c-text-3);
    font-size: 20px;
    width: auto;
    height: auto;
    padding: 4px;
}
.icon-btn-close:hover {
    color: var(--vp-c-text-1);
    background: var(--vp-c-bg-soft);
}

.modal-events {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
    max-height: 40vh;
    overflow-y: auto;
    padding-right: 4px;
}
.modal-events::-webkit-scrollbar {
    width: 4px;
}
.modal-events::-webkit-scrollbar-track {
    background: transparent;
}
.modal-events::-webkit-scrollbar-thumb {
    background: var(--vp-c-divider);
    border-radius: 4px;
}

.modal-event-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    padding: 4px;
    transition: border-color 0.15s ease;
}
.modal-event-row:hover {
    border-color: var(--vp-c-brand);
}

.modal-event-content {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s ease;
    min-width: 0;
}
.modal-event-content:hover {
    background: var(--vp-c-bg-alt);
}

.event-time {
    font-weight: 600;
    min-width: 52px;
    font-size: 13px;
    color: var(--vp-c-text-2);
    font-family: var(--vp-font-family-mono);
}
.event-title {
    font-size: 14px;
    color: var(--vp-c-text-1);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.event-positive {
    border-left: 3px solid var(--vp-c-green-1);
}
.event-negative {
    border-left: 3px solid var(--vp-c-red-1);
}
.event-neutral {
    border-left: 3px solid var(--vp-c-text-3);
}

.modal-actions {
    display: flex;
    gap: 4px;
    padding-right: 4px;
}
.action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: transparent;
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-2);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.15s ease;
}
.action-btn:hover {
    border-color: var(--vp-c-brand);
    color: var(--vp-c-brand);
    background: var(--vp-c-brand-soft);
}
.action-btn.delete:hover {
    border-color: var(--vp-c-red-1);
    color: var(--vp-c-red-1);
    background: var(--vp-c-red-soft);
}

.no-events {
    text-align: center;
    color: var(--vp-c-text-3);
    padding: 24px 16px;
    font-size: 14px;
    font-style: italic;
    background: var(--vp-c-bg-soft);
    border-radius: 10px;
    margin-bottom: 20px;
}

.modal-close {
    width: 100%;
    padding: 10px 16px;
    border-radius: 10px;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.modal-close:hover {
    background: var(--vp-c-default-soft);
    border-color: var(--vp-c-default);
    color: var(--vp-c-default);
}
.modal-close:active {
    transform: translateY(1px);
}

/* === ФОРМА РЕДАКТИРОВАНИЯ === */
.editor-form {
    animation: fadeIn 0.2s ease;
}

.form-group {
    margin-bottom: 14px;
}
.form-group label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
    color: var(--vp-c-text-2);
}
.form-group input,
.form-group select {
    width: 100%;
    padding: 9px 12px;
    border-radius: 8px;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    font-size: 14px;
    font-family: inherit;
    transition: all 0.15s ease;
    box-sizing: border-box;
}
.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--vp-c-brand);
    background: var(--vp-c-bg);
    box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}
.form-group input::placeholder {
    color: var(--vp-c-text-3);
}

.form-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.form-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 24px;
}

.btn-save {
    padding: 10px 16px;
    border-radius: 10px;
    border: none;
    background: var(--vp-c-brand);
    color: var(--vp-c-white);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
}
.btn-save:hover {
    background: var(--vp-c-brand-dark);
}
.btn-save:active {
    transform: translateY(1px);
}

.btn-cancel {
    padding: 10px 16px;
    border-radius: 10px;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
}
.btn-cancel:hover {
    background: var(--vp-c-default-soft);
    border-color: var(--vp-c-default);
    color: var(--vp-c-default);
}
.btn-cancel:active {
    transform: translateY(1px);
}

/* === АДАПТИВ === */
@media (max-width: 1200px) {
    .calendar {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 768px) {
    .calendar {
        grid-template-columns: 1fr;
    }
    .controls-row {
        flex-direction: column;
        align-items: stretch;
    }
    .action-buttons {
        justify-content: center;
    }
    .preview {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        width: calc(100% - 32px);
        max-width: 360px;
        white-space: normal;
        opacity: 0;
        pointer-events: none;
    }
    .day:hover .preview {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
    .modal {
        margin: 0;
        width: 100%;
        max-width: none;
        max-height: 90vh;
        border-radius: 16px 16px 0 0;
    }
    .form-row {
        grid-template-columns: 1fr;
    }
    .form-actions {
        grid-template-columns: 1fr;
    }
}
@media (max-width: 480px) {
    .month {
        padding: 12px;
    }
    .day {
        height: 32px;
    }
    .day-number {
        font-size: 12px;
    }
    .modal {
        padding: 16px;
        border-radius: 12px;
    }
    .modal-header {
        font-size: 15px;
    }
}

/* === ТЁМНАЯ ТЕМА === */
@media (prefers-color-scheme: dark) {
    .day:hover {
        background: var(--vp-c-bg-alt);
    }
    .modal-event-content:hover {
        background: var(--vp-c-bg-alt);
    }
    .preview {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    }
}
</style>

<script setup>
import { ref, computed } from 'vue'
import events from './events.json'

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

/* годы */
const years = [
    ...new Set(events.map((e) => new Date(e.date).getFullYear())),
].sort()
const selectedYear = ref(years[years.length - 1])

/* события выбранного года */
const yearEvents = computed(() =>
    events.filter((e) => new Date(e.date).getFullYear() === selectedYear.value),
)

/* универсальное время */
function getEventTime(event) {
    if (event.time) return event.time
    if (event.timeBegin && event.timeEnd)
        return event.timeBegin + '–' + event.timeEnd
    if (event.timeBegin) return event.timeBegin
    return ''
}

/* сортировка по времени */
function getSortTime(event) {
    return event.time || event.timeBegin || '00:00'
}

/* модальное окно */
const modalOpen = ref(false)
const modalEvents = ref([])
const modalDate = ref('')

function openDay(day, month) {
    const date =
        selectedYear.value +
        '-' +
        String(month + 1).padStart(2, '0') +
        '-' +
        String(day).padStart(2, '0')
    const eventsDay = yearEvents.value
        .filter((e) => e.date === date)
        .sort((a, b) => getSortTime(a).localeCompare(getSortTime(b)))
    if (!eventsDay.length) return
    modalEvents.value = eventsDay
    modalDate.value = date
    modalOpen.value = true
}
function closeModal() {
    modalOpen.value = false
}

/* дни месяца */
function getDays(month) {
    return new Date(selectedYear.value, month + 1, 0).getDate()
}

/* первый день месяца (смещение) */
function getFirstDayOffset(month) {
    let day = new Date(selectedYear.value, month, 1).getDay()
    if (day === 0) day = 7
    return day - 1
}

/* события дня */
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

/* тип дня */
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
        <!-- выбор года -->
        <div class="year-selector">
            <button
                v-for="y in years"
                :key="y"
                @click="selectedYear = y"
                :class="{ active: y === selectedYear }"
            >
                {{ y }}
            </button>
        </div>

        <!-- календарь -->
        <div class="calendar">
            <div v-for="(month, m) in months" :key="month" class="month">
                <div class="month-title">{{ month }}</div>

                <!-- дни недели -->
                <div class="weekdays">
                    <div v-for="d in weekdays" :key="d" class="weekday">
                        {{ d }}
                    </div>
                </div>

                <!-- дни месяца -->
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
                        <div class="dots">
                            <span
                                v-for="event in getEvents(day, m)"
                                :key="event.title + getEventTime(event)"
                                class="dot"
                                :class="'dot-' + event.type"
                            />
                        </div>

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
                                <span>{{ event.title }}</span>
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

        <!-- модальное окно -->
        <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal" @click.stop>
                <div class="modal-header">{{ modalDate }}</div>
                <div class="modal-events">
                    <div
                        v-for="event in modalEvents"
                        :key="event.title + getEventTime(event)"
                        class="modal-event"
                        :class="'event-' + event.type"
                    >
                        <span class="event-time">{{
                            getEventTime(event)
                        }}</span>
                        <span class="event-title">{{ event.title }}</span>
                    </div>
                </div>
                <button class="modal-close" @click="closeModal">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* базовые стили */
.calendar-wrapper {
    margin-top: 20px;
}
.year-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}
.year-selector button {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: none;
    cursor: pointer;
}
.year-selector button.active {
    background: #646cff;
    color: white;
    border-color: #646cff;
}

/* календарь */
.calendar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
.month {
    background: var(--vp-c-bg-soft);
    border-radius: 12px;
    padding: 14px;
}
.month-title {
    font-weight: 600;
    margin-bottom: 8px;
    text-align: center;
}

/* дни недели */
.weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 6px;
}
.weekday {
    text-align: center;
    font-size: 11px;
    opacity: 0.7;
}

/* дни месяца */
.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
}
.empty {
    height: 34px;
}
.day {
    height: 34px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
}
.day:hover {
    background: var(--vp-c-bg);
}
.day-number {
    font-size: 12px;
}
.day-positive {
    border: 1px solid #22c55e;
}
.day-negative {
    border: 1px solid #ef4444;
}
.day-neutral {
    border: 1px solid #999;
}

/* точки */
.dots {
    position: absolute;
    bottom: 3px;
    display: flex;
    gap: 2px;
}
.dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
}
.dot-positive {
    background: #22c55e;
}
.dot-negative {
    background: #ef4444;
}
.dot-neutral {
    background: #aaa;
}

/* preview */
.preview {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: #1e1e1e;
    color: white;
    padding: 8px;
    border-radius: 6px;
    font-size: 11px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s;
    z-index: 20;
    min-width: 180px;
}
.day:hover .preview {
    opacity: 1;
}
.preview-event {
    display: flex;
    gap: 6px;
    margin: 2px 0;
}
.preview-time {
    font-weight: 600;
    min-width: 50px;
}
.preview-positive {
    color: #4ade80;
}
.preview-negative {
    color: #f87171;
}
.preview-neutral {
    color: #ccc;
}
.preview-more {
    margin-top: 4px;
    opacity: 0.7;
    font-size: 10px;
}

/* модальное окно */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.modal {
    background: var(--vp-c-bg);
    padding: 20px;
    border-radius: 12px;
    width: 320px;
    max-height: 70vh;
    overflow: auto;
}
.modal-header {
    font-weight: 600;
    margin-bottom: 12px;
    font-size: 16px;
}
.modal-events {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.modal-event {
    display: flex;
    gap: 10px;
    padding: 6px 8px;
    border-radius: 6px;
    background: var(--vp-c-bg-soft);
}
.event-time {
    font-weight: 600;
    min-width: 60px;
}
.event-positive {
    border-left: 4px solid #22c55e;
}
.event-negative {
    border-left: 4px solid #ef4444;
}
.event-neutral {
    border-left: 4px solid #999;
}
.modal-close {
    margin-top: 12px;
    width: 100%;
    padding: 6px;
    border-radius: 6px;
    border: none;
    background: #646cff;
    color: white;
    cursor: pointer;
}

/* адаптив */
@media (max-width: 1200px) {
    .calendar {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 700px) {
    .calendar {
        grid-template-columns: 1fr;
    }
    .preview {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        white-space: normal;
    }
}
@media (max-width: 600px) {
    .modal {
        width: 92%;
        padding: 16px;
    }
}
</style>

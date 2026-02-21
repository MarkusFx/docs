---
layout: home
---

# Возможные переводы курсов

<script setup>
const categories = [
    {
        name: 'Angular',
        iconKey: 'angular',
        courses: [
            { title: 'Angular - The Complete Guide', author: 'Maximilian Schwarzmüller', duration: '53:00' },
            { title: 'Angular (Full App) with Angular Material, Angularfire & NgRx', author: 'Maximilian Schwarzmüller', duration: '11:00' },
            { title: 'Complete Angular Course - Master Angular in only 6 days', author: 'Jannick Leismann', duration: '09:30' },
        ],
    },
    {
        name: 'C#',
        iconKey: 'csharp',
        courses: [
            { title: 'Complete C# Masterclass', author: 'Denis Panjuta', duration: '46:00', comment: 'будет переделываться на новую озвучку' },
        ],
    },
    {
        name: 'Dart, Flutter',
        iconKey: 'dart',
        courses: [
            { title: 'Flutter & Dart - The Complete Guide', author: 'Maximilian Schwarzmüller', duration: '30:00' },
        ],
    },
    {
        name: 'Django',
        iconKey: 'python',
        courses: [
            { title: 'Python Django - The Practical Guide', author: 'Maximilian Schwarzmüller', duration: '23:00' },
        ],
    },
    {
        name: 'Express.js',
        iconKey: 'express',
        courses: [
            { title: 'Just Express (with a bunch of node and http). In detail', author: 'Robert Bunch', duration: '15:00' },
        ],
    },
    {
        name: 'Java',
        iconKey: 'java',
        courses: [
            { title: '60 Days of Java: The Complete Java Masterclass', author: 'Denis Panjuta', duration: '58:00' },
        ],
    },
    {
        name: 'Kotlin',
        iconKey: 'kotlin',
        courses: [
            { title: 'The Complete Android 14 & Kotlin Development Masterclass', author: 'Denis Panjuta', duration: '66:00' },
        ],
    },
    {
        name: 'MongoDB',
        iconKey: 'mongo',
        courses: [
            { title: 'MongoDB - The Complete Developer\'s Guide', author: 'Maximilian Schwarzmüller', duration: '17:00' },
        ],
    },
    {
        name: 'NGINX',
        iconKey: 'nginx',
        courses: [
            { title: 'Introduction to NGINX', author: 'Hussein Nasser', duration: '07:20' },
        ],
    },
    {
        name: 'Nuxt.js',
        iconKey: 'nuxt',
        courses: [
            { title: 'Master Nuxt 3 - Full-Stack Complete Guide', author: 'Piotr Jura', duration: '15:30' },
        ],
    },
    {
        name: 'OS',
        iconKey: 'os',
        courses: [
            { title: 'Fundamentals of Operating Systems', author: 'Hussein Nasser', duration: '21:40', comment: 'будет переделываться на новую озвучку' },
        ],
    },
    {
        name: 'React Native',
        iconKey: 'react',
        courses: [
            { title: 'React Native - The Practical Guide', author: 'Maximilian Schwarzmüller', duration: '28:00' },
        ],
    },
    {
        name: 'Unity',
        iconKey: 'unity',
        courses: [
            { title: 'Complete C# Unity Developer: Create Games and Learn to Code', author: 'Denis Panjuta', duration: '22:30' },
        ],
    },
    {
        name: 'WebRTC',
        iconKey: 'webrtc',
        courses: [
            { title: 'Discord Clone - Learn MERN Stack with WebRTC and SocketIO', author: 'Marek Gryszkiewicz', duration: '19:30' },
        ],
    },
]
</script>

<CourseCards :categories="categories" />

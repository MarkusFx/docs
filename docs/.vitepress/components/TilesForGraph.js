import htmxLogo from '/logos/htmx-logo.svg?raw'
import gsapLogo from '/logos/gsap-logo-001.svg?raw'
import cssLogo from '/logos/css-logo.svg?raw'
import htmlLogo from '/logos/html5-logo.svg?raw'
import javascriptLogo from '/logos/javascript-logo.svg?raw'
import typescriptLogo from '/logos/typescript-logo.svg?raw'
import reactLogo from '/logos/react-logo.svg?raw'
import socketioLogo from '/logos/socketio-logo.svg?raw'
import nextjsLogo from '/logos/nextjs-logo.svg?raw'
import reactnativeLogo from '/logos/react-native-logo.svg?raw'
import jestLogo from '/logos/jest-logo-002.svg?raw'
import vitestLogo from '/logos/vitest-logo.svg?raw'
import cypressLogo from '/logos/cypress-logo.svg?raw'
import sassLogo from '/logos/sass-logo.svg?raw'
import scssLogo from '/logos/scss-logo.svg?raw'
import lessLogo from '/logos/less-logo.svg?raw'
import nodejsLogo from '/logos/nodejs-logo.svg?raw'
import expressLogo from '/logos/express-logo.svg?raw'
import nestjsLogo from '/logos/nestjs-logo.svg?raw'
import threejsLogo from '/logos/threejs-logo.svg?raw'
import vuejsLogo from '/logos/vuejs-logo.svg?raw'
import nuxtjsLogo from '/logos/nuxtjs-logo.svg?raw'
import electronLogo from '/logos/electron-logo.svg?raw'
import angularjsLogo from '/logos/angularjs-logo.svg?raw'
import webrtcLogo from '/logos/webrtc-logo.svg?raw'
import mediaSoupLogo from '/logos/mediaSoup-logo.svg?raw'
import pythonLogo from '/logos/python-logo.svg?raw'
import djangoLogo from '/logos/django-logo.svg?raw'
import flaskLogo from '/logos/flask-logo.svg?raw'
import nginxLogo from '/logos/nginx-logo.svg?raw'
import linuxLogo from '/logos/linux-logo-002.svg?raw'
import dockerLogo from '/logos/docker-logo.svg?raw'
import kubernetesLogo from '/logos/kubernetes-logo.svg?raw'
import gitLogo from '/logos/git-logo.svg?raw'
import githubLogo from '/logos/github-logo.svg?raw'
import githubActionsLogo from '/logos/githubActions-logo.svg?raw'
import catLogo from '/logos/cat-logo.svg?raw'
import sqlLogo from '/logos/sql-logo.svg?raw'
import postgresqlLogo from '/logos/postgresql-logo-002.svg?raw'
import mongodbLogo from '/logos/mongodb-logo.svg?raw'
import pyQtLogo from '/logos/pyqt-logo.svg?raw'
import phpLogo from '/logos/php-logo.svg?raw'
import laravelLogo from '/logos/laravel-logo.svg?raw'
import rustLogo from '/logos/rust-logo.svg?raw'
import goLogo from '/logos/go-logo.svg?raw'
import javaLogo from '/logos/java-logo-002.svg?raw'
import kotlinLogo from '/logos/kotlin-logo.svg?raw'
import cSharpLogo from '/logos/cSharp-logo.svg?raw'
import n8nLogo from '/logos/n8n-logo.svg?raw'
import figmaLogo from '/logos/figma-logo.svg?raw'
import excelVbaLogo from '/logos/excelVba-logo.svg?raw'
import oneCLogo from '/logos/1c-logo.svg?raw'
import blenderLogo from '/logos/blender-logo.svg?raw'
import godotLogo from '/logos/godot-logo.svg?raw'
import unityLogo from '/logos/unity-logo.svg?raw'
import r3fLogo from '/logos/r3f-logo.svg?raw'
import osLogo from '/logos/os-logo.svg?raw'
import aiLogo from '/logos/ai-logo.svg?raw'

const COLORS = {
    text: 'rgba(255,255,255,0.9)',
    iconFilter: 'drop-shadow(1px 1px 1px #22222244)',
    red: '#bd504d',
    orange: '#e07405',
    yellow: '#ffa600',
    green: '#3bccb3',
    blue: '#4593e5',
    purple: '#985de0',
    silver: '#666',
}

const makeCard = (title, icon, colorKey, link = null) => ({
    title,
    icon,
    link,
    color: COLORS.text,
    gradient: `linear-gradient(225deg, ${COLORS[colorKey]} 0%, ${COLORS[colorKey]} 100%)`,
    iconFilter: COLORS.iconFilter,
})

// Единый источник данных для всех карточек
const cardsData = [
    // === Центральный ствол ===
    { id: 'cat', title: 'MarkusFx', icon: catLogo, color: 'red', link: '/' },

    // === Frontend: база ===
    { id: 'html', title: 'HTML', icon: htmlLogo, color: 'silver' },
    { id: 'css', title: 'CSS', icon: cssLogo, color: 'silver' },
    { id: 'javascript', title: 'JavaScript', icon: javascriptLogo, color: 'silver' },
    { id: 'typescript', title: 'TypeScript', icon: typescriptLogo, color: 'silver' },

    // === Frontend: фреймворки ===
    { id: 'react', title: 'React', icon: reactLogo, color: 'blue', link: '/courses/react/jonas-schmedtmann' },
    { id: 'nextjs', title: 'Next.js', icon: nextjsLogo, color: 'blue', link: '/courses/next-js/john-smilga' },
    { id: 'reactNative', title: 'React Native', icon: reactnativeLogo, color: 'blue', link: '/courses/react-native/maximilian-schwarzmuller' },
    { id: 'vuejs', title: 'Vue.js', icon: vuejsLogo, color: 'green', link: '/courses/vue/maximilian-schwarzmuller' },
    { id: 'nuxtjs', title: 'Nuxt.js', icon: nuxtjsLogo, color: 'silver' },
    { id: 'angularjs', title: 'AngularJS', icon: angularjsLogo, color: 'silver' },
    { id: 'electron', title: 'Electron', icon: electronLogo, color: 'silver' },

    // === Frontend: стили ===
    { id: 'sass', title: 'SASS', icon: sassLogo, color: 'silver' },
    { id: 'scss', title: 'SCSS', icon: scssLogo, color: 'silver' },
    { id: 'less', title: 'LESS', icon: lessLogo, color: 'silver' },

    // === Frontend: тестирование ===
    { id: 'jest', title: 'Jest', icon: jestLogo, color: 'purple', link: '/courses/jest/stephen-grider' },
    { id: 'vitest', title: 'Vitest', icon: vitestLogo, color: 'yellow', link: '/courses/vitest/maximilian-schwarzmuller' },
    { id: 'cypress', title: 'Cypress', icon: cypressLogo, color: 'green', link: '/courses/cypress/maximilian-schwarzmuller' },

    // === Frontend: анимации / 3D ===
    { id: 'gsap', title: 'GSAP', icon: gsapLogo, color: 'green', link: '/courses/gsap/carl-creative-coding-club' },
    { id: 'htmx', title: 'HTMX', icon: htmxLogo, color: 'blue', link: '/courses/htmx/maximilian-schwarzmuller' },
    { id: 'socketio', title: 'Socket.IO', icon: socketioLogo, color: 'yellow', link: '/courses/socketio/robert-bunch' },
    { id: 'threejs', title: 'Three.js', icon: threejsLogo, color: 'blue', link: '/courses/three-js/bruno-simong' },
    { id: 'r3f', title: 'React Three Fiber', icon: r3fLogo, color: 'blue', link: '/courses/r3f/wawa_sensei' },
    { id: 'webrtc', title: 'WebRTC', icon: webrtcLogo, color: 'green', link: '/courses/webrtc/robert-bunch' },
    { id: 'mediaSoup', title: 'MediaSoup', icon: mediaSoupLogo, color: 'silver' },

    // === Backend ===
    { id: 'nodejs', title: 'Node.js', icon: nodejsLogo, color: 'green', link: '/courses/node-js/maximilian-schwarzmuller' },
    { id: 'express', title: 'Express', icon: expressLogo, color: 'green', link: '/courses/express/jonas-schmedtmann' },
    { id: 'nestjs', title: 'NestJS', icon: nestjsLogo, color: 'silver' },
    { id: 'python', title: 'Python', icon: pythonLogo, color: 'silver' },
    { id: 'django', title: 'Django', icon: djangoLogo, color: 'silver' },
    { id: 'flask', title: 'Flask', icon: flaskLogo, color: 'silver' },
    { id: 'php', title: 'PHP', icon: phpLogo, color: 'silver' },
    { id: 'laravel', title: 'Laravel', icon: laravelLogo, color: 'silver' },
    { id: 'go', title: 'Go', icon: goLogo, color: 'blue', link: '/courses/go/maximilian-schwarzmuller' },
    { id: 'rust', title: 'Rust', icon: rustLogo, color: 'orange', link: '/courses/rust/stephen-grider' },
    { id: 'java', title: 'Java', icon: javaLogo, color: 'silver' },
    { id: 'kotlin', title: 'Kotlin', icon: kotlinLogo, color: 'silver' },
    { id: 'cSharp', title: 'C#', icon: cSharpLogo, color: 'purple', link: '/courses/c-sharp/denis-panjuta' },

    // === DevOps / Инфра ===
    { id: 'linux', title: 'Linux', icon: linuxLogo, color: 'yellow', link: '/courses/linux/colt-steele' },
    { id: 'nginx', title: 'NGINX', icon: nginxLogo, color: 'silver' },
    { id: 'docker', title: 'Docker', icon: dockerLogo, color: 'silver' },
    { id: 'kubernetes', title: 'Kubernetes', icon: kubernetesLogo, color: 'silver' },
    { id: 'git', title: 'Git', icon: gitLogo, color: 'orange', link: '/courses/git/maximilian-schwarzmuller' },
    { id: 'github', title: 'GitHub', icon: githubLogo, color: 'silver' },
    { id: 'githubActions', title: 'GitHub Actions', icon: githubActionsLogo, color: 'silver' },

    // === Базы данных ===
    { id: 'sql', title: 'SQL', icon: sqlLogo, color: 'silver' },
    { id: 'postgresql', title: 'PostgreSQL', icon: postgresqlLogo, color: 'silver' },
    { id: 'mongodb', title: 'MongoDB', icon: mongodbLogo, color: 'silver' },

    // === Прочее ===
    { id: 'pyQt', title: 'PyQt', icon: pyQtLogo, color: 'silver' },
    { id: 'n8n', title: 'n8n', icon: n8nLogo, color: 'silver' },
    { id: 'figma', title: 'Figma', icon: figmaLogo, color: 'silver' },
    { id: 'excelVba', title: 'Excel VBA', icon: excelVbaLogo, color: 'silver' },
    { id: 'oneC', title: '1C', icon: oneCLogo, color: 'silver' },
    { id: 'blender', title: 'Blender', icon: blenderLogo, color: 'silver' },
    { id: 'godot', title: 'Godot', icon: godotLogo, color: 'blue', link: '/courses/godot/richard-allbert' },
    { id: 'unity', title: 'Unity', icon: unityLogo, color: 'silver' },
    { id: 'os', title: 'OS', icon: osLogo, color: 'red', link: '/courses/os/hussein-nasser' },
    { id: 'ai', title: 'AI', icon: aiLogo, color: 'purple', link: '/courses/ai/maximilian-schwarzmuller' },
]

// Генерируем экспорты автоматически
export const allCards = Object.fromEntries(
    cardsData.map((c) => [c.id + 'Card', [makeCard(c.title, c.icon, c.color, c.link)]])
)

// Экспорты по имени для обратной совместимости с import'ами
export const {
    catCard,
    htmlCard,
    cssCard,
    javascriptCard,
    typescriptCard,
    reactCard,
    nextjsCard,
    reactNativeCard,
    vuejsCard,
    nuxtjsCard,
    angularjsCard,
    electronCard,
    sassCard,
    scssCard,
    lessCard,
    jestCard,
    vitestCard,
    cypressCard,
    gsapCard,
    htmxCard,
    socketioCard,
    threejsCard,
    r3fCard,
    webrtcCard,
    mediaSoupCard,
    nodejsCard,
    expressCard,
    nestjsCard,
    pythonCard,
    djangoCard,
    flaskCard,
    phpCard,
    laravelCard,
    goCard,
    rustCard,
    javaCard,
    kotlinCard,
    cSharpCard,
    linuxCard,
    nginxCard,
    dockerCard,
    kubernetesCard,
    gitCard,
    githubCard,
    githubActionsCard,
    sqlCard,
    postgresqlCard,
    mongodbCard,
    pyQtCard,
    n8nCard,
    figmaCard,
    excelVbaCard,
    oneCCard,
    blenderCard,
    godotCard,
    unityCard,
    osCard,
    aiCard,
} = allCards

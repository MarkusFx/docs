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

const Colors = {
    text: 'rgba(255,255,255,0.9)',
    iconFilter: 'drop-shadow(1px 1px 1px #22222244)',
}

const Gradients = {
    red: 'linear-gradient(225deg, #bd504d 0%, #bd504d 0%)',
    orange: 'linear-gradient(225deg, #e07405 0%, #e07405 0%)',
    yellow: 'linear-gradient(225deg, #f56217 0%, #ffa600 0%)',
    green: 'linear-gradient(225deg, #f56217 0%, #3bccb3 0%)',
    blue: 'linear-gradient(225deg, #4593e5 0%, #4593e5 0%)',
    purple: 'linear-gradient(225deg, #985de0 0%, #985de0 0%)',
    silver: 'linear-gradient(225deg, #985de0 0%, #666 0%)',
}

const makeCard = (title, icon, gradientKey, link = null) => ({
    title,
    icon,
    link,
    color: Colors.text,
    gradient: Gradients[gradientKey],
    iconFilter: Colors.iconFilter,
})

export const catCard = [makeCard('MarkusFx', catLogo, 'red', '/')]

export const htmxCard = [
    makeCard(
        'HTMX',
        htmxLogo,
        'blue',
        '/courses/htmx/maximilian-schwarzmuller',
    ),
]
export const cypressCard = [
    makeCard(
        'Cypress',
        cypressLogo,
        'green',
        '/courses/cypress/maximilian-schwarzmuller',
    ),
]
export const osCard = [
    makeCard('OS', osLogo, 'red', '/courses/os/hussein-nasser'),
]
export const goCard = [
    makeCard('Go', goLogo, 'blue', '/courses/go/maximilian-schwarzmuller'),
]
export const linuxCard = [
    makeCard('Linux', linuxLogo, 'yellow', '/courses/linux/colt-steele'),
]
export const socketioCard = [
    makeCard(
        'Socket.IO',
        socketioLogo,
        'yellow',
        '/courses/socketio/robert-bunch',
    ),
]
export const webrtcCard = [
    makeCard('WebRTC', webrtcLogo, 'green', '/courses/webrtc/robert-bunch'),
]
export const cSharpCard = [
    makeCard('C#', cSharpLogo, 'purple', '/courses/c-sharp/denis-panjuta'),
]
export const threejsCard = [
    makeCard('Three.js', threejsLogo, 'blue', '/courses/three-js/bruno-simong'),
]
export const rustCard = [
    makeCard('Rust', rustLogo, 'orange', '/courses/rust/stephen-grider'),
]
export const gsapCard = [
    makeCard(
        'GSAP',
        gsapLogo,
        'green',
        '/courses/gsap/carl-creative-coding-club',
    ),
]
export const expressCard = [
    makeCard(
        'Express',
        expressLogo,
        'green',
        '/courses/express/jonas-schmedtmann',
    ),
]
export const vitestCard = [
    makeCard(
        'Vitest',
        vitestLogo,
        'yellow',
        '/courses/vitest/maximilian-schwarzmuller',
    ),
]
export const r3fCard = [
    makeCard('React Three Fiber', r3fLogo, 'blue', '/courses/r3f/wawa_sensei'),
]
export const reactCard = [
    makeCard('React', reactLogo, 'blue', '/courses/react/jonas-schmedtmann'),
]
export const vuejsCard = [
    makeCard(
        'Vue.js',
        vuejsLogo,
        'green',
        '/courses/vue/maximilian-schwarzmuller',
    ),
]

// export const cssCard = [makeCard('CSS', cssLogo, 'blue')]
// export const htmlCard = [makeCard('HTML', htmlLogo, 'orange')]
// export const javascriptCard = [makeCard('JavaScript', javascriptLogo, 'orange')]
// export const typescriptCard = [makeCard('TypeScript', typescriptLogo, 'blue')]
// export const nextjsCard = [makeCard('Next.js', nextjsLogo, 'blue')]
// export const reactNativeCard = [
//     makeCard('React Native', reactnativeLogo, 'blue'),
// ]
// export const jestCard = [makeCard('Jest', jestLogo, 'purple')]
// export const sassCard = [makeCard('SASS', sassLogo, 'purple')]
// export const scssCard = [makeCard('SCSS', scssLogo, 'purple')]
// export const lessCard = [makeCard('LESS', lessLogo, 'blue')]
// export const nodejsCard = [makeCard('Node.js', nodejsLogo, 'green')]
// export const nestjsCard = [makeCard('NestJS', nestjsLogo, 'red')]
// export const nuxtjsCard = [makeCard('Nuxt.js', nuxtjsLogo, 'green')]
// export const electronCard = [makeCard('Electron', electronLogo, 'blue')]
// export const angularjsCard = [makeCard('AngularJS', angularjsLogo, 'red')]
// export const mediaSoupCard = [makeCard('MediaSoup', mediaSoupLogo, 'blue')]
// export const pythonCard = [makeCard('Python', pythonLogo, 'blue')]
// export const djangoCard = [makeCard('Django', djangoLogo, 'green')]
// export const flaskCard = [makeCard('Flask', flaskLogo, 'blue')]
// export const nginxCard = [makeCard('NGINX', nginxLogo, 'green')]
// export const dockerCard = [makeCard('Docker', dockerLogo, 'blue')]
// export const kubernetesCard = [makeCard('Kubernetes', kubernetesLogo, 'blue')]
// export const gitCard = [makeCard('Git', gitLogo, 'orange')]
// export const githubCard = [makeCard('GitHub', githubLogo, 'blue')]
// export const githubActionsCard = [
//     makeCard('GitHub Actions', githubActionsLogo, 'blue'),
// ]
// export const sqlCard = [makeCard('SQL', sqlLogo, 'blue')]
// export const postgresqlCard = [makeCard('PostgreSQL', postgresqlLogo, 'blue')]
// export const mongodbCard = [makeCard('MongoDB', mongodbLogo, 'green')]
// export const pyQtCard = [makeCard('PyQt', pyQtLogo, 'green')]
// export const phpCard = [makeCard('PHP', phpLogo, 'blue')]
// export const laravelCard = [makeCard('Laravel', laravelLogo, 'red')]
// export const javaCard = [makeCard('Java', javaLogo, 'orange')]
// export const kotlinCard = [makeCard('Kotlin', kotlinLogo, 'purple')]
// export const n8nCard = [makeCard('n8n', n8nLogo, 'purple')]
// export const figmaCard = [makeCard('Figma', figmaLogo, 'blue')]
// export const excelVbaCard = [makeCard('Excel VBA', excelVbaLogo, 'green')]
// export const oneCCard = [makeCard('1С', oneCLogo, 'red')]
// export const blenderCard = [makeCard('Blender', blenderLogo, 'orange')]
// export const godotCard = [makeCard('Godot', godotLogo, 'blue')]
// export const unityCard = [makeCard('Unity', unityLogo, 'blue')]

export const cssCard = [makeCard('CSS', cssLogo, 'silver')]
export const htmlCard = [makeCard('HTML', htmlLogo, 'silver')]
export const javascriptCard = [makeCard('JavaScript', javascriptLogo, 'silver')]
export const typescriptCard = [makeCard('TypeScript', typescriptLogo, 'silver')]
export const nextjsCard = [makeCard('Next.js', nextjsLogo, 'silver')]
export const reactNativeCard = [
    makeCard('React Native', reactnativeLogo, 'silver'),
]
export const jestCard = [makeCard('Jest', jestLogo, 'silver')]
export const sassCard = [makeCard('SASS', sassLogo, 'silver')]
export const scssCard = [makeCard('SCSS', scssLogo, 'silver')]
export const lessCard = [makeCard('LESS', lessLogo, 'silver')]
export const nodejsCard = [makeCard('Node.js', nodejsLogo, 'silver')]
export const nestjsCard = [makeCard('NestJS', nestjsLogo, 'silver')]
export const nuxtjsCard = [makeCard('Nuxt.js', nuxtjsLogo, 'silver')]
export const electronCard = [makeCard('Electron', electronLogo, 'silver')]
export const angularjsCard = [makeCard('AngularJS', angularjsLogo, 'silver')]
export const mediaSoupCard = [makeCard('MediaSoup', mediaSoupLogo, 'silver')]
export const pythonCard = [makeCard('Python', pythonLogo, 'silver')]
export const djangoCard = [makeCard('Django', djangoLogo, 'silver')]
export const flaskCard = [makeCard('Flask', flaskLogo, 'silver')]
export const nginxCard = [makeCard('NGINX', nginxLogo, 'silver')]
export const dockerCard = [makeCard('Docker', dockerLogo, 'silver')]
export const kubernetesCard = [makeCard('Kubernetes', kubernetesLogo, 'silver')]
export const gitCard = [makeCard('Git', gitLogo, 'silver')]
export const githubCard = [makeCard('GitHub', githubLogo, 'silver')]
export const githubActionsCard = [
    makeCard('GitHub Actions', githubActionsLogo, 'silver'),
]
export const sqlCard = [makeCard('SQL', sqlLogo, 'silver')]
export const postgresqlCard = [makeCard('PostgreSQL', postgresqlLogo, 'silver')]
export const mongodbCard = [makeCard('MongoDB', mongodbLogo, 'silver')]
export const pyQtCard = [makeCard('PyQt', pyQtLogo, 'silver')]
export const phpCard = [makeCard('PHP', phpLogo, 'silver')]
export const laravelCard = [makeCard('Laravel', laravelLogo, 'silver')]
export const javaCard = [makeCard('Java', javaLogo, 'silver')]
export const kotlinCard = [makeCard('Kotlin', kotlinLogo, 'silver')]
export const n8nCard = [makeCard('n8n', n8nLogo, 'silver')]
export const figmaCard = [makeCard('Figma', figmaLogo, 'silver')]
export const excelVbaCard = [makeCard('Excel VBA', excelVbaLogo, 'silver')]
export const oneCCard = [makeCard('1С', oneCLogo, 'silver')]
export const blenderCard = [makeCard('Blender', blenderLogo, 'silver')]
export const godotCard = [makeCard('Godot', godotLogo, 'silver')]
export const unityCard = [makeCard('Unity', unityLogo, 'silver')]

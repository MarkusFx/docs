import htmlIcon from '/logos/html5-logo.svg?raw'
import viteLogo from '/logos/vite-logo.svg?raw'
import jestLogo from '/logos/jest-logo-002.svg?raw'
import onecLogo from '/logos/1c-logo.svg?raw'
import rutubeLogo from '/logos/rutube-logo-002.svg?raw'
import telegramLogo from '/logos/telegram-logo-002.svg?raw'
import vkLogo from '/logos/vk-logo.svg?raw'
import daLogo from '/logos/da-logo.svg?raw'
import boostyLogo from '/logos/boosty-logo.svg?raw'
import cssLogo from '/logos/css-logo.svg?raw'
import javascriptLogo from '/logos/javascript-logo.svg?raw'
import swaggerLogo from '/logos/swagger-logo.svg?raw'
import socketioLogo from '/logos/socketio-logo.svg?raw'
import pythonLogo from '/logos/python-logo.svg?raw'
import catLogo from '/logos/cat-logo.svg?raw'
import cypressLogo from '/logos/cypress-logo.svg?raw'
import htmxLogo from '/logos/htmx-logo.svg?raw'
import osLogo from '/logos/os-logo.svg?raw'
import goLogo from '/logos/go-logo.svg?raw'

export const gradients = {
    RED: 'linear-gradient(225deg, #bd504d 0%, #bd504d 0%)',
    // ORANGE: 'linear-gradient(225deg, #e89820 0%, #ffa600 0%)',
    ORANGE: 'linear-gradient(45deg, #e07405, #e07405)',
    YELLOW: 'linear-gradient(225deg, #f56217 0%, #ffd200 0%)',
    GREEN: 'linear-gradient(225deg, #f56217 0%, #3bccb3 0%)',
    BLUE: 'linear-gradient(225deg, #4593e5 0%, #4593e5 0%)',
    PURPLE: 'linear-gradient(225deg, #985de0 0%, #985de0 0%)',
    RUTUBE: 'linear-gradient(45deg, #C74343, #C74343)',
    TELEGRAM: 'linear-gradient(45deg, #24A1DE, #24A1DE)',
    VK: 'linear-gradient(45deg, #0077FF, #0077FF)',
    DONATION_ALERTS: 'linear-gradient(45deg, #e07405, #e07405)',
    BOOSTY: 'linear-gradient(45deg, #f15f2c, #f15f2c)',
}

const commonIconFilter = 'drop-shadow(1px 1px 1px #22222244)'
const commonColor = 'rgba(255,255,255,0.9)'

export const upcoming_courses = [
    {
        title: 'Предстоящие курсы',
        icon: catLogo,
        link: '/upcoming_courses',
        color: commonColor,
        gradient: gradients.RED,
        iconFilter: commonIconFilter,
    },
]

export const courses = [
    {
        title: 'Cypress',
        icon: cypressLogo,
        link: '/courses/cypress/maximilian-schwarzmuller',
        color: commonColor,
        gradient: gradients.GREEN,
        iconFilter: commonIconFilter,
    },
    {
        title: 'HTMX',
        icon: htmxLogo,
        link: '/courses/htmx/maximilian-schwarzmuller',
        color: commonColor,
        gradient: gradients.BLUE,
        iconFilter: commonIconFilter,
    },
    {
        title: 'OS',
        icon: osLogo,
        link: '/courses/os/hussein-nasser',
        color: commonColor,
        gradient: gradients.RED,
        iconFilter: commonIconFilter,
    },
    {
        title: 'Go',
        icon: goLogo,
        link: '/courses/go/maximilian-schwarzmuller',
        color: commonColor,
        gradient: gradients.BLUE,
        iconFilter: commonIconFilter,
    },
]

export const notes = [
    {
        title: 'HTML',
        icon: htmlIcon,
        link: '/html/page_001',
        color: commonColor,
        gradient: gradients.ORANGE,
        iconFilter: commonIconFilter,
    },
    {
        title: 'CSS',
        icon: cssLogo,
        link: '/css/page_001',
        color: commonColor,
        gradient: gradients.BLUE,
        iconFilter: commonIconFilter,
    },
    {
        title: 'Jest',
        icon: jestLogo,
        link: '/jest/page_001',
        color: commonColor,
        gradient: gradients.RED,
        iconFilter: commonIconFilter,
    },
    {
        title: 'VitePress',
        icon: viteLogo,
        link: '/vitepress/page_001',
        color: commonColor,
        gradient: gradients.PURPLE,
        iconFilter: commonIconFilter,
    },
    {
        title: '1С',
        icon: onecLogo,
        link: '/1c/page_001',
        color: commonColor,
        gradient: gradients.RED,
        iconFilter: commonIconFilter,
    },
]

export const rutube_tiles = [
    {
        title: 'RuTube',
        icon: rutubeLogo,
        link: 'https://rutube.ru/channel/24742327/',
        target: '_blank',
        color: commonColor,
        gradient: gradients.RUTUBE,
        iconFilter: commonIconFilter,
    },
]

export const telegram_tiles = [
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Основной канал',
        link: 'https://t.me/markusfx_itpit',
        target: '_blank',
        color: commonColor,
        gradient: gradients.TELEGRAM,
        iconFilter: commonIconFilter,
    },
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Life-канал',
        link: 'https://t.me/markusfx_itpit_any',
        target: '_blank',
        color: commonColor,
        gradient: gradients.TELEGRAM,
        iconFilter: commonIconFilter,
    },
]

export const vk_tiles = [
    {
        title: 'VK',
        icon: vkLogo,
        description: 'Основная группа',
        link: 'https://vk.com/markusfx_itpit',
        target: '_blank',
        color: commonColor,
        gradient: gradients.VK,
        iconFilter: commonIconFilter,
    },
]

export const donats_tiles = [
    {
        title: 'Donation Alerts',
        description: 'Только во время стрима',
        icon: daLogo,
        link: 'https://www.donationalerts.com/r/markusfx',
        target: '_blank',
        color: commonColor,
        gradient: gradients.DONATION_ALERTS,
        iconFilter: commonIconFilter,
    },
    {
        title: 'Dalink',
        description: 'В любое время',
        icon: daLogo,
        link: 'https://dalink.to/markusfx',
        target: '_blank',
        color: commonColor,
        gradient: gradients.DONATION_ALERTS,
        iconFilter: commonIconFilter,
    },
    {
        title: 'Boosty',
        description: 'В любое время',
        icon: boostyLogo,
        link: 'https://boosty.to/markusfx',
        target: '_blank',
        color: commonColor,
        gradient: gradients.BOOSTY,
        iconFilter: commonIconFilter,
    },
]

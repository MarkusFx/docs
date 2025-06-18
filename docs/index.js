import htmlIcon from '/logos/html5-logo.svg?raw'
import viteLogo from '/logos/vite-logo.svg?raw'
import jestLogo from '/logos/jest-logo-002.svg?raw'
import onecLogo from '/logos/1c-logo.svg?raw'
import rutubeLogo from '/logos/rutube-logo-002.svg?raw'
import telegramLogo from '/logos/telegram-logo-002.svg?raw'
import vkLogo from '/logos/vk-logo.svg?raw'
import da from '/logos/da-logo.svg?raw'
import boosty from '/logos/boosty-logo.svg?raw'

export const menu_tiles = [
    {
        title: 'HTML',
        icon: htmlIcon,
        link: '/html/page_001',
    },
    {
        title: 'VitePress',
        icon: viteLogo,
        link: '/vitepress/page_001',
    },
    {
        title: 'Jest',
        icon: jestLogo,
        link: '/jest/page_001',
    },
    {
        title: '1С',
        icon: onecLogo,
        link: '/1c/page_001',
    },
]

export const rutube_tiles = [
    {
        title: 'RuTube',
        icon: rutubeLogo,
        link: 'https://rutube.ru/channel/24742327/',
        target: '_blank',
    },
]

export const telegram_tiles = [
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Основной канал',
        link: 'https://t.me/markusfx_itpit',
        target: '_blank',
    },
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Life-канал',
        link: 'https://t.me/markusfx_itpit_any',
        target: '_blank',
    },
]

export const vk_tiles = [
    {
        title: 'VK',
        icon: vkLogo,
        description: 'Основная группа',
        link: 'https://vk.com/markusfx_itpit',
        target: '_blank',
    },
]

export const donats_tiles = [
    {
        title: 'Donation Alerts',
        icon: da,
        link: 'https://www.donationalerts.com/r/markusfx',
        target: '_blank',
    },
    {
        title: 'Boosty',
        icon: boosty,
        link: 'https://boosty.to/markusfx',
        target: '_blank',
    },
]

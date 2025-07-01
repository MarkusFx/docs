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

export const menu_tiles = [
    {
        title: 'HTML',
        icon: htmlIcon,
        link: '/html/page_001',
        color: 'rgba(255,255,255,0.8)',
        // borderGradient:'linear-gradient(90deg, #E65100 30%, var(--vp-c-bg-soft) 70%)',
        gradient: 'linear-gradient(225deg, #c02425 0%, #f09819 0%)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(192,36,37,0.63))',
    },
    {
        title: 'CSS',
        icon: cssLogo,
        link: '/css/page_001',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(225deg, #3962c4 0%, #16bffd 0%)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(57,98,196,0.8))',
    },
    // {
    //     title: 'JavaScript',
    //     icon: javascriptLogo,
    //     link: '/css/javascript',
    //     color: 'rgba(255,255,255,0.8)',
    //     gradient: 'linear-gradient(225deg, #f56217 0%, #ffd200 0%)',
    //     iconFilter: 'drop-shadow(4px 4px 1px rgba(230,81,0,0.7))',
    // },
    {
        title: 'VitePress',
        icon: viteLogo,
        link: '/vitepress/page_001',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(225deg, #5d26c1 0%, #7f00ff 0%)',
        iconFilter: 'drop-shadow(4px 4px 1px #47208f)',
    },
    {
        title: 'Jest',
        icon: jestLogo,
        link: '/jest/page_001',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(225deg, #780206 0%, #a74a57 0%)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(97,0,3,0.7))',
    },
    {
        title: '1С',
        icon: onecLogo,
        link: '/1c/page_001',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(225deg, #810a0d 0%, #c74343 0%)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(94,0,3,0.63))',
    },
]

export const rutube_tiles = [
    {
        title: 'RuTube',
        icon: rutubeLogo,
        link: 'https://rutube.ru/channel/24742327/',
        target: '_blank',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(45deg, #C74343, #C74343)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(94,0,3,0.63))',
    },
]

export const telegram_tiles = [
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Основной канал',
        link: 'https://t.me/markusfx_itpit',
        target: '_blank',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(45deg, #24A1DE, #24A1DE)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(57,98,196,0.8))',
    },
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Life-канал',
        link: 'https://t.me/markusfx_itpit_any',
        target: '_blank',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(45deg, #24A1DE, #24A1DE)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(57,98,196,0.8))',
    },
]

export const vk_tiles = [
    {
        title: 'VK',
        icon: vkLogo,
        description: 'Основная группа',
        link: 'https://vk.com/markusfx_itpit',
        target: '_blank',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(45deg, #0077FF, #0077FF)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(57,98,196,0.9))',
    },
]

export const donats_tiles = [
    {
        title: 'Donation Alerts',
        icon: daLogo,
        link: 'https://www.donationalerts.com/r/markusfx',
        target: '_blank',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(45deg, #e07405, #e07405)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(192,36,37,0.63))',
    },
    {
        title: 'Boosty',
        icon: boostyLogo,
        link: 'https://boosty.to/markusfx',
        target: '_blank',
        color: 'rgba(255,255,255,0.8)',
        gradient: 'linear-gradient(45deg, #f15f2c, #f15f2c)',
        iconFilter: 'drop-shadow(4px 4px 1px rgba(192,36,37,0.63))',
    },
]

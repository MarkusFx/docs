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
        // color: '#DFDFD6FF',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #E65100, #E65100)',
        // borderGradient:'linear-gradient(90deg, #E65100 30%, var(--vp-c-bg-soft) 70%)',
        iconFilter: 'drop-shadow(0px 1px 1px #444444ff)',
    },
    {
        title: 'CSS',
        icon: cssLogo,
        link: '/css/page_001',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #039BE5, #039BE5)',
        // borderGradient: 'linear-gradient(90deg, #039BE5 30%, #9A64FD 70%)',
        iconFilter: 'drop-shadow(0px 1px 1px #444444ff)',
    },
    // {
    //     title: 'JavaScript',
    //     icon: javascriptLogo,
    //     link: '/css/javascript',
    //     color: '#EEE',
    //     gradient: 'linear-gradient(45deg, #F7DF1E, #F7DF1E)',
    //     // iconFilter: 'drop-shadow(4px 4px 2px #E65100AA)',
    // },
    {
        title: 'VitePress',
        icon: viteLogo,
        link: '/vitepress/page_001',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #9A64FD, #9A64FD)',
        iconFilter: 'drop-shadow(0px 1px 1px #444444ff)',
    },
    {
        title: 'Jest',
        icon: jestLogo,
        link: '/jest/page_001',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #A74A57, #A74A57)',
        iconFilter: 'drop-shadow(0px 1px 1px #444444ff)',
    },
    {
        title: '1С',
        icon: onecLogo,
        link: '/1c/page_001',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #C74343, #C74343)',
        iconFilter: 'drop-shadow(0px 1px 1px #444444ff)',
    },
]

export const new_menu_tiles = [
    {
        title: 'HTML',
        icon: htmlIcon,
        link: '/html/page_001',
        color: '#EEE',
        // borderGradient:'linear-gradient(90deg, #E65100 30%, var(--vp-c-bg-soft) 70%)',
        gradient: 'linear-gradient(45deg, #F09819 40%, #e73827)',
        iconFilter: 'drop-shadow(4px 4px 2px #e73827)',
    },
    {
        title: 'CSS',
        icon: cssLogo,
        link: '/css/page_001',
        color: '#EEE',
        // borderGradient: 'linear-gradient(90deg, #039BE5 30%, #9A64FD 70%)',
        gradient: 'linear-gradient(45deg, #16BFFD 40%, #2948ffaa)',
        iconFilter: 'drop-shadow(4px 4px 2px #2948ffaa)',
    },
    {
        title: 'JavaScript',
        icon: javascriptLogo,
        link: '/css/javascript',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #F7DF1E 20%, #E65100AA)',
        iconFilter: 'drop-shadow(4px 4px 2px #E65100AA)',
    },
    {
        title: 'VitePress',
        icon: viteLogo,
        link: '/vitepress/page_001',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #00dbde, #fc00ffAA)',
        iconFilter: 'drop-shadow(4px 4px 2px #fc00ffAA)',
    },
    {
        title: 'Jest',
        icon: jestLogo,
        link: '/jest/page_001',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #A74A57 40%, #780206aa)',
        iconFilter: 'drop-shadow(4px 4px 2px #780206aa)',
    },
    {
        title: '1С',
        icon: onecLogo,
        link: '/1c/page_001',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #C74343 40%, #780206aa)',
        iconFilter: 'drop-shadow(4px 4px 2px #780206aa)',
    },
]

export const rutube_tiles = [
    {
        title: 'RuTube',
        icon: rutubeLogo,
        link: 'https://rutube.ru/channel/24742327/',
        target: '_blank',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #C74343, #C74343)',
    },
]

export const telegram_tiles = [
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Основной канал',
        link: 'https://t.me/markusfx_itpit',
        target: '_blank',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #24A1DE, #24A1DE)',
    },
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Life-канал',
        link: 'https://t.me/markusfx_itpit_any',
        target: '_blank',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #24A1DE, #24A1DE)',
    },
]

export const vk_tiles = [
    {
        title: 'VK',
        icon: vkLogo,
        description: 'Основная группа',
        link: 'https://vk.com/markusfx_itpit',
        target: '_blank',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #0077FF, #0077FF)',
    },
]

export const donats_tiles = [
    {
        title: 'Donation Alerts',
        icon: daLogo,
        link: 'https://www.donationalerts.com/r/markusfx',
        target: '_blank',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #e07405, #e07405)',
    },
    {
        title: 'Boosty',
        icon: boostyLogo,
        link: 'https://boosty.to/markusfx',
        target: '_blank',
        color: '#EEE',
        gradient: 'linear-gradient(45deg, #f15f2c, #f15f2c)',
    },
]

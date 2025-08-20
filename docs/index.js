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

export const courses = [
    {
        title: 'Socket.IO',
        icon: socketioLogo,
        link: '/socketio/courses/robert_bunch',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(225deg, #f56217 0%, #ffd200 0%)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(215,100,0,1.0)',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
]

export const notes = [
    // {
    //     title: 'Python',
    //     icon: pythonLogo,
    //     link: '/python/page_001',
    //     color: 'rgba(255,255,255,0.9)',
    //     // borderGradient: 'linear-gradient(225deg, #c02425 0%, #f09819 0%)',
    //     gradient: 'linear-gradient(225deg, #e89820 0%, #4593e5 0%)',
    //     // iconFilter: 'drop-shadow(0px 0px 10px rgba(192,36,37,0.7))',
    //     iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    // },
    {
        title: 'HTML',
        icon: htmlIcon,
        link: '/html/page_001',
        color: 'rgba(255,255,255,0.9)',
        // borderGradient: 'linear-gradient(225deg, #c02425 0%, #f09819 0%)',
        gradient: 'linear-gradient(225deg, #e89820 0%, #ffa600 0%)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(192,36,37,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
    {
        title: 'CSS',
        icon: cssLogo,
        link: '/css/page_001',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(225deg, #4593e5 0%, #4593e5 0%)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(57,98,196,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
    // {
    //     title: 'JavaScript',
    //     icon: javascriptLogo,
    //     link: '/css/javascript',
    //     color: 'rgba(255,255,255,0.9)',
    //     gradient: 'linear-gradient(225deg, #f56217 0%, #ffd200 0%)',
    //     // iconFilter: 'drop-shadow(0px 0px 10px rgba(220,130,10,1.0))',
    //     iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    // },
    {
        title: 'Jest',
        icon: jestLogo,
        link: '/jest/page_001',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(225deg, #bd504d 0%, #bd504d 0%)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(97,0,3,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
    {
        title: 'VitePress',
        icon: viteLogo,
        link: '/vitepress/page_001',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(225deg, #985de0 0%, #985de0 0%)',
        // iconFilter: 'drop-shadow(0px 0px 10px #47208f)',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
    // {
    //     title: 'Swagger',
    //     icon: swaggerLogo,
    //     link: '/swagger/page_001',
    //     color: 'rgba(255,255,255,0.9)',
    //     gradient: 'linear-gradient(225deg, #3bccb3 0%, #3bccb3 0%)',
    //     // iconFilter: 'drop-shadow(0px 0px 20px #008449)',
    //     iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    // },
    // {
    //     title: 'Socket.IO',
    //     icon: socketioLogo,
    //     link: '/socketio/page_001',
    //     color: 'rgba(255,255,255,0.9)',
    //     gradient: 'linear-gradient(225deg, #f56217 0%, #ffd200 0%)',
    //     // iconFilter: 'drop-shadow(0px 0px 10px rgba(215,100,0,1.0)',
    //     iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    // },
    {
        title: '1С',
        icon: onecLogo,
        link: '/1c/page_001',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(225deg, #bd504d 0%, #bd504d 0%)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(94,0,3,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
]

export const rutube_tiles = [
    {
        title: 'RuTube',
        icon: rutubeLogo,
        link: 'https://rutube.ru/channel/24742327/',
        target: '_blank',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(45deg, #C74343, #C74343)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(94,0,3,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
]

export const telegram_tiles = [
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Основной канал',
        link: 'https://t.me/markusfx_itpit',
        target: '_blank',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(45deg, #24A1DE, #24A1DE)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(57,98,196,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
    {
        title: 'Telegram',
        icon: telegramLogo,
        description: 'Life-канал',
        link: 'https://t.me/markusfx_itpit_any',
        target: '_blank',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(45deg, #24A1DE, #24A1DE)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(57,98,196,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
]

export const vk_tiles = [
    {
        title: 'VK',
        icon: vkLogo,
        description: 'Основная группа',
        link: 'https://vk.com/markusfx_itpit',
        target: '_blank',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(45deg, #0077FF, #0077FF)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(57,98,196,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
]

export const donats_tiles = [
    {
        title: 'Donation Alerts',
        icon: daLogo,
        link: 'https://www.donationalerts.com/r/markusfx',
        target: '_blank',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(45deg, #e07405, #e07405)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(192,36,37,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
    {
        title: 'Boosty',
        icon: boostyLogo,
        link: 'https://boosty.to/markusfx',
        target: '_blank',
        color: 'rgba(255,255,255,0.9)',
        gradient: 'linear-gradient(45deg, #f15f2c, #f15f2c)',
        // iconFilter: 'drop-shadow(0px 0px 10px rgba(192,36,37,0.7))',
        iconFilter: 'drop-shadow(0px 0px 1px #22222244)',
    },
]

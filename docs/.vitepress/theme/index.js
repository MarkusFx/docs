import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import './styles/zoom.css'
import './styles/imgs.css'

let zoom = null

export default {
    ...DefaultTheme,
    enhanceApp({ router }) {
        if (typeof window !== 'undefined') {
            const applyZoom = () => {
                if (zoom) zoom.detach()

                zoom = mediumZoom('[data-zoomable]', {
                    background: 'rgba(0, 0, 0, 1.8)',
                    margin: 32, // 64 - увеличенный отступ от всех сторон
                })
            }

            window.addEventListener('load', applyZoom)
            router.onAfterRouteChanged = () => {
                setTimeout(applyZoom, 100)
            }
        }
    },
}

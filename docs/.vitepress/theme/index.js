import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import './style.css'
import './styles/zoom.css'
import './styles/imgs.css'
import CodePreview from '../components/CodePreview.vue'

let zoom = null

export default {
    ...DefaultTheme,
    enhanceApp({ app, router }) {
        app.component('CodePreview', CodePreview)

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

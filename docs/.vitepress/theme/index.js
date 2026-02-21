import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import './style.css'
import './styles/zoom.css'
import './styles/imgs.css'
import CodePreview from '../components/CodePreview.vue'
import 'virtual:group-icons.css'
import NotFound from './.error/NotFound.vue'
import VkVideo from './components/VkVideo.vue'
import CourseVideos from './components/CourseVideos.vue'
import CourseCards from './components/CourseCards.vue'
import FaqGrid from './components/FaqGrid.vue'

let zoom = null

export default {
    ...DefaultTheme,
    // NotFound: NotFound,
    enhanceApp({ app, router }) {
        app.component('CodePreview', CodePreview)
        app.component('VkVideo', VkVideo)
        app.component('CourseVideos', CourseVideos)
        app.component('CourseCards', CourseCards)
        app.component('FaqGrid', FaqGrid)

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

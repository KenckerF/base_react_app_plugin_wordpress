import { createRoot} from '@wordpress/element'
import App from "./App"
import './utils/styles/App.scss'

const targetElement = document.getElementById('react-app')
if (targetElement) {
    const root = createRoot(targetElement)
    root.render(<App />)
}

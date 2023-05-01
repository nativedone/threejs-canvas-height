import { createRoot } from 'react-dom/client'
import './styles.css'
import { App as Canvas } from './Canvas'
import Overlay from './Overlay'
import { ContentSection } from './ContentSection'

createRoot(document.getElementById('root')).render(
  <>
    {/* Controls canvas height  */}
    <div style={{ height: '120%' }}>
      <Canvas />
    </div>
    <Overlay />
    <ContentSection title="Section 2"/>
    <ContentSection title="Section 3"/>
    <ContentSection title="Section 4"/>
  </>
)

import PaperDesign from './PaperDesign'
import './index.css'
import './paper-interactions.css'

export default function App() {
  return (
    <div className="paper-root">
      <PaperDesign />
      <footer className="paper-legal-footer" role="contentinfo">
        This is an independent concept prototype designed by Velina Baeva for a Product Designer application. It is not
        affiliated with, sponsored, or endorsed by eBag. All trademarks belong to their respective owners. Portfolio:{' '}
        <a href="https://velinabaeva.com" target="_blank" rel="noopener noreferrer">
          velinabaeva.com
        </a>
      </footer>
    </div>
  )
}

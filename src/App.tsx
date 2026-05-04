import SiteHeader from './components/SiteHeader'
import Breadcrumb from './components/Breadcrumb'
import SidebarNav from './components/SidebarNav'
import MainContent from './components/MainContent'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Shopping List">
      <SiteHeader />
      <div className="w-full max-w-[1440px] mx-auto flex flex-col pt-[20px] pb-[40px] px-[28px]">
        <Breadcrumb />
        <div
          className="flex w-full min-h-0 flex-col items-stretch gap-6 lg:min-h-[877px] lg:flex-row lg:items-start lg:gap-0"
          data-name="Main row"
        >
          <SidebarNav />
          <MainContent />
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

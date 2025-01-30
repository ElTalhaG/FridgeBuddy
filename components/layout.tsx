import Link from "next/link"
import { Home, ShoppingBag, Calendar, Trophy, Settings } from "lucide-react"
import { useLanguage } from "@/lib/languageContext"

interface LayoutProps {
  children: React.ReactNode
  activeTab?: "home" | "inventory" | "planner" | "challenges" | "settings"
}

export function Layout({ children, activeTab = "home" }: LayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white dark:bg-gray-900">
      <main className="flex-1 overflow-y-auto pb-16">{children}</main>

      <nav className="fixed bottom-0 w-full max-w-md border-t bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-around items-center h-16">
          <NavItem href="/" icon={Home} label={t('navigation.home')} isActive={activeTab === "home"} />
          <NavItem href="/inventory" icon={ShoppingBag} label={t('navigation.inventory')} isActive={activeTab === "inventory"} />
          <NavItem href="/planner" icon={Calendar} label={t('navigation.planner')} isActive={activeTab === "planner"} />
          <NavItem href="/challenges" icon={Trophy} label={t('navigation.challenges')} isActive={activeTab === "challenges"} />
          <NavItem href="/settings" icon={Settings} label={t('navigation.settings')} isActive={activeTab === "settings"} />
        </div>
      </nav>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ElementType
  label: string
  isActive: boolean
}

function NavItem({ href, icon: Icon, label, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center flex-1 py-2 ${
        isActive ? "text-primary dark:text-primary-foreground" : "text-muted-foreground"
      }`}
    >
      <Icon size={20} />
      <span className="text-xs mt-1">{label}</span>
    </Link>
  )
}


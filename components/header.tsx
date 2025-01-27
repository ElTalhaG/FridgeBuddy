import { ChevronLeft } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  title: string
  backUrl?: string
}

export function Header({ title, backUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-background border-b dark:border-gray-800">
      <div className="flex items-center h-16 px-4">
        {backUrl && (
          <Link href={backUrl} className="absolute left-4">
            <ChevronLeft size={24} />
          </Link>
        )}
        <h1 className="flex-1 text-center text-lg font-semibold">{title}</h1>
      </div>
    </header>
  )
}


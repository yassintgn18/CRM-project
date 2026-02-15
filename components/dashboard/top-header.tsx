import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Search } from "lucide-react"

export function TopHeader() {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-card border-b border-border">
      <div>
        <h1 className="text-xl font-semibold text-foreground tracking-tight">
          Tableau de bord
        </h1>
        <p className="text-sm text-muted-foreground">
          {"Vue d\u2019ensemble \u2014 Direction G\u00e9n\u00e9rale"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <button
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          aria-label="Rechercher"
        >
          <Search className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Notifications */}
        <button
          className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold">
            3
          </span>
        </button>

        {/* Separator */}
        <div className="w-px h-8 bg-border" role="separator" />

        {/* User */}
        <div className="flex items-center gap-2.5">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
              AD
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground leading-tight">Admin</p>
            <p className="text-xs text-muted-foreground leading-tight">DG</p>
          </div>
        </div>
      </div>
    </header>
  )
}

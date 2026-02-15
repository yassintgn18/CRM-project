"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Building2,
  Users,
  MessageSquareWarning,
  Wallet,
  Handshake,
  BarChart3,
  Settings,
  ChevronLeft,
} from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Tableau de bord", icon: LayoutDashboard, href: "/" },
  { label: "Résidences", icon: Building2, href: "/residences" },
  { label: "Copropriétaires", icon: Users, href: "/copropietaires" },
  { label: "Réclamations", icon: MessageSquareWarning, href: "/reclamations" },
  { label: "Finance & Recouvrement", icon: Wallet, href: "/finance" },
  { label: "Prestataires", icon: Handshake, href: "/prestataires" },
  { label: "Reporting & KPIs", icon: BarChart3, href: "/reporting" },
  { label: "Paramètres", icon: Settings, href: "/settings" },
]

export function SidebarNav() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Logo area */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sidebar-primary">
              <Building2 className="w-4 h-4 text-sidebar-primary-foreground" />
            </div>
            <span className="text-base font-semibold text-sidebar-primary-foreground tracking-tight">
              SyndicPro
            </span>
          </div>
        )}
        {collapsed && (
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sidebar-primary mx-auto">
            <Building2 className="w-4 h-4 text-sidebar-primary-foreground" />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "flex items-center justify-center w-7 h-7 rounded-md hover:bg-sidebar-accent transition-colors",
            collapsed && "hidden"
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft className="w-4 h-4 text-sidebar-foreground" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3" aria-label="Sidebar navigation">
        <ul className="flex flex-col gap-1" role="list">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center w-full rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon className="w-[18px] h-[18px] shrink-0" />
                  {!collapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Collapse toggle for collapsed state */}
      {collapsed && (
        <div className="px-3 pb-4">
          <button
            onClick={() => setCollapsed(false)}
            className="flex items-center justify-center w-full h-9 rounded-md hover:bg-sidebar-accent transition-colors"
            aria-label="Expand sidebar"
          >
            <ChevronLeft className="w-4 h-4 text-sidebar-foreground rotate-180" />
          </button>
        </div>
      )}

      {/* Bottom section */}
      {!collapsed && (
        <div className="px-4 py-4 border-t border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/50">
            {"Direction G\u00e9n\u00e9rale"}
          </p>
          <p className="text-xs text-sidebar-foreground/40 mt-0.5">
            v2.4.1
          </p>
        </div>
      )}
    </aside>
  )
}

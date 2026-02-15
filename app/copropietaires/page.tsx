import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { CopropietairesHeader } from "@/components/copropietaires/copropietaires-header"
import { CopropietairesStats } from "@/components/copropietaires/copropietaires-stats"
import { CopropietairesTable } from "@/components/copropietaires/copropietaires-table"

export const metadata = {
  title: "Gestion des Copropriétaires",
  description: "Gestion et suivi des copropriétaires",
}

export default function CopropietairesPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <CopropietairesHeader />
        <CopropietairesStats />
        <div className="flex-1 overflow-y-auto">
          <CopropietairesTable />
        </div>
      </div>
    </div>
  )
}

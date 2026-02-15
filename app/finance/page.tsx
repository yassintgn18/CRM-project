import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { FinanceHeader } from "@/components/finance/finance-header"
import { FinanceKPI } from "@/components/finance/finance-kpi"
import { RecoveryEvolutionChart } from "@/components/finance/recovery-evolution-chart"
import { UnpaidDistributionChart } from "@/components/finance/unpaid-distribution-chart"
import { UpcomingPaymentsTable } from "@/components/finance/upcoming-payments-table"
import { UnpaidByResidenceTable } from "@/components/finance/unpaid-by-residence-table"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

export default function FinancePage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Header */}
        <FinanceHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="space-y-8 py-8">
            {/* KPI Cards */}
            <section>
              <FinanceKPI />
            </section>

            {/* Charts Row */}
            <section className="px-8">
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                <div className="xl:col-span-3">
                  <RecoveryEvolutionChart />
                </div>
                <div className="xl:col-span-2">
                  <UnpaidDistributionChart />
                </div>
              </div>
            </section>

            {/* Tables Row */}
            <section className="px-8">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <UpcomingPaymentsTable />
                <UnpaidByResidenceTable />
              </div>
            </section>

            {/* Bottom Links */}
            <section className="px-8 pb-8 flex items-center gap-4">
              <Button variant="outline" className="gap-2 text-primary hover:text-primary">
                <Link className="w-4 h-4" />
                Voir historique des paiements
              </Button>
              <Button variant="outline" className="gap-2 text-primary hover:text-primary">
                <Link className="w-4 h-4" />
                Gestion des appels de fonds
              </Button>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

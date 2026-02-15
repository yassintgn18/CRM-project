import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  PiggyBank,
  SmilePlus,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface KpiItem {
  label: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: React.ElementType
  iconBg: string
  iconColor: string
}

const kpis: KpiItem[] = [
  {
    label: "Total R\u00e9sidences",
    value: "124",
    change: "+3 ce mois",
    changeType: "positive",
    icon: Building2,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "Taux de recouvrement",
    value: "87.3%",
    change: "+2.1% vs mois dernier",
    changeType: "positive",
    icon: TrendingUp,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    label: "Taux d\u2019impay\u00e9s",
    value: "12.7%",
    change: "-0.8% vs mois dernier",
    changeType: "positive",
    icon: TrendingDown,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
  },
  {
    label: "R\u00e9clamations ouvertes",
    value: "48",
    change: "+5 cette semaine",
    changeType: "negative",
    icon: AlertCircle,
    iconBg: "bg-[hsl(38,92%,50%)]/10",
    iconColor: "text-[hsl(38,92%,50%)]",
  },
  {
    label: "Respect du budget",
    value: "94.2%",
    change: "Conforme",
    changeType: "neutral",
    icon: PiggyBank,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "Satisfaction r\u00e9sidents",
    value: "4.2/5",
    change: "+0.3 vs trimestre dernier",
    changeType: "positive",
    icon: SmilePlus,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4">
      {kpis.map((kpi) => (
        <Card key={kpi.label} className="border border-border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-lg",
                  kpi.iconBg
                )}
              >
                <kpi.icon className={cn("w-5 h-5", kpi.iconColor)} />
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {kpi.label}
            </p>
            <p className="text-2xl font-bold text-card-foreground tracking-tight">
              {kpi.value}
            </p>
            <p
              className={cn(
                "text-xs mt-1.5 font-medium",
                kpi.changeType === "positive" && "text-accent",
                kpi.changeType === "negative" && "text-destructive",
                kpi.changeType === "neutral" && "text-muted-foreground"
              )}
            >
              {kpi.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

'use client'

import { Card } from "@/components/ui/card"
import { AlertCircle, Clock, CheckCircle, Zap } from "lucide-react"

const kpis = [
  {
    title: "Réclamations ouvertes",
    value: "48",
    icon: AlertCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  },
  {
    title: "Délai moyen traitement",
    value: "3.2 jours",
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Taux résolution",
    value: "94%",
    icon: CheckCircle,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    title: "Réclamations urgentes",
    value: "12",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  }
]

export function ReclamationsKPI() {
  return (
    <div className="px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon
          return (
            <Card key={kpi.title} className="bg-card border-0 shadow-sm p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{kpi.title}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{kpi.value}</p>
                </div>
                <div className={`${kpi.bgColor} ${kpi.color} p-2.5 rounded-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

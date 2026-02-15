'use client'

import { Card } from "@/components/ui/card"
import { Users, CheckCircle, Wrench, Star } from "lucide-react"

const stats = [
  {
    label: "Total prestataires",
    value: "24",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    label: "Contrats actifs",
    value: "18",
    icon: CheckCircle,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    label: "Interventions ce mois",
    value: "42",
    icon: Wrench,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    label: "Taux satisfaction",
    value: "4.1/5",
    icon: Star,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
]

export function PrestatairesStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-8 py-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-4 flex items-start gap-4 border-0 shadow-sm">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <Icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-foreground mt-1">
                {stat.value}
              </p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

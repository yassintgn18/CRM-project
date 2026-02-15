'use client'

import { Card } from "@/components/ui/card"
import { Building2, Home, Users } from "lucide-react"

const stats = [
  {
    label: "Total résidences",
    value: "42",
    icon: Building2,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    label: "Taux d'occupation moyen",
    value: "94%",
    icon: Home,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    label: "Total lots",
    value: "3,240",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    label: "Résidences actives",
    value: "38",
    icon: Building2,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
]

export function ResidencesStats() {
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

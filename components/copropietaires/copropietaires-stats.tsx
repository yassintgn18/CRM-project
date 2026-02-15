'use client'

import { Card } from "@/components/ui/card"
import { Users, UsersRound, BarChart3 } from "lucide-react"

const stats = [
  {
    label: "Total copropriétaires",
    value: "1,240",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    label: "Copropriétaires multiples lots",
    value: "86",
    icon: UsersRound,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    label: "Taux de réponse moyen",
    value: "78%",
    icon: BarChart3,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
]

export function CopropietairesStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4 px-8 py-6">
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

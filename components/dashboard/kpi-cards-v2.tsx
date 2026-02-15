'use client'

import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react"

interface KPICardProps {
  icon: string
  label: string
  value: string | number
  trend?: {
    direction: 'up' | 'down' | 'stable'
    value: string
    type: 'positive' | 'negative' | 'warning'
  }
}

function KPICard({ icon, label, value, trend }: KPICardProps) {
  const trendColors = {
    positive: 'text-success',
    negative: 'text-destructive',
    warning: 'text-warning'
  }

  const trendBgColors = {
    positive: 'bg-success/10',
    negative: 'bg-destructive/10',
    warning: 'bg-warning/10'
  }

  return (
    <div className="bg-card rounded-3xl shadow-sm border border-border p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-3xl mb-2">{icon}</div>
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">{label}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
        </div>
        {trend && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${trendBgColors[trend.type]}`}>
            {trend.direction === 'up' && <ArrowUp className={`w-4 h-4 ${trendColors[trend.type]}`} />}
            {trend.direction === 'down' && <ArrowDown className={`w-4 h-4 ${trendColors[trend.type]}`} />}
            {trend.direction === 'stable' && <TrendingUp className={`w-4 h-4 ${trendColors[trend.type]}`} />}
            <span className={`text-xs font-semibold ${trendColors[trend.type]}`}>{trend.value}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export function KPICardsV2() {
  const kpis = [
    {
      icon: '🏢',
      label: 'Résidences',
      value: '124',
      trend: undefined
    },
    {
      icon: '💰',
      label: 'Recouvrement',
      value: '87.3%',
      trend: { direction: 'up' as const, value: '↑ 2.1%', type: 'positive' as const }
    },
    {
      icon: '⚠️',
      label: 'Taux d\'imp.',
      value: '12.7%',
      trend: { direction: 'down' as const, value: '↓ 0.8%', type: 'negative' as const }
    },
    {
      icon: '📞',
      label: 'Réclamations',
      value: '48',
      trend: { direction: 'up' as const, value: '+6', type: 'warning' as const }
    },
    {
      icon: '📊',
      label: 'Budget',
      value: '94.2%',
      trend: { direction: 'stable' as const, value: 'Stable', type: 'positive' as const }
    },
    {
      icon: '⭐',
      label: 'Satisfaction',
      value: '4.2/5',
      trend: { direction: 'up' as const, value: '↑ 0.1', type: 'positive' as const }
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpis.map((kpi, idx) => (
        <KPICard key={idx} {...kpi} />
      ))}
    </div>
  )
}

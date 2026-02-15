'use client'

interface AlertItem {
  title: string
  details: string[]
  severity: 'critical' | 'warning' | 'info'
}

const alerts: AlertItem[] = [
  {
    title: 'RÉSIDENCE OASIS',
    details: ['Dépassement budget >15%', 'Taux impayés: 22%'],
    severity: 'critical'
  },
  {
    title: 'RÉSIDENCE ATLAS',
    details: ['Recouvrement < 70%', '(actuellement 68%)'],
    severity: 'warning'
  },
  {
    title: 'CONTRAT MAINTENANCE',
    details: ['3 retards cette semaine', 'Prestataire: Élévateur+'],
    severity: 'warning'
  },
  {
    title: 'RÉCLAMATIONS',
    details: ['48 ouvertes', '12 en retard (>7 jours)'],
    severity: 'info'
  }
]

const severityConfig = {
  critical: { dot: '🔴', color: 'text-destructive', bgColor: 'bg-destructive/10' },
  warning: { dot: '🟠', color: 'text-warning', bgColor: 'bg-warning/10' },
  info: { dot: '🟡', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' }
}

export function CriticalAlerts() {
  return (
    <div className="bg-card rounded-3xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
        <span>🚨</span>
        ALERTES CRITIQUES
      </h3>
      <div className="space-y-4">
        {alerts.map((alert, idx) => {
          const config = severityConfig[alert.severity]
          return (
            <div 
              key={idx}
              className={`p-4 rounded-2xl border border-border ${config.bgColor}`}
            >
              <h4 className={`font-semibold text-sm ${config.color} mb-2 flex items-center gap-2`}>
                <span>{config.dot}</span>
                {alert.title}
              </h4>
              <ul className="space-y-1">
                {alert.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="text-xs text-foreground ml-6">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

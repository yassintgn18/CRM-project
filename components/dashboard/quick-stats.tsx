import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, ArrowUpRight } from "lucide-react"

const residenceStats = [
  { name: "Les Jardins de Carthage", units: 248, recovery: 92 },
  { name: "R\u00e9sidence El Menzah", units: 186, recovery: 88 },
  { name: "Parc du Lac", units: 312, recovery: 85 },
  { name: "Les Berges du Lac", units: 164, recovery: 91 },
  { name: "R\u00e9sidence Ennasr", units: 220, recovery: 79 },
]

export function QuickStats() {
  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
              <BarChart3 className="w-4.5 h-4.5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold text-card-foreground">
                {"Performance par r\u00e9sidence"}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                Taux de recouvrement
              </p>
            </div>
          </div>
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            {"D\u00e9tails"}
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-5">
        <ul className="flex flex-col gap-3.5" role="list">
          {residenceStats.map((r) => (
            <li key={r.name} className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm font-medium text-card-foreground truncate">
                    {r.name}
                  </p>
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    <span className="text-sm font-semibold text-card-foreground">
                      {r.recovery}%
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${r.recovery}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {r.units} {"lots"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

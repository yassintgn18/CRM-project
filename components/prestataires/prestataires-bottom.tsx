'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Calendar, Star } from "lucide-react"

export function PrestairesButtomSection() {
  return (
    <div className="px-8 py-6 space-y-6">
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button variant="outline" className="h-auto py-4 px-6 justify-start gap-3">
          <Calendar className="w-5 h-5" />
          <div className="text-left">
            <div className="font-semibold">Calendrier des interventions</div>
            <div className="text-xs text-muted-foreground">Planification et suivi</div>
          </div>
        </Button>
        <Button variant="outline" className="h-auto py-4 px-6 justify-start gap-3">
          <Star className="w-5 h-5" />
          <div className="text-left">
            <div className="font-semibold">Évaluation des prestataires</div>
            <div className="text-xs text-muted-foreground">Avis et notation</div>
          </div>
        </Button>
      </div>

      {/* Alert Box */}
      <Card className="border-l-4 border-l-yellow-500 bg-yellow-50 border-r-0 border-t-0 border-b-0 p-4 shadow-sm">
        <div className="flex gap-4">
          <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-900">Contrats arrivant à expiration</h4>
            <p className="text-sm text-yellow-800 mt-1">
              3 contrats arrivent à expiration dans les 30 prochains jours. Veuillez mettre à jour ou renouveler les contrats.
            </p>
            <Button size="sm" className="mt-3 bg-yellow-600 hover:bg-yellow-700">
              Voir les détails
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

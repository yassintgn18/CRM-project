'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink } from "lucide-react"

interface CopropietaireDetailCardProps {
  copropietaire: {
    id: number
    name: string
    cin: string
    residences: string
    lots: string
    contact: string
    status: string
    phone: string
    dateAcquisition: string
    situationFinanciere: string
  }
  onClose: () => void
}

export function CopropietaireDetailCard({ copropietaire, onClose }: CopropietaireDetailCardProps) {
  const statusColor = {
    "Actif": "bg-accent/10 text-accent",
    "À relancer": "bg-warning/10 text-yellow-600",
    "Inactif": "bg-muted/50 text-muted-foreground"
  }

  const financialColor = copropietaire.situationFinanciere === "À jour"
    ? "bg-accent/10 text-accent"
    : "bg-destructive/10 text-destructive"

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Card */}
      <div className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto">
        <Card className="m-4 border-0 shadow-lg rounded-t-2xl">
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-xl font-bold text-foreground">{copropietaire.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">CIN: {copropietaire.cin}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Status & Financial */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Statut</p>
                <Badge className={`${statusColor[copropietaire.status as keyof typeof statusColor]} border-0 font-medium`}>
                  {copropietaire.status}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Situation financière</p>
                <Badge className={`${financialColor} border-0 font-medium`}>
                  {copropietaire.situationFinanciere}
                </Badge>
              </div>
            </div>

            {/* Details Grid */}
            <div className="space-y-4 pt-2">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Email</p>
                <p className="text-sm text-foreground">{copropietaire.contact}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Téléphone</p>
                <p className="text-sm text-foreground">{copropietaire.phone}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Date acquisition</p>
                <p className="text-sm text-foreground">{copropietaire.dateAcquisition}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Résidence(s)</p>
                <p className="text-sm text-foreground">{copropietaire.residences}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-1">Lots</p>
                <p className="text-sm text-foreground">{copropietaire.lots}</p>
              </div>
            </div>

            {/* Button */}
            <Button className="w-full gap-2 mt-6 bg-primary hover:bg-primary/90">
              <ExternalLink className="w-4 h-4" />
              Voir fiche complète
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

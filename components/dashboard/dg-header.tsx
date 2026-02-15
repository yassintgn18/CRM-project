'use client'

import { Button } from "@/components/ui/button"
import { ChevronDown, Download } from "lucide-react"

export function DGHeader() {
  return (
    <div className="bg-card border-b border-border px-8 py-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-primary">TABLEAU DE BORD DIRECTION GÉNÉRALE</h1>
          <p className="text-sm text-muted-foreground mt-1">Vue consolidée - Toutes résidences</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <span className="text-xs">Période:</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <Download className="w-4 h-4" />
            <span className="text-xs">Exporter</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

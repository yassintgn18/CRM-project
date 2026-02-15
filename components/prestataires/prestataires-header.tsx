'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"

export function PrestatairesHeader() {
  return (
    <div className="bg-card border-b border-border px-8 py-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gestion des Prestataires</h1>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          Nouveau Prestataire
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4 mt-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom, type..."
            className="pl-9"
          />
        </div>
      </div>
    </div>
  )
}

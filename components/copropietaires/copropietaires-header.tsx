'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Search } from "lucide-react"

export function CopropietairesHeader() {
  return (
    <div className="bg-card border-b border-border px-8 py-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gestion des Copropriétaires</h1>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          Nouveau Copropriétaire
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mt-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom, CIN, résidence..."
            className="pl-9"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Par résidence</SelectItem>
            <SelectItem value="jardins">Jardins Carthage</SelectItem>
            <SelectItem value="menzah">El Menzah</SelectItem>
            <SelectItem value="parc">Parc du Lac</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Par statut</SelectItem>
            <SelectItem value="active">Actif</SelectItem>
            <SelectItem value="inactive">Inactif</SelectItem>
            <SelectItem value="relancer">À relancer</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

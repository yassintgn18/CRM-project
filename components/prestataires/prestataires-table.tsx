'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

const prestatairesData = [
  {
    id: 1,
    name: "Élévateur Plus",
    type: "Ascenseurs",
    residences: 5,
    contact: "contact@elevateur.ma",
    status: "active",
    nextIntervention: "20/02/2026"
  },
  {
    id: 2,
    name: "Nettoyage Pro",
    type: "Nettoyage",
    residences: 8,
    contact: "info@nettoyage.ma",
    status: "active",
    nextIntervention: "18/02/2026"
  },
  {
    id: 3,
    name: "Sécurité 24/7",
    type: "Sécurité",
    residences: 3,
    contact: "admin@securite.ma",
    status: "pending",
    nextIntervention: "-"
  },
  {
    id: 4,
    name: "Plomberie Rabat",
    type: "Plomberie",
    residences: 6,
    contact: "contact@plomb.ma",
    status: "active",
    nextIntervention: "22/02/2026"
  },
  {
    id: 5,
    name: "Électricité Expert",
    type: "Électricité",
    residences: 4,
    contact: "info@electric.ma",
    status: "active",
    nextIntervention: "25/02/2026"
  },
]

const statusConfig = {
  active: { badge: "Actif", bg: "bg-accent/10", text: "text-accent" },
  pending: { badge: "En négociation", bg: "bg-yellow-100", text: "text-yellow-700" },
  terminated: { badge: "Résilié", bg: "bg-destructive/10", text: "text-destructive" }
}

export function PrestatairesTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const paginatedData = prestatairesData.slice(0, itemsPerPage)

  return (
    <div className="space-y-4 px-8 py-6">
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                <TableHead className="font-semibold text-foreground">Prestataire</TableHead>
                <TableHead className="font-semibold text-foreground">Type</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Résidences assignées</TableHead>
                <TableHead className="font-semibold text-foreground">Contact</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Statut contrat</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Prochaine intervention</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((row) => {
                const config = statusConfig[row.status as keyof typeof statusConfig]
                return (
                  <TableRow key={row.id} className="hover:bg-muted/40 transition-colors">
                    <TableCell className="font-medium text-foreground">{row.name}</TableCell>
                    <TableCell className="text-muted-foreground">{row.type}</TableCell>
                    <TableCell className="text-center text-foreground font-medium">{row.residences} résidences</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{row.contact}</TableCell>
                    <TableCell className="text-center">
                      <Badge className={`${config.bg} ${config.text} border-0 font-medium`} variant="outline">
                        {config.badge}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.nextIntervention}</TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Afficher</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="text-sm border border-border rounded px-2 py-1 bg-card text-foreground"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-muted-foreground">éléments</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Exporter PDF</Button>
          <Button variant="outline" size="sm">Exporter Excel</Button>
        </div>
      </div>
    </div>
  )
}

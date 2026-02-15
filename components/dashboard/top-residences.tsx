'use client'

import { ChevronRight } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const residences = [
  { name: 'Les Jardins Carthage', rate: '18.5%', amount: '124,500 MAD' },
  { name: 'Résidence El Menzah', rate: '15.2%', amount: '98,200 MAD' },
  { name: 'Parc du Lac', rate: '12.8%', amount: '76,400 MAD' },
  { name: 'Les Berges', rate: '11.3%', amount: '62,100 MAD' },
  { name: 'Résidence Ennasr', rate: '9.7%', amount: '51,300 MAD' }
]

export function TopResidences() {
  return (
    <div className="bg-card rounded-3xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
        <span>⚠️</span>
        TOP RÉSIDENCES - TAUX D'IMPAYÉS ÉLEVÉS
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">RÉSIDENCE</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">TAUX D'IMP.</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">MONTANT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {residences.map((res, idx) => (
              <TableRow 
                key={idx} 
                className="border-b border-border hover:bg-secondary/50 cursor-pointer transition-colors"
              >
                <TableCell className="text-sm text-foreground font-medium">{res.name}</TableCell>
                <TableCell className="text-sm text-destructive font-semibold">{res.rate}</TableCell>
                <TableCell className="text-sm text-foreground">{res.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
          Voir tout <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

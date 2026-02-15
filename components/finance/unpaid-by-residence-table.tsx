'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const unpaidData = [
  {
    id: 1,
    residence: "Jardins Carthage",
    amount: "124,500 MAD",
    rate: "18.5%"
  },
  {
    id: 2,
    residence: "El Menzah",
    amount: "98,200 MAD",
    rate: "15.2%"
  },
  {
    id: 3,
    residence: "Parc du Lac",
    amount: "67,300 MAD",
    rate: "21.8%"
  },
  {
    id: 4,
    residence: "Résidence Jasmine",
    amount: "30,000 MAD",
    rate: "12.3%"
  },
]

export function UnpaidByResidenceTable() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground px-6">Impayés par résidence</h3>
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                <TableHead className="font-semibold text-foreground">Résidence</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Montant impayé</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Taux impayé</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unpaidData.map((row) => (
                <TableRow key={row.id} className="hover:bg-muted/40 transition-colors">
                  <TableCell className="font-medium text-foreground">{row.residence}</TableCell>
                  <TableCell className="text-right font-semibold text-destructive">{row.amount}</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
                      {row.rate}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button variant="outline" size="sm" className="text-primary hover:text-primary">
                      Relancer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

'use client'

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

const upcomingData = [
  {
    id: 1,
    residence: "Les Jardins Carthage",
    owner: "Mohammed Ali",
    amount: "45,000 MAD",
    dueDate: "2024-02-28",
    daysRemaining: 5
  },
  {
    id: 2,
    residence: "Résidence El Menzah",
    owner: "Fatima Bennani",
    amount: "38,500 MAD",
    dueDate: "2024-02-25",
    daysRemaining: 2
  },
  {
    id: 3,
    residence: "Parc du Lac",
    owner: "Ahmed Khaled",
    amount: "52,000 MAD",
    dueDate: "2024-03-05",
    daysRemaining: 12
  },
  {
    id: 4,
    residence: "Résidence Jasmine",
    owner: "Saida Hassan",
    amount: "28,700 MAD",
    dueDate: "2024-03-15",
    daysRemaining: 22
  },
]

const getDaysRemainingBadge = (days: number) => {
  if (days <= 3) return { bg: "bg-destructive/10", text: "text-destructive", label: "Imminent" }
  if (days <= 7) return { bg: "bg-yellow-100", text: "text-yellow-700", label: "Bientôt" }
  return { bg: "bg-accent/10", text: "text-accent", label: "Normal" }
}

export function UpcomingPaymentsTable() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground px-6">Échéances à venir</h3>
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                <TableHead className="font-semibold text-foreground">Résidence</TableHead>
                <TableHead className="font-semibold text-foreground">Copropriétaire</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Montant</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Date échéance</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Jours restants</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingData.map((row) => {
                const badgeConfig = getDaysRemainingBadge(row.daysRemaining)
                return (
                  <TableRow key={row.id} className="hover:bg-muted/40 transition-colors">
                    <TableCell className="font-medium text-foreground">{row.residence}</TableCell>
                    <TableCell className="text-muted-foreground">{row.owner}</TableCell>
                    <TableCell className="text-right font-semibold text-foreground">{row.amount}</TableCell>
                    <TableCell className="text-center text-muted-foreground">{row.dueDate}</TableCell>
                    <TableCell className="text-center">
                      <Badge className={`${badgeConfig.bg} ${badgeConfig.text} border-0 font-medium`} variant="outline">
                        {row.daysRemaining} jours
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

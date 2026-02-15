'use client'

import { ChevronRight } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Complaint {
  ref: string
  residence: string
  owner: string
  type: string
  status: 'urgent' | 'in-progress' | 'open' | 'resolved'
}

const complaints: Complaint[] = [
  { ref: 'REC-001', residence: 'Les Jardins Carthage', owner: 'Ahmed Ben Salah', type: 'Fuite d\'eau', status: 'urgent' },
  { ref: 'REC-002', residence: 'Résidence El Menzah', owner: 'Fatma Khaled', type: 'Ascenseur', status: 'in-progress' },
  { ref: 'REC-003', residence: 'Parc du Lac', owner: 'Mohamed Trabelsi', type: 'Éclairage', status: 'open' },
  { ref: 'REC-004', residence: 'Les Berges', owner: 'Sonia Mejri', type: 'Nuisances', status: 'resolved' },
  { ref: 'REC-005', residence: 'Résidence Ennasr', owner: 'Karim Bouazidi', type: 'Infiltration', status: 'urgent' }
]

const statusConfig = {
  urgent: { badge: 'URGENT', bg: 'bg-destructive/10', text: 'text-destructive' },
  'in-progress': { badge: 'En cours', bg: 'bg-primary/10', text: 'text-primary' },
  open: { badge: 'Ouvert', bg: 'bg-[hsl(38,92%,50%)]/10', text: 'text-[hsl(38,85%,40%)]' },
  resolved: { badge: 'Résolu', bg: 'bg-accent/10', text: 'text-accent' }
}

export function RecentComplaintsV2() {
  return (
    <div className="bg-card rounded-3xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
        <span>📋</span>
        DERNIÈRES RÉCLAMATIONS (5 plus récentes)
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">RÉF.</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">RÉSIDENCE</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">COPROPRIÉTAIRE</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">TYPE</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">STATUT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complaints.map((complaint) => {
              const config = statusConfig[complaint.status]
              return (
                <TableRow 
                  key={complaint.ref} 
                  className="border-b border-border hover:bg-secondary/50 cursor-pointer transition-colors"
                >
                  <TableCell className="text-sm font-semibold text-primary">{complaint.ref}</TableCell>
                  <TableCell className="text-sm text-foreground">{complaint.residence}</TableCell>
                  <TableCell className="text-sm text-foreground">{complaint.owner}</TableCell>
                  <TableCell className="text-sm text-foreground">{complaint.type}</TableCell>
                  <TableCell>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${config.bg} ${config.text}`}>
                      {config.badge}
                    </span>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
          Voir toutes les réclamations <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

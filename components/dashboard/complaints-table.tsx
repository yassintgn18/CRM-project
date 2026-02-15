import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MessageSquareWarning } from "lucide-react"

interface Complaint {
  id: string
  residence: string
  coproprietaire: string
  type: string
  statut: "Ouvert" | "En cours" | "R\u00e9solu" | "Urgent"
}

const complaints: Complaint[] = [
  {
    id: "REC-001",
    residence: "Les Jardins de Carthage",
    coproprietaire: "Ahmed Ben Salah",
    type: "Fuite d\u2019eau",
    statut: "Urgent",
  },
  {
    id: "REC-002",
    residence: "R\u00e9sidence El Menzah",
    coproprietaire: "Fatma Khaled",
    type: "Ascenseur en panne",
    statut: "En cours",
  },
  {
    id: "REC-003",
    residence: "Parc du Lac",
    coproprietaire: "Mohamed Trabelsi",
    type: "Probl\u00e8me \u00e9clairage",
    statut: "Ouvert",
  },
  {
    id: "REC-004",
    residence: "Les Berges du Lac",
    coproprietaire: "Sonia Mejri",
    type: "Nuisances sonores",
    statut: "R\u00e9solu",
  },
  {
    id: "REC-005",
    residence: "R\u00e9sidence Ennasr",
    coproprietaire: "Karim Bouazizi",
    type: "Infiltration toiture",
    statut: "Urgent",
  },
  {
    id: "REC-006",
    residence: "Les Jardins de Carthage",
    coproprietaire: "Leila Hamdi",
    type: "Parking non s\u00e9curis\u00e9",
    statut: "En cours",
  },
]

function getStatusStyles(statut: Complaint["statut"]) {
  switch (statut) {
    case "Urgent":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "Ouvert":
      return "bg-[hsl(38,92%,50%)]/10 text-[hsl(38,85%,40%)] border-[hsl(38,92%,50%)]/20"
    case "En cours":
      return "bg-primary/10 text-primary border-primary/20"
    case "R\u00e9solu":
      return "bg-accent/10 text-accent border-accent/20"
    default:
      return ""
  }
}

export function ComplaintsTable() {
  return (
    <Card className="border border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[hsl(38,92%,50%)]/10">
              <MessageSquareWarning className="w-4.5 h-4.5 text-[hsl(38,92%,50%)]" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold text-card-foreground">
                {"R\u00e9clamations r\u00e9centes"}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                {"Derni\u00e8res r\u00e9clamations re\u00e7ues"}
              </p>
            </div>
          </div>
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Voir tout
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50 hover:bg-secondary/50">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pl-6">
                {"R\u00e9f."}
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {"R\u00e9sidence"}
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {"Copropri\u00e9taire"}
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Type
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pr-6">
                Statut
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complaints.map((c) => (
              <TableRow
                key={c.id}
                className="cursor-pointer hover:bg-secondary/30"
              >
                <TableCell className="font-mono text-xs text-muted-foreground pl-6">
                  {c.id}
                </TableCell>
                <TableCell className="font-medium text-card-foreground">
                  {c.residence}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {c.coproprietaire}
                </TableCell>
                <TableCell className="text-muted-foreground">{c.type}</TableCell>
                <TableCell className="pr-6">
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-xs font-medium",
                      getStatusStyles(c.statut)
                    )}
                  >
                    {c.statut}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Download, FileText, MoreVertical } from "lucide-react"

const residencesData = [
  {
    id: 1,
    name: "Les Jardins Carthage",
    address: "Rue X, Tunis",
    lots: 248,
    owners: 189,
    recovery: 87,
    status: "Actif"
  },
  {
    id: 2,
    name: "Résidence El Menzah",
    address: "Avenue Y, Tunis",
    lots: 156,
    owners: 142,
    recovery: 92,
    status: "Actif"
  },
  {
    id: 3,
    name: "Parc du Lac",
    address: "Rue Z, Tunis",
    lots: 312,
    owners: 278,
    recovery: 76,
    status: "Attention"
  },
  {
    id: 4,
    name: "Résidence Jasmine",
    address: "Boulevard A, Tunis",
    lots: 189,
    owners: 156,
    recovery: 89,
    status: "Actif"
  },
  {
    id: 5,
    name: "Villa Résidence",
    address: "Rue B, Tunis",
    lots: 127,
    owners: 112,
    recovery: 71,
    status: "Inactif"
  },
]

const statusConfig = {
  "Actif": { bg: "bg-accent/10", text: "text-accent", label: "Actif" },
  "Attention": { bg: "bg-warning/10", text: "text-yellow-600", label: "Attention" },
  "Inactif": { bg: "bg-muted/50", text: "text-muted-foreground", label: "Inactif" },
}

export function ResidencesTable() {
  const [itemsPerPage, setItemsPerPage] = useState("10")
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="px-8 py-6 space-y-6">
      {/* Table Card */}
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                <TableHead className="font-semibold text-foreground">Nom</TableHead>
                <TableHead className="font-semibold text-foreground">Adresse</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Lots</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Copropriétaires</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Taux recouvrement</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Statut</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {residencesData.map((residence) => {
                const statusInfo = statusConfig[residence.status as keyof typeof statusConfig]
                return (
                  <TableRow key={residence.id} className="hover:bg-muted/40 cursor-pointer transition-colors">
                    <TableCell className="font-medium text-foreground">{residence.name}</TableCell>
                    <TableCell className="text-muted-foreground">{residence.address}</TableCell>
                    <TableCell className="text-center text-foreground font-medium">{residence.lots}</TableCell>
                    <TableCell className="text-center text-foreground font-medium">{residence.owners}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-12 h-6 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent transition-all"
                            style={{ width: `${residence.recovery}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-foreground w-10 text-right">
                          {residence.recovery}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        className={`${statusInfo.bg} ${statusInfo.text} border-0 font-medium`}
                        variant="outline"
                      >
                        {statusInfo.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <button
                        className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="Menu actions"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Afficher</span>
          <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">éléments par page</span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="w-4 h-4" />
            PDF
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Excel
          </Button>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

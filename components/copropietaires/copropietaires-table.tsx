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
import { CopropietaireDetailCard } from "./copropietaire-detail-card"

const copropietairesData = [
  {
    id: 1,
    name: "Ben Salah Ahmed",
    cin: "AB123456",
    residences: "Jardins Carthage (2 lots)",
    lots: "A12, A14",
    contact: "ahmed@email.com",
    status: "Actif",
    phone: "+216 71 123 456",
    dateAcquisition: "15/03/2021",
    situationFinanciere: "À jour"
  },
  {
    id: 2,
    name: "Khaled Fatma",
    cin: "CD789012",
    residences: "El Menzah (1 lot)",
    lots: "B45",
    contact: "fatma@email.com",
    status: "Actif",
    phone: "+216 98 234 567",
    dateAcquisition: "20/07/2019",
    situationFinanciere: "À jour"
  },
  {
    id: 3,
    name: "Trabelsi Mohamed",
    cin: "EF345678",
    residences: "Parc du Lac (3 lots)",
    lots: "C23, C24, C25",
    contact: "contact inactive",
    status: "Inactif",
    phone: "+216 24 345 678",
    dateAcquisition: "10/01/2020",
    situationFinanciere: "En retard"
  },
  {
    id: 4,
    name: "Souissi Mariam",
    cin: "GH567890",
    residences: "Jardins Carthage (1 lot)",
    lots: "A08",
    contact: "mariam@email.com",
    status: "À relancer",
    phone: "+216 55 456 789",
    dateAcquisition: "05/06/2022",
    situationFinanciere: "À jour"
  },
  {
    id: 5,
    name: "Boutheina Salim",
    cin: "IJ901234",
    residences: "El Menzah (2 lots)",
    lots: "B67, B68",
    contact: "salim@email.com",
    status: "Actif",
    phone: "+216 21 567 890",
    dateAcquisition: "12/09/2021",
    situationFinanciere: "À jour"
  },
]

const statusConfig = {
  "Actif": { bg: "bg-accent/10", text: "text-accent", label: "Actif" },
  "À relancer": { bg: "bg-warning/10", text: "text-yellow-600", label: "À relancer" },
  "Inactif": { bg: "bg-muted/50", text: "text-muted-foreground", label: "Inactif" },
}

export function CopropietairesTable() {
  const [itemsPerPage, setItemsPerPage] = useState("10")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCopropietaire, setSelectedCopropietaire] = useState<typeof copropietairesData[0] | null>(null)
  const [showDetail, setShowDetail] = useState(false)

  const handleRowClick = (copropietaire: typeof copropietairesData[0]) => {
    setSelectedCopropietaire(copropietaire)
    setShowDetail(true)
  }

  return (
    <div className="px-8 py-6 space-y-6">
      {/* Table Card */}
      <Card className="border-0 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/30 hover:bg-secondary/30">
                <TableHead className="font-semibold text-foreground">Nom & Prénom</TableHead>
                <TableHead className="font-semibold text-foreground">CIN</TableHead>
                <TableHead className="font-semibold text-foreground">Résidence(s)</TableHead>
                <TableHead className="font-semibold text-foreground">Lots</TableHead>
                <TableHead className="font-semibold text-foreground">Contact</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Statut</TableHead>
                <TableHead className="font-semibold text-foreground text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {copropietairesData.map((copropietaire) => {
                const statusInfo = statusConfig[copropietaire.status as keyof typeof statusConfig]
                return (
                  <TableRow
                    key={copropietaire.id}
                    className="hover:bg-muted/40 cursor-pointer transition-colors"
                    onClick={() => handleRowClick(copropietaire)}
                  >
                    <TableCell className="font-medium text-foreground">{copropietaire.name}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{copropietaire.cin}</TableCell>
                    <TableCell className="text-foreground">{copropietaire.residences}</TableCell>
                    <TableCell className="text-foreground">{copropietaire.lots}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{copropietaire.contact}</TableCell>
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
                        onClick={(e) => e.stopPropagation()}
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

      {/* Detail Card Overlay */}
      {showDetail && selectedCopropietaire && (
        <CopropietaireDetailCard
          copropietaire={selectedCopropietaire}
          onClose={() => setShowDetail(false)}
        />
      )}
    </div>
  )
}

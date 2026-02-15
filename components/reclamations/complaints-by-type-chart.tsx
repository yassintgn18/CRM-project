'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from "@/components/ui/card"

const data = [
  { type: 'Technique', count: 18 },
  { type: 'Admin', count: 12 },
  { type: 'Financière', count: 11 },
  { type: 'Autre', count: 7 }
]

export function ComplaintsByTypeChart() {
  return (
    <Card className="bg-card rounded-3xl shadow-sm border border-border p-6 h-full">
      <h3 className="text-lg font-semibold text-primary mb-1">Réclamations par type</h3>
      <p className="text-xs text-muted-foreground mb-4">(Répartition totale)</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="type" stroke="#6c757d" />
          <YAxis stroke="#6c757d" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            cursor={{ fill: '#f4f6f9' }}
          />
          <Bar dataKey="count" name="Nombre" fill="hsl(217, 91%, 50%)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

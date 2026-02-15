'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Card } from "@/components/ui/card"

const data = [
  { name: 'Jardins Carthage', value: 124500 },
  { name: 'El Menzah', value: 98200 },
  { name: 'Parc du Lac', value: 67300 },
  { name: 'Résidence Jasmine', value: 30000 },
]

const COLORS = ['hsl(0, 72%, 51%)', 'hsl(38, 92%, 50%)', 'hsl(217, 91%, 50%)', 'hsl(220, 10%, 46%)']

export function UnpaidDistributionChart() {
  return (
    <Card className="bg-card rounded-3xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-primary mb-1">Répartition impayés par résidence</h3>
      <p className="text-xs text-muted-foreground mb-4">Total: 320,000 MAD</p>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${(value / 1000).toFixed(0)}K`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${(value / 1000).toFixed(0)}K MAD`} />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}

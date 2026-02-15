'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card } from "@/components/ui/card"

const data = [
  { month: '08 Fév', open: 8, resolved: 5 },
  { month: '09 Fév', open: 12, resolved: 8 },
  { month: '10 Fév', open: 15, resolved: 12 },
  { month: '11 Fév', open: 11, resolved: 14 },
  { month: '12 Fév', open: 9, resolved: 10 },
  { month: '13 Fév', open: 14, resolved: 11 },
  { month: '14 Fév', open: 18, resolved: 13 },
  { month: '15 Fév', open: 16, resolved: 14 }
]

export function ComplaintsEvolutionChart() {
  return (
    <Card className="bg-card rounded-3xl shadow-sm border border-border p-6 h-full">
      <h3 className="text-lg font-semibold text-primary mb-1">Évolution mensuelle</h3>
      <p className="text-xs text-muted-foreground mb-4">(Ouvertes vs Résolues)</p>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6c757d" />
          <YAxis stroke="#6c757d" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            cursor={{ fill: '#f4f6f9' }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="open" 
            name="Ouvertes" 
            stroke="hsl(38, 92%, 50%)" 
            strokeWidth={2}
            dot={{ fill: 'hsl(38, 92%, 50%)', r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="resolved" 
            name="Résolues" 
            stroke="hsl(152, 60%, 46%)" 
            strokeWidth={2}
            dot={{ fill: 'hsl(152, 60%, 46%)', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

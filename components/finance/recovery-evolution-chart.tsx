'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from "@/components/ui/card"

const data = [
  { month: 'Jan', collected: 1800, target: 2000 },
  { month: 'Fév', collected: 2100, target: 2200 },
  { month: 'Mar', collected: 1950, target: 2000 },
  { month: 'Avr', collected: 2400, target: 2500 },
  { month: 'Mai', collected: 2200, target: 2300 },
  { month: 'Jun', collected: 2400, target: 2400 },
]

export function RecoveryEvolutionChart() {
  return (
    <Card className="bg-card rounded-3xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-primary mb-1">Évolution du recouvrement</h3>
      <p className="text-xs text-muted-foreground mb-4">(en milliers de MAD)</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6c757d" />
          <YAxis stroke="#6c757d" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            cursor={{ fill: '#f4f6f9' }}
          />
          <Bar dataKey="collected" name="Encaissé" fill="hsl(152, 60%, 46%)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="target" name="Cible" fill="hsl(217, 91%, 50%)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

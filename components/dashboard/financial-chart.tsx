'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', budget: 450, real: 420 },
  { month: 'Fév', budget: 480, real: 510 },
  { month: 'Mar', budget: 520, real: 480 },
  { month: 'Avr', budget: 550, real: 560 },
  { month: 'Mai', budget: 480, real: 470 },
  { month: 'Jun', budget: 510, real: 490 }
]

export function FinancialChart() {
  return (
    <div className="bg-card rounded-3xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-primary mb-1">SITUATION FINANCIÈRE: Budget vs Réel</h3>
      <p className="text-xs text-muted-foreground mb-4">(en milliers de MAD)</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6c757d" />
          <YAxis stroke="#6c757d" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            cursor={{ fill: '#f4f6f9' }}
          />
          <Legend />
          <Bar dataKey="budget" name="Budget prévu" fill="hsl(217, 91%, 50%)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="real" name="Réalisé" fill="hsl(152, 60%, 46%)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

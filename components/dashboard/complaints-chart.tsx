'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', new: 12, resolved: 8 },
  { month: 'Fév', new: 15, resolved: 11 },
  { month: 'Mar', new: 18, resolved: 14 },
  { month: 'Avr', new: 16, resolved: 16 },
  { month: 'Mai', new: 14, resolved: 12 },
  { month: 'Jun', new: 10, resolved: 9 }
]

export function ComplaintsChart() {
  return (
    <div className="bg-card rounded-3xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-primary mb-1">ÉVOLUTION DES RÉCLAMATIONS</h3>
      <p className="text-xs text-muted-foreground mb-4">(30 derniers jours)</p>
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
          <Bar dataKey="new" name="Nouvelles" fill="hsl(38, 92%, 50%)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="resolved" name="Résolues" fill="hsl(152, 60%, 46%)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

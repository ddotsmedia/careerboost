'use client';

import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUp, ArrowDown, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const lineChartData = [
  { month: 'Jan', submissions: 120, completed: 89 },
  { month: 'Feb', submissions: 132, completed: 95 },
  { month: 'Mar', submissions: 145, completed: 110 },
  { month: 'Apr', submissions: 158, completed: 128 },
  { month: 'May', submissions: 172, completed: 141 },
  { month: 'Jun', submissions: 187, completed: 152 },
];

const pieChartData = [
  { name: 'Starter', value: 35 },
  { name: 'Complete', value: 45 },
  { name: 'Premium', value: 20 },
];

const barChartData = [
  { month: 'Jan', revenue: 35800 },
  { month: 'Feb', revenue: 39200 },
  { month: 'Mar', revenue: 43500 },
  { month: 'Apr', revenue: 47200 },
  { month: 'May', revenue: 51300 },
  { month: 'Jun', revenue: 54800 },
];

const recentActivity = [
  { id: 1, name: 'Ahmed Al-Mansouri', action: 'submitted CV', time: '2 hours ago', icon: 'check' },
  { id: 2, name: 'Fatima Al-Kaabi', action: 'review in progress', time: '4 hours ago', icon: 'clock' },
  { id: 3, name: 'Mohammed Hassan', action: 'completed review', time: '6 hours ago', icon: 'alert' },
  { id: 4, name: 'Sarah Ali', action: 'submitted CV', time: '8 hours ago', icon: 'check' },
  { id: 5, name: 'Khalid Ibrahim', action: 'review pending', time: '10 hours ago', icon: 'clock' },
];

const COLORS = ['#6366f1', '#d4af37', '#a855f7'];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your performance overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Total Submissions', value: '127', change: '+12%', color: 'blue' },
          { label: 'Completed Reviews', value: '89', change: '+8%', color: 'green' },
          { label: 'Total Revenue', value: '45,230 AED', change: '+15%', color: 'gold' },
          { label: 'Active Users', value: '234', change: '+5%', color: 'purple' },
          { label: 'Pending Reviews', value: '38', change: '-3%', color: 'red' },
          { label: 'Conversion Rate', value: '18.5%', change: '+2.1%', color: 'teal' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-navy mt-2">{stat.value}</p>
            <p className={`text-xs mt-2 flex items-center gap-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change.startsWith('+') ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-navy mb-4">Submissions vs Completed (6 months)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="submissions" stroke="#001f3f" />
              <Line type="monotone" dataKey="completed" stroke="#d4af37" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-navy mb-4">Service Plan Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieChartData} cx="50%" cy="50%" labelLine={false} label>
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-bold text-navy mb-4">Monthly Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#d4af37" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-bold text-navy mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((item) => (
            <div key={item.id} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                {item.icon === 'check' && <CheckCircle className="w-5 h-5 text-green-600" />}
                {item.icon === 'clock' && <Clock className="w-5 h-5 text-blue-600" />}
                {item.icon === 'alert' && <AlertCircle className="w-5 h-5 text-orange-600" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-navy">{item.name} {item.action}</p>
                <p className="text-xs text-gray-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

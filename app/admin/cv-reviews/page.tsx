'use client';

import { useState } from 'react';
import { Search, Eye, Edit, Trash2 } from 'lucide-react';

const mockReviews = [
  { id: 1, name: 'Ahmed Al-Mansouri', email: 'ahmed@example.com', service: 'Complete', status: 'pending', daysWaiting: 2 },
  { id: 2, name: 'Fatima Al-Kaabi', email: 'fatima@example.com', service: 'Premium', status: 'in-progress', daysWaiting: 4 },
  { id: 3, name: 'Mohammed Hassan', email: 'mohammed@example.com', service: 'Starter', status: 'completed', daysWaiting: 0 },
  { id: 4, name: 'Sarah Ali', email: 'sarah@example.com', service: 'Complete', status: 'pending', daysWaiting: 1 },
  { id: 5, name: 'Khalid Ibrahim', email: 'khalid@example.com', service: 'Premium', status: 'in-progress', daysWaiting: 3 },
  { id: 6, name: 'Layla Ahmed', email: 'layla@example.com', service: 'Starter', status: 'pending', daysWaiting: 5 },
  { id: 7, name: 'Omar Saeed', email: 'omar@example.com', service: 'Complete', status: 'completed', daysWaiting: 0 },
  { id: 8, name: 'Noor Hassan', email: 'noor@example.com', service: 'Premium', status: 'in-progress', daysWaiting: 2 },
];

export default function CVReviewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = mockReviews.filter((review) => {
    const matchesSearch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const StatusBadge = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
      pending: 'bg-orange-100 text-orange-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
    };
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>{status}</span>;
  };

  const ServiceBadge = ({ service }: { service: string }) => {
    const styles: Record<string, string> = {
      Starter: 'bg-gray-100 text-gray-800',
      Complete: 'bg-yellow-100 text-yellow-800',
      Premium: 'bg-purple-100 text-purple-800',
    };
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[service]}`}>{service}</span>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy">CV Reviews</h1>
        <p className="text-gray-600">Manage and track all CV review submissions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-xs text-gray-600 font-medium">Total Submissions</p>
          <p className="text-2xl font-bold text-navy mt-2">1,234</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-xs text-gray-600 font-medium">Pending Review</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">127</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-xs text-gray-600 font-medium">In Progress</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">89</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-xs text-gray-600 font-medium">Avg Review Time</p>
          <p className="text-2xl font-bold text-navy mt-2">3.2 days</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'pending', 'in-progress', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded capitalize text-sm font-semibold transition ${
                  filterStatus === status
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status === 'all' ? 'All' : status.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Client Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Service Plan</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Days Waiting</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((review) => (
                <tr key={review.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-navy">{review.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{review.email}</td>
                  <td className="px-6 py-4"><ServiceBadge service={review.service} /></td>
                  <td className="px-6 py-4"><StatusBadge status={review.status} /></td>
                  <td className="px-6 py-4 text-sm text-gray-600">{review.daysWaiting}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded transition"><Eye className="w-4 h-4 text-gray-600" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded transition"><Edit className="w-4 h-4 text-gray-600" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded transition"><Trash2 className="w-4 h-4 text-red-600" /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-600">No reviews found matching your criteria</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
const mockUsers = [
  { id: 1, name: 'Admin User', email: 'admin@careerboost.ae', role: 'admin', phone: '+971501234567', joined: 'Jan 2024', status: 'active' },
  { id: 2, name: 'CV Reviewer 1', email: 'reviewer1@careerboost.ae', role: 'reviewer', phone: '+971502345678', joined: 'Feb 2024', status: 'active' },
  { id: 3, name: 'CV Reviewer 2', email: 'reviewer2@careerboost.ae', role: 'reviewer', phone: '+971503456789', joined: 'Feb 2024', status: 'active' },
  { id: 4, name: 'Support Agent', email: 'support@careerboost.ae', role: 'support', phone: '+971504567890', joined: 'Mar 2024', status: 'active' },
  { id: 5, name: 'Marketing Manager', email: 'marketing@careerboost.ae', role: 'marketing', phone: '+971505678901', joined: 'Mar 2024', status: 'active' },
  { id: 6, name: 'Finance Officer', email: 'finance@careerboost.ae', role: 'finance', phone: '+971506789012', joined: 'Apr 2024', status: 'inactive' },
  { id: 7, name: 'Project Manager', email: 'pm@careerboost.ae', role: 'manager', phone: '+971507890123', joined: 'Apr 2024', status: 'active' },
  { id: 8, name: 'CV Reviewer 3', email: 'reviewer3@careerboost.ae', role: 'reviewer', phone: '+971508901234', joined: 'May 2024', status: 'active' },
];
export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const RoleBadge = ({ role }: { role: string }) => {
    const styles: Record<string, string> = {
      admin: 'bg-red-100 text-red-800', reviewer: 'bg-blue-100 text-blue-800', support: 'bg-green-100 text-green-800',
      marketing: 'bg-purple-100 text-purple-800', finance: 'bg-yellow-100 text-yellow-800', manager: 'bg-indigo-100 text-indigo-800',
    };
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[role]}`}>{role}</span>;
  };
  const Avatar = ({ name }: { name: string }) => {
    const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase();
    return <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm">{initials}</div>;
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy">Users Management</h1>
          <p className="text-gray-600">Manage team members and user access.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition">
          <Plus className="w-5 h-5" />
          Add User
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: '8' },
          { label: 'Active', value: '7', color: 'text-green-600' },
          { label: 'Reviewers', value: '3', color: 'text-blue-600' },
          { label: 'Admins', value: '1', color: 'text-red-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
            <p className={`text-2xl font-bold mt-2 ${stat.color || 'text-navy'}`}>{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
          <input type="text" placeholder="Search users by name or email..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy" />
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">User</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Phone</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Joined</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center gap-3"><Avatar name={user.name} /><span className="font-medium text-navy">{user.name}</span></td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4"><RoleBadge role={user.role} /></td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.joined}</td>
                <td className="px-6 py-4"><div className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-green-600' : 'bg-gray-400'}`} /><span className="text-xs capitalize text-gray-600">{user.status}</span></div></td>
                <td className="px-6 py-4 flex gap-2"><button className="p-2 hover:bg-gray-100 rounded transition"><Edit className="w-4 h-4 text-gray-600" /></button><button className="p-2 hover:bg-gray-100 rounded transition"><Trash2 className="w-4 h-4 text-red-600" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

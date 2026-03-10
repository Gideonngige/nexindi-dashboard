// src/screens/admin/ShopscanUsers.js
import React, { useState } from "react";
import Layout from "../Layout";
import { Search, Users } from "lucide-react";

const ShopscanUsers = () => {

  // Dummy users
  const [users] = useState([
    {
      id: 1,
      name: "John Mwangi",
      email: "john@example.com",
      shop: "Mwangi Electronics",
      status: "Active",
      joined: "2026-02-10"
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      email: "mary@example.com",
      shop: "Wanjiku Cosmetics",
      status: "Active",
      joined: "2026-01-22"
    },
    {
      id: 3,
      name: "David Otieno",
      email: "david@example.com",
      shop: "Otieno Stores",
      status: "Suspended",
      joined: "2025-12-12"
    }
  ]);

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout title="ShopScan Users">

      <div className="p-6">
        {/* Page Title */}
        <div className="flex items-center gap-2 mb-6">
          <Users size={24} className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            Users
          </h2>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white shadow rounded-lg px-4 py-2 mb-6 w-full border border-blue-800">

          <Search size={18} className="text-gray-400 mr-2" />

          <input
            type="text"
            placeholder="Search users..."
            className="outline-none w-full text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-6 py-3">User</th>
                <th className="text-left px-6 py-3">Email</th>
                <th className="text-left px-6 py-3">Shop</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Joined</th>
                <th className="text-right px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-4 font-medium text-gray-800">
                    {user.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.shop}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.joined}
                  </td>

                  <td className="px-6 py-4 text-right space-x-2">

                    <button className="text-blue-600 hover:underline">
                      View
                    </button>

                    <button className="text-red-600 hover:underline">
                      Suspend
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </Layout>
  );
};

export default ShopscanUsers;
// src/screens/admin/ShopscanShops.js
import React, { useState } from "react";
import Layout from "../Layout";
import { Search, Store } from "lucide-react";

const ShopscanShops = () => {

  // Dummy shops data
  const [shops] = useState([
    {
      id: 1,
      name: "Mwangi Electronics",
      owner: "John Mwangi",
      plan: "Premium",
      status: "Active",
      joined: "2026-02-10"
    },
    {
      id: 2,
      name: "Wanjiku Cosmetics",
      owner: "Mary Wanjiku",
      plan: "Standard",
      status: "Active",
      joined: "2026-01-22"
    },
    {
      id: 3,
      name: "Otieno Stores",
      owner: "David Otieno",
      plan: "Basic",
      status: "Expired",
      joined: "2025-12-12"
    }
  ]);

  const [search, setSearch] = useState("");

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout title="ShopScan Shops">

      <div className="p-6">

        {/* Page Title */}
        <div className="flex items-center gap-2 mb-6">
          <Store size={24} className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            Shops
          </h2>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white shadow rounded-lg px-4 py-2 mb-6 w-full border border-blue-800">
          <Search size={18} className="text-gray-400 mr-2" />

          <input
            type="text"
            placeholder="Search shops..."
            className="outline-none w-full text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Shops Table */}
        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-6 py-3">Shop Name</th>
                <th className="text-left px-6 py-3">Owner</th>
                <th className="text-left px-6 py-3">Plan</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Joined</th>
                <th className="text-right px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredShops.map((shop) => (
                <tr
                  key={shop.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-4 font-medium text-gray-800">
                    {shop.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {shop.owner}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {shop.plan}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          shop.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {shop.status}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {shop.joined}
                  </td>

                  <td className="px-6 py-4 text-right space-x-2">

                    <button className="text-blue-600 hover:underline">
                      View
                    </button>

                    <button className="text-red-600 hover:underline">
                      Disable
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

export default ShopscanShops;
// src/screens/admin/ShopscanRevenue.js
import React, { useState } from "react";
import Layout from "../Layout";
import { DollarSign } from "lucide-react";

const ShopscanRevenue = () => {

  const revenueStats = {
    totalRevenue: 158000,
    monthlyRevenue: 42000,
    activeSubscriptions: 86,
    avgRevenuePerShop: 1837
  };

  const [transactions] = useState([
    {
      id: "REV001",
      shop: "Mwangi Electronics",
      amount: 2500,
      type: "Subscription",
      date: "2026-03-06"
    },
    {
      id: "REV002",
      shop: "Wanjiku Cosmetics",
      amount: 1500,
      type: "Subscription",
      date: "2026-03-04"
    },
    {
      id: "REV003",
      shop: "Otieno Stores",
      amount: 1000,
      type: "Upgrade",
      date: "2026-03-02"
    }
  ]);

  return (
    <Layout title="ShopScan Revenue">

      <div className="p-6">

        {/* Page Title */}
        <div className="flex items-center gap-2 mb-6">
          <DollarSign size={24} className="text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            Revenue Overview
          </h2>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h3 className="text-2xl font-bold text-green-600">
              KES {revenueStats.totalRevenue}
            </h3>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500 text-sm">Monthly Revenue</p>
            <h3 className="text-2xl font-bold text-blue-600">
              KES {revenueStats.monthlyRevenue}
            </h3>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500 text-sm">Active Subscriptions</p>
            <h3 className="text-2xl font-bold text-purple-600">
              {revenueStats.activeSubscriptions}
            </h3>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <p className="text-gray-500 text-sm">Avg Revenue / Shop</p>
            <h3 className="text-2xl font-bold text-orange-600">
              KES {revenueStats.avgRevenuePerShop}
            </h3>
          </div>

        </div>

        {/* Revenue Table */}

        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-6 py-3">Transaction ID</th>
                <th className="text-left px-6 py-3">Shop</th>
                <th className="text-left px-6 py-3">Amount</th>
                <th className="text-left px-6 py-3">Type</th>
                <th className="text-left px-6 py-3">Date</th>
              </tr>
            </thead>

            <tbody>

              {transactions.map((txn) => (
                <tr key={txn.id} className="border-t hover:bg-gray-50">

                  <td className="px-6 py-4 font-medium text-gray-800">
                    {txn.id}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {txn.shop}
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    KES {txn.amount}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {txn.type}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {txn.date}
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

export default ShopscanRevenue;
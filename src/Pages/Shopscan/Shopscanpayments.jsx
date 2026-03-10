// src/screens/admin/ShopscanPayments.js
import React, { useState } from "react";
import Layout from "../Layout";
import { Search, CreditCard } from "lucide-react";

const ShopscanPayments = () => {

  // Dummy payments
  const [payments] = useState([
    {
      id: "PAY001",
      shop: "Mwangi Electronics",
      owner: "John Mwangi",
      amount: 2500,
      method: "M-Pesa",
      status: "Completed",
      date: "2026-03-05"
    },
    {
      id: "PAY002",
      shop: "Wanjiku Cosmetics",
      owner: "Mary Wanjiku",
      amount: 1500,
      method: "Card",
      status: "Completed",
      date: "2026-03-03"
    },
    {
      id: "PAY003",
      shop: "Otieno Stores",
      owner: "David Otieno",
      amount: 1000,
      method: "M-Pesa",
      status: "Pending",
      date: "2026-03-01"
    }
  ]);

  const [search, setSearch] = useState("");

  const filteredPayments = payments.filter((payment) =>
    payment.shop.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout title="ShopScan Payments">

      <div className="p-6">

        {/* Page Title */}
        <div className="flex items-center gap-2 mb-6">
          <CreditCard size={24} className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            Payments
          </h2>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white shadow rounded-lg px-4 py-2 mb-6 w-full border border-blue-800">
          <Search size={18} className="text-gray-400 mr-2" />

          <input
            type="text"
            placeholder="Search by shop..."
            className="outline-none w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-6 py-3">Payment ID</th>
                <th className="text-left px-6 py-3">Shop</th>
                <th className="text-left px-6 py-3">Owner</th>
                <th className="text-left px-6 py-3">Amount</th>
                <th className="text-left px-6 py-3">Method</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-left px-6 py-3">Date</th>
                <th className="text-right px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-4 font-medium text-gray-800">
                    {payment.id}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {payment.shop}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {payment.owner}
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    KES {payment.amount}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {payment.method}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        payment.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payment.status}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {payment.date}
                  </td>

                  <td className="px-6 py-4 text-right">

                    <button className="text-blue-600 hover:underline">
                      View
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

export default ShopscanPayments;
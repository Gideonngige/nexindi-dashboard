import React, { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { Users, Store, CreditCard, DollarSign } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const Shopscan = () => {
  const navigate = useNavigate();

  // Dummy stats
  const [stats] = useState({
    users: 1240,
    shops: 320,
    payments: 540,
    revenue: 420000
  });

  // Dummy revenue growth data
  const chartData = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 62000 },
    { month: "Mar", revenue: 78000 },
    { month: "Apr", revenue: 91000 },
    { month: "May", revenue: 120000 },
    { month: "Jun", revenue: 150000 }
  ];

  const cards = [
    {
      title: "Total Users",
      value: stats.users,
      icon: <Users size={24} />,
      link: "/shopscan/users"
    },
    {
      title: "Shops",
      value: stats.shops,
      icon: <Store size={24} />,
      link: "/shopscan/shops"
    },
    {
      title: "Payments",
      value: stats.payments,
      icon: <CreditCard size={24} />,
      link: "/shopscan/payments"
    },
    {
      title: "Revenue",
      value: `KES ${stats.revenue}`,
      icon: <DollarSign size={24} />,
      link: "/shopscan/revenue"
    }
  ];

  return (
    <Layout title="ShopScan">
      <div className="p-6">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Dashboard
        </h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.link)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-500 text-sm">{card.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                </div>

                <div className="bg-blue-100 text-blue-700 p-3 rounded-lg">
                  {card.icon}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Revenue Growth Chart */}
        <div className="bg-white mt-10 p-6 rounded-xl shadow border border-gray-100">

          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Revenue Growth
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `KES ${value}`} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>
    </Layout>
  );
};

export default Shopscan;
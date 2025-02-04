import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  const chartData = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 60 },
    { name: 'Apr', value: 40 }
  ];

  useEffect(() => {
    const data = localStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">User Profile</h2>
          {userData && (
            <div className="space-y-2">
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phone}</p>
            </div>
          )}
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Activity Chart</h2>
          <LineChart width={400} height={200} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const userActivityData = [
  { day: 'Jan 1', users: 130 },
  { day: 'Jan 2', users: 150 },
  { day: 'Jan 3', users: 140 },
  { day: 'Jan 4', users: 160 },
  { day: 'Jan 5', users: 170 },
  { day: 'Jan 6', users: 200 },
  { day: 'Jan 7', users: 190 }
];

const paymentVolumeData = [
  { month: 'Sep', amount: 14 },
  { month: 'Oct', amount: 21 },
  { month: 'Nov', amount: 19 },
  { month: 'Dec', amount: 24 },
  { month: 'Jan', amount: 28 }
];

const PerformanceTrends = () => {
  return (
    <div className="mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-8">Performance Trends</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Activity Chart */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900">User Activity (Past 7 Days)</h2>
                <p className="text-sm text-gray-600 mt-1">Daily active users on the platform.</p>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userActivityData}>
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <YAxis 
                      domain={[0, 250]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#3B82F6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Monthly Payment Volume Chart */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Monthly Payment Volume</h2>
                <p className="text-sm text-gray-600 mt-1">Total transaction volume processed each month.</p>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={paymentVolumeData}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <YAxis 
                      domain={[0, 30]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                      tickFormatter={(value) => `$${value}k`}
                    />
                    <Bar 
                      dataKey="amount" 
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTrends;
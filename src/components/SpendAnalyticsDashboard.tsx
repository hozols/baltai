
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const SpendAnalyticsDashboard = () => {
  // Sample data for charts
  const monthlySpendData = [
    { month: 'Oct', amount: 45000, budget: 50000 },
    { month: 'Nov', amount: 52000, budget: 50000 },
    { month: 'Dec', amount: 48000, budget: 50000 },
    { month: 'Jan', amount: 42000, budget: 45000 },
  ];

  const categoryData = [
    { name: 'Travel', value: 35, color: '#ef4444' },
    { name: 'Software', value: 28, color: '#3b82f6' },
    { name: 'Marketing', value: 22, color: '#22c55e' },
    { name: 'Office', value: 15, color: '#f59e0b' },
  ];

  const trendData = [
    { day: 'Mon', expenses: 2400 },
    { day: 'Tue', expenses: 1398 },
    { day: 'Wed', expenses: 3200 },
    { day: 'Thu', expenses: 4208 },
    { day: 'Fri', expenses: 2800 },
    { day: 'Sat', expenses: 1890 },
    { day: 'Sun', expenses: 2390 },
  ];

  const chartConfig = {
    amount: {
      label: "Amount",
      color: "hsl(var(--primary))",
    },
    budget: {
      label: "Budget",
      color: "hsl(var(--muted-foreground))",
    },
    expenses: {
      label: "Expenses",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="cosmic-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Spend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$187,450</div>
            <p className="text-xs text-green-500">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="cosmic-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Budget Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-red-500">+2.1% over budget</p>
          </CardContent>
        </Card>
        
        <Card className="cosmic-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$342</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="cosmic-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Cards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">2 new this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Spend vs Budget */}
        <Card className="cosmic-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Spend vs Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlySpendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" fill="var(--color-amount)" />
                  <Bar dataKey="budget" fill="var(--color-budget)" opacity={0.6} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="text-lg">Spend by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions and Weekly Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Trend */}
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="text-lg">Weekly Expense Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="var(--color-expenses)" 
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-expenses)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="cosmic-card">
          <CardHeader>
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { vendor: 'Uber Technologies', amount: '$45.20', category: 'Travel', time: '2 hours ago' },
                { vendor: 'Microsoft 365', amount: '$1,200.00', category: 'Software', time: '1 day ago' },
                { vendor: 'Google Ads', amount: '$850.00', category: 'Marketing', time: '2 days ago' },
                { vendor: 'Delta Airlines', amount: '$1,250.00', category: 'Travel', time: '3 days ago' },
                { vendor: 'Slack Technologies', amount: '$420.00', category: 'Software', time: '5 days ago' },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{transaction.vendor}</div>
                    <div className="text-xs text-muted-foreground">{transaction.category} • {transaction.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{transaction.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpendAnalyticsDashboard;

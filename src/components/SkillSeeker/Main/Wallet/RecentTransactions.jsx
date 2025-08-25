const RecentTransactions = () => {
  const transactionsData = [
    {
      type: "Credit",
      description: "Task completion bonus (UI/UX Design)",
      amount: "+$50.00",
      date: "2024-07-26"
    },
    {
      type: "Debit",
      description: "Skill exchange fee (Python Basics)",
      amount: "-$10.00",
      date: "2024-07-25"
    },
    {
      type: "Credit",
      description: "Referral bonus",
      amount: "+$25.00",
      date: "2024-07-24"
    },
    {
      type: "Debit",
      description: "Withdrawal to Bank Account",
      amount: "-$100.00",
      date: "2024-07-23"
    },
    {
      type: "Credit",
      description: "Project payment (Frontend Development)",
      amount: "+$250.00",
      date: "2024-07-22"
    }
  ];

  const getTypeStyle = (type) => {
    return type === "Credit" 
      ? "bg-green-100 text-green-700" 
      : "bg-red-100 text-red-700";
  };

  const getAmountStyle = (amount) => {
    return amount.startsWith("+") 
      ? "text-green-600" 
      : "text-red-600";
  };

  return (
    <div className="mt-7 ">
      <div className="">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Recent Transactions</h1>
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>

          {/* Table */}
          <div className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-0 text-sm font-medium text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Description</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactionsData.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-0">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getTypeStyle(transaction.type)}`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {transaction.description}
                    </td>
                    <td className={`py-4 px-4 text-sm font-medium text-right ${getAmountStyle(transaction.amount)}`}>
                      {transaction.amount}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 text-right">
                      {transaction.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* View All Link */}
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
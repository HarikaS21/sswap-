const DetailedInsights = () => {
  const recentActivityData = [
    {
      user: "Alice Johnson",
      action: "Posted New Job: Senior Frontend Dev",
      timestamp: "2 hours ago",
      status: "Active"
    },
    {
      user: "Bob Williams",
      action: "Updated Profile: Added new skill",
      timestamp: "5 hours ago",
      status: "Completed"
    },
    {
      user: "Charlie Brown",
      action: "Filed Dispute: Payment issue",
      timestamp: "Yesterday",
      status: "Pending"
    },
    {
      user: "Diana Prince",
      action: "Verified Identity",
      timestamp: "2 days ago",
      status: "Verified"
    },
    {
      user: "Eve Adams",
      action: "Joined Live Session: UI/UX Trends",
      timestamp: "3 days ago",
      status: "Attended"
    }
  ];

  const skillsCategories = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "Content Writing",
    "Project Management",
    "Data Science",
    "Mobile Development",
    "Cloud Computing",
    "Cybersecurity",
    "Video Editing"
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-gray-700 bg-gray-100";
      case "Completed":
        return "text-blue-700 bg-blue-100";
      case "Pending":
        return "text-gray-700 bg-gray-100";
      case "Verified":
        return "text-gray-700 bg-gray-100";
      case "Attended":
        return "text-gray-700 bg-gray-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-5">Detailed Insights</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Recent User Activity Card */}
        <div className=" w-[70%] bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Recent User Activity</h2>
          
          <div className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-0 text-sm font-medium text-gray-600">User</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Action</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Timestamp</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentActivityData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-0 text-sm font-medium text-gray-900">
                      {item.user}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {item.action}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {item.timestamp}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Skills & Categories Card */}
        <div className=" w-[30%] bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Popular Skills & Categories</h2>
          
          <div className="flex flex-wrap gap-3 ">
            {skillsCategories.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-200 hover:bg-gray-100 transition-colors duration-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedInsights;
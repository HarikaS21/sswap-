import { FaUsers } from "react-icons/fa6";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import PerformanceTrends from "./PerformaceTrends";
import DetailedInsights from "./DetailedInsights";
const AdminDashboard=()=>{
    return(
        <div className="">
           <h1 className="text-[30px] font-bold ">Admin Dashboard Overview</h1>
           <div className="mt-7">

            <div className="grid grid-cols-4 gap-5">
                <div className="border border-gray-300 p-5 shadow-xl rounded-xl">
                       <div className="flex items-center justify-between">
                          <p className="text-[17px] text-gray-600">Total Users</p>
                          <FaUsers  size={27} className="text-blue-500"/>
                       </div>
                       <h1 className="font-bold text-[40px] mt-2">2,548</h1>
                       <p className="text-[15px] text-gray-600 mt-2">+12.5% from last month</p>
                </div>

                 <div className="border border-gray-300 p-5 shadow-xl rounded-xl">
                       <div className="flex items-center justify-between">
                          <p className="text-[17px] text-gray-600">Active Jobs</p>
                          <RiSuitcaseLine  size={27} className="text-blue-500"/>
                       </div>
                       <h1 className="font-bold text-[40px] mt-2">876</h1>
                       <p className="text-[15px] text-red-600 mt-2">+3.2% from last week</p>
                </div>

                 <div className="border border-gray-300 p-5 shadow-xl rounded-xl">
                       <div className="flex items-center justify-between">
                          <p className="text-[17px] text-gray-600">New Signups(Today)</p>
                          <FaUser  size={27} className="text-blue-500"/>
                       </div>
                       <h1 className="font-bold text-[40px] mt-2">58</h1>
                       <p className="text-[15px] text-gray-600 mt-2">+25% from yesterday</p>
                </div>

                 <div className="border border-gray-300 p-5 shadow-xl rounded-xl">
                       <div className="flex items-center justify-between">
                          <p className="text-[17px] text-gray-600">Disputes Open</p>
                          <FiDollarSign  size={27} className="text-blue-500"/>
                       </div>
                       <h1 className="font-bold text-[40px] mt-2">7</h1>
                       <p className="text-[15px] text-gray-600 mt-2">-1 from last week</p>
                </div>

            </div>

           </div>

           <div className="mt-10">
              <PerformanceTrends/>
           </div>
           <DetailedInsights/>


        </div>
    )
}


export default AdminDashboard
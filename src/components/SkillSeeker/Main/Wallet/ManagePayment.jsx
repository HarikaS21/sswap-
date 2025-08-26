import { LuBanknote } from "react-icons/lu";
import { FaWallet } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
const ManagePayment=()=>{
    return(
        <div className="mt-7">
            <h3 className="text-[25px] font-bold mb-7">Manage Payment Methods</h3>
            <div className="flex items-center justify-between bg-gray-200 p-3 rounded-xl">
              <div  className="flex items-center gap-4">
                 <FaWallet size={25} />
               <div>
                <p className="font-semibold text-[20px]">Visa **** 1234</p>
                <p className="text-gray-600 text-[17px ]">Expires 12/26</p>
               </div>
              </div>
              <p className="text-[15px] text-red-400">Remove </p>
            </div>

             <div className="flex items-center justify-between bg-gray-200 p-3 rounded-xl mt-3">
              <div  className="flex items-center gap-4">
                 <LuBanknote size={25} />
               <div>
                <p className="font-semibold text-[20px]">Bank Account **** 5678</p>
                <p className="text-gray-600 text-[17px ]">Primary</p>
               </div>
              </div>
              <p className="text-[15px] text-red-400">Remove </p>
            </div>

            <div className="w-full flex items-center justify-center mt-5 gap-2 text-center border border-blue-400 text-blue-400 rounded-xl p-4">
                  <IoMdAdd size={20}/>
                  <p className="text-[20px]">Add New Method</p>
            </div>
        </div>
    )
}

export default ManagePayment 
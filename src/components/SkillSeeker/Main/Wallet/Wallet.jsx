import ManagePayment from "./ManagePayment";
import RecentTransactions from "./RecentTransactions";

const Wallet = () => {
  return (
    <div>
      <h1 className="text-[25px] font-bold">Wallet & Payments</h1>
      <div className="mt-5 relative rounded-lg">
        {/* Background image */}
        <img
          src="/images/walletbg.png"
          alt=""
          className="h-[350px] w-full object-cover rounded-lg"
        />

        {/* White + Violet overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/40"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/70  to-transparent rounded-lg"></div>
        </div>

        {/* Content */}
        <div className="absolute top-5 left-5">
          <h2 className="font-bold text-[35px] text-white">Current Balance</h2>
          <h1 className="text-[50px] font-extrabold text-gray-800">
            $1,245.75
          </h1>
          <p className="text-[25px] text-white">Total Credits: 2,500</p>
          <button className="px-4 py-2 rounded-lg bg-white text-black mt-4">
            Add Funds
          </button>
        </div>
      </div>

      <div className="mt-7 flex gap-4 ">
        <div className="p-5 rounded-lg bg-white border border-gray-300 space-y-3 w-[500px]">
          <h3 className="text-[20px] font-bold">Understanding Credits</h3>
          <p className="text-gray-600 text-[15px]">
            Credits are the internal currency for skill exchanges and game
            rewards. 1 credit equals $0.01. Earn credits by completing tasks,
            participating in live sessions, or winning games.
          </p>

          <p className="text-blue-500">Learn More</p>
        </div>

        <div className="p-5 rounded-lg bg-white border border-gray-300 space-y-3">
          <h3 className="text-[20px] font-bold">Withdraw Funds</h3>
          <p className="text-gray-600 text-[15px]">
            Available for withdrawl: <br />
            <span className="font-semibold text-[20px] text-black">$850</span>
          </p>
          <input
            type="text"
            placeholder="Enter amount"
            className="border border-gray-300 p-4 rounded-lg"
          />

          <button className="bg-blue-500 font-semibold rounded-lg px-4 py-2 text-white ">
            Initiate Withdrawl
          </button>
        </div>

        <div className="p-5 bg-white rounded-lg border border-gray-300 space-y-3">
          <h3 className="text-[20px] font-bold">Secure Integrations</h3>
          <img
            src="/images/cyber-security.png"
            alt=""
            className="h-[300px] w-[400px]"
          />
        </div>
      </div>

      <RecentTransactions/>
      <ManagePayment/>
    </div>
  );
};

export default Wallet;

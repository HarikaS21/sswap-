const PortfolioSection=()=>{
    return(
        <div className="mt-10 border border-gray-300 p-5 rounded-lg w-[75%]">
            <h2 className="font-bold text-[25px]">Portfoio Projects</h2>
            <div className="grid grid-cols-2 gap-4">
                   <div className="border border-gray-300 rounded-lg">
                    <img src="/images/pp1.png" alt="" className="rounded-lg"/>
                    <div className="p-3 space-y-1">
                        <p className="font-bold text-[20px]">E-commerce Redisign</p>
                        <p className="text-gray-600 text-[15px]">Led the complete redesign of a large scale e-commerec platform, focusing on</p>
                        <p className="text-blue-500 text-[14px] mt-2">View Project</p>
                    </div>
                   </div>

                   <div className="border border-gray-300 rounded-lg">
                    <img src="/images/pp2.png" alt="" className="rounded-lg"/>
                    <div className="p-3 space-y-1">
                        <p className="font-bold text-[20px]">Mobile App UX Optimization</p>
                        <p className="text-gray-600 text-[15px]">Optimized the user experience for a popular mobile fitness application, reducing</p>
                        <p className="text-blue-500 text-[14px] mt-2">View Project</p>
                    </div>
                   </div>


                   <div className="border border-gray-300 rounded-lg">
                    <img src="/images/pp3.png" alt="" className="rounded-lg"/>
                    <div className="p-3 space-y-1">
                        <p className="font-bold text-[20px]">Saas Dashboard Creation</p>
                        <p className="text-gray-600 text-[15px]">Designed and implemented an intuitive analytics dashboard for a B2B SaaS</p>
                        <p className="text-blue-500 text-[14px] mt-2">View Project</p>
                    </div>
                   </div>


                   <div className="border border-gray-300 rounded-lg">
                    <img src="/images/pp4.png" alt="" className="rounded-lg"/>
                    <div className="p-3 space-y-1">
                        <p className="font-bold text-[20px]">Brand Identity & Web Design</p>
                        <p className="text-gray-600 text-[15px]">Developed a new brand identity and accompanying website design for a rising</p>
                        <p className="text-blue-500 text-[14px] mt-2">View Project</p>
                    </div>
                   </div>
            </div>

        </div>
    )
}

export default PortfolioSection
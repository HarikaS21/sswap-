const RatingandReviews=()=>{
    return(
        <div className="w-[75%] mt-10 border border-gray-300 rounded-lg p-5">
                <h1 className="text-[25px] font-bold">Ratings & Reviews</h1>
                <div className="flex items-center gap-2 mt-3">
                    <h1>⭐⭐⭐⭐</h1>
                    <h1 className="text-[25px] font-bold">4.8</h1>
                    <p className="text-[15px] text-gray-600">(3 Reviews)</p>
                </div>

                {/*  */}

                <div className="flex flex-col gap-3">
                    <div className="border border-gray-300 rounded-lg p-5">
                         <div className="flex items-center gap-3">
                            <p className="text-[20px] font-bold">Sarah Chen</p>
                            <h1>⭐⭐⭐⭐⭐</h1>
                         </div>
                         <p className="text-gray-600 text-[17px] mt-2">
                            Alex delivered exceptional UI/UX designs for our platform. Their attention to detail and understanding of user needs are truly impressive. Highly recommend!
                         </p>
                    </div>

                     <div className="border border-gray-300 rounded-lg p-5">
                         <div className="flex items-center gap-3">
                            <p className="text-[20px] font-bold">Mark Davis</p>
                            <h1>⭐⭐⭐⭐⭐</h1>
                         </div>
                         <p className="text-gray-600 text-[17px] mt-2">
                            Collaborating with Alex was a pleasure. They brought fresh perspectives and transformed complex requirements into elegant solutions. A top-tier designer!
                         </p>
                    </div>


                     <div className="border border-gray-300 rounded-lg p-5">
                         <div className="flex items-center gap-3">
                            <p className="text-[20px] font-bold">Emily White</p>
                            <h1>⭐⭐⭐⭐⭐</h1>
                         </div>
                         <p className="text-gray-600 text-[17px] mt-2">
The portfolio redesign significantly improved our user engagement. Alex's expertise in information architecture and visual design is evident in every detail.
                         </p>
                    </div>

                </div>

        </div>
    )
}

export default RatingandReviews